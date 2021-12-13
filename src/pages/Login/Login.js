import React, { useState } from "react";
import Form from "../../components/Form/Form";
import "./Login.css";

const Login = () => {
  const [stateLogin, setStateLogin] = useState(true);

  const handleLogin = () => {
    setStateLogin(true);
  };

  const handleRegistor = () => {
    setStateLogin(false);
  };

  return (
    <>
      <div className="login" style={{ marginTop: "90px" }}>
        <div className="container">
          <div className="title">
            <h1 onClick={handleLogin} className={stateLogin ? "focus" : ""} style={{cursor: 'pointer'}}>
              Login
            </h1>
            <h1 onClick={handleRegistor} className={stateLogin ? "" : "focus"} style={{cursor: 'pointer'}}>
              Registor
            </h1>
          </div>
          <div className="form-container">
            {stateLogin && (
                <Form state={stateLogin}/>
            )}
            {!stateLogin && (
              <Form state={stateLogin} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
