const mongoose = require(`mongoose`)

module.exports = async (client) => {
    mongoose.connect(`mongodb+srv://sparkyLogs:C6plfjqve8YST16o@cluster0.fuavh.mongodb.net/Data`, {
  useNewUrlParser:true,
  useUnifiedTopology: true})
}