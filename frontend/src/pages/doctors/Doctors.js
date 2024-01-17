import React, { useState } from "react";
import DoctorsCard from "../../components/doctors/DoctorsCard";
import { doctors } from "../../assets/data/doctors";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const Doctors = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  const handleSearch = () => {
    const filtered = doctors.filter(
      (doctor) =>
        doctor.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        doctor.specialization.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredDoctors(filtered);
  };

  return (
    <>
      <Header />
      <section>
        <div className="container">
          <h2 className="text-center"> Find a Doctor</h2>
          <div className="d-flex justify-content-center">
            <input
              type="search"
              placeholder="Search Doctors"
              className="form-control w-50 p-2"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className="btn btn-primary ms-2" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doctor) => (
                <DoctorsCard doctor={doctor} key={doctor.id} />
              ))
            ) : (
              <p className="text-danger text-center">No doctors found</p>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Doctors;
