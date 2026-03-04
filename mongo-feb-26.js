const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/UserLab1")
.then(() => console.log("connectd to mongoDB"))
.catch(err => console.log("MongoDB Error:", err));

app.get("/", (req, res) => {
  res.send("Server is working");
});

// const userSchema = new mongoose.Schema({});

// const User = mongoose.model('users',userSchema)

// app.get('/users',async(req,res)=>{
//   try{
//     const users = await User.find();
//     res.json(users);
//   }
//   catch(err){
//     console.log('error fetching users:' , err);
//     res.status(500).json({error :'internal server error'});
//   }
// });


// const orderSchema = new mongoose.Schema({
// });

// const Order = mongoose.model("Order", orderSchema);

// app.get("/orders", async (req, res) => {
//   try {
//     const orders = await Order.find();
//     res.json(orders);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

const userSchema= new mongoose.Schema({
  name :String,
  email:String,
  password:String
});

const User = mongoose.model('User',userSchema);

app.post("/addusers", async (req, res) => {
  try {
    const user = new User(req.body);   // Model should be capital
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    console.log("Error saving user:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post('/addmultipleusers', async (req, res) => {
  try {
    const users = await User.insertMany(req.body); // Insert multiple users
    res.status(201).send(users); // Send created users
  } 
  catch (err) {
    res.status(400).send(err);
  }
});

app.get('/users',async(req,res)=>{
  try{
    const users = await User.find();
    res.json(users);
  }
  catch(err){
    console.log('error fetching users:' , err);
    res.status(500).json({error :'internal server error'});
  }
});


app.listen(3000, () => {
  console.log("Server started on port 3000");
});