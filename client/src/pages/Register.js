import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Registerpage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [cpassword, setCpassword] = useState("");

  const submithandler = (e) => {
    e.preventDefault();
    
    console.log(email);
    let f2 = 0, f3 = 0, f4 = 0;

    if (password.length >= 8) { f4 = 1; }
    else {
      alert("password should contain more than 8 characters");
    }
    if (password === cpassword) { f3 = 1; }
    else {
      alert("confirm password not matching");
    }
    if (mobile.toString().length === 10) { f2 = 1; }
    else {
      alert("moblie number shoulb have 10 integers");
    }
    if (f2 === 1 && f3 === 1 && f4 === 1) {
      axios.post("http://localhost:5000/postregister", {
        name: name,
        email: email,
        password: password,
        mobile: mobile,
      },
      );
      window.alert("An email is sent to given mail , tap Confirm registration to proceed ")
    }
  };
  return (
    <form
      onSubmit={submithandler}
    >
      <div >
        <h3>
          <b>REGISTER</b>
        </h3>
        <div>
          username :{" "}
          <input
            className="form-control"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="enter username"
          />
        </div>
        <br />
        <div>
          email :{" "}
          <input
            className="form-control"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="email"
          />
        </div>
        <br />
        <div>
          password :{" "}
          <input
            className="form-control"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="enter password"
          />
        </div>
        <br />
        <div>
          confirm password :{" "}
          <input
            className="form-control"
            type="password"
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
            required
            placeholder="confirm password"
          />
        </div>
        <br />
        <div>
          mobile :{" "}
          <input
            className="form-control"
            type="Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
            placeholder="mobile Number"
          />
        </div>
        <br />
        <button className="btn btn-primary">Register</button>
        <p>Already have account ? <Link to={"/Login"}>Login</Link></p>
      </div>
    </form>
  );
};
export default Registerpage;