import React from "react";
import { useState } from "react";
import OtpInput from "./OtpInput";

const PhoneOtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePhoneSubmit = (event) => {
    event.preventDefault();

    // Phone number validations
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid Phone Number");
      return;
    }

    // Call BE API
    // Show OTP Field
    setShowOtpInput(true);
  };

  const onOtpSubmit = (otp) => {
    console.log("Login Successful", otp);
    // You can add logic to send OTP to the backend for verification
  };

  return (
    <div>
      {!showOtpInput ? (
        <form className="relative text-[22px]" onSubmit={handlePhoneSubmit}>
          <input
            type="text"
            className="w-[350px] p-2 border-black border-[1px] rounded-md outline-none"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            placeholder="Enter Phone Number"
          />
          <button className="absolute right-0 bg-blue-800 inset-y-0 rounded-l-full p-2 text-white m-[1px]" type="submit">Submit</button>
        </form>
      ) : (
        <div className="w-full text-center ">
          <p className="text-white text-3xl tracking-wider">Enter OTP sent to {phoneNumber}</p>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
};

export default PhoneOtpForm;
