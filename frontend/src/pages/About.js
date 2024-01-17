import React from "react";
import about from "../assets/images/about.png";
import icon1 from "../assets/images/icon01.png";
import icon2 from "../assets/images/icon02.png";
import icon3 from "../assets/images/icon03.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {
  return (
    <>
      <Header />
      <section className="mt-3">
        <div className="container">
          <h2 className="text-center text-capitalize">
            Providing the best Medical services with Dedication.
          </h2>
        </div>
        <div className="container mt-3">
          <div className="row">
            <div className="col-sm-4">
              <div className="card border-0">
                <img
                  src={icon1}
                  alt="doctor"
                  title="doctor"
                  width={150}
                  height={150}
                  className="card-img-fluid"
                />
                <div className="card-body">
                  <Link
                    to="/doctors"
                    className="fa-solid fa-arrow-right center"
                  ></Link>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card  border-0">
                <img
                  src={icon2}
                  className="card-img-fluid"
                  alt="map"
                  title="map"
                  width={150}
                  height={150}
                />
                <div className="card-body">
                  <Link
                    to="/location"
                    className="fa-solid fa-arrow-right center"
                  ></Link>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card border-0">
                <img
                  src={icon3}
                  className="card-img-fluid"
                  alt="book appointment"
                  title="book appointment"
                  width={150}
                  height={150}
                />
                <div className="card-body">
                  <Link
                    to="/appointments"
                    className="fa-solid fa-arrow-right center"
                  ></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-5">
          {/*---------------------------about image------------------------ */}
          <div className="row">
            <div className="col">
              <img
                src={about}
                alt="doctor"
                title="doctor"
                width={300}
                height={300}
              />
            </div>
            <div className="col mt-2">
              {/*-----------------------------about content------------------------------- */}
              <h2>Proud to be one of the best doctor</h2>
              <p>
                For 30+ years of experience and patients has recognized as one
                of the best public hospitals in the Nation.
              </p>
              <p>
                Our best is something we strive for each day, carrying for our
                patients not looking back at what we accomplished but towards
                what we can do tomorrow providing the best.
              </p>
              <Link
                to="/doctors"
                className="btn btn-primary text-white mt-2 about-learn-btn"
              >
                our doctors
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
