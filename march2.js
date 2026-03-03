
const express = require("express")
const app = express();
const mongoose = require("mongoose")

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/Flipkart")
    .then(() => console.log("MongoDB connected sucessfully"))
    .catch((error) => console.log("mongodb connection failed", error))

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
},
);
const User = mongoose.model("user", userSchema)

app.post('/adduser', async (req, res) => {
    try {
        const user = new User(req.body); 
        await user.save();
        res.send("data created")
    }
    catch (err) {
        res.status(400).json({ message: err.message }); 
    };
})
 
app.get("/", (req, res) => {
    res.send("server is working");
})

app.get("/users", async(req, res) => {
    const data = await User.find()
    res.json(data);
})

app.get('/users/:id', async (req, res) => {
    try {
        const userId = Number(req.params.id); 
        const user = await User.findById(userId); 

        if (!user) {
            return res.status(404).json({ message: "User is not found" });
        }

        res.status(200).json(user);
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.delete("/users", async (req, res) => {
    try {
        const result = await User.deleteMany({}); 
        res.status(200).json({
            message: `all users aagya`
        })
    } 
    catch (error) {
        res.status(500).json({ error: error.message });
    }   
});



app.put("/update/:id", async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true } 
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(updatedUser);
    } 
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.listen(3000, () => {
    console.log("march2 started on port 3000");

})






























// app.get('/users/:id', async (req, res) => {
//     try {
//         const data = await User.findById(req.params.id); // use MongoDB _id

//         if (data) {
//             res.status(200).json(data);
//         } else {
//             res.status(404).json({ message: "User not found" });
//         }
//     } catch (error) {
//         res.status(500).json({ message: "Invalid user ID" });
//     }
// });




