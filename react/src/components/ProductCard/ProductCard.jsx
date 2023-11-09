import './ProductCard.css'

function ProductCard({image, name, category, oldPrice, price}) {
    return (
      <>
      <div className='featured-products'>
        <div className='container'>
            <div className='product'>
                <img className='img' src={image} />
                <h4 className='category'>{name}</h4>
                <p className='product-description'>{category}</p>
                <p className='old-price'>R$ {oldPrice}</p>
                <p className='price'>R$ {price}</p>
            </div>
        </div>
      </div> 
      </>
    )
  }
  
export default ProductCard