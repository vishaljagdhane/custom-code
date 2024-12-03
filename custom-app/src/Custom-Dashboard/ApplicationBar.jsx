import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

export default function ApplicationBar({
  isDrawerOpen,
  toggleDrawer,
  currentPage,
  handleSearch,
  userProfileImage,
}) {
  const navigate = useNavigate();

  // Handle page navigation on search
  const handleSearchRedirect = (event) => {
    if (event.key === "Enter") {
      handleSearch(event.target.value); // Perform search logic
      navigate("/home"); // Redirect to Home page
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: isDrawerOpen ? "80%" : "100%",
        marginLeft: isDrawerOpen ? "20%" : "0",
        transition: "width 0.3s ease, margin 0.3s ease",
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={toggleDrawer}
          sx={{ marginRight: 2 }}
        >
          {isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {currentPage} {/* Dynamically display the current active page name */}
        </Typography>

        <TextField
          variant="outlined"
          size="small"
          placeholder="Search..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          onKeyDown={handleSearchRedirect} // Trigger search on Enter key
          sx={{
            marginRight: 2,
            backgroundColor: "white",
            borderRadius: 1,
          }}
        />

        <IconButton color="inherit" sx={{ marginRight: 1 }}>
          <SettingsIcon />
        </IconButton>

        {/* Display user icon or profile image if available */}
        <IconButton color="inherit">
          {userProfileImage ? (
            <img
              src={userProfileImage}
              alt="User Profile"
              style={{
                width: 30,
                height: 30,
                borderRadius: "50%",
              }}
            />
          ) : (
            <AccountCircleIcon />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
