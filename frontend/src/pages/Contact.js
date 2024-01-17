import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [errors, setErrors] = useState();
  const validation = (formData) => {
    let error = {};
    const emailRegex = /^[^\s@]+@[^\s@]+[^\s@]$/;
    if (formData.email === "") {
      error.email = "please enter a email address";
    } else if (!emailRegex.test(formData.email)) {
      error.email = "please enter a valid email address";
    }
    if (formData.subject === "") {
      error.subject = "please enter your subject";
    }
    if (formData.message === "") {
      error.message = "please enter your message";
    }
    return error;
  };
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validation(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const authToken = localStorage.getItem("token");
        const res = await axios.post(
          "http://localhost:7000/api/contact/postContact",
          formData,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        if (res.data.success) {
          toast.success(res.data.message);
          setFormData({
            email: "",
            subject: "",
            message: "",
          });
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast("Something went wrong in contact");
      }
    }
  };

  return (
    <>
      <Header />
      <section className="mt-3">
        <h3 className="text-center">Contact Us</h3>
        <p className="text-center mt-2">
          Got a technical issue? Want to send suggestions about our services?
          Let us know.
        </p>
        <div className="container">
          <div className="p-3 p-md-5 mx-auto" style={{ maxWidth: "500px" }}>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  id="email"
                  placeholder="example@gmail.com"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <span className=" text-danger">{errors?.email}</span>
              <div className="mb-3">
                <label htmlFor="message" className="form-label ">
                  Subject:
                </label>
                <textarea
                  id="subject"
                  name="subject"
                  onChange={handleChange}
                  value={formData.subject}
                  placeholder="let us know how we can help you"
                  className="form-control"
                />
              </div>
              <span className=" text-danger">{errors?.subject}</span>

              <div className="mb-3">
                <label htmlFor="message">Your Message:</label>
                <textarea
                  rows="6"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="leave a comment..."
                  className="form-control "
                />
              </div>
              <span className=" text-danger">{errors?.message}</span>
              <div className="mb-3">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
