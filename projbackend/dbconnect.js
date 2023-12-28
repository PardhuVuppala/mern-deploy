// // STEP-1 : IMPORT MONGOOSE PACKAGE
// const mongoose = require('mongoose');
// // Database Connection URL
// //Mongoose is an Object Document Mapper (ODM)
// const url = `mongodb+srv://pardhuvuppala:Pardhu@2002@mern-deploy.kdcwn2z.mongodb.net/Project?retryWrites=true&w=majority`;       //  'mongodb://localhost:27017/ProjectTest1'  it alternate.

// // STEP-2 : ESTABLISH CONNECTION WITH MONGODB DATABASE THROUGH MONGOOSE
// // err is callback function Parameter. ARROW OPERATOR.
// // JSON.stringify convert Object to String. 2 means Indentation of Two space Character 
// mongoose.connect(url)
//       .then( () => 
//              {
//                console.log('NODEJS TO MongoDB Connection ESTABLISH.....');
//              })
//       .catch( err => 
//               {
//                console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
//                process.exit();
//               }); 
    
// // STEP-3 : EXPORT MODULE mongoose because we need it in other JS file
// module.exports = mongoose;
const mongoose = require('mongoose');
require("dotenv").config();
const url = process.env.MONGODB_URI;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('NODEJS TO MongoDB Connection ESTABLISHED.....');
  })
  .catch(err => {
    console.error('Error in DB connection:', err.message);
    process.exit(1); // Exit the process with an error code
  });

module.exports = mongoose;
