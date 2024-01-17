import React from "react";
import { Link } from "react-router-dom";
import icon1 from "../assets/images/icon01.png";
import icon2 from "../assets/images/icon02.png";
import icon3 from "../assets/images/icon03.png";
import ServiceList from "../components/services/ServiceList";
import DoctorsList from "../components/doctors/DoctorsList";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <Header />
      {/*-------------------------------------home----------------------------------------*/}
      <section className="home-header-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-12">
              <h1 className="header-home-text mt-5 text-white">
                We care for you and <br /> your health.
              </h1>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-sm-6 col-12">
              <p>
                <b>
                  Our mission is to contribute to having a healthy society
                  through our high-level medical care services to people of all
                  ages.
                </b>
              </p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-sm-12 col-12">
              <Link to="/appointments" className="btn btn-primary home-btn">
                Request an Appointment
              </Link>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-sm-3 col-12">
              <h2 className="line-yellow text-capitalize">30+</h2>
              <strong>Years of Experience</strong>
            </div>
            <div className="col-sm-2 col-12">
              <h2 className="line-purple">15+</h2>
              <strong>Clinic</strong>
            </div>
            <div className="col-sm-2 col-12">
              <h2 className="line-green text-capitalize">100%</h2>
              <strong>Patient Satisfaction</strong>
            </div>
          </div>
        </div>
      </section>
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

      {/*---------------------------services-------------------------------- */}
      <section>
        <div className="container mt-5">
          <div className="">
            <h2 className="text-center">
              Our Medical Services & Other Facilities available for &nbsp;
              <strong>24*7</strong>
            </h2>
            <p className="text-center">
              World-className care for everyone ,Our health system offers expert
              health care.
            </p>
          </div>
          <ServiceList />
        </div>
      </section>
      {/*-----------------------Doctors------------------------------------ */}
      <section className="mt-5">
        <h2 className="text-center">Our Doctors</h2>
        <DoctorsList />
      </section>
      <Footer />
    </>
  );
};

export default Home;
