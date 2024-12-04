import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { AttachMoney, ShoppingCart, Build, AccountBalance } from '@mui/icons-material';

export default function DashboardPages() {
  // Data array for the first row with icons
  const amounts = [
    { label: 'Sale Amount', value: '$10,000', icon: <AttachMoney /> },
    { label: 'Purchase Amount', value: '$8,000', icon: <ShoppingCart /> },
    { label: 'Production Amount', value: '$5,000', icon: <Build /> },
    { label: 'Balance Amount', value: '$2,000', icon: <AccountBalance /> },
  ];

  return (
    <>
      <Box sx={{ width: '100%', height: '100%', padding: { xs: '0px', sm: '0px', md: '10px' } ,paddingRight:5}}>
        <Grid container spacing={3}>
          {/* First row: Sale Amount, Purchase Amount, Production Amount, Balance Amount */}
          {amounts.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ borderRadius: 2, boxShadow: 3, backgroundColor: '#f9f9f9' }}>
                <CardContent>
                  <Box display="flex" alignItems="center" flexDirection={{ xs: 'column', sm: 'row' }}>
                    <Box sx={{ mr: 2, backgroundColor: '#e0e0e0', p: 1, borderRadius: '50%', mb: { xs: 1, sm: 0 } }}>
                      {item.icon}
                    </Box>
                    <div>
                      <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                        {item.label}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.value}
                      </Typography>
                    </div>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}

          {/* Second row: Placeholder for future charts (6 columns each) */}
          <Grid item xs={12} sm={6} md={6}>
            <Card sx={{ borderRadius: 2, boxShadow: 3, backgroundColor: '#f9f9f9' }}>
              <CardContent>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                  Chart 1
                </Typography>
                {/* You can add chart components here */}
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Card sx={{ borderRadius: 2, boxShadow: 3, backgroundColor: '#f9f9f9' }}>
              <CardContent>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                  Chart 2
                </Typography>
                {/* You can add chart components here */}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
