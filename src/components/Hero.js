import { Link } from 'react-router-dom';
import productImg from '../assets/imgs/balm.jpeg';
import productImg2 from '../assets/imgs/balm2.jpeg';


function Hero() {
    return (
      <>
      {/* Hero Section */}

        <section className="hero-section">
        <div className="hero-content text-center">
          <h1>Essência da natureza</h1>
        <h3>com toque artesanal</h3>

        {/* Buttons */}
        <div className="mt-4">
          <Link to="/product" className="btn btn-outline-success rounded-pill">Produto</Link>
          <a href="#beneficios" className="btn btn-outline-success rounded-pill">Benefícios</a>
        </div>
        </div>
      </section>

     {/* Product Preview Section */}
      <section className="product-preview text-center py-4">
        <div className="d-flex justify-content-center gap-5 flex-wrap">
          {/* Product 1 */}
          <div>
            <Link to="/product" className="text-decoration-none text-dark">
              <img
                src={productImg}
                alt="Produto 1"
                className="img-fluid"
                style={{ maxWidth: '400px' }}
              />
              <h5 className="mt-2">Cannabalm 60g</h5>
            </Link>
          </div>

          {/* Product 2 */}
          <div>
            <Link to="/product" className="text-decoration-none text-dark">
              <img
                src={productImg2}
                alt="Produto 2"
                className="img-fluid"
                style={{ maxWidth: '400px' }}
              />
              <h5 className="mt-2">Cannabalm 30g</h5>
            </Link>
          </div>
        </div>
      </section>
    </>
    );
  }
  
  export default Hero;
  