import React, { useState } from 'react';
import './signup.styles.css'

import FormControl from '@mui/material/TextField';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CircularProgress from '@mui/material/CircularProgress';

export const SignUpForm = () => {

    const [showLoading, setShowLoading] = useState(false);
    const [buttonText, setButtonText] = useState("Send OTP");

    return (
        <div className="signupForm">
            <h1 className="Title">Sign Up as <br /><span>HealthAura Member</span></h1>
            <div className="form">
                <FormControl
                fullWidth
                label="Email"
                type="email"
                error={false}
                sx={{
                    borderRadius: "8px"
                }}
                >
                    <TextField />
                </FormControl>

                <FormControl
                fullWidth
                label="OTP"
                type="text"
                error={false}
                margin='normal'
                >
                    <TextField />
                </FormControl>

                <Button
                fullWidth
                variant="contained"
                endIcon={showLoading ? null : <ArrowRightAltIcon />}
                sx={{
                    backgroundColor: "#2774f8",
                    color: "white",
                    padding: "10px 0",
                    margin: "15px 0",
                    fontFamily: "poppins",
                    fontWeight: 300,
                    fontSize: "18px",
                    textTransform: "none",
                    borderRadius: "8px"
                }}
                onClick={()=>{setShowLoading(!showLoading)}}
                >
                {
                    showLoading ? <CircularProgress color="inherit" size={"32px"}/> : buttonText
                }
                    
                </Button>
            </div>
        </div>
    )
}