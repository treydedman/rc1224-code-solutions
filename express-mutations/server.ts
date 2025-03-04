import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

// mount express.json
app.use(express.json());

// CREATE: POST /api/actors - route to insert an actor in the actors table
app.post('/api/actors', async (req, res, next) => {
  try {
    const { firstName, lastName } = req.body;

    if (!firstName || !lastName) {
      throw new ClientError(400, 'firstName and lastName are required');
    }

    const sql = `
    insert into "actors" ("firstName", "lastName")
    values ($1, $2)
    returning *;
    `;

    const params = [firstName, lastName];
    const result = await db.query(sql, params);
    const actor = result.rows[0];

    res.status(201).json(actor);
  } catch (err) {
    next(err);
  }
});

// UPDATE: PUT /api/actors/:actorId - route to update an actor in the actors table by actorId
app.put('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    const { firstName, lastName } = req.body;

    const actorIdNum = Number(actorId);
    if (isNaN(actorIdNum) || actorIdNum <= 0) {
      throw new ClientError(400, 'Invalid actorId');
    }

    if (!firstName || !lastName) {
      throw new ClientError(400, 'firstName and lastName are required');
    }

    const sql = `
      UPDATE "actors"
      SET "firstName" = $1, "lastName" = $2
      WHERE "actorId" = $3
      RETURNING *;
    `;
    const params = [firstName, lastName, actorId];

    const result = await db.query(sql, params);
    const updatedActor = result.rows[0];

    if (!updatedActor) {
      throw new ClientError(404, `Actor with ID ${actorId} not found`);
    }

    res.status(200).json(updatedActor);
  } catch (err) {
    console.error('Database error:', err);
    next(err);
  }
});

// DELETE: DELETE /api/actors/:actorId - route to delete an actor in the actors table by actorId
app.delete('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;

    const sql = `
    delete from "actors"
    where "actorId" = $1
    returning *;
    `;

    const params = [actorId];
    const result = await db.query(sql, params);

    if (!result.rows[0]) {
      return res.status(404).json({ error: 'actor not found' });
    }

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

// Endpoint for testing
app.get('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    if (!Number.isInteger(+actorId)) {
      throw new ClientError(400, `Non-integer actorId: ${actorId}`);
    }
    const sql = `
      select * from "actors"
      where "actorId" = $1;
    `;
    const params = [actorId];
    const result = await db.query(sql, params);
    const actor = result.rows[0];
    if (!actor) throw new ClientError(404, `actor ${actorId} not found`);
    res.json(actor);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
