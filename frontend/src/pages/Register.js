import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { useDispatch } from "react-redux";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const validation = (formData) => {
    let error = {};
    const emailPattern = /^[^\s@]+@[^\s@]+[^\s@]{2,}$/;
    const passwordPattern =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,10}$/;

    if (formData.name.trim() === "") {
      error.name = "Please enter your name";
    }
    if (formData.email.trim() === "") {
      error.email = "Please enter your email address";
    } else if (!emailPattern.test(formData.email)) {
      error.email = "Please enter a valid email address";
    }
    if (formData.password.trim() === "") {
      error.password = "Please enter a password";
    } else if (!passwordPattern.test(formData.password)) {
      error.password =
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character";
    } else if (formData.password.length < 4 || formData.password.length > 10) {
      error.password = "Password must be between 4 and 10 characters in length";
    }

    return error;
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      console.log(errors);
    }
  }, [errors]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    const validationErrors = validation(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        dispatch(showLoading());

        const response = await axios.post(
          "http://localhost:7000/api/users/register",
          formData
        );

        dispatch(hideLoading());

        if (response.data.success) {
          toast.success(response.data.message);
          Navigate("/login");
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        dispatch(hideLoading());

        console.log(error);
        toast.error("Something went wrong in registration");
      }
    }
  };

  return (
    <>
      <section className="mt-5">
        <h3 className="text-center">Register here !</h3>
        <div className="container mt-3">
          <div className="card p-5 mx-auto" style={{ maxWidth: "500px" }}>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  onChange={handleChange}
                  name="name"
                  value={formData.name}
                  className="form-control"
                />
              </div>
              <span className="text-danger text-center">{errors.name}</span>
              <div className="mb-2">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                  name="email"
                  value={formData.email}
                  className="form-control"
                />
              </div>
              <span className="text-danger text-center">{errors.email}</span>

              <div className="mb-2">
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  onChange={handleChange}
                  name="password"
                  value={formData.password}
                  className="form-control"
                />
              </div>
              <span className="text-danger text-center">{errors.password}</span>

              <div>
                <button type="submit" className="btn btn-primary w-100">
                  Register
                </button>
                <p className="mt-2 text-center">
                  Already have an account?&nbsp;
                  <Link to="/login" className="text-primary">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
