import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(""); // State for success message
  const navigate = useNavigate();

  // Fetch products from Fake Store API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Add to Cart handler
  const addToCart = (product) => {
    const updatedCart = cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );

    // If the product is not already in the cart, add it
    if (!updatedCart.some((item) => item.id === product.id)) {
      updatedCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
    setMessage(`${product.title} has been added to your cart.`);

    // Clear the message after 3 seconds
    setTimeout(() => setMessage(""), 3000);
  };

  // Navigate to Cart page
  const goToCart = () => {
    navigate("/cart");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="inspired_product_area section_gap_bottom_custom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="main_title">
              <h2>
                <span>Inspired Products</span>
              </h2>
              <p>Bring called seed first of third give itself now ment</p>
            </div>
          </div>
        </div>

        {/* Success Message */}
        {message && (
          <div className="alert alert-success text-center" role="alert">
            {message}
          </div>
        )}

        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-6">
              <div className="single-product">
                <div className="product-img">
                  <img
                    className="img-fluid w-100"
                    src={product.image}
                    alt={product.title}
                  />
                  <div className="p_icon">
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="product-btm">
                  <span className="d-block">
                    <h4>{product.title}</h4>
                  </span>
                  <div className="mt-3">
                    <span className="mr-4">${product.price}</span>
                    <del>${(product.price * 1.4).toFixed(2)}</del>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Button */}
        <div className="text-center mt-5">
          <button onClick={goToCart} className="btn btn-success">
            Go to Cart ({cart.reduce((count, item) => count + item.quantity, 0)})
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
