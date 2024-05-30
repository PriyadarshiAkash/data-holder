import React from "react";
import { useLocation } from "react-router-dom";

const OtherPage = () => {
  const location = useLocation();

  // Function to retrieve data from local storage
  const getFormDataFromLocalStorage = () => {
    const formDataString = localStorage.getItem("formData");
    return formDataString ? JSON.parse(formDataString) : {};
  };

  const formData = getFormDataFromLocalStorage();

  return (
    <div>
      <h1>Data from WholePage:</h1>

      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(formData).map(([field, value]) => (
            <tr key={field}>
              <td>{field}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OtherPage;
