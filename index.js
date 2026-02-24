const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/flipkart')
.then(()=>console.log("mongodb connected sucessfully"))
.catch((error)=>console.log("mongodb connection failed",error));

const User = mongoose.model('User', new mongoose.Schema);

const students = [
  {
    id: 1,
    name: "Aarav Sharma",
    branch: "CSE",
    semester: 8,
    cgpa: 9.3
  },
  {
    id: 2,
    name: "Ishita Verma",
    branch: "IT",
    semester: 7,
    cgpa: 8.9
  },
  {
    id: 3,
    name: "Rohan Kulkarni",
    branch: "ECE",
    semester: 6,
    cgpa: 8.4
  },
  {
    id: 4,
    name: "Meera Iyer",
    branch: "CSE",
    semester: 8,
    cgpa: 9.1
  },
  {
    id: 5,
    name: "Kunal Deshmukh",
    branch: "IT",
    semester: 5,
    cgpa: 7.8
  },
  {
    id: 6,
    name: "Ananya Reddy",
    branch: "CSE",
    semester: 6,
    cgpa: 8.7
  },
  {
    id: 7,
    name: "Vikram Patil",
    branch: "ECE",
    semester: 7,
    cgpa: 8.2
  },
  {
    id: 8,
    name: "Priyanka Nair",
    branch: "AI",
    semester: 4,
    cgpa: 8.8
  },
  {
    id: 9,
    name: "Harsh Mehta",
    branch: "Data Science",
    semester: 5,
    cgpa: 8.0
  },
  {
    id: 10,
    name: "Neha Gupta",
    branch: "CSE",
    semester: 6,
    cgpa: 7.9
  }
];

app.get('/', (req, res) => {
  res.send("Student Management API");
})

app.get('/students', (req, res) => {

  res.status(200).json(students);
})

app.get('/students/topper', (req, res) => {
  try {
    var max = 0;
    for (var i = 0; i < students.length; i++) {
      if (max < students[i].cgpa) {
        max = students[i];
      }
    }
    res.status(200).json(max);
  }
  catch (error) {
    res.status(500).json("data fetchinf failed");
  }
})



app.get('/students/average', (req, res) => {
  var avg = 0;
  var sum = 0;
  for (var i = 0; i < students.length; i++) {
    sum = sum + students[i].cgpa;
  }
  avg = sum / students.length;

  res.status(200).json(avg);
})


app.get('/students/count', (req, res) => {
  res.status(200).json({
    totalStudent: `${students.length}`
  })
})

app.get('/students/:id', (req, res) => {
  const data = String(req.params.id);

  const detail = students.find((u) => u.id == data);

  if (detail) {
    res.status(200).json(detail);
  } else {
    res.status(404).json(students);
  }
});


app.get('/students/branch/:branchname', (req, res) => {
  const data = String(req.params.branchname);

  var arr = [];
  for (var i = 0; i < students.length; i++) {
    if (students[i].branch === data) {
      arr.push(students[i]);
    }
  }

  res.status(200).json(arr);
})

app.listen("3000", () => {
  console.log("server is running on the port 3000");
});