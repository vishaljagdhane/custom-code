import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink, useNavigate } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export default function ApplicationBar({
  isDrawerOpen,
  toggleDrawer,
  currentPage,
  handleSearch,
  userProfileImage,
}) {
  const navigate = useNavigate();
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const isStandalone = window.matchMedia("(display-mode: standalone)").matches;

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    alert("Install App")
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        setDeferredPrompt(null);
      });
    }
  };

  const handleSearchRedirect = (event) => {
    if (event.key === "Enter") {
      handleSearch(event.target.value);
      navigate("/home");
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: isDrawerOpen ? "87%" : "100%",
        marginLeft: isDrawerOpen ? "13.5%" : "0",
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

        <Typography variant="h6" sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Dashboard</span>
          <ArrowRightIcon
            sx={{ marginLeft: 1, fontSize: 30, lineHeight: 1, color: "text.secondary" }}
          />
          <NavLink
            to={`/${currentPage}`}
            style={{
              textDecoration: "none",
              color: "inherit",
              marginLeft: 1,
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            {currentPage}
          </NavLink>
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
          onKeyDown={handleSearchRedirect}
          sx={{
            marginRight: 2,
            backgroundColor: "white",
            borderRadius: 1,
          }}
        />

{!isStandalone && deferredPrompt && (
          <Button
            variant="contained"
            color="secondary"
            onClick={handleInstallClick}
            sx={{ marginRight: 2 }}
          >
            Install App
          </Button>
        )}
     

        <IconButton color="inherit" sx={{ marginRight: 1 }}>
          <SettingsIcon />
        </IconButton>

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
