import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import './ProductPage.css'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import Header from '../Header/Header';
import { useHistory } from "react-router-dom";
// import useStyles from './styles'
function ProductPage() {
    const useStyles = makeStyles({
        root: {
          maxWidth: 600,
          alignContent:'center',
          padding:"10px",
        },
        media: {
          height: 350,
          padding:"5px"
        },
        button: {
          padding:"5px",
          margin:"10px"
        },
      });
      const classes = useStyles();
    const [products, setProducts] = useState([]);
    const history = useHistory();
    useEffect(() => {
       getProducts();
    }, [])
    const getProducts =()=>{
       axios.get('http://localhost:5000/app/products').then((response)=>{
           const data = response.data;
           setProducts(data);
           console.log(data);
       })
    }
    const gotoDetailsPage=()=>{
      history.push({
        pathname: '/productDetails',
        search: `id:${products[0]._id}`,
        state: { val: products}
      }) 
  }
    return (
        <div className="products">
          <Header/>
          {/* <Header/> */}
          {products.map((val,key)=>{
       return <div key={key}>
           {/* <img width='500' height='200' src={val.productImage} alt="productImage"/> */}
           <div onClick={gotoDetailsPage}
            className="card">
                        <div>
                        <img className="image"
                         src={val.productImage} alt="image" />
                        </div>
                        <div>
                            <h3 className="productName">{val.productName}</h3>
                        </div>
                        <div className="product-price">
                            {
                                val.price
                            }
                        </div>
                        <div className="product-price">
                            {
                                val.productDescription
                            }
                        </div>
                        <div className="product-add-button">
                            Add to Cart
                        </div>
                    </div>
           {/* <h4>{val.productDescription}</h4> */}
           </div>
          })}
        </div>
    )
}

export default ProductPage
