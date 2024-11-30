import React, { useState } from 'react';
import { Box, TextField, Button, Grid, Typography, Container } from '@mui/material';
import axios from 'axios';
import ApiServices from '../ApiServes/ApiServices'



export default function UserRegisterPage() {
  
const [userDataGet, setUserDataGet] = useState({fname:'',lname:'',mobile:'',email:'',password:''})
const {PostUserData} = ApiServices(userDataGet);
const gettingData =(e)=>{
    setUserDataGet({...userDataGet,[e.target.name]:e.target.value})
    console.log(userDataGet)
}

const UserPostinData = async (e) => {
    // e.preventDefault(); // Prevent form submission if you're using this in a form.
  
    try {
        // const response = await axios.post('http://localhost:4100/api/userDataPost', userDataGet);

        const response = await PostUserData(userDataGet)
        setUserDataGet({fname:'',lname:'',mobile:'',email:'',password:''})
      console.log(response.data); // Log the response from the API
    } catch (err) {
      console.error("Error in posting data:", err);
      setUserDataGet({fname:'',lname:'',mobile:'',email:'',password:''})
    }
  };

    return (
        <>


            <Box sx={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#E3F2FD', }}>
             
              
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
                                autoComplete="off"
                                label="First Name"
                                variant="outlined"
                                fullWidth
                                required
                                name="fname"
                                value={userDataGet.fname}
                                onChange={gettingData}
                            />

                            {/* Last Name */}
                            <TextField
                                label="Last Name"
                                variant="outlined"
                                fullWidth
                                required
                                name="lname"
                                value={userDataGet.lname}
                                onChange={gettingData}
                            />

                            {/* Mobile Number */}
                            <TextField
                                label="Mobile Number"
                                variant="outlined"
                                fullWidth
                                required
                                type="tel"
                                value={userDataGet.mobile}
                                onChange={gettingData}
                                name='mobile'
                            />

                            {/* Email */}
                            <TextField
                                label="Email Address"
                                variant="outlined"
                                fullWidth
                                required
                                type="email"
                                 name='email'
                                value={userDataGet.email}
                                onChange={gettingData}
                     
                            />

                            {/* City */}
                       

                            {/* Password */}
                            <TextField
                                label="Password"
                                variant="outlined"
                                fullWidth
                                required
                                type="password"
                                name='password'
                                value={userDataGet.password}
                                onChange={gettingData}
                      
                            />

                            {/* Aadhaar Number */}
                         

                            {/* PAN Number */}
                         

                            {/* Submit Button */}
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{ mt: 2 }}
                                onClick={UserPostinData}
                          
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
