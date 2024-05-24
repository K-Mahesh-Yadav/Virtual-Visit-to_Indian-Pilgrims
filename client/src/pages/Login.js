import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Loginpage = () => {
  const [item, setItem] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:5000/getregister").then((arr) => {
      setItem(arr.data);
    });
  }, []);

  const submithandler = (e) => {
    e.preventDefault();
    let flag = 0;
    for (let i = 0; i < item.length; i++) {
      if (username === item[i].name && password === item[i].password) {
        navigate("/Otp");
        flag = 1;
        break;
      }
    }
    if (flag === 0) {
      alert(
        "OOPS ! nouser found , check the details correctly "
      );
    }
  };
  return (
    <form onSubmit={submithandler}>
      <div >
        <h3 >
          <b>LOGIN</b>
        </h3>
        <div>
          <label>username :{" "}
            <input
              className="form-control"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="enter username"
            /></label>
        </div>
        <br />
        <div>
          password :{" "}
          <input
            className="form-control"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="enter password"
          />
        </div>
        <br />
        <button className="btn btn-primary">Login</button>
        <p>Don't have account ? <Link to={"/register"}>Register</Link></p>
      </div>
    </form>
  );
};

export default Loginpage;
