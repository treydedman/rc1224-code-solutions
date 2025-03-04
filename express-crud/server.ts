import express from 'express';
import { errorMiddleware } from './lib/index.js';
import pg from 'pg';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

// mount express.json
app.use(express.json());

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
