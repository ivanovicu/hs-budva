import { useCart } from '../context/CartContext';
import './LandingPage.css';

const LandingPage = () => {
  const { products, addToCart } = useCart();

  return (
    <div className="landing-page">
      <header className="hero">
        <h1>Welcome to Homemade Sweets</h1>
        <p>Traditional recipes made with love in Budva, Montenegro</p>
      </header>

      <section className="intro">
        <h2>Authentic Montenegrin Desserts</h2>
        <p>
          Experience the taste of tradition with our handcrafted sweets, made
          fresh daily using recipes passed down through generations.
        </p>
      </section>

      <section className="products">
        <h2>Our Sweets</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">${product.price.toFixed(2)}</p>
              <button
                className="add-to-cart-btn"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="about-cookies" className="about-cookies">
        <h2>About Our Cookies</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Our sweets are crafted using traditional Balkan recipes that have
              been perfected over generations. Each treat is made by hand with
              the finest local ingredients, ensuring authentic flavors and
              exceptional quality.
            </p>
            <p>
              From the creamy layers of Ledena Kocka to the rich chocolate of
              Ruske Kape, every sweet tells a story of our heritage. We take
              pride in preserving these time-honored recipes while bringing joy
              to your table.
            </p>
            <p>
              Whether you're celebrating a special occasion or simply treating
              yourself, our homemade sweets are made with love and care, just
              like grandma used to make.
            </p>
          </div>
          <div className="about-features">
            <div className="feature">
              <h3>Fresh Ingredients</h3>
              <p>We use only the finest local ingredients to create our delicious treats.</p>
            </div>
            <div className="feature">
              <h3>Traditional Recipes</h3>
              <p>Authentic flavors from time-honored family recipes.</p>
            </div>
            <div className="feature">
              <h3>Made with Love</h3>
              <p>Every sweet is handcrafted with care and attention to detail.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Budva, Montenegro</p>
        <p>&copy; 2026 Homemade Sweets - Budva. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
