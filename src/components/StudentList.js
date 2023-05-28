import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FilterForm from './FilterForm';
const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    loadStudents();
  }, [page, pageSize]);

  const loadStudents = async () => {
    try {
      const response = await axios.get(`/api/students?page=${page}&pageSize=${pageSize}`);
      setStudents(response.data);
    } catch (error) {
      console.error('Error loading students:', error);
    }
  };

  const handleFilter = async (filterCriteria) => {
    try {
      const response = await axios.get(`/api/students/filter`, {
        params: filterCriteria
      });
      setFilteredStudents(response.data);
    } catch (error) {
      console.error('Error filtering students:', error);
    }
  };

  return (
    <div>
      <FilterForm onFilter={handleFilter} />
      <table>
       
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Total Marks</th>
            
          </tr>
        </thead>
       
        <tbody>
          
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.totalMarks}</td>
                
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
