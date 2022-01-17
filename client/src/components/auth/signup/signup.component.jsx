import React, { useState } from 'react';
import './signup.styles.css'

import FormControl from '@mui/material/TextField';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CircularProgress from '@mui/material/CircularProgress';
import { validate } from 'react-email-validator'

export const SignUpForm = () => {

    const [showLoading, setShowLoading] = useState(false);
    const [buttonText, setButtonText] = useState("Send OTP");
    const [userEmail, setUserEmail] = useState("");
    const [isEmailInvalid, setIsEmailInvalid] = useState(false);
    const [disabledBtn, setDisabledBtn] = useState(true)
    const [isOtpFieldDisabled, setIsOtpFieldDisabled] = useState(true)

    const checkEmail = e => {
        const userEnteredEmail = e.target.value;
        if (validate(userEnteredEmail)) {
            setUserEmail(userEnteredEmail);
            setIsEmailInvalid(false);
            setDisabledBtn(false);
        }
        else {
            setIsEmailInvalid(true);
            setDisabledBtn(true);
        }
    }

    const sendDataToServer = () => {
        if (buttonText == "Send OTP") {
            setShowLoading(true)
            console.log("Data sending to server...")  
        }
    }


    return (
        <div className="signupForm">
            <h1 className="Title">Sign Up as <br /><span>HealthAura Member</span></h1>
            <div className="form">
                <FormControl
                    fullWidth
                    label="Email"
                    type="email"
                    error={isEmailInvalid}
                    sx={{
                        borderRadius: "8px"
                    }}
                    onChange={checkEmail}
                >
                    <TextField />
                </FormControl>

                <FormControl
                    fullWidth
                    label="OTP"
                    type="text"
                    error={false}
                    margin='normal'
                    disabled={isOtpFieldDisabled}
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
                    disabled={disabledBtn}
                    onClick={sendDataToServer}
                >
                    {
                        showLoading ? <CircularProgress color="inherit" size={"32px"} /> : buttonText
                    }

                </Button>
            </div>
        </div>
    )
}