import React, { useEffect } from 'react';
import { SignUpForm } from '../../components/auth/signup/signup.component'
import './auth.styles.css'
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom'

export const AuthPage = () => {

    // Changing Page Title
    useEffect(() => {
        document.title = "HealthAura Sign Up"
    }, [])

    return (
        <div className="AuthPage">
            <div className="left">
                <p className="backBtnArea">
                <Link to='/'>
                    <IconButton>
                        <ArrowBackIcon />
                    </IconButton>
                </Link>
                </p>
                <div className="msg-area">
                    <div className="msg-blur">
                        <h2>Join HealthAura</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusamus mollitia aspernatur, sunt unde a.</p>
                    </div>
                </div>
            </div>
            <div className="right">
                <SignUpForm />
            </div>
        </div >
    )
}