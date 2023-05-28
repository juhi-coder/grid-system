const express = require('express');
const app = express();
const students = require('./data/students.json'); 

const PORT = 5000; 


app.get('/api/students', (req, res) => {
  const { page, pageSize } = req.query;

  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;
  const paginatedStudents = students.slice(startIndex, endIndex);

  res.json(paginatedStudents);
});


app.get('/api/students/filter', (req, res) => {
  const { name, totalMarks } = req.query;

  const filteredStudents = students.filter((student) => {
    if (name && student.name.toLowerCase().includes(name.toLowerCase())) {
        return true;
      }
      if (totalMarks && student.totalMarks >= parseInt(totalMarks, 10)) {
        return true;
  }
  return false;
}
  );

  res.json(filteredStudents);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
