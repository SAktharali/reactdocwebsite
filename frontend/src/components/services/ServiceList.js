import React from "react";
import { services } from "../../assets/data/services";
import ServiceCard from "./ServiceCard";
const ServiceList = () => {
  return (
    <div>
      <div className="mt-5">
        <div className="row">
          {services.map((item, index) => (
            <ServiceCard item={item} index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
