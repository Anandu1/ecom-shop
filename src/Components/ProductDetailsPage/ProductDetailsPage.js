import React from 'react'
import { useEffect,useState } from 'react';
import {useLocation} from 'react-router-dom';
import {useParams} from 'react-router-dom'
import axios from 'axios'
function ProductDetailsPage() {
    const {productId} = useParams();
    console.log(productId);
    const [Product, setProduct] = useState({})
    const getProduct =()=>{
        axios.get('http://localhost:5000/app/products/:id').then((response)=>{
            const data = response.data;
            setProduct(data);
            console.log(data);
        })
    }
    const location = useLocation();
    useEffect(() => {
       getProduct()
     }, [])
    return (
        <div 
            className="card">
                        <div>
                        <img className="image"
                         src={Product.productImage} alt="image" />
                        </div>
                        <div>
                            <h3 className="productName">{Product.productName}</h3>
                        </div>
                        <div className="product-price">
                            {
                                Product.price
                            }
                        </div>
                        <div className="product-price">
                            {
                                Product.productDescription
                            }
                        </div>
                        <div className="product-add-button">
                            Add to Cart
                        </div>
                    </div>
    )
}

export default ProductDetailsPage
