import { useState } from "react";
import './App.css'
function App() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");

  const generateOtp = () => Math.floor(1000 + Math.random() * 9000).toString();

  const handleSendOtp = () => {
    if (phone.length !== 10) {
      setMessage("Enter a valid 10-digit phone number.");
      return;
    }
    const newOtp = generateOtp();
    setGeneratedOtp(newOtp);
    alert(`Your OTP is: ${newOtp}`);
    setStep(2);
    setMessage("OTP sent successfully.");
  };

  const handleVerifyOtp = () => {
    if (otp === generatedOtp) {
      setMessage("OTP Verified. Login Successful.");
      setStep(3);
    } else {
      setMessage("Invalid OTP. Try again.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>OTP Login</h2>

      {step === 1 && (
        <>
          <input
            type="tel"
            placeholder="Enter Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            maxLength="10"
          />
          <button onClick={handleSendOtp}>Send OTP</button>
        </>
      )}

      {step === 2 && (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            maxLength="4"
          />
          <button onClick={handleVerifyOtp}>Verify OTP</button>
        </>
      )}

      {step === 3 && <h3>Welcome! You are logged in.</h3>}

      <p>{message}</p>
    </div>
  );
}

export default App;
