import {AppBar,Toolbar,IconButton,Typography,Button} from '@material-ui/core';
import ArrowBack from '@material-ui/icons/ArrowBack'
import React from 'react'
import { useHistory } from "react-router-dom";
function AddProductAppBar() {
  const history = useHistory();
  const goBack=()=>{
    history.push("/") 
}
    return (
        <div>
            <AppBar position="static" color="default">
  <Toolbar>
    <IconButton onClick={goBack}
     edge="start"  color="inherit" aria-label="menu">
    <ArrowBack/>
    </IconButton>
    <Typography variant="h6" >
     Add New Product
    </Typography>
  </Toolbar>
</AppBar>
        </div>
    )
}

export default AddProductAppBar

