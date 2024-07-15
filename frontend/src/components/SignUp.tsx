import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/api';
import { TextField, Button, Box, Typography, Card, CardContent, CardActions, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material'; 
import '../styles/Styles.css';

const SignUp: React.FC = () => {
    const [formData, setFormData] = useState({
        user_firstname: '',
        user_lastname: '',
        user_email: '',
        user_password: '',
        user_phone: '',
        user_city: 'Hyderabad',
        user_zipcode: '570071',
        user_address1: 'Miyapur',
        user_state: 'Telangana',
        user_country: 'India',
        user_createdat: "2024-01-15",
        user_lastlogin: "2024-07-15",
        user_emailverified: true,
        user_phoneverified: true,
        user_gender: "Male",
        user_profilepicture: null,
        user_usertype: "Regular"
    });
    const [showPassword, setShowPassword] = useState(false); 
    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await registerUser(formData);
            console.log('User registered:', response.data);
            localStorage.setItem('user', JSON.stringify(response.data));
            alert('Registration successful!');
            navigate('/login');
        } catch (error) {
            console.error('Error registering user:', error);
            alert('Registration failed. Please try again.');
        }
    };

    return (
        <Box className="signup-container">
            <div className="image-side" style={{ backgroundImage: 'url("/loginpage.png")' }}></div>
            <Box sx={{ padding: '10px', margin: '100px' }}>
                <Card 
                    sx={{
                        width: 300,
                        height: 500,
                        padding: 3,
                        position: 'relative',
                        boxShadow: `
                            0px 4px 15px rgba(135, 206, 235, 0.7),
                            0px 4px 20px rgba(255, 105, 180, 0.7) 
                        `,
                        borderRadius: 2,
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
                    <CardContent>
                        <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom>Create Account</Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="First Name"
                                name="user_firstname"
                                value={formData.user_firstname}
                                onChange={handleChange}
                                fullWidth
                                required
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true, 
                                    sx: { 
                                        left: '10px', transform: 'translate(4px, -9px) scale(0.8)'
                                    },
                                }}
                                InputProps={{
                                    sx: { height: '40px', borderRadius: 3, '& .MuiInputBase-input': { height: '40px', padding: '20px' } }
                                }}
                            />
                            <TextField
                                label="Last Name"
                                name="user_lastname"
                                value={formData.user_lastname}
                                onChange={handleChange}
                                fullWidth
                                required
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true, 
                                    sx: { 
                                        left: '10px', transform: 'translate(4px, -9px) scale(0.8)'
                                    },
                                }}
                                InputProps={{
                                    sx: { height: '40px', borderRadius: 3, '& .MuiInputBase-input': { height: '40px', padding: '20px' } }
                                }}
                            />
                            <TextField
                                label="Email"
                                name="user_email"
                                value={formData.user_email}
                                onChange={handleChange}
                                fullWidth
                                required
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true, 
                                    sx: { 
                                        left: '10px', transform: 'translate(4px, -9px) scale(0.8)'
                                    },
                                }}
                                InputProps={{
                                    sx: { height: '40px', borderRadius: 3, '& .MuiInputBase-input': { height: '40px', padding: '20px' } }
                                }}
                            />
                            <TextField
                                label="Password"
                                type={showPassword ? "text" : "password"}
                                name="user_password"
                                value={formData.user_password}
                                onChange={handleChange}
                                fullWidth
                                required
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true, 
                                    sx: { 
                                        left: '10px', transform: 'translate(4px, -9px) scale(0.8)'
                                    },
                                }}
                                InputProps={{
                                    sx: { height: '40px', borderRadius: 3, '& .MuiInputBase-input': { height: '40px', padding: '20px' } },
                                    endAdornment: (
                                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    ),
                                }}
                            />
                            <TextField
                                label="Phone"
                                name="user_phone"
                                value={formData.user_phone}
                                onChange={handleChange}
                                fullWidth
                                required
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true, 
                                    sx: { 
                                        left: '10px', transform: 'translate(4px, -9px) scale(0.8)'
                                    },
                                }}
                                InputProps={{
                                    sx: { height: '40px', borderRadius: 3, '& .MuiInputBase-input': { height: '40px', padding: '20px' } }
                                }}
                            />
                            <CardActions>
                                <Button type="submit" variant="contained" fullWidth 
                                    sx={{ 
                                        backgroundColor: 'rgb(238, 104, 227)',
                                        background: 'linear-gradient(54deg, rgba(238, 104, 227, 1) 0%, rgba(0, 207, 255, 1) 88%)',
                                        '&:hover': { 
                                            backgroundColor: '#f26024', 
                                            background: 'linear-gradient(54deg, rgba(238, 104, 227, 1) 0%, rgba(0, 207, 255, 1) 88%)'
                                        } 
                                    }}
                                >
                                    Sign Up
                                </Button>
                            </CardActions>
                        </form>
                    </CardContent>
                    <CardActions>
                        <Typography variant="body2" sx={{ color: '#94938f' }}>
                            Already have an account? 
                            <Button onClick={() => navigate('/login')} className="gradient-text">Login</Button>
                        </Typography>
                    </CardActions>
                </Card>
            </Box>
        </Box>
    );
};

export default SignUp;
