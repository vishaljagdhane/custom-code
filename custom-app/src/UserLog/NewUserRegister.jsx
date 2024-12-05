import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Box, Typography, Link, FormHelperText } from '@mui/material';

export default function NewUserRegister() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: ''
  });

  const [passwordStrength, setPasswordStrength] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === 'password') {
      evaluatePasswordStrength(value);
    }
  };

  // Validate password strength (minimum 10 characters, alphanumeric)
  const evaluatePasswordStrength = (password) => {
    if (password.length >= 10 && /[a-zA-Z]/.test(password) && /\d/.test(password)) {
      setPasswordStrength('Strong');
      setIsPasswordValid(true);
    } else {
      setPasswordStrength('Weak');
      setIsPasswordValid(false);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  // Redirect to Google's OAuth endpoint
  const redirectToGoogleLogin = () => {
    const clientId = 'YOUR_GOOGLE_CLIENT_ID'; // Replace with your Google OAuth client ID
    const redirectUri = 'http://localhost:3000/callback'; // The redirect URI you set in Google Console
    const scope = 'openid profile email'; // Scopes to get user info
    const responseType = 'token'; // We want an access token

    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;

    window.location.href = googleAuthUrl; // Redirect user to Google login page
  };

  // After the user has authenticated and Google redirects back to your app
  // You need to handle the redirect and extract the access token from the URL
  const handleGoogleRedirect = () => {
    const params = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = params.get('access_token');

    if (accessToken) {
      // Fetch user details using the Google People API
      fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken}`)
        .then((response) => response.json())
        .then((userData) => {
          // Set the form data with the fetched user data
          setFormData({
            ...formData,
            firstName: userData.given_name,
            lastName: userData.family_name,
            email: userData.email
          });
        })
        .catch((error) => {
          console.error('Error fetching user data from Google:', error);
        });
    }
  };

  // Check if we are on the redirect page and handle it
  useEffect(() => {
    if (window.location.hash) {
      handleGoogleRedirect();
    }
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      // height="100vh"
      
      sx={{  position: 'relative',top: 30, }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: '100%',
          maxWidth: 900,
          padding: 3,
          borderRadius: 2,
          backgroundColor: 'white',
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Create Account
        </Typography>
        <Grid container spacing={2}>
          {/* First Row - First Name & Last Name */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
           
            />
          </Grid>

          {/* Second Row - Email, Mobile, Password, Confirm Password */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
      
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Mobile"
              variant="outlined"
              name="mobile"
              type="tel"
              value={formData.mobile}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
            {passwordStrength && (
              <FormHelperText sx={{ color: isPasswordValid ? 'green' : 'red' }}>
                Password Strength: {passwordStrength}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Confirm Password"
              variant="outlined"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ padding: 1.5 }}
              disabled={!isPasswordValid} // Disable submit if password is weak
            >
              Register
            </Button>
          </Grid>
        </Grid>

        {/* Google Sign-Up Link */}
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Link
            href="#"
            variant="body2"
            color="primary"
            onClick={redirectToGoogleLogin} // Trigger Google OAuth login on click
          >
            Sign Up with Google
          </Link>

          <Link href="#" variant="body2" color="primary">
            Go to Login
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
