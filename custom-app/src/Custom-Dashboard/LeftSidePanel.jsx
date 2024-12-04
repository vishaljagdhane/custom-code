import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

export default function LeftSidePanel({ isDrawerOpen, onNavigate, menuItems }) {
  const [showAll, setShowAll] = useState(false);

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
          width: "13%",
          boxSizing: "border-box",
          borderRight: "1px solid #ccc",
        },
      }}
    >
      {/* Drawer Header */}
      <Box
        sx={{
          width: "100%",
          height: "65px",
          bgcolor: "#1976D2",
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
      <Box
        sx={{
          height: "calc(100% - 130px)", // Subtract the height of the header and footer
          overflowY: "auto",
        }}
      >
        <List
          sx={{
            position: "relative",
            top: 80,
            height: "50vh", // Set the desired height
            overflowY: "auto", // Enable vertical scrolling
            border: "1px solid #ccc", // Optional: for visual separation
          }}
        >
          {visibleItems.map((item) => (
            <ListItem
              button
              key={item.label}
              onClick={() => onNavigate(item)} // Pass the clicked item
              sx={{
                "&:hover": { bgcolor: "#BBDEFB" },
                transition: "all 0.2s",
                borderBottom: "1px solid",
                cursor: "pointer",
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
      </Box>

      {/* About Software Box */}
      <Box
        sx={{
          width: "100%",
          height: "65px",
          bgcolor: "#1976D2",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: "#FFFFFF", fontWeight: "bold", textAlign: "center" }}
        >
          About Software
        </Typography>
      </Box>
    </Drawer>
  );
}
