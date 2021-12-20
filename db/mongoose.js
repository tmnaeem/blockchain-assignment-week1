const mongoose = require('mongoose')

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log('DB Connected'))
  .catch(err => console.log('DB CONNECTED ERROR: ', err))