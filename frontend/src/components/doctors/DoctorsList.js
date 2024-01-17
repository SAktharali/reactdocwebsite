import React from "react";
import { doctors } from "../../assets/data/doctors";
import DoctorsCard from "./DoctorsCard";

const DoctorsList = () => {
  return (
    <div className=" container mt-5">
      <div className="row">
        {doctors.map((doctor) => (
          <DoctorsCard doctor={doctor} key={doctor.id} />
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;
