import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      {/*================Header Menu Area =================*/}
      <header className="header_area">
        <div className="top_menu">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="float-left">
                  <p>Phone: +01 256 25 235</p>
                  <p>email: info@eiser.com</p>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="float-right">
                  <ul className="right_side">
                    <li>
                      <Link to="cart.html">
                        gift card
                      </Link>
                    </li>
                    <li>
                      <Link to="tracking.html">
                        track order
                      </Link>
                    </li>
                    <li>
                      <Link to="contact.html">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main_menu">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light w-100">
              <Link className="navbar-brand logo_h" to="index.html">
                <img src="img/logo1.png" alt="Logo" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div className="collapse navbar-collapse offset w-100" id="navbarSupportedContent">
                <div className="row w-100 mr-0">
                  <div className="col-lg-7 pr-0">
                    <ul className="nav navbar-nav center_nav pull-right">
                      <li className="nav-item active">
                        <Link className="nav-link" to="index.html">Home</Link>
                      </li>
                      <li className="nav-item submenu dropdown">
                        <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
                          Shop
                        </Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link className="nav-link" to="category.html">Shop Category</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="single-product.html">Product Details</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="checkout.html">Product Checkout</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="cart.html">Shopping Cart</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item submenu dropdown">
                        <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
                          Blog
                        </Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link className="nav-link" to="blog.html">Blog</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="single-blog.html">Blog Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item submenu dropdown">
                        <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
                          Pages
                        </Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link className="nav-link" to="tracking.html">Tracking</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="elements.html">Elements</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="contact.html">Contact</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-5 pr-0">
                    <ul className="nav navbar-nav navbar-right right_nav pull-right">
                      <li className="nav-item">
                        <Link to="#" className="icons">
                          <i className="ti-search" aria-hidden="true"></i>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/cart" className="icons">
                          <i className="ti-shopping-cart"></i>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="icons">
                          <i className="ti-user" aria-hidden="true"></i>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="icons">
                          <i className="ti-heart" aria-hidden="true"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
      {/*================Header Menu Area =================*/}

      {/*================Home Banner Area =================*/}
      <section className="home_banner_area mb-40">
        <div className="banner_inner d-flex align-items-center">
          <div className="container">
            <div className="banner_content row">
              <div className="col-lg-12">
                <p className="sub text-uppercase">men Collection</p>
                <h3><span>Show</span> Your <br />Personal <span>Style</span></h3>
                <h4>Fowl saw dry which a above together place.</h4>
                <a className="main_btn mt-40" href="#">View Collection</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================End Home Banner Area =================*/}

      {/* Start feature Area */}
      <section className="feature-area section_gap_bottom_custom">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-feature">
                <a href="#" className="title">
                  <i className="flaticon-money"></i>
                  <h3>Money back guarantee</h3>
                </a>
                <p>Shall open divide a one</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-feature">
                <a href="#" className="title">
                  <i className="flaticon-truck"></i>
                  <h3>Free Delivery</h3>
                </a>
                <p>Shall open divide a one</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-feature">
                <a href="#" className="title">
                  <i className="flaticon-support"></i>
                  <h3>Always support</h3>
                </a>
                <p>Shall open divide a one</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-feature">
                <a href="#" className="title">
                  <i className="flaticon-blockchain"></i>
                  <h3>Secure payment</h3>
                </a>
                <p>Shall open divide a one</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End feature Area */}
    </>
  );
}

export default Header;
