import './App.css'
import React from 'react'
import HomePage from './pages/HomePage/HomePage'

function App() {
  return (
    <>
    <div>
      <HomePage />
    </div> 
    </>
  )
}

export default App


/*
import './ProductCard.css'

const ProductCard = ({
    image,
    name,
    price,
    category,
    discount
}) => {
    const discountValue = price - (price * discount / 100)

    return (
        <div className='product-card'>
            {
                discount
                    ? <span>{discount}</span>
                    : null
            }
            <img src={image} />
            <h4>{name}</h4>
            <p className={discount ? 'old-price' : ''}>R$ {price}</p>
            {discount ? <p>R$ {discountValue}</p> : null}
            <p>{category}</p>
        </div>
    )
}

export default ProductCard
*/