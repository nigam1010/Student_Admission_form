const fs = require('fs');
const path = require('path');
const csv = require('csv-parser'); // ✅ Make sure this is installed
const Student = require('../models/student');

// Path to CSV file
const csvFilePath = path.join(__dirname, '../student.csv');

const registerStudent = async (req, res) => {
  try {
    console.log('Received student data:', req.body);

    const existingStudent = await Student.findOne({ email: req.body.email });
    if (existingStudent) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const newStudent = new Student(req.body);
    await newStudent.save();
    console.log('Student registered:', newStudent);

    const studentData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      gender: req.body.gender,
      dob: req.body.dob,
      address: req.body.address,
      course: req.body.course,
      year: req.body.year
    };

    const fileExists = fs.existsSync(csvFilePath);
    const csvLine = `${Object.values(studentData).join(',')}\n`;

    if (!fileExists) {
      const headers = Object.keys(studentData).join(',') + '\n';
      fs.writeFileSync(csvFilePath, headers + csvLine);
    } else {
      fs.appendFileSync(csvFilePath, csvLine);
    }

    res.status(201).json({ message: 'Student registered successfully!', student: newStudent });
  } catch (err) {
    console.error('Error registering student:', err);
    if (err.code === 11000) {
      return res.status(400).json({ message: 'Email is already taken.' });
    }
    res.status(500).json({ message: 'Error registering student', error: err.message });
  }
};

// ✅ Define the missing function
const getStudentsFromCSV = (req, res) => {
  const students = [];

  fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on('data', (row) => {
      students.push(row);
    })
    .on('end', () => {
      res.status(200).json(students);
    })
    .on('error', (err) => {
      console.error('Error reading CSV file:', err);
      res.status(500).json({ message: 'Error reading CSV file', error: err.message });
    });
};

const deleteStudentByEmail = async (req, res) => {
  const { email } = req.params;

  try {
    // Delete from MongoDB
    await Student.deleteOne({ email });

    // Read and filter CSV data
    const rows = [];
    fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on('data', (row) => {
        if (row.email !== email) rows.push(row);
      })
      .on('end', () => {
        const headers = Object.keys(rows[0] || {
          firstName: '', lastName: '', email: '', phone: '', gender: '',
          dob: '', address: '', course: '', year: ''
        }).join(',') + '\n';

        const updatedCSV = rows.map(row => Object.values(row).join(',')).join('\n');
        fs.writeFileSync(csvFilePath, headers + updatedCSV + '\n');

        res.status(200).json({ message: 'Student deleted successfully!' });
      })
      .on('error', (err) => {
        console.error('Error reading CSV:', err);
        res.status(500).json({ message: 'Error deleting student', error: err.message });
      });

  } catch (err) {
    console.error('Error deleting student:', err);
    res.status(500).json({ message: 'Error deleting student', error: err.message });
  }
};

module.exports = {
  registerStudent,
  getStudentsFromCSV,
  deleteStudentByEmail // ✅ export new function
};

