import ProductCard from "../ProductCard/ProductCard"
import './ProductList.css'


function ProductList() {
    return (
      <>
      <section>
        <header>
          <h3>Produtos em alta</h3>
        </header>
        <ProductCard 
          image="./images/tenis.png"
          name="Tênis"
          category="K-Swiss"
          oldPrice="200"
          price="100"
        />

        <ProductCard />

        <ProductCard />

        <ProductCard />
      </section> 
      </>
    )
  }
  
export default ProductList