import React from "react";
import { useParams } from "react-router-dom";

const ColumnManagement = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Column Management</h1>
      <p>Manage columns for board ID: {id}</p>
    </div>
  );
};

export default ColumnManagement;
