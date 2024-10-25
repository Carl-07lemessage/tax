// pages/verification.jsx
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Verification() {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleOtpChange = (value, index) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value !== "" && index < otp.length - 1) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handleSubmit = () => {
    const otpCode = otp.join("");
    if (otpCode.length === 4) {
      alert("Code de vérification validé !");
    } else {
      alert("Veuillez entrer les 4 chiffres du code");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-400 to-teal-500">
      <div className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-2xl p-8 shadow-xl w-full max-w-sm">
        <button onClick={() => router.back()} className="text-gray-600 mb-4 hover:-translate-x-1 transition">
          <i className="fas fa-chevron-left text-xl"></i>
        </button>

        <div className="flex justify-center items-center text-teal-500 mb-8">
          <i className="fas fa-shield-alt text-5xl"></i>
        </div>

        <h1 className="text-2xl font-semibold mb-2 text-gray-800">Vérification</h1>
        <p className="text-gray-600 mb-10">Entrez votre code de sécurité à 4 chiffres</p>

        <div className="flex justify-center gap-4 mb-10">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              className="w-14 h-14 text-center text-2xl font-semibold border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              value={digit}
              onChange={(e) => handleOtpChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="w-full py-4 bg-gradient-to-r from-teal-400 to-teal-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition"
        >
          <i className="fas fa-shield-alt mr-2"></i> Vérifier maintenant
        </button>
      </div>
    </div>
  );
}
