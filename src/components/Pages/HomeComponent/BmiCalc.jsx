import React, { useRef, useState } from "react";
import "..//..//styles/homePage.css";
import ReactModal from "react-modal";
ReactModal.setAppElement("#root");
const BmiCalc = () => {
  const weightInp = useRef(null);
  const heightInp = useRef(null);
  const [bmiValue, setBmiValue] = useState("");
  const [bmiRate, setBmiRate] = useState("");
  const [advice, setAdvice] = useState("");
  const [ModalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };
  const bmiCalcFormula = (weight, height) => {
    setModalOpen(true);
    height /= 100;
    return (weight / (height * height)).toFixed(2);
  };

  const calculateBmi = () => {
    setLoading(true);
    const weight = parseFloat(weightInp.current.value);
    const height = parseFloat(heightInp.current.value);
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      alert("Invalid weight or height");
      setLoading(false);
      return;
    }
    setTimeout(() => {
      const bmi = bmiCalcFormula(weight, height);
      setBmiValue(bmi);
      setLoading(false);
      if (bmi <= 18.5) {
        setBmiRate("Underweight");
        setAdvice(
          "Increase calorie intake with nutrient-rich foods and regular strength training exercises for healthy weight gain."
        );
      } else if (bmi <= 24.9) {
        setBmiRate("Healthy");
        setAdvice(
          "Your BMI indicates that your health is in excellent condition. Keep up the good work!"
        );
      } else if (bmi <= 29.9) {
        setBmiRate("Overweight");
        setAdvice(
          "Embrace a healthier lifestyle; shed excess weight with a balanced routine. Your well-being matters most."
        );
      } else if (bmi <= 34.9) {
        setBmiRate("Obese");
        setAdvice(
          "Own your health. Start your transformation today. Take the first step towards a healthier you."
        );
      } else {
        setBmiRate("Extreme Obesity");
        setAdvice("DANGER 💀⚖️");
      }
    }, 1500);
  };

  return (
    <div className="bmiCalcContainer">
      <h1 className="bmiHEading">
        Let's Calculate Your <span style={{ color: "red" }}>BMI</span>
      </h1>
      <div className="flex">
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <div className="bmiInpCont">
              <div className="weight">
                <input
                  type="text"
                  ref={weightInp}
                  placeholder="Weight / kg"
                  name="weight"
                />
              </div>
              <div className="height">
                <input
                  type="text"
                  ref={heightInp}
                  placeholder="Height / cm"
                  name="height"
                />
              </div>
              <button onClick={calculateBmi} className="calcBtn">
                <div>
                  CALCULATE
                  {loading && <div className="spinner"></div>}
                </div>
              </button>
            </div>
          </div>
        </form>
        <ReactModal
          isOpen={ModalOpen}
          onRequestClose={closeModal}
          style={{
            overlay: {
              background: "rgba(0, 0, 0, 0.596)",
              backdropFilter: "blur(4px)",
              zIndex: 5,
            },
            content: {
              background: "black",
              width: "50vw",
              height: "65vh",
              zIndex: 5,
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%,-50%)",
              marginTop: "50px",
            },
          }}
        >
          <button onClick={() => setModalOpen(false)} className="closeBtn">
            <svg
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="50px"
              viewBox="-7.8 -7.8 67.60 67.60"
              enableBackground="new 0 0 52 52"
              xmlSpace="preserve"
              stroke="#ffffff"
              strokeWidth="0.0005200000000000001"
              transform="matrix(-1, 0, 0, -1, 0, 0)rotate(0)"
            >
              <g
                id="SVGRepo_bgCarrier"
                strokeWidth={0}
                transform="translate(0,0), scale(1)"
              >
                <rect
                  x="-7.8"
                  y="-7.8"
                  width="67.60"
                  height="67.60"
                  rx="33.8"
                  fill="#121212"
                  strokeWidth={0}
                />
              </g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#CCCCCC"
                strokeWidth="1.8719999999999999"
              />
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M31,25.4L44,12.3c0.6-0.6,0.6-1.5,0-2.1L42,8.1c-0.6-0.6-1.5-0.6-2.1,0L26.8,21.2c-0.4,0.4-1,0.4-1.4,0 L12.3,8c-0.6-0.6-1.5-0.6-2.1,0l-2.1,2.1c-0.6,0.6-0.6,1.5,0,2.1l13.1,13.1c0.4,0.4,0.4,1,0,1.4L8,39.9c-0.6,0.6-0.6,1.5,0,2.1 l2.1,2.1c0.6,0.6,1.5,0.6,2.1,0L25.3,31c0.4-0.4,1-0.4,1.4,0l13.1,13.1c0.6,0.6,1.5,0.6,2.1,0l2.1-2.1c0.6-0.6,0.6-1.5,0-2.1 L31,26.8C30.6,26.4,30.6,25.8,31,25.4z" />{" "}
              </g>
            </svg>
          </button>
          <h1 style={{ textAlign: "center" }}>Calculated BMI</h1>
          <div className="bmiResContainer">
            <div>
              <p>
                Your BMI is:
                <span
                  style={
                    bmiRate === "Healthy"
                      ? { color: "green" }
                      : { color: "red" }
                  }
                >
                  {bmiValue}
                </span>
              </p>
              <p>
                Your Weight is:
                <span
                  style={
                    bmiRate === "Healthy"
                      ? { color: "green" }
                      : { color: "red" }
                  }
                >
                  {bmiRate}
                </span>
              </p>
            </div>
            <div className="adviceBMI">
              <p className="adviceBmi">{advice}</p>
            </div>
          </div>
          <span className="escape1">Click Esc</span>
        </ReactModal>
      </div>
    </div>
  );
};

export default BmiCalc;
