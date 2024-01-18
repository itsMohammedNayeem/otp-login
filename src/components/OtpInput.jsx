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

    // move to next input if digit entered
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);
  };

  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      index > 0 &&
      !otp[index] &&
      inputRefs.current[index - 1]
    ) {
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);

      // move to previous input if backspace pressed
      inputRefs.current[index - 1].focus();
    }
  };

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
