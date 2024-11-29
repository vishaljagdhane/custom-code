import React, { useState,useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

// Define JSON data for headers and table rows
const tableHeaders = [
  { id: 'srnumber', label: 'SR No.' },
  { id: 'fname', label: 'First Name' },
  { id: 'lname', label: 'Last Name' },
  { id: 'email', label: 'Email' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'password', label: 'Password' }
];

// const data = [
//   { srnumber: 1, fname: 'Vishal', lname: 'Jagdhane', email: 'vishal@gmail.com', mobile: '8983780269', password: 'Vishu@2016' },
//   { srnumber: 2, fname: 'Ravi', lname: 'Kumar', email: 'ravi@example.com', mobile: '9123456789', password: 'Ravi@1234' },
//   { srnumber: 3, fname: 'Priya', lname: 'Sharma', email: 'priya@example.com', mobile: '9876543210', password: 'Priya@5678' },
//   // Add more rows here
// ];

export default function UserDataTable() {
const [tablebodyData,setTablebodyData] = useState([])

useEffect(()=>{
    fetch('http://localhost:4100/api/userData').then((result)=>{
        result.json().then((response)=>{
            setTablebodyData(response)
        })
    })
    
},[tablebodyData])



  return (
    <div style={{ margin: '20px' }}>
      <Typography variant="h5" gutterBottom align="center" color="primary">
        User Data Table
      </Typography>

      <TableContainer component={Paper} elevation={3} style={{ backgroundColor: '#f4f6f9' }}>
        <Table>
          {/* Table Head */}
          <TableHead>
            <TableRow style={{ backgroundColor: '#1976d2', color: 'white' }}>
              {tableHeaders.map((header) => (
                <TableCell key={header.id} align="center" style={{ fontWeight: 'bold' }}>
                  {header.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          {/* Table Body */}
          <TableBody>
            {tablebodyData.map((row, index) => (
              <TableRow key={index}>
                {tableHeaders.map((header) => (
                  <TableCell key={header.id} align="center">
                    {row[header.id]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
