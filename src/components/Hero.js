import { Link } from 'react-router-dom';
import productImg from '../assets/imgs/balm.jpeg';

function Hero() {
    return (
      <>
      {/* Hero Section */}

        <section className="hero-section">
        <div className="hero-content">
          <h1>Essencia da natureza e o cuidado artesanal para trazer bem-estar ao seu dia a dia</h1>
        </div>
      </section>

      {/* Product Preview Section */}
      <section className="product-preview text-center py-4">
        <Link to="/product" className="text-decoration-none text-dark">
          <img src={productImg} alt="Produto Cannabalm" className="img-fluid mb-2" style={{ maxWidth: '400px' }} />
          <h5>Cannabalm - Bálsamo Natural</h5>
        </Link>
      </section>
    </>
    );
  }
  
  export default Hero;
  