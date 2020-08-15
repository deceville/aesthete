import React from "react";
import { Link, withRouter } from "react-router-dom";
import Helmet from 'react-helmet';

function Navigation(props) {
    return (
        <div className="navigation">
            {/* Header */}
            <header id="wn__header" className="header__area header__absolute sticky__header" >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-6 col-lg-2">
                            <div className="logo">
                                <Link to="/">
                                    <img src="/images/logo/logo.png" alt="logo images" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-8 d-none d-lg-block">
                            <nav className="mainmenu__nav">
                                <ul className="meninmenu d-flex justify-content-start">
                                    <li className="drop with--one--item"><Link to="/">Home</Link></li>
                                    <li className="drop"><a href="#">Shop</a>
                                        <div className="megamenu mega03">
                                            <ul className="item item03">
                                                <li className="title">Shop Layout</li>
                                                <li><a href="shop-grid.html">Shop Grid</a></li>
                                                <li><a href="single-product.html">Single Product</a></li>
                                            </ul>
                                            <ul className="item item03">
                                                <li className="title">Shop Page</li>
                                                <li><a href="my-account.html">My Account</a></li>
                                                <li><a href="cart.html">Cart Page</a></li>
                                                <li><a href="checkout.html">Checkout Page</a></li>
                                                <li><a href="wishlist.html">Wishlist Page</a></li>
                                                <li><a href="error404.html">404 Page</a></li>
                                                <li><a href="faq.html">Faq Page</a></li>
                                            </ul>
                                            <ul className="item item03">
                                                <li className="title">Bargain Books</li>
                                                <li><a href="shop-grid.html">Bargain Bestsellers</a></li>
                                                <li><a href="shop-grid.html">Activity Kits</a></li>
                                                <li><a href="shop-grid.html">B&amp;N Classics</a></li>
                                                <li><a href="shop-grid.html">Books Under $5</a></li>
                                                <li><a href="shop-grid.html">Bargain Books</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="drop"><Link to="/books">Books</Link>
                                        <div className="megamenu mega03">
                                            <ul className="item item03">
                                                <li className="title">Categories</li>
                                                <li><a href="shop-grid.html">Biography </a></li>
                                                <li><a href="shop-grid.html">Business </a></li>
                                                <li><a href="shop-grid.html">Cookbooks </a></li>
                                                <li><a href="shop-grid.html">Health &amp; Fitness </a></li>
                                                <li><a href="shop-grid.html">History </a></li>
                                            </ul>
                                            <ul className="item item03">
                                                <li className="title">Customer Favourite</li>
                                                <li><a href="shop-grid.html">Mystery</a></li>
                                                <li><a href="shop-grid.html">Religion &amp; Inspiration</a></li>
                                                <li><a href="shop-grid.html">Romance</a></li>
                                                <li><a href="shop-grid.html">Fiction/Fantasy</a></li>
                                                <li><a href="shop-grid.html">Sleeveless</a></li>
                                            </ul>
                                            <ul className="item item03">
                                                <li className="title">Collections</li>
                                                <li><a href="shop-grid.html">Science </a></li>
                                                <li><a href="shop-grid.html">Fiction/Fantasy</a></li>
                                                <li><a href="shop-grid.html">Self-Improvemen</a></li>
                                                <li><a href="shop-grid.html">Home &amp; Garden</a></li>
                                                <li><a href="shop-grid.html">Humor Books</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="drop"><a href="#">Pages</a>
                                        <div className="megamenu dropdown">
                                            <ul className="item item01">
                                                <li><Link to="/about">About Page</Link></li>
                                                <li className="label2"><a href="portfolio.html">Portfolio</a>
                                                    <ul>
                                                        <li><a href="portfolio.html">Portfolio</a></li>
                                                        <li><a href="portfolio-details.html">Portfolio Details</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="my-account.html">My Account</a></li>
                                                <li><a href="cart.html">Cart Page</a></li>
                                                <li><a href="checkout.html">Checkout Page</a></li>
                                                <li><a href="wishlist.html">Wishlist Page</a></li>
                                                <li><a href="error404.html">404 Page</a></li>
                                                <li><a href="faq.html">Faq Page</a></li>
                                                <li><a href="team.html">Team Page</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="drop"><Link to="/blog">Blog</Link>
                                        <div className="megamenu dropdown">
                                            <ul className="item item01">
                                                <li><a href="blog.html">Blog Page</a></li>
                                                <li><a href="blog-details.html">Blog Details</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-md-6 col-sm-6 col-6 col-lg-2">
                            <ul className="header__sidebar__right d-flex justify-content-end align-items-center">
                                <li className="shop_search"><a className="search__active" href="#" /></li>
                                <li className="wishlist"><a href="#" /></li>
                                <li className="shopcart"><a className="cartbox_active" href="#"><span className="product_qun">3</span></a>
                                    {/* Start Shopping Cart */}
                                    <div className="block-minicart minicart__active">
                                        <div className="minicart-content-wrapper">
                                            <div className="micart__close">
                                                <span>close</span>
                                            </div>
                                            <div className="items-total d-flex justify-content-between">
                                                <span>3 items</span>
                                                <span>Cart Subtotal</span>
                                            </div>
                                            <div className="total_amount text-right">
                                                <span>$66.00</span>
                                            </div>
                                            <div className="mini_action checkout">
                                                <a className="checkout__btn" href="cart.html">Go to Checkout</a>
                                            </div>
                                            <div className="single__items">
                                                <div className="miniproduct">
                                                    <div className="item01 d-flex">
                                                        <div className="thumb">
                                                            <a href="product-details.html"><img src="/images/product/sm-img/1.jpg" alt="product images" /></a>
                                                        </div>
                                                        <div className="content">
                                                            <h6><a href="product-details.html">Voyage Yoga Bag</a></h6>
                                                            <span className="prize">$30.00</span>
                                                            <div className="product_prize d-flex justify-content-between">
                                                                <span className="qun">Qty: 01</span>
                                                                <ul className="d-flex justify-content-end">
                                                                    <li><a href="#"><i className="zmdi zmdi-settings" /></a></li>
                                                                    <li><a href="#"><i className="zmdi zmdi-delete" /></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item01 d-flex mt--20">
                                                        <div className="thumb">
                                                            <a href="product-details.html"><img src="/images/product/sm-img/3.jpg" alt="product images" /></a>
                                                        </div>
                                                        <div className="content">
                                                            <h6><a href="product-details.html">Impulse Duffle</a></h6>
                                                            <span className="prize">$40.00</span>
                                                            <div className="product_prize d-flex justify-content-between">
                                                                <span className="qun">Qty: 03</span>
                                                                <ul className="d-flex justify-content-end">
                                                                    <li><a href="#"><i className="zmdi zmdi-settings" /></a></li>
                                                                    <li><a href="#"><i className="zmdi zmdi-delete" /></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item01 d-flex mt--20">
                                                        <div className="thumb">
                                                            <a href="product-details.html"><img src="/images/product/sm-img/2.jpg" alt="product images" /></a>
                                                        </div>
                                                        <div className="content">
                                                            <h6><a href="product-details.html">Compete Track Tote</a></h6>
                                                            <span className="prize">$40.00</span>
                                                            <div className="product_prize d-flex justify-content-between">
                                                                <span className="qun">Qty: 03</span>
                                                                <ul className="d-flex justify-content-end">
                                                                    <li><a href="#"><i className="zmdi zmdi-settings" /></a></li>
                                                                    <li><a href="#"><i className="zmdi zmdi-delete" /></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mini_action cart">
                                                <a className="cart__btn" href="cart.html">View and edit cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Shopping Cart */}
                                </li>
                                <li className="setting__bar__icon"><a className="setting__active" href="#" />
                                    <div className="searchbar__content setting__block">
                                        <div className="content-inner">
                                            <div className="switcher-currency">
                                                <strong className="label switcher-label">
                                                    <span>Currency</span>
                                                </strong>
                                                <div className="switcher-options">
                                                    <div className="switcher-currency-trigger">
                                                        <span className="currency-trigger">USD - US Dollar</span>
                                                        <ul className="switcher-dropdown">
                                                            <li>GBP - British Pound Sterling</li>
                                                            <li>EUR - Euro</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="switcher-currency">
                                                <strong className="label switcher-label">
                                                    <span>Language</span>
                                                </strong>
                                                <div className="switcher-options">
                                                    <div className="switcher-currency-trigger">
                                                        <span className="currency-trigger">English01</span>
                                                        <ul className="switcher-dropdown">
                                                            <li>English02</li>
                                                            <li>English03</li>
                                                            <li>English04</li>
                                                            <li>English05</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="switcher-currency">
                                                <strong className="label switcher-label">
                                                    <span>Select Store</span>
                                                </strong>
                                                <div className="switcher-options">
                                                    <div className="switcher-currency-trigger">
                                                        <span className="currency-trigger">Fashion Store</span>
                                                        <ul className="switcher-dropdown">
                                                            <li>Furniture</li>
                                                            <li>Shoes</li>
                                                            <li>Speaker Store</li>
                                                            <li>Furniture</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="switcher-currency">
                                                <strong className="label switcher-label">
                                                    <span>My Account</span>
                                                </strong>
                                                <div className="switcher-options">
                                                    <div className="switcher-currency-trigger">
                                                        <div className="setting__menu">
                                                            <span><a href="#">Compare Product</a></span>
                                                            <span><a href="#">My Account</a></span>
                                                            <span><a href="#">My Wishlist</a></span>
                                                            <span><a href="#">Sign In</a></span>
                                                            <span><a href="#">Create An Account</a></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Start Mobile Menu */}
                    <div className="row d-none">
                        <div className="col-lg-12 d-none">
                            <nav className="mobilemenu__nav">
                                <ul className="meninmenu">
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="#">Pages</a>
                                        <ul>
                                            <li><a href="about.html">About Page</a></li>
                                            <li><a href="portfolio.html">Portfolio</a>
                                                <ul>
                                                    <li><a href="portfolio.html">Portfolio</a></li>
                                                    <li><a href="portfolio-details.html">Portfolio Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="my-account.html">My Account</a></li>
                                            <li><a href="cart.html">Cart Page</a></li>
                                            <li><a href="checkout.html">Checkout Page</a></li>
                                            <li><a href="wishlist.html">Wishlist Page</a></li>
                                            <li><a href="error404.html">404 Page</a></li>
                                            <li><a href="faq.html">Faq Page</a></li>
                                            <li><a href="team.html">Team Page</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="shop-grid.html">Shop</a>
                                        <ul>
                                            <li><a href="shop-grid.html">Shop Grid</a></li>
                                            <li><a href="single-product.html">Single Product</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="blog.html">Blog</a>
                                        <ul>
                                            <li><a href="blog.html">Blog Page</a></li>
                                            <li><a href="blog-details.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    {/* End Mobile Menu */}
                    <div className="mobile-menu d-block d-lg-none">
                    </div>
                    {/* Mobile Menu */}
                </div>
            </header >
            {/* //Header */}
            {/* Start Search Popup */}
            <div className="brown--color box-search-content search_active block-bg close__top">
                <form id="search_mini_form" className="minisearch" action="#">
                    <div className="field__search">
                        <input type="text" placeholder="Search entire store here..." />
                        <div className="action">
                            <a href="#"><i className="zmdi zmdi-search" /></a>
                        </div>
                    </div>
                </form>
                <div className="close__wrap">
                    <span>close</span>
                </div>
            </div>
            {/* End Search Popup */}
        </div>
    );
}
export default withRouter(Navigation);