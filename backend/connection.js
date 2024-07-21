const mongoose = require('mongoose')
function Connection(){
    mongoose
      .connect("mongodb://127.0.0.1:27017/notes-app")
      .then(() => {
        console.log("Database connected");
      })
      .catch((err) => {
        console.log(err);
      });

}
module.exports = Connection