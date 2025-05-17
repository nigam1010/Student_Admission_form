const express = require('express');
const router = express.Router();
const { 
  registerStudent, 
  getStudentsFromCSV, 
  deleteStudentByEmail // ✅ Import the new function
} = require('../controllers/studentController');

// Register new student
router.post('/register', registerStudent);

// Get all students from CSV
router.get('/', getStudentsFromCSV);  // changed from '/students' to '/'

// Delete a student by email
router.delete('/:email', deleteStudentByEmail); // ✅ New DELETE route

module.exports = router;
