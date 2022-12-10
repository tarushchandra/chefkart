import React from "react";

const IndividualItem = ({ item }) => {
  return (
    <>
      <td>{item.id}</td>
      <td>{item.first_name}</td>
      <td>{item.last_name}</td>
      <td>{item.email}</td>
      <td>{item.gender}</td>
      <td>{item.ip_address}</td>
      <td>{item.airport_code}</td>
      <td>{item.time}</td>
      {item.status === "true" ? (
        <td className="green">{item.status}</td>
      ) : (
        <td className="red">{item.status}</td>
      )}
      <td>{item.mobile}</td>
      <td>{item.area}</td>
      {item.show === "true" ? (
        <td className="green">{item.show}</td>
      ) : (
        <td className="red">{item.show}</td>
      )}
      {item.edit === "true" ? (
        <td className="green">{item.edit}</td>
      ) : (
        <td className="red">{item.edit}</td>
      )}
    </>
  );
};

export default IndividualItem;
