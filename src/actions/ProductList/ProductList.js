import React from 'react'

function ProductList(productItems) {
    return (
        <div className="products">
            {
                productItems.map((productItem)=>{
                    <div className="card">
                        <div>
                        <img className="image"
                         src={productItem.image} alt="image" />
                        </div>
                        <div>
                            <h3 className="productName">{productItem.name}</h3>
                        </div>
                        <div className="product-price">
                            {
                                productItem.price
                            }
                        </div>
                        <div className="product-add-button">
                            Add to Cart
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default ProductList
