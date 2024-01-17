import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Location = () => {
  return (
    <>
      <Header />
      <section className="mt-5">
        <div className="d-flex justify-content-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.5665411236396!2d78.14522997421129!3d9.886685149767375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c56b47b941d5%3A0x5117fc8ffda0969d!2sVelammal%20Hospital%20and%20Medical%20College!5e0!3m2!1sen!2sin!4v1704700392489!5m2!1sen!2sin"
            width="600"
            height="350"
            loading="lazy"
            title="hospital map"
          ></iframe>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Location;
