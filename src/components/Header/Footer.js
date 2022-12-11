import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { RiPaypalFill, RiVisaFill } from "react-icons/ri";
import { FaCcMastercard, FaCcPaypal, FaStore } from "react-icons/fa";
 
const Footer = () => {
  return (
    <>
      <section className="section ">
        <div className="columns is-multiline">
          <div className="column  px-6 py-20 has-background-white">
            <div className="has-mw-xs mx-auto">
              <a className="mb-12 is-inline-block" href="#">
                <FaStore className="fa-2x"/>
              </a>
              <div className="mb-12 has-text-weight-semibold">
                <p>Our Store</p>
                <p>Kathmandu, Baneshwor</p>
                <p>Nepal</p>
              </div>
              <div className="mb-16 mb-40-tablet is-flex">
                <a className="mr-2 is-medium  icon has-background-link has-text-white card" href="#">
                  <BsFacebook className="fa-2x p-1"/>
                </a>
                <a className="mr-2 is-medium  icon has-background-danger has-text-white  card" href="#">
                  <BsInstagram className="fa-2x p-1"/>
                </a>
                <a className="mr-2 is-medium  icon has-background-info has-text-white card" href="#">
                  <BsTwitter className="fa-2x p-1"/>
                </a>
              </div>
              <div className="is-mobile mt-6 is-flex  ">
                <div className=" is-large icon mr-2">
                 <RiVisaFill className="fa-3x p-1 "/>
                </div>
                <div className="is-large icon  mr-2">
                 <FaCcPaypal className="fa-3x p-1"/>
                </div>
                <div className="is-large icon  mr-2">
                <FaCcMastercard className="fa-3x p-1"/>
                </div>
              </div>
            </div>
          </div>
          <div
            className="column is-9-desktop  px-6 py-20 "
            style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.1)" }}
          >
            <ul className="mb-16 columns is-mobile is-multiline">
              <li className="column is-narrow mb-3">
                <a
                  className="button py-0 px-5 is-white has-text-centered is-rounded"
                  style={{ height: "40px" }}
                  href="#"
                >
                  Category
                </a>
              </li>
              <li className="column is-narrow mb-3">
                <a
                  className="button py-0 px-5 is-white has-text-centered is-rounded"
                  style={{ height: "40px" }}
                  href="#"
                >
                  Collection
                </a>
              </li>
              <li className="column is-narrow mb-3">
                <a
                  className="button py-0 px-5 is-white has-text-centered is-rounded"
                  style={{ height: "40px" }}
                  href="#"
                >
                  Story
                </a>
              </li>
              <li className="column is-narrow mb-3">
                <a
                  className="button py-0 px-5 is-white has-text-centered is-rounded"
                  style={{ height: "40px" }}
                  href="#"
                >
                  Brand
                </a>
              </li>
              <li className="column is-narrow mb-3">
                <a
                  className="button py-0 px-5 is-white has-text-centered is-rounded"
                  style={{ height: "40px" }}
                  href="#"
                >
                  Partners
                </a>
              </li>
              <li className="column is-narrow mb-3">
                <a
                  className="button py-0 px-5 is-white has-text-centered is-rounded"
                  style={{ height: "40px" }}
                  href="#"
                >
                  Videos
                </a>
              </li>
            </ul>
            <div className="pb-20 columns is-multiline">
              <div className="column is-4-desktop is-6-tablet mb-10 mb-0-desktop">
                <h6 className="title mb-8 is-size-5">Information</h6>
                <ul className="mb-0">
                  <li className="mb-6">
                    <a className="has-text-dark is-size-6" href="#">
                      Newsroom
                    </a>
                  </li>
                  <li className="mb-6">
                    <a className="has-text-dark is-size-6" href="#">
                      Story
                    </a>
                  </li>
                  <li className="mb-6">
                    <a className="has-text-dark is-size-6" href="#">
                      Yofte Careers
                    </a>
                  </li>
                  <li className="mb-6">
                    <a className="has-text-dark is-size-6" href="#">
                      Investor Relations
                    </a>
                  </li>
                  <li className="mb-6">
                    <a className="has-text-dark is-size-6" href="#">
                      Reward program
                    </a>
                  </li>
                  <li className="mb-6">
                    <a className="has-text-dark is-size-6" href="#">
                      Delivery information
                    </a>
                  </li>
                  <li>
                    <a className="has-text-dark is-size-6" href="#">
                      Paying by invoice
                    </a>
                  </li>
                </ul>
              </div>
              <div className="column is-4-desktop is-6-tablet mb-10 mb-0-desktop">
                <h6 className="title mb-8 is-size-5">Customer Service</h6>
                <ul className="mb-0">
                  <li className="mb-6">
                    <a className="has-text-dark is-size-6" href="#">
                      Return an order
                    </a>
                  </li>
                  <li className="mb-6">
                    <a className="has-text-dark is-size-6" href="#">
                      Search Terms
                    </a>
                  </li>
                  <li className="mb-6">
                    <a className="has-text-dark is-size-6" href="#">
                      Advanced Search
                    </a>
                  </li>
                  <li className="mb-6">
                    <a className="has-text-dark is-size-6" href="#">
                      Orders and Returns
                    </a>
                  </li>
                  <li className="mb-6">
                    <a className="has-text-dark is-size-6" href="#">
                      FAQs
                    </a>
                  </li>
                  <li className="mb-6">
                    <a className="has-text-dark is-size-6" href="#">
                      Store Location
                    </a>
                  </li>
                  <li>
                    <Link to="/contact" className="has-text-dark is-size-6">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="column ">
                <h6 className="title mb-8 is-size-5">Contact Us</h6>
                <ul>
                  <li className="mb-6">
                    <p className="mb-2">Mobile</p>
                    <a className="has-text-info is-size-6" href="#">
                      +977 9828772068
                    </a>
                  </li>
                  <li className="mb-6">
                    <p className="mb-2">Email</p>
                    <a className="has-text-info is-size-6" href="#">
                      jungsagarthapa@gmail.com
                    </a>
                  </li>
                  <li>
                    <p className="mb-2">Live Chat</p>
                    <a className="has-text-info is-size-6" href="#">
                      SagarStore
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pb-32 pb-0-desktop is-relative">
              <p className="has-text-weight-semibold">
                &copy; Copyright 2023 @Sagar
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
