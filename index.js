// const express = require("express");
// const cors = require("cors");
// const app = express();
// const PORT = 3000;

// app.use(cors());
// app.use(express.json());

// const students = [
//   {
//     id: 1,
//     name: "Aarav Sharma",
//     branch: "CSE",
//     semester: 8,
//     cgpa: 9.3
//   },
//   {
//     id: 2,
//     name: "Ishita Verma",
//     branch: "IT",
//     semester: 7,
//     cgpa: 8.9
//   },
//   {
//     id: 3,
//     name: "Rohan Kulkarni",
//     branch: "ECE",
//     semester: 6,
//     cgpa: 8.4
//   },
//   {
//     id: 4,
//     name: "Meera Iyer",
//     branch: "CSE",
//     semester: 8,
//     cgpa: 9.1
//   },
//   {
//     id: 5,
//     name: "Kunal Deshmukh",
//     branch: "IT",
//     semester: 5,
//     cgpa: 7.8
//   },
//   {
//     id: 6,
//     name: "Ananya Reddy",
//     branch: "CSE",
//     semester: 6,
//     cgpa: 8.7
//   },
//   {
//     id: 7,
//     name: "Vikram Patil",
//     branch: "ECE",
//     semester: 7,
//     cgpa: 8.2
//   },
//   {
//     id: 8,
//     name: "Priyanka Nair",
//     branch: "AI",
//     semester: 4,
//     cgpa: 8.8
//   },
//   {
//     id: 9,
//     name: "Harsh Mehta",
//     branch: "Data Science",
//     semester: 5,
//     cgpa: 8.0
//   },
//   {
//     id: 10,
//     name: "Neha Gupta",
//     branch: "CSE",
//     semester: 6,
//     cgpa: 7.9
//   }
// ];

// app.get("/", (req, res) => {
//   res.send("Student CGPA API is running...");
// });

// app.get("/students", (req, res) => {
//   return res.status(200).json(students);
// });

// app.get("/students/topper", (req, res) => {
//   if (students.length === 0) {
//     return res.status(404).json({ message: "No students found" });
//   }
//   const topper = students.reduce((max, student) =>
//     student.cgpa > max.cgpa ? student : max
//   );
//   return res.status(200).json(topper);
// });

// app.get("/students/average", (req, res) => {
//   if (students.length === 0) {
//     return res.status(404).json({ message: "No students found" });
//   }

//   const total = students.reduce((sum, student) => sum + student.cgpa, 0);
//   const average = (total / students.length).toFixed(2);

//   return res.status(200).json({ averageCGPA: Number(average) });
// });

// app.get("/students/count", (req, res) => {
//   return res.status(200).json({ totalStudents: students.length });
// });

// app.get("/students/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const student = students.find(s => s.id === id);
//   if (!student) {
//     return res.status(404).json({ message: "Student not found" });
//   }
//   return res.status(200).json(student);
// });

// app.get("/students/branch/:branchName", (req, res) => {
//   const branchName = req.params.branchName.toLowerCase();
//   const filteredStudents = students.filter(
//     s => s.branch.toLowerCase() === branchName
//   );

//   return res.status(200).json(filteredStudents);
// });

// app.listen(PORT, () => {
//   console.log(`Server started on local ${PORT}`);
// });




const express = require("express");
const app = express();
app.use(express.json());
const cg = [
  {
    studentName: "ABDUL HAQUE",
    University: "SUxCG 714",
    UniversityUID: "108444",
  },
  {
    studentName: "ADITYA KUMAR",
    University: "SUxCG 702",
    UniversityUID: "108716",
  },
  {
    studentName: "AMAN KUMAR",
    University: "SUxCG 702",
    UniversityUID: "108500",
  },
  {
    studentName: "AMRIT RAJ",
    University: "SUxCG 702",
    UniversityUID: "108587",
  },
  {
    studentName: "ANISHA CHHAJER",
    University: "SUxCG 714",
    UniversityUID: "108565",
  },
  {
    studentName: "PRASHANT PARMAR",
    University: "SUxCG 714",
    UniversityUID: "108697",
  },
  {
    studentName: "PRITESH BACHHAV",
    University: "SUxCG 714",
    UniversityUID: "108654",
  },
  {
    studentName: "RISHI BHAII",
    University: "SUxCG 714",
    UniversityUID: "108657",
  },
  {
    studentName: "ANSHUUUU",
    University: "SUxCG 714",
    UniversityUID: "108254",
  },
];

app.get("/", (req, res) => {
  res.send("Express server is running");
});

app.get("/cg", (req, res) => {
  res.status(200).json(cg);
});

app.get("/cg/students", (req, res) => {
  const names = cg.map(student => student.studentName);
  res.status(200).json(names);
});

app.post("/cg", (req, res) => {
  const user1 = {
    id: cg.length + 1,
    studentName: req.body[0].studentName,
    University: req.body[0].University,
    UniversityUID: req.body[0].UniversityUID
  };
  const user2 = {
    id: cg.length + 2,
    studentName: req.body[1].studentName,
    University: req.body[1].University,
    UniversityUID: req.body[1].UniversityUID
  };
  const user3 = {
    id: cg.length + 3,
    studentName: req.body[2].studentName,
    University: req.body[2].University,
    UniversityUID: req.body[2].UniversityUID
  };
console.log("user",user1);
console.log("user",user2);
console.log("user",user3);

  cg.push(user1);
  cg.push(user2);
  cg.push(user3);
  
res.status(201).send("User created successfully");

  // res.status(201).json({
  //   message: "Student created",
  //   user: newUser
  // });

});



app.get("/cg/students/:gr_number", (req, res) => {
  const { gr_number } = req.params;
  const student = cg.find(s => s.UniversityUID === gr_number);
  if (!student) {
    return res.status(404).json({
      message: "Student not found",
    });
  }
  res.status(200).json(student);
});

app.get("/cg/students/name/:studentName", (req, res) => {
  const { studentName } = req.params;
  const student = cg.find(s => s.studentName.toLowerCase() === studentName.toLowerCase());

  if (!student) {
    return res.status(404).json({
      message: "Student not found",
    });
  }
  res.status(200).json(student);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});





