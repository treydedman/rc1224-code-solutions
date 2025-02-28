import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log(new Date(), ':', req.method, req.path);
  next();
});

app.get('/', (req, res) => {
  res.send('Baseball is 90 percent mental. The other half is physical.');
});

app.get('/notes', (req, res) => {
  res.send("Here's a little note I wrote.");
});

app.post('/notes/:noteId', (req, res) => {
  const { noteId } = req.params;
  res.send(`Note posted with ID: ${noteId}`);
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
