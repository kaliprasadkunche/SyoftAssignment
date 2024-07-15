import React from 'react';
import { Box, Typography, Button, Avatar, Paper, Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    console.log("UserDETAILS", user);

    // Function to handle logout
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    const formatDate = (date: Date) => {
        const options: Intl.DateTimeFormatOptions = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        };
        return date.toLocaleString('en-US', options);
    };

    const currentDateTime = formatDate(new Date());

    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            {/* Header Section */}
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
                <Box display="flex"  flexDirection='column'>
                <Typography variant="h5" className="gradient-text">Welcome, {user.user_firstname}</Typography>
                <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
                {currentDateTime}
            </Typography> 
                </Box>
                
                <Box display="flex" alignItems="center">
                <Box sx={{margin:2}}>
                    <img src="/bell-ring.png" alt="bell" style={{width: 30, height: 30, marginRight: 5, marginTop: 2  }} />
                </Box>
                    <Avatar
                        alt={`${user.user_firstname} ${user.user_lastname}`}
                        src={'/dashboardprofile.jpg'}
                        sx={{ width: 50, height: 50, marginRight: 2 }}
                    />
                </Box>
            </Box>

            {/* Body Section */}
            <Paper
                sx={{
                    p: 0,
                    borderRadius: '20px',
                    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center',
                    margin: 'auto',
                    maxWidth: 1200,
                }}
            >
                {/* First Part: Image */}
                <Box sx={{ width: '100%', mb: 3 }}>
                    <img src="/dashboard2.jpg" alt="Profile Banner" style={{ width: '100%', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} />
                </Box>

                {/* Second Part: Avatar and Name/Email */}
                <Box sx={{p:4}}>
                <Box display="flex" alignItems="center" mb={3}>
                    <Box>
                        <img src="/dashboardprofile.jpg" alt="pic" style={{width: 100, height: 100, marginTop: 1, marginRight: 15, borderRadius: 10 }} />
                    </Box>
                    <Box>
                        <Typography sx={{fontSize: '25px'}} className="gradient-text">{user.user_firstname} {user.user_lastname}</Typography>
                        <Typography sx={{fontSize: '15px', color: '#858482'}}>{user.user_email || 'N/A'}</Typography>
                        <InstagramIcon sx={{width: 20, height: 20, marginRight:2, marginTop:1}} />
                        <XIcon sx={{width: 20, height: 20, marginRight:2, marginTop:1}} />
                        <WhatsAppIcon sx={{width: 20, height: 20, marginRight:2, marginTop:1}} />
                    </Box>
                </Box>

                <Box display="flex"  flexDirection='row'>
                    <Box>
                    <Typography sx={{ fontWeight: 'bold', textAlign: 'left', marginLeft:2 }}>Personal Information</Typography>
                    <Card sx={{ width: 520, p: 1, m: 2, 
                        boxShadow: `
                        0px 4px 15px rgba(135, 206, 235, 0.7),
                        0px 4px 20px rgba(255, 105, 180, 0.7) 
                    `,
                    borderRadius: 2,
                    position: 'relative',
                    overflow: 'hidden', // Ensure border doesn't overflow
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        border: '2px solid transparent',
                        borderRadius: 'inherit',
                        animation: 'borderAnimation 3s infinite alternate'
                    },
                    '@keyframes borderAnimation': {
                        '0%': {
                            borderColor: 'rgba(135, 206, 235, 0.7)'
                        },
                        '100%': {
                            borderColor: 'rgba(255, 105, 180, 0.7)'
                        }}}}>
                        <Box sx={{m:1, textAlign: 'left' }}>
                            <Typography sx={{fontSize: 17, marginBottom:2}}>Name<span style={{ marginLeft: 30 }}>:</span> <span style={{ marginLeft: 30 }}></span>{user.user_firstname} {user.user_lastname}</Typography>
                            <Typography sx={{fontSize: 17, marginBottom:2}}>Email<span style={{ marginLeft: 32 }}>:</span> <span style={{ marginLeft: 30 }}></span> {user.user_email}</Typography>
                            <Typography sx={{fontSize: 17, marginBottom:2}}>Mobile<span style={{ marginLeft: 26 }}>:</span> <span style={{ marginLeft: 30 }}></span> {user.user_phone}</Typography>
                            <Typography sx={{fontSize: 17, marginBottom:2}}>Gender<span style={{ marginLeft: 20}}>:</span> <span style={{ marginLeft: 30 }}></span> {user.user_gender || 'Male'}</Typography>
                        </Box>
                    </Card>
                    </Box>
                    <Box>
                    <Typography sx={{ fontWeight: 'bold', textAlign: 'left', marginLeft:2 }}>Address Details</Typography>
                    <Card sx={{ width: 520, p: 1, m: 2, 
                        boxShadow: `
                        0px 4px 15px rgba(135, 206, 235, 0.7),
                        0px 4px 20px rgba(255, 105, 180, 0.7) 
                    `,
                    borderRadius: 2,
                    position: 'relative',
                    overflow: 'hidden', // Ensure border doesn't overflow
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        border: '2px solid transparent',
                        borderRadius: 'inherit',
                        animation: 'borderAnimation 3s infinite alternate'
                    },
                    '@keyframes borderAnimation': {
                        '0%': {
                            borderColor: 'rgba(135, 206, 235, 0.7)'
                        },
                        '100%': {
                            borderColor: 'rgba(255, 105, 180, 0.7)'
                        }}}}>
                        <Box sx={{m:1, textAlign: 'left' }}>
                            <Typography sx={{fontSize: 17, marginBottom:2}}>City<span style={{ marginLeft: 55 }}>:</span> <span style={{ marginLeft: 30 }}></span>{user.user_city || 'Hyderabad'}</Typography>
                            <Typography sx={{fontSize: 17, marginBottom:2}}>State<span style={{ marginLeft: 45 }}>:</span> <span style={{ marginLeft: 30 }}></span> {user.user_state || 'Telangana'}</Typography>
                            <Typography sx={{fontSize: 17, marginBottom:2}}>Country<span style={{ marginLeft: 26 }}>:</span> <span style={{ marginLeft: 30 }}></span> {user.user_country || 'India'}</Typography>
                            <Typography sx={{fontSize: 17, marginBottom:2}}>ZipCode<span style={{ marginLeft: 21}}>:</span> <span style={{ marginLeft: 30 }}></span> {user.user_zipcode || 'N/A'}</Typography>
                        </Box>
                    </Card>
                    </Box>
                    
                </Box>
                {/* Logout Button in the Body Section */}
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleLogout}
                    sx={{
                        marginTop:4,
                        width: 90,
                        backgroundColor: 'rgb(238, 104, 227)',
                        background: 'linear-gradient(54deg, rgba(238, 104, 227, 1) 0%, rgba(0, 207, 255, 1) 88%)',
                        '&:hover': {
                            backgroundColor: '#f26024',
                            background: 'linear-gradient(54deg, rgba(238, 104, 227, 1) 0%, rgba(0, 207, 255, 1) 88%)'
                        }
                    }}>
                    Logout
                </Button>
                </Box>
               
            </Paper>
        </Box>
    );
};

export default Dashboard;
