import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import ApiServices from '../ApiServes/ApiServices';

// Define JSON data for headers
const tableHeaders = [
  { id: 'srnumber', label: 'SR No.' },
  { id: 'fname', label: 'First Name' },
  { id: 'lname', label: 'Last Name' },
  { id: 'email', label: 'Email' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'password', label: 'Password' },
  { id: 'update', label: 'Update' },
  { id: 'delete', label: 'Delete' }
];

export default function UserDataTable() {
  const { getUserData, EditUserData } = ApiServices(); // Destructure EditUserData from ApiServices

  const [tableData, setTableData] = useState([]);
  const [updateData, setUpdateData] = useState({ srnumber: '', fname: '', lname: '', mobile: '', email: '', password: '' });
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  // Fetch the data from the backend API when the component is mounted
  const GetUserDataFetching = async () => {
    const RecivedUserTableData = await getUserData(); // Fetch user data using getUserData function
    setTableData(RecivedUserTableData); // Update state with the fetched data
  };

  // Handle update button click
  const handleUpdate = async () => {
    try {
        // Send the request to update the user data
        const updatedData = await EditUserData(updateData); // This will return the updated user data from the backend

        // Update the local state with the updated data
        setTableData((prevData) =>
            prevData.map((row) =>
                row.srnumber === updatedData.srnumber ? { ...row, ...updatedData } : row
            )
        );

        setOpenDialog(false); // Close the dialog
        alert('User data updated successfully');
    } catch (error) {
        console.error('Error updating data:', error);
    }
};


  // Handle delete button click
  const handleDelete = (userId) => {
    fetch(`http://localhost:4100/api/deleteUser/${userId}`, { method: 'DELETE' })
      .then((response) => response.json())
      .then((data) => {
        setTableData((prevData) => prevData.filter((row) => row.srnumber !== userId));
        alert('User deleted successfully');
      })
      .catch((error) => console.error('Error deleting data:', error));
  };

  // Open dialog for editing user data
  const handleEditClick = (user) => {
    setUpdateData(user);
    setOpenDialog(true);
    setSelectedUserId(user.srnumber);
  };

  // Close the dialog
  const handleDialogClose = () => {
    setOpenDialog(false);
    setSelectedUserId(null);
  };

  // Handle input change for editing
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    GetUserDataFetching(); // Fetch user data when the component mounts
  }, []);

  return (
    <div style={{ margin: '20px' }}>
      <Typography variant="h5" gutterBottom align="center" color="primary">
        User Data Table
      </Typography>

      <TableContainer component={Paper} elevation={3} style={{ backgroundColor: '#f4f6f9' }}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: '#1976d2', color: 'white' }}>
              {tableHeaders.map((header) => (
                <TableCell key={header.id} align="center" style={{ fontWeight: 'bold' }}>
                  {header.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.srnumber}>
                {tableHeaders.map((header) => {
                  if (header.id === 'update') {
                    return (
                      <TableCell key={header.id} align="center">
                        <Button variant="contained" color="primary" onClick={() => handleEditClick(row)}>
                          Update
                        </Button>
                      </TableCell>
                    );
                  }
                  if (header.id === 'delete') {
                    return (
                      <TableCell key={header.id} align="center">
                        <Button variant="contained" color="secondary" onClick={() => handleDelete(row.srnumber)}>
                          Delete
                        </Button>
                      </TableCell>
                    );
                  }
                  return (
                    <TableCell key={header.id} align="center">
                      {row[header.id]}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog for updating user */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <TextField
            name="fname"
            label="First Name"
            value={updateData.fname}
            onChange={handleInputChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="lname"
            label="Last Name"
            value={updateData.lname}
            onChange={handleInputChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="email"
            label="Email"
            value={updateData.email}
            onChange={handleInputChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="mobile"
            label="Mobile"
            value={updateData.mobile}
            onChange={handleInputChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="password"
            label="Password"
            value={updateData.password}
            onChange={handleInputChange}
            fullWidth
            margin="dense"
            type="password"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleUpdate} color="primary">
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
