import React, { useState } from "react";
import { doctors } from "../assets/data/doctors";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/features/alertSlice";

const Appointments = () => {
  const [formErrors, setFormErrors] = useState({});
  const [dateErrors, setDateErrors] = useState({});
  const [timeErrors, setTimeErrors] = useState({});

  const validation = (formData) => {
    let error = {};
    const emailPattern = /^[^\s@]+@[^\s@]+[^\s@]{2,}$/;
    const phoneNumberRegex = /^[0-9]{10}$/;

    if (formData.name.trim() === "") {
      error.name = "Please enter your name";
    }
    if (formData.email.trim() === "") {
      error.email = "Please enter your email address";
    } else if (!emailPattern.test(formData.email)) {
      error.email = "Please enter a valid email address";
    }
    if (formData.phoneNumber.trim() === "") {
      error.phoneNumber = "Please enter your phone number";
    } else if (!phoneNumberRegex.test(formData.phoneNumber)) {
      error.phoneNumber = "please enter valid phone number";
    }
    if (formData.reason.trim() === "") {
      error.reason = "Please enter your cause of visit";
    }
    if (formData.doctor === "") {
      error.doctor = "Please select your doctor";
    }
    if (formData.gender === "") {
      error.gender = "Please select your gender";
    }

    return error;
  };

  // useEffect(() => {
  //   console.log("Form Errors:", formErrors);
  //   console.log("Date Errors:", dateErrors);
  //   console.log("Time Errors:", timeErrors);
  // }, [formErrors, dateErrors, timeErrors]);

  const validation2 = (date) => {
    let errorDate = {};
    if (date === "") {
      errorDate.date = "please enter your date";
    }
    return errorDate;
  };
  const validation3 = (time) => {
    let errorTime = {};
    if (time === "") {
      errorTime.time = "please enter your time";
    }
    return errorTime;
  };
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    gender: "",
    doctor: "",
    reason: "",
  });

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    const validationErrors = validation(formData);
    const validationErrors2 = validation2(date);
    const validationErrors3 = validation3(time);
    setFormErrors(validationErrors);
    setDateErrors(validationErrors2);
    setTimeErrors(validationErrors3);

    if (Object.keys(validationErrors).length === 0) {
      try {
        dispatch(showLoading());

        const authToken = localStorage.getItem("token");

        const res = await axios.post(
          "http://localhost:7000/api/appointments/book",
          {
            ...formData,
            date: date,
            time: time,
          },

          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        dispatch(hideLoading());

        if (res.data.success) {
          toast.success(res.data.message);
          setFormData({
            name: "",
            email: "",
            phoneNumber: "",
            gender: "",
            doctor: "",
            reason: "",
          });

          setDate("");
          setTime("");
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        dispatch(hideLoading());

        console.log(error);
        toast("something went wrong in appointment booking");
      }
    }
  };
  return (
    <>
      <Header />
      <section className="mb-3">
        <h3 className="text-center mb-4">Book Appointment</h3>
        <div className="container">
          <div className="card p-4 mx-auto" style={{ maxWidth: "500px" }}>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Patient Name:
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <span className="text-danger text-center">{formErrors.name}</span>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <span className="text-danger text-center">
                {formErrors.email}
              </span>

              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone Number:
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter Phone Number"
                  className="form-control"
                />
              </div>
              <span className="text-danger text-center">
                {formErrors.phoneNumber}
              </span>

              <div className="mb-3">
                <label htmlFor="gender" className="form-label">
                  Gender:
                </label>
                <select
                  name="gender"
                  className="form-select"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <span className="text-danger text-center">
                {formErrors.gender}
              </span>
              <div className="mb-3">
                <label htmlFor="date">Date:</label>
                <input
                  type="date"
                  name="date"
                  className="form-control"
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <span className="text text-danger">{dateErrors.date}</span>
              <div className="mb-3">
                <label htmlFor="time">time:</label>
                <input
                  type="time"
                  name="time"
                  className="form-control"
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <span className="text text-danger">{timeErrors.time}</span>

              <div className="mb-3">
                <label htmlFor="doctor" className="form-label">
                  Select Doctor:
                </label>
                <select
                  name="doctor"
                  className="form-select"
                  value={formData.doctor}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Doctor
                  </option>
                  {doctors.map((doctor) => (
                    <option value={doctor.name} key={doctor.id}>
                      {doctor.name} -{doctor.specialization}
                    </option>
                  ))}
                </select>
              </div>
              <span className="text-danger text-center">
                {formErrors.doctor}
              </span>

              <div className="mb-3">
                <label htmlFor="reason" className="form-label">
                  Reason:
                </label>
                <textarea
                  name="reason"
                  cols="2"
                  rows="2"
                  className="form-control"
                  value={formData.reason}
                  onChange={handleChange}
                ></textarea>
              </div>
              <span className="text-danger text-center">
                {formErrors.reason}
              </span>

              <button className="btn btn-success w-100" type="submit">
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Appointments;
