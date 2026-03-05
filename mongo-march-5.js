// const express = require("express")
// const app = express();
// const mongoose = require("mongoose")

// app.use(express.json());

// mongoose.connect("mongodb+srv://anishajain:12345@cluster0.slwensz.mongodb.net/?appName=Cluster0")
//     .then(() => console.log("MongoDB connected sucessfully"))
//     .catch((error) => console.log("mongodb connection failed", error))

// const userSchema = new mongoose.Schema({
//     _id:Number,
//     name:String,
//     // email:String,
//     // password:String,
//     city:String,
//     membership:String
// },
// {versionKey:false}
// )
// const User = mongoose.model("user", userSchema)

// // post route to create a new user
// app.post('/adduser', async (req, res) => {
//     try {
//         const user = new User(req.body); // creating a new user instance with the request body
//         await user.save(); // saving the user to the database
//         // res.status(201).json(user); // sending the created user as a response
//         res.send("data created")
//     }
//     catch (err) {
//         res.status(400).json({ message: err.message }); // handling errors and sending a response
//     };
// })
 
// app.get("/", (req, res) => {
//     res.send("server is working");
// })
// app.get("/users", async(req, res) => {
//     const data = await User.find()
//     res.json(data)
//     // res.send("server is working");
// })

// app.listen(3000, () => {
//     console.log("server 2 started on port 3000");

// })

const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Express server is running on 3000 port");
});

mongoose.connect("mongodb+srv://anishajain:12345@cluster0.slwensz.mongodb.net/week02Day06?appName=Cluster0")  
.then(()=> console.log("MongoDB connected successfully"))
.catch((error)=> console.log("MongoDB connection failed :- " , error))

const userSchema = new mongoose.Schema(
{
    name: {
        type:String,
        minlength:2,
        required:true
    },
    email: {
        type:String,
        required:true,
        lowercase:true,
        unique:true
    },
    password: {
        type:String,
        required:true,
        minlength:6
    }
},
{
    versionKey: false,
    timestamps: true
}
);

const User = mongoose.model("User", userSchema);

app.get("/users", async (req,res)=>{

        const data = await User.find({});
        res.status(200).json(data);
    
})

app.get("/users/:id", async (req,res)=>{

        const data = await User.findById(req.params.id);
        res.status(200).json(data);
    
})

app.post("/addUser", async (req,res)=>{
  try{
    const user = new User(req.body);
    await user.save();

    res.status(201).json({
        message:"User added"
    });
  }
  catch(err){
    res.status(500).json({
        error: err.message
    });
  }
})

app.post("/addUsers", async (req,res)=>{

    const users = await User.insertMany(req.body);
    
    res.status(201).json({
        message:"Users added"
    })
})

app.put("/users/:id", async (req,res)=>{

        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, 
            req.body
        );

        res.status(200).json({
            message: "User updated successfully"
        });

});

app.delete("/users/:id", async (req,res)=>{
    const user = await User.findByIdAndDelete(
        req.params.id
    )

    res.status(200).json({
        message: "User deleted successfully"
    })
})

app.listen(3000, () => {
  console.log("Server started on port 3000");
});