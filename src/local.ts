import app from './lib/app';

const port = process.env.PORT || 9400;
app.listen(port, () => {
  console.log('local app listening on port %s', port);
});
