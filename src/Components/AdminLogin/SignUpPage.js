import React from 'react'
import TextField from "@material-ui/core/TextField";
import { useState } from 'react';
import { Button, Typography } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import axios from 'axios'
import Header from '../Header/Header';
function SignUpPage() {
    const [user, setUser] = useState({
        username:'',
        password:''
    });
    const history = useHistory();
    const handleUsername=(e)=>{
        setUser({...user,username:e.target.value})
    }
    const handlePassword=(e)=>{
        setUser({...user,password:e.target.value})
    }
    const handleSubmit= async(e)=>{
        e.preventDefault();
        const response = await axios.post("http://localhost:5000/app/user/signup",user);
        console.log(response.data);
    }
    const gotoLoginPage=()=>{
        history.push("/login") 
    }
    return (
        <div>
            <Header/>
              <Typography variant="h3" style={{padding:'10px'}}>
                Sign Up
            </Typography>
           <TextField value={user.email} onChange={handleUsername}
          className="prodDescTextField" variant="outlined" label="Username" fullWidth style={{padding:'10px'}}
          placeholder="Username" /> 
           <TextField value={user.password}  onChange={handlePassword}
          className="prodDescTextField" variant="outlined" label="Password" fullWidth style={{padding:'10px'}}
          placeholder="Password" /> 
           <Button onClick={handleSubmit}
           style={{backgroundColor:'black' , color:"white" ,margin:'auto' ,
           display:'block'}}
           variant="contained" className="blackButton" color="primary">
             Sign Up
          </Button>
          <Typography variant="h8" style={{ marginTop:'30px'}}>
              Already have an account ? Login here...
          </Typography>
          <Button onClick={gotoLoginPage}
           style={{backgroundColor:'black' , color:"white" ,margin:'auto' , marginTop:'10px',
           display:'block'}}
           variant="contained" className="blackButton" color="primary">
             Login
          </Button>
        </div>
    )
}

export default SignUpPage
