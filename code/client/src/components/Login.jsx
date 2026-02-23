import React, { useContext } from "react";
import { GeneralContext } from "../context/GeneralContext";
import bgImage from "../assets/home.jpg";   // ✅ Import background image

const Login = ({ setIsLogin }) => {

  const { setEmail, setPassword, login } = useContext(GeneralContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    await login();
  };

  return (
    <>
      <style>{`

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .authWrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-size: cover;
          background-position: center;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .authWrapper::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.65);
        }

        .authForm {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 400px;
          padding: 40px;
          border-radius: 20px;
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
          text-align: center;
          color: white;
        }

        .authForm h2 {
          margin-bottom: 25px;
          font-weight: 600;
          color: #ffffff;
        }

        .authFormInputs {
          margin-bottom: 20px;
        }

        /* ✅ WHITE INPUT BOX */
        .authFormInputs .form-control {
          background: #ffffff !important;
          border: none;
          border-radius: 12px;
          color: #000000 !important;
        }

        .authFormInputs .form-control::placeholder {
          color: #555;
        }

        .authFormInputs .form-control:focus {
          box-shadow: 0 0 10px #00c6ff;
          background: #ffffff !important;
          color: #000000 !important;
        }

        /* ✅ BLACK LABEL TEXT */
        .authFormInputs label {
          color: #000 !important;
        }

        .authForm .btn-primary {
          width: 100%;
          padding: 12px;
          border-radius: 30px;
          border: none;
          background: linear-gradient(45deg, #00c6ff, #0072ff);
          transition: 0.3s;
        }

        .authForm .btn-primary:hover {
          transform: scale(1.05);
          box-shadow: 0 0 15px #00c6ff;
        }

        .authForm p {
          margin-top: 15px;
          color: #ffffff;
        }

        .authForm span {
          color: #ffffff;
          font-weight: 500;
          cursor: pointer;
        }
        .authForm span:hover {
          text-decoration: underline;
        }

      `}</style>

      {/* ✅ Background applied here */}
      <div
        className="authWrapper"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <form className="authForm" onSubmit={handleLogin}>
          <h2>Login</h2>

          <div className="form-floating authFormInputs">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email address</label>
          </div>

          <div className="form-floating authFormInputs">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>

          <button type="submit" className="btn btn-primary">
            Sign in
          </button>

          <p>
            Not registered?{" "}
            <span onClick={() => setIsLogin(false)}>Register</span>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;