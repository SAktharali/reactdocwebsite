import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Profile = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAllAppointments = async () => {
      try {
        const authToken = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:7000/api/appointments/getAppointments",
          {
            headers: { Authorization: `Bearer ${authToken}` },
          }
        );

        if (response.data.success) {
          setAppointments(response.data.data);
          console.log(response.data.data);
        } else {
          console.error(response.data.error);
          toast.error("Failed to fetch appointments");
        }
      } catch (error) {
        console.error("Error fetching appointments", error);
        toast.error("Failed to fetch appointments");
      }
    };
    fetchAllAppointments();
  }, []);

  const Navigate = useNavigate();

  const handleLogOut = () => {
    window.location.reload();
    localStorage.clear();
    toast.success("Logout successfully");
    Navigate("/login");
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center">Booked Appointments</h3>
      <div className="d-flex justify-content-end">
        <Link
          onClick={handleLogOut}
          className="btn btn-danger text-white header-logout-btn"
        >
          Logout
        </Link>
      </div>

      <div className="table-responsive mt-5">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Id</th>
              <th>Patient Name</th>
              <th>Doctor</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment._id}>
                <td>{appointment._id}</td>
                <td>{appointment.name}</td>
                <td>{appointment.doctor}</td>
                <td>{appointment.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
