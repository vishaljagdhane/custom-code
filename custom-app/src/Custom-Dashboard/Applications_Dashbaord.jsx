import React, { useState } from "react";
import { Box } from "@mui/material";
import LeftSidePanel from "./LeftSidePanel";
import ApplicationBar from "./ApplicationBar";
import NewUserRegister from "../UserLog/NewUserRegister";
import ApplicationFooter from "./ApplicationFooter"; // Import the footer

import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import PersonIcon from "@mui/icons-material/Person";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ReportIcon from "@mui/icons-material/Report";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DashboardPages from "../pages/DashboardPages";

export default function Applications_Dashboard() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(null); // Initialize to null

  // Define menuItems before using them
  const menuItems = [
    { label: "Dashboard", page: <DashboardPages/>, icon: <DashboardIcon />, pagetile: "Dashboard" },
    { label: "Create User", page: <NewUserRegister/>, icon: <DashboardIcon />, pagetile: "Dashboard" },

  ];

  // Set initial page to the first menu item (if available)
  if (!currentPage && menuItems.length > 0) {
    setCurrentPage(menuItems[0]); // Initialize with the first menu item
  }

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleSearch = (query) => {
    console.log("Search query:", query);
  };

  const handleNavigation = (menuItem) => {
    setCurrentPage(menuItem); // Set the clicked menu item as the current page
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Main Content Area with LeftSidePanel and Content Area */}
      <Box sx={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <LeftSidePanel
          isDrawerOpen={isDrawerOpen}
          onNavigate={handleNavigation}
          menuItems={menuItems}
        />
        <Box
          sx={{
            flexGrow: 1,
            marginLeft: isDrawerOpen ? "13.5%" : "0",
            width: isDrawerOpen ? "100%" : "100%",
            transition: "margin 0.3s ease, width 0.3s ease",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ApplicationBar
            isDrawerOpen={isDrawerOpen}
            toggleDrawer={toggleDrawer}
            currentPage={currentPage ? currentPage.label : "Home"}
            handleSearch={handleSearch}
          />
          <Box
            sx={{
              flexGrow: 1,
              padding:0,
              marginTop: "30px",
              overflowY: "hidden", // Make content scrollable
            }}
          >
            {/* Render the page content based on the selected menu item */}
            <Box sx={{position:'relative',padding:'5px',marginTop:'50px',marginBottom:'10px',border:'1px solid #ccc',height:'calc(100vh - 120px)',overflowY:'hidden'}}>
            {currentPage ? currentPage.page : <h1>Loading...</h1>}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Fixed Footer */}
      <ApplicationFooter />
    </Box>
  );
}
