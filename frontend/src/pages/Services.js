import React from "react";
import { services } from "../assets/data/services";
import ServiceCard from "../components/services/ServiceCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <>
      <Header />
      <section>
        <h2 className="text-center">
          Our Medical Services and Other Facilities are available for 24*7
        </h2>
        <div className="container mt-5">
          <div className="row">
            {services.map((item, index) => (
              <ServiceCard item={item} index={index} key={index} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;
