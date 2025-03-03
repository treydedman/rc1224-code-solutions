import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';
import pg from 'pg';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

// GET /api/films - returns all films in films table ordered by highest replacement cost
app.get('/api/films', async (req, res, next) => {
  try {
    const sql = `
    select *
    from "films"
    order by "replacementCost" desc;
    `;
    const result = await db.query(sql);
    res.send(result.rows);
  } catch (err) {
    next(err);
  }
});

// GET /api/films/:filmId - returns single film based on filmId or returns 404 error
app.get('/api/films/:filmId', async (req, res, next) => {
  try {
    const { filmId } = req.params;

    if (!filmId) {
      throw new ClientError(400, 'filmId is required');
    }

    const sql = `
    select *
    from "films"
    where "filmId" = $1;
    `;

    const params = [filmId];
    const result = await db.query(sql, params);
    console.log(result);
    const film = result.rows[0];

    if (!film) {
      throw new ClientError(404, `film ${filmId} not found`);
    }
    res.send(film);
  } catch (err) {
    next(err);
  }
});

// PUT /api/films/:filmId - updates a single film title based on filmId or returns a 404 error
app.put('/api/films/:filmId', async (req, res, next) => {
  try {
    const { filmId } = req.params;
    const { title } = req.query;

    if (!filmId) {
      throw new ClientError(400, 'filmId is required');
    }
    if (!title) {
      throw new ClientError(400, 'tile is required');
    }

    const sql = `
    update "films"
    set "title" = $1
    where "filmId" = $2
    returning *;
    `;

    const params = [title, filmId];
    const result = await db.query(sql, params);

    const updatedFilm = result.rows[0];
    console.log(updatedFilm);

    if (!updatedFilm) {
      throw new ClientError(404, `film ${filmId} not found`);
    }
    res.send(updatedFilm);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
