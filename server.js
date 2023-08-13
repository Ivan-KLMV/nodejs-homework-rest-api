const mongoose = require('mongoose');

const app = require('./app');
const { DB_URL } = require('./constants/DB_URL');

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Mongo DB successfully connected..');
  })
  .catch((err) => {
    console.log(err);

    process.exit(1);
  });

module.exports = app.listen(3000, () => {
  console.log('Server running. Use our API on port: 3000');
});
