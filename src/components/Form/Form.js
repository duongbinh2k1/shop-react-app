import React, { useState } from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import './Form.css'

const Form = ({ state }) => {
  const [stateForm, setStateForm] = useState(state);

  return (
    <>
      <div className="form">
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        {stateForm && (
          <>
            <div className="remember">
              <FormControlLabel control={<Checkbox />} label="Remember me" />
              <p>Forgot Password?</p>
            </div>
            <button>Login</button>
          </>
        )}
        {!stateForm && (
          <>
            <input type="text" placeholder="Email" />
            <button>Registor</button>
          </>
        )
        }
      </div>
    </>
  );
};

export default Form;
