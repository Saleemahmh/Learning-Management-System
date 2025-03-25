const express = require("express");
const User = require("../models/user");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

// Get All Users (Admin only)
router.get("/", authMiddleware("admin"), async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Single User by ID (Admin only)
router.get("/:id", authMiddleware("admin"), async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update User (Admin only)
router.put("/:id", authMiddleware("admin"), async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser)
      return res.status(404).json({ message: "User not found" });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete User (Admin only)
router.delete("/:id", authMiddleware("admin"), async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Register a Student (Admin only)
router.post("/register/student", authMiddleware("admin"), async (req, res) => {
  const { name, email, password } = req.body;

  const existingStudent = await User.findOne({ email });
  if (existingStudent) {
    return res.status(400).json({ message: "Student already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const student = new User({
    name,
    email,
    password: hashedPassword,
    role: "student",
  });

  await student.save();
  res.status(201).json({ message: "Student registered successfully" });
});

// Register an Admin (Admin only)
router.post("/register/admin", authMiddleware("admin"), async (req, res) => {
  const { name, email, password } = req.body;

  const existingAdmin = await User.findOne({ email });
  if (existingAdmin) {
    return res.status(400).json({ message: "Admin already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const admin = new User({
    name,
    email,
    password: hashedPassword,
    role: "admin",
  });

  await admin.save();
  res.status(201).json({ message: "Admin registered successfully" });
});

module.exports = router;
