"use client"

import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from "@mui/material";
import Header from "../../../components/Header/page";
import styles from './page.module.css'
import { useState } from "react";
import { Visibility } from "@mui/icons-material";

const page = () =>{
    const [userName, setUserName] = useState("");
    const[email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState();
    const[password, setPassword] = useState("");
    const[passwordre, setPasswordre] = useState("");
    const[showpassword, setShowPassword] = useState(false);
    const[showpasswordreq, setShowPasswordReq] = useState(false);
    function handleClickShowPassword(){
        setShowPassword(!showpassword);
    }
    function handleClickShowPasswordReq(){
        setShowPassword(!showpasswordreq);
    }
    return(
        <>
        <Header />
        <div className={styles.loginCard}>
            <Typography sx={{fontSize:'30px'}}>Sign Up to Devzone</Typography>
            <TextField sx={{width:'26ch'}} required label='Username' onChange={(e)=>{setUserName(e.target.value)}}></TextField>
            <TextField sx={{width:'26ch'}} required type="email"  label='Email' onChange={(e)=>{setEmail(e.target.value)}}></TextField>
            <TextField sx={{width:'26ch'}} required type="number" label='Phone Number' onChange={(e)=>{setPhoneNo(e.target.value)}} ></TextField>
            <FormControl variant="outlined">
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
                <FormControl variant="outlined">
                    <InputLabel required htmlFor="outlined-adornment-password">Retype Password</InputLabel>
                    <OutlinedInput
                    id="outlined-adornment-password"
                    type={showpasswordreq ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                        >
                            {showpasswordreq ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                    onChange={(e)=>{setPasswordre(e.target.value)}}
                    />
                </FormControl>
                <Button className={styles.button}>Sign Up</Button>
        </div>
        </>
    )
}
export default page;