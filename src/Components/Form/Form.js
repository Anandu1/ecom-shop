import React from 'react';
import './Form.css';
import TextField from "@material-ui/core/TextField";
import { Button, Typography } from '@material-ui/core';
import { useState,useHistory } from 'react';
import axios from 'axios';
import Filebase from 'react-file-base64';
import AddProductAppBar from '../Appbar/Appbar';
function Form() {
    
   const [products, setproducts] = useState({
    productName:'',
    productDescription:'',
    price:'',
    seoTitle:'',
    seoDescription:'',
    productImage:'',
    tags:'',
    variants:[]
   });
   const [Variant1, setVariant1] = useState(false);
   const history = useHistory();
 
 const handleNameInput=(event)=>{
     setproducts({...products,productName:event.target.value})
 }
 const handleDescription=(event)=>{
    setproducts({...products,productDescription:event.target.value})
}
const handlePrice=(event)=>{
    setproducts({...products,price:event.target.value})
}
const handleSeoTitle=(event)=>{
    setproducts({...products,seoTitle:event.target.value})
}
const handleSeoDescription=(event)=>{
    setproducts({...products,seoDescription:event.target.value})
}
// const handleImage=(event)=>{
//     setproducts({...products,productImage:event.target.files[0]})
// }
const handleTags=(event)=>{
    setproducts({...products,tags:event.target.value.split(',')})
    console.log(products.tags)
}
const createFirstVariant=()=>{
    setVariant1(true)
}
const removeFirstVariant=()=>{
    setVariant1(false)
}
const addFirstVariant=(event)=>{
    setproducts({...products,Variant1:event.target.value})
    console.log(products.tags)
}
const buttonSubmit =(event)=>{
     event.preventDefault();
     console.log('clicked');
    //  const productData={
    //     productName:products.productName,
    //     productDescription:products.productDescription,
    //     price:products.price,
    //     seoTitle:products.seoTitle,
    //     seoDescription: products.seoDescription
    //  }
     axios.post('http://localhost:5000/app/addProduct',products).then(
      
     )
}
    return (
        <div style={{padding:'10px'}}>
           <AddProductAppBar/>
         <TextField value={products.productName} onChange={handleNameInput}
          className="prodTextField" style={{padding:'10px'}}
          variant="outlined" label="Product Title" placeholder="Product Title" fullWidth/>   
         <TextField value={products.productDescription} onChange={handleDescription}
          className="prodDescTextField" variant="outlined" label="Product Description" fullWidth style={{padding:'10px'}}
          placeholder="Product Description" multiline rows="4"/> 
           <TextField value={products.price}  onChange={handlePrice}
          className="prodDescTextField" variant="outlined" label="Product Price" fullWidth style={{padding:'10px'}}
          placeholder="Product Price" multiline rows="4"/> 
          {/* <input value={products.productImage} onChange={handleImage}
           className="fileInput" accept="image/*"  id="raised-button-file" multiple  type="file"/>   */}
           <div>
               <Filebase 
                type="file" multiple={false} onDone={({base64})=>{
                   setproducts({...products,productImage:base64})
               }}/>
           </div>
          <Typography className="prodVariant">
              Product Variants
          </Typography>
          <Typography className="prodVariantLabel">
              This product has multiple options like different size or color
          </Typography>
          <Button onClick={createFirstVariant}
           style={{backgroundColor:'black' , color:"white" ,display:'flex' , alignContent:'flex-start', marginLeft:'5px'}}
           variant="contained" className="blackButton" color="primary">
              Add Variant
          </Button>
         {Variant1=== false  ? <div></div>
         :
         <div className="variantOne">
         <TextField 
         className="prodTextField" style={{padding:'10px'}}
         variant="outlined" label="Variant Title" placeholder="Variant Title" fullWidth/>   
          <TextField 
         className="prodDescTextField" variant="outlined" label="Variant Price" fullWidth style={{padding:'10px'}}
         placeholder="Variant Price" multiline rows="4"/> 
         {/* <input value={products.productImage} onChange={handleImage}
          className="fileInput" accept="image/*"  id="raised-button-file" multiple  type="file"/>   */}
          <div>
              <Filebase 
               type="file" multiple={false} onDone={({base64})=>{
                  setproducts({...products,productImage:base64})
              }}/>
          </div>
          <Button onClick={removeFirstVariant}
           style={{backgroundColor:'red' , color:"white" ,display:'flex' , alignContent:'flex-start', marginLeft:'5px'}}
           variant="contained" className="blackButton" color="primary">
              Remove Variant
          </Button>
         </div>
        } 
          <TextField value={products.tags}
        onChange={handleTags}
           style={{padding:'10px',marginTop:'10px'}}
           className="seoTextField" variant="outlined" label="Tags (coma separated)" placeholder="Tags" fullWidth/>  
          <Typography className="prodVariant">
              SEO Meta Details
          </Typography>
          <TextField value={products.seoTitle}  onChange={handleSeoTitle}
           style={{padding:'10px'}}
           className="seoTextField" variant="outlined" label="SEO Title" placeholder="SEO Title" fullWidth/>  
          <TextField value={products.seoDescription}  onChange={handleSeoDescription}
            style={{padding:'10px'}}
          className="seoDescTextField" variant="outlined" label="SEO Description" fullWidth
          placeholder="SEO Description" multiline rows="4"/> 
            <Button onClick={buttonSubmit}
           style={{backgroundColor:'black' , color:"white" ,display:'flex' , alignContent:'flex-start', marginLeft:'5px'}}
           variant="contained" className="blackButton" color="primary">
              Add Product
          </Button>
        </div>
    )
}

export default Form
