const express = require("express")
const app = express();
const mongoose = require("mongoose")

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/Flipkart")
    .then(() => console.log("MongoDB connected sucessfully"))
    .catch((error) => console.log("mongodb connection failed", error))

const userSchema = new mongoose.Schema({
    _id:Number,
    name:String,
    // email:String,
    // password:String,
    city:String,
    membership:String
},
{versionKey:false}
)
const User = mongoose.model("user", userSchema)

// post route to create a new user
app.post('/adduser', async (req, res) => {
    try {
        const user = new User(req.body); // creating a new user instance with the request body
        await user.save(); // saving the user to the database
        // res.status(201).json(user); // sending the created user as a response
        res.send("data created")
    }
    catch (err) {
        res.status(400).json({ message: err.message }); // handling errors and sending a response
    };
})
 
app.get("/", (req, res) => {
    res.send("server is working");
})
app.get("/users", async(req, res) => {
    const data = await User.find()
    res.json(data)
    // res.send("server is working");
})

app.listen(3000, () => {
    console.log("server 2 started on port 3000");

})