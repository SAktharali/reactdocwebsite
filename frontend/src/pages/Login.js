import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

const Login = () => {
  const [errors, setErrors] = useState({});
  const validation = (formData) => {
    let error = {};
    const emailPattern = /^[^\s@]+@[^\s@]+[^\s@]{2,}$/;

    if (formData.email.trim() === "") {
      error.email = "Please enter your email address";
    } else if (!emailPattern.test(formData.email)) {
      error.email = "Please enter a valid email address";
    }
    if (formData.password.trim() === "") {
      error.password = "Please enter a password";
    }

    return error;
  };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const Navigate = useNavigate();
  const dispatch = useDispatch();

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
          `${process.env.REACT_APP_BACKEND_URL}/api/users/login`,
          formData
        );
console.log(`${process.env.REACT_APP_BACKEND_URL}`);
        dispatch(hideLoading());
        if (response.data.success) {
          toast.success(response.data.message);

          localStorage.setItem("token", response.data.token);
          Navigate("/");
          setFormData({ email: "", password: "" });
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        dispatch(hideLoading());
        console.log(error);
        toast("something went wrong in login");
      }
    }
  };

  return (
    <>
      <section className="mt-5">
        <h3 className="text-center">
          Hello
          <span className="text-primary"> Welcome</span> Back
        </h3>
        <div className="container mt-3">
          <div className="card p-5 mx-auto" style={{ maxWidth: "500px" }}>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
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

              <div className="mb-3">
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
                  Login
                </button>
                <p className="mt-2 text-center">
                  Don't have an account?&nbsp;
                  <Link to="/register" className="text-primary">
                    Register
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

export default Login;
