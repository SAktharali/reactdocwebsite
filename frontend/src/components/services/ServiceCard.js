import React from "react";

const ServiceCard = ({ item }) => {
  const { img, name } = item;
  return (
    <div className="col-sm-4 col-12">
      <div className="card text-center border-3" style={{ margin: "10px" }}>
        <h4>{name}</h4>
        <img
          src={img}
          alt="..."
          width={100}
          height={100}
          style={{ margin: "auto" }}
        />
      </div>
    </div>
  );
};
export default ServiceCard;
