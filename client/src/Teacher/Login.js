import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // const { name, email, password } = req.body;

  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();

    if(res.status === 400 || !data) {
      window.alert("Invalid Credentials");
    } else {
      window.alert("Login Successful")
    }
  };

  return (
    <>
      <section className="signup">
        <form method="POST" className="register">
          <div className="form-group">
            <label htmlFor="email"></label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password"></label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
          </div>

          <div>
            <input
              type="submit"
              name="signup"
              id="signup"
              value="register"
              onClick={LoginUser}
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
