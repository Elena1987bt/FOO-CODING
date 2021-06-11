const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const dbService = require('./dbService')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


// create
app.post('/insert', (req,res) => {
  const { todo } = req.body;
console.log(todo);
const db = dbService.getDbServiceInstance();
const result = db.insertNewName(todo);
 result
.then(data => res.json({ data: data}))
.catch(err => console.log(err));

})

// read
app.get('/getAll', (req,res) => {
  const db = dbService.getDbServiceInstance();
  const result = db.getAllData();
  console.log(result);
  result
  .then(data => 
    res.json({data : data}))
  .catch(err => console.log(err));
})
// update

app.patch('/update', (request, response) => {
  const { id, name } = request.body;
  console.log(id);
  const db = dbService.getDbServiceInstance();

  const result = db.updateNameById(id, name);
  
  result
  .then(data => response.json({success : data}))
  .catch(err => console.log(err));
});

// delete
app.delete('/delete/:id', (request, response) => {
  const { id } = request.params;
  const db = dbService.getDbServiceInstance();

  const result = db.deleteRowById(id);
  
  result
  .then(data => response.json({success : data}))
  .catch(err => console.log(err));
});

app.listen(process.env.PORT, () => console.log('app is running'))