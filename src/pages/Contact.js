import React from "react";

const Contact = () => {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7204.613491816221!2d85.31935390831254!3d27.693795365127425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19981ce58e3f%3A0x5424be83f7c02bd8!2sNepal%20E-Commerce%20Business%20PVT%20LTD!5e0!3m2!1sen!2snp!4v1670423463303!5m2!1sen!2snp"
        width="100%"
        height="500px"
        style={{border:0}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

<div className="container my-5 mt-5 mx-5 px-5">
    <h2 className="title is-2 is-capitalized has-text-centered">Contact Us</h2>
    <form action="https://formspree.io/f/meqdypoq" method="post">
        <div className="field">
            <label for="name" className="label is-size-4 has-text-weight-light"></label>
            <div className="control has-icons-left">
                <input type="text" name="name" id="name" className="input" placeholder="Name" autoFocus/>
                    <span className="icon is-left">
                        <i className="fa fa-user"></i>
                    </span>
            </div>
        </div>
        <div className="field">
            <label for="email" className="label is-size-4 has-text-weight-light"></label>
            <div className="control has-icons-left">
                <input type="email" name="email" id="email" className="input" placeholder="Email"/>
                    <span className="icon is-left">
                        <i className="fa fa-envelope"></i>
                    </span>
            </div>
        </div>
        <div className="field">
            <label for="message" className="label is-size-4 has-text-weight-light"></label>
            <textarea name="message" id="message" rows="5" className="textarea is-medium" placeholder="Message"></textarea>
        </div>
        <button type="submit" className="button is-success is-size-5 is-fullwidth">Send Message</button>
    </form>
</div>
    </>
  );
};

export default Contact;
