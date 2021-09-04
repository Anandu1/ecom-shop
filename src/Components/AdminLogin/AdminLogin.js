import React from 'react'
import TextField from "@material-ui/core/TextField";
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Button, Typography } from '@material-ui/core';
import axios from 'axios'
import Header from '../Header/Header';
function AdminLogin() {
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
        const response = await axios.post("http://localhost:5000/app/user/login",user).then(()=>{
            history.push("/products")
        });
    }
    const gotoSignupPage=()=>{
        history.push("/signup") 
    }
    const gotoMerchantPanel=()=>{
        history.push("/addProduct") 
    }
    return (
        <div>
            <Header/>
            <Typography variant="h3" style={{padding:'10px'}}>
                Login
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
             Login
          </Button>
          <Typography variant="h8" style={{ marginTop:'30px'}}>
              New user ? Sign up here...
          </Typography>
          <Button onClick={gotoSignupPage}
           style={{backgroundColor:'black' , color:"white" ,margin:'auto' , marginTop:'10px',
           display:'block'}}
           variant="contained" className="blackButton" color="primary">
             Sign Up
          </Button>
          <Button onClick={gotoMerchantPanel}
           style={{backgroundColor:'black' , color:"white" ,margin:'auto' , marginTop:'10px',
           display:'block'}}
           variant="contained" className="blackButton" color="primary">
             Merchant Panel
          </Button>
        </div>
    )
}

export default AdminLogin
