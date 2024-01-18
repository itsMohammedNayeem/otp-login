import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const OtpInput = ({ length = 4, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];

    // allow only one digit
    newOtp[index] = value.substr(value.length - 1, 1);
    setOtp(newOtp);

    // submit trigger
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) {
      onOtpSubmit(combinedOtp);
    }
  };

  const handleClick = (e) => {};
  const handleKeyDown = (index, e) => {};

  return (
    <div className="flex gap-2 items-center justify-center">
      {otp.map((value, index) => {
        return (
          <input
            key={index}
            type="text"
            ref={(ref) => (inputRefs.current[index] = ref)}
            value={value}
            onChange={(e) => handleChange(index, e)}
            onClick={() => handleClick(index)}
            className="border border-black rounded-md p-2 w-10 text-center"
            onKeyDown={(e) => handleKeyDown(index, e)}
          />
        );
      })}
    </div>
  );
};

OtpInput.propTypes = {
  length: PropTypes.number,
  onOtpSubmit: PropTypes.func,
};

export default OtpInput;
