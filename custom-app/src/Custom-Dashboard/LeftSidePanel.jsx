import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function LeftSidePanel({ isDrawerOpen, onNavigate, menuItems }) {
  const [showAll, setShowAll] = useState(false); // State to toggle "Show More/Less"

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  // Determine the number of items to display
  const visibleItems = showAll ? menuItems : menuItems.slice(0, 10);

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={isDrawerOpen}
      sx={{
        "& .MuiDrawer-paper": {
          width: "20%",
          boxSizing: "border-box",
     borderRight: "1px solid #ccc",
        //   bgcolor: "#E3F2FD", // Light blue theme background
        },
      }}
    >
      {/* Drawer Header */}
      <Box
        sx={{
          width: "100%",
          height: "65px",
          bgcolor: "#1976D2", // Blue Header
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: "#FFFFFF", fontWeight: "bold", textAlign: "center" }}
        >
          SW Software
        </Typography>
      </Box>

      {/* Menu Items List */}
      <List>
        {visibleItems.map((item) => (
          <ListItem
            button
            key={item.label}
            onClick={() => onNavigate(item.page)}
            sx={{
              "&:hover": { bgcolor: "#BBDEFB" },
              transition: "all 0.2s",
            }}
          >
            <ListItemIcon sx={{ color: "#64B5F6" }}>{item.icon}</ListItemIcon>
            <ListItemText
              primary={item.label}
              sx={{ color: "#0D47A1", fontWeight: "medium" }}
            />
          </ListItem>
        ))}
      </List>

      {/* Show More/Less Button */}
      {menuItems.length > 10 && (
        <Box sx={{ textAlign: "center", my: 2 }}>
          <Button
            variant="outlined"
            startIcon={showAll ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            onClick={toggleShowAll}
            sx={{
              color: "#1976D2",
              borderColor: "#1976D2",
              "&:hover": { bgcolor: "#BBDEFB", borderColor: "#1976D2" },
            }}
          >
            {showAll ? "Show Less" : "Show More"}
          </Button>
        </Box>
      )}
    </Drawer>
  );
}
