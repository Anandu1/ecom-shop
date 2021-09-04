import React from 'react'
import {BrowserRouter as Router ,Switch,Link,Route} from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './Header.css'
function Header() {
    return (
        <header className="header">
            <div>
               
                <h1>
                   
                    <Link to="/" className="logo">
                   GetArt Shop 
                    </Link>
                 
                </h1>
               
            </div>
           
            <div className="header-links">
                <ul>
                    <li>
                        <ExitToAppIcon style={{ color: 'white' }}/>
                        <Link to="/login" >Logout</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                    <ShoppingCartIcon style={{ color: 'white' }}/>
                        <Link to="/cart" >Cart</Link>
                    </li>
                </ul>
            </div>
          
           
        </header>
    )
}

export default Header
