import React from "react";
import PropTypes from "prop-types";

import "./CustomAlert.css";

function CustomAlert({ message, onClose }) {
  return (
    <div className="custom-alert-popup">
      <div className="custom-alert-content">
        <p>{message}</p>
        <button className="custom-alert-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

CustomAlert.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CustomAlert;
