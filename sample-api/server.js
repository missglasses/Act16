const express = require('express');

const app = express();

const PORT = 3000;

const students = [
  {
    id: 1,
    name: "Gran Sabandal",
    course: "BSIT"
  },
  {
    id: 2,
    name: "Kent Dela Paz",
    course: "BSIT"
  }
];
//all
app.get("/api/students", (req, res) => {
  res.json(students);
});

//indiv 
app.get("/api/students/:id", (req, res) => {
 const id = Number(req.params.id);
 const student = students.find(student =>student.id === id );
 
'
});

app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});