import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/api';
import { TextField, Button, Box, Typography, Card, CardContent, CardActions, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material'; 
import '../styles/Styles.css';

const Login: React.FC = () => {
    const [formData, setFormData] = useState({ user_email: '', user_password: '' });
    const [showPassword, setShowPassword] = useState(false); 
    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await loginUser(formData);
            if (response.status === 200 && response.data.status) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user_data[0]))
                alert('Login successful! Redirecting to dashboard...');
                navigate('/dashboard');
            } else {
                alert('Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Login failed', error);
            alert('An error occurred during login. Please try again.');
        }
    };
    

    return (
        <Box className="login-container">
            <div className="image-side" style={{ backgroundImage: 'url("/loginpage.png")' }}></div>
            <Box sx={{ padding: '10px', margin: '100px' }}>
                <Card
                    sx={{
                        width: 300,
                        height: 400,
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
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }} gutterBottom>Hello...</Typography>
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }} gutterBottom>Welcome Back</Typography>
                        <Typography variant="subtitle1" sx={{color: '#94938f'}} gutterBottom>Sign in to continue.</Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Email"
                                type="email"
                                name="user_email"
                                value={formData.user_email}
                                onChange={handleChange}
                                fullWidth
                                required
                                margin="normal"
                                variant="outlined"
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
                                type={showPassword ? "text" : "password"} // Toggle type based on state
                                name="user_password"
                                value={formData.user_password}
                                onChange={handleChange}
                                fullWidth
                                required
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true,
                                    sx: {
                                        left: '10px', transform: 'translate(4px, -9px) scale(0.8)'
                                    },
                                }}
                                InputProps={{
                                    sx: { height: '40px', borderRadius: 3, '& .MuiInputBase-input': { height: '40px', padding: '20px' } },
                                    endAdornment: (
                                        <IconButton
                                            onClick={() => setShowPassword(!showPassword)} // Toggle visibility
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    ),
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
                                    }}>
                                    Login
                                </Button>
                            </CardActions>
                        </form>
                    </CardContent>
                    <CardActions>
                        <Typography variant="body2" sx={{ marginTop: 0,color: '#94938f' }}>
                            Don't have an account?
                            <Button onClick={() => navigate('/signup')} className="gradient-text">Sign up</Button>
                        </Typography>
                    </CardActions>
                </Card>
            </Box>
        </Box>
    );
};

export default Login;
