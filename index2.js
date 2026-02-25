const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());

/* -------------------- DATABASE CONNECTION -------------------- */

mongoose.connect("mongodb://localhost:27017/Flipkart")
    .then(() => console.log("MongoDB Connected Successfully"))
    .catch((error) => console.log("Database Connection Failed:", error.message));


/* -------------------- ROOT ROUTE -------------------- */

app.get("/", (req, res) => {
    res.status(200).send("Mongoose Server Day2");
});


/* -------------------- ORDER SCHEMA -------------------- */

const orderSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    orderDate: {
        type: Date,
        default: Date.now
    }
});

const Order = mongoose.model("Order", orderSchema);


/* -------------------- USER SCHEMA -------------------- */

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);


/* -------------------- GET ALL ORDERS -------------------- */

app.get("/orders", async (req, res) => {
    try {
        const data = await Order.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



app.post("/users", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const user = new User({ name, email, password });
        await user.save();

        res.status(201).json(user);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.listen(3000, () => {
    console.log("Express server started on port 3000");
});