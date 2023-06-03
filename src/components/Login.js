import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUsername, setEmail } from "../store/authslice";

export function Login() {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setUsername(username));
    dispatch(setEmail(email));
  };

  return (
    <div className=" mx-auto bg-light">
      <div className="form-floating col-2">
        <input
          type="text"
          onChange={(name) => setusername(name.target.value)}
          className="form-control"
          placeholder="username"
          id="username"
        />
        <label htmlFor="username" className="form-label">
          Username
        </label>
      </div>
      <br />
      <div className="form-floating col-2">
        <input
          type="email"
          onChange={(name) => setemail(name.target.value)}
          className="form-control"
          placeholder="password"
          id="password"
        />
        <label htmlFor="password" className="form-label">
          Password
        </label>
      </div>
      <Link to="/profile">
        <button
          className="btn btn-outline-dark"
          type="submit"
          onClick={handleClick}
        >
          Submit
        </button>
      </Link>
    </div>
  );
}

export default Login;
