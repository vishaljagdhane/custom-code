import React from 'react';
import { Box, TextField, Button, Grid, Typography, Container } from '@mui/material';

export default function UserRegisterPage() {
  return (
<>
    <Box sx={{width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center',    backgroundColor: '#E3F2FD',}}>
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 8,
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: '#fff',
        }}
      >
        <Typography variant="h5" gutterBottom>
          User Registration
        </Typography>
        
        {/* Registration Form */}
        <Box
          component="form"
          noValidate
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            width: '100%',
          }}
        >
          {/* First Name */}
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            required
          />
          
          {/* Last Name */}
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            required
          />
          
          {/* Mobile Number */}
          <TextField
            label="Mobile Number"
            variant="outlined"
            fullWidth
            required
            type="tel"
          />
          
          {/* Email */}
          <TextField
            label="Email Address"
            variant="outlined"
            fullWidth
            required
            type="email"
          />
          
          {/* City */}
          <TextField
            label="City"
            variant="outlined"
            fullWidth
            required
          />
          
          {/* Password */}
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            required
            type="password"
          />
          
          {/* Aadhaar Number */}
          <TextField
            label="Aadhaar Number"
            variant="outlined"
            fullWidth
            required
            type="number"
          />
          
          {/* PAN Number */}
          <TextField
            label="PAN Number"
            variant="outlined"
            fullWidth
            required
            type="text"
          />
          
          {/* Submit Button */}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Container>
    </Box>
    </>
  );
}
