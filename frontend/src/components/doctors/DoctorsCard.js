import React from "react";
import star from "../../assets/images/star.png";
const DoctorsCard = ({ doctor }) => {
  const { name, specialization, avgRating, totalRating, photo, hospital } =
    doctor;
  return (
    <>
      <div style={{ width: "18rem", margin: "10px" }}>
        <img src={photo} className="card-img-top" alt="doctor" title="doctor" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text d-flex justify-content-between">
            {specialization}
            <span>
              <img src={star} alt="star" title="star" />
              {avgRating} ({totalRating})
            </span>
          </p>
          <p>{hospital}</p>
        </div>
      </div>
    </>
  );
};

export default DoctorsCard;
