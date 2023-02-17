import React, { useState, useEffect } from 'react'
import { FixedSizeList } from 'react-window'
import { v4 as uuidv4 } from 'uuid'

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.image} alt="Product" />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
    </div>
  )
}

const ProductList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // Fetch products from API and set to state
  }, [])

  const Row = ({ index, style }) => {
    return <Product product={products[index]} style={style} />
  }

  return (
    <div className="product-list">
      <h1>Our Products</h1>
      <FixedSizeList
        height={600}
        itemCount={products.length}
        itemSize={200}
        width={600}
      >
        {Row}
      </FixedSizeList>
    </div>
  )
}

export default ProductList
