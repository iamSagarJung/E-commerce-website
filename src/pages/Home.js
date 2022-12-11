import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineLocalShipping, MdSupport } from "react-icons/md";
import { RiRefund2Fill } from "react-icons/ri";
import { Data } from "../data/TestimonialData";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import Footer from "../components/Header/Footer";

const Home = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index >= Data.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index <= 0) {
      setIndex(Data.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

useEffect(()=>{
  let slider=setInterval(()=>{
    nextSlide()
  },5000)
  return ()=>{
  clearInterval(slider)
  }
},[index])

  return (
    <>
      <div className="hero is-fullheight px-6 has-background-grey-light ">
        <div className="columns is-vcentered">
          <div className="column ml-6 hax-text-weight-bold">
            <h1 className=" has-text-danger has-text-weight-bold is-size-2 ">
              Sale 20% Off
            </h1>
            <h1 className="is-size-3 has-text-weight-bold">On Everything</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              eveniet in praesentium aspernatur ea quas, quae voluptates
              accusamus cumque a dignissimos modi libero dicta maiores at, eaque
              enim aut distinctio.
            </p>
            <NavLink to="/shop">
              <button className="button is-danger mt-5 has-text-weight-semibold ">
                Shop Now
              </button>
            </NavLink>
          </div>
          <figure className="image column px-6 py-6">
            <img src="img/home2.jpg" />
          </figure>
        </div>
      </div>

      {/* -----------------Our facilities-------------------- */}
      <div className=" px-6 py-6  mx-6 is-flex is-justify-content-space-around  has-text-centered is-size-1 is-flex-wrap-wrap">
        <span className="card p-4 m-4 has-text-white has-background-success is-hovered">
          <MdOutlineLocalShipping />
          <p className=" is-size-6 ">Free Shipping</p>
        </span>

        <span className="card p-4 m-4 has-text-white has-background-danger">
          <RiRefund2Fill />
          <p className="is-size-6 ">100% refund</p>
        </span>

        <span className="card p-4 m-4 has-text-white has-background-warning">
          <MdSupport />
          <p className="is-size-6">24/7 support</p>
        </span>
      </div>

      {/* ---------Testomonials--------- */}


      <section className="section">
          <h2 className="title   has-text-centered">
            <span className="has-text-danger-dark">/</span>Testomonials
          </h2>
        <div className="section-center  mx-6  has-text-centered">
          {Data.map((person, personIndex) => {
            const { image, Name, id, desc, position } = person;
            let activeClass = "nextSlide";
            if (personIndex === index) {
              activeClass = "activeSlide";
            }
            if(personIndex===index-1 || index===0 && personIndex===Data.length-1){
              activeClass="lastSlide"
            }
           

            return (
              <article key={id} className={` ${activeClass}`}>
               <figure className="image is-128x128 is-inline-block mb-3 ">
                <img className="is-rounded" src={image} alt={Name}/>
              </figure>
                <h4 className="is-size-5 has-text-weight-bold has-text-danger-dark">{Name}</h4>
                <p className="has-text-grey is-family-monospace mb-5">{position}</p>
                <p className="has-text-grey px-6">{desc}</p>
                <FaQuoteRight className="fa-2x mt-5 has-text-danger-dark"></FaQuoteRight>
              </article>
            );
          })}
          <span className="prev icon card " onClick={prevSlide}>
            <FiChevronLeft className="fa-2x" />
          </span>
          <span className="next icon card" onClick={nextSlide}>
            <FiChevronRight className="fa-2x" />
          </span>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Home;
