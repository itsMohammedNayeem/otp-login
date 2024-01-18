import React, { useState } from "react";
import OtpInput from "./OtpInput";

const PhoneOtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handleChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    console.log(phoneNumber);

    // phone number validation, check if it's a number and if it's 10 digits
    const regEx = /[^0-9]/g;

    if (
      phoneNumber.length < 10 ||
      phoneNumber.length !== 10 ||
      regEx.test(phoneNumber)
    ) {
      alert("Please enter a valid phone number!");
      return;
    }

    // call BE API to send OTP to phone number

    // if OTP sent successfully, show OTP input field
    setShowOtpInput(true);
  };

  const onOtpSubmit = (otp) => {
    console.log(otp);
  };

  return (
    <div className="p-8 flex items-center justify-center">
      {!showOtpInput ? (
        <form className="flex gap-4" onSubmit={handlePhoneSubmit}>
          <input
            type="text"
            className="border-black border rounded-md p-2"
            value={phoneNumber}
            onChange={handleChange}
          />
          <button
            className="border border-black p-2 rounded-md hover:bg-slate-300 bg-slate-400"
            type="submit"
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="flex gap-4 flex-col">
          <p>Enter OTP sent to {phoneNumber}</p>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
};

export default PhoneOtpForm;
