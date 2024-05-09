"use client"

import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { loginUser } from "../../../utils/apiHandler";
import styles from './page.module.css'
import Header from "../../../components/Header/page";
import Link from "next/link";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";

const page = () => {
    const[username, setUserName] = useState("");
    const[password, setPassword] = useState("");
    const[showpassword, setShowPassword] = useState(false);
    function handleClickShowPassword(){
        setShowPassword(!showpassword);
    }
    
    const handleLogin = (username, password) => {
        const loginBody = {
            "userName": username,
            "password": password
        }
        let data = loginUser(loginBody);
        console.log(data);
    }
    return(
        <>
            <Header></Header>
            <div className={styles.loginCard}>
                <Typography className={styles.loginHeader}>Login To Your Application</Typography>
                <TextField required label='Username' sx={{m: 1, width: '25ch'}} onChange={(e)=>{
                    setUserName(e.target.value);
                }}>UserName</TextField>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <InputLabel required htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                    id="outlined-adornment-password"
                    type={showpassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                        >
                            {showpassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                    onChange={(e)=>{setPassword(e.target.value)}}
                    />
                </FormControl>
                <Button className={styles.button} onClick={()=>{handleLogin(username, password)}}>Login</Button>
                <Typography>Don't have an account yet? <Link href={`/signup`}>Sign Up</Link> Now!</Typography>
            </div>
        </>
    )
}
export default page;