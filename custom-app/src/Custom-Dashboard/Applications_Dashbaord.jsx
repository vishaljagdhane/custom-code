import React, { useState } from "react";
import ApplicationBar from "./ApplicationBar";
import LeftSidePanel from "./LeftSidePanel";
import { Box,Typography} from "@mui/material";

export default function Applications_Dashboard() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home");
  const [userProfileImage, setUserProfileImage] = useState(null); // Set the user image here

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleSearch = (query) => {
    // Perform your search logic here
    console.log("Search query:", query);
  };

  const menuItems = [
    // SAP MM module menu items with Tcodes
    { label: "Purchase Orders (ME21N)", page: "purchaseOrders" },
    { label: "Inventory Management (MMBE)", page: "inventoryManagement" },
    { label: "Material Master (MM01)", page: "materialMaster" },
    { label: "Vendor Master (XK01)", page: "vendorMaster" },
    { label: "Goods Receipt (MIGO)", page: "goodsReceipt" },
    { label: "Invoice Verification (MIRO)", page: "invoiceVerification" },
    { label: "Purchase Requisitions (ME51N)", page: "purchaseRequisitions" },
    { label: "Stock Overview (MMBE)", page: "stockOverview" },
    { label: "Report: Materials (MM60)", page: "reportMaterials" },
    { label: "Report: Purchases (ME2N)", page: "reportPurchases" },
  ];
  

  const handleNavigation = (page) => {
    setCurrentPage(page); // Update active page when navigating
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <LeftSidePanel
        isDrawerOpen={isDrawerOpen}
        onNavigate={handleNavigation}
        menuItems={menuItems}
      />
      <Box
        sx={{
          flexGrow: 1,
          marginLeft: isDrawerOpen ? "20%" : "0",
          width: isDrawerOpen ? "80%" : "100%",
          transition: "margin 0.3s ease, width 0.3s ease",
        }}
      >
        <ApplicationBar
          isDrawerOpen={isDrawerOpen}
          toggleDrawer={toggleDrawer}
          currentPage={currentPage}
          handleSearch={handleSearch}
          userProfileImage={userProfileImage} // Pass the user profile image
        />
        <Box sx={{ padding: 3, marginTop: "64px" }}>
          {/* Render the page content based on currentPage */}
          <Typography variant="h4">{`${currentPage} Page`}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
