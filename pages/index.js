import React, { useState } from "react";
import Router from "next/router";

const onSubmit = (username, password) => {
  if (username === "shaadi" && password === "123") {
    Router.push("/Home");
  } else {
    alert("Wrong username and password!!!, please try again");
  }
};

export default () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="content">
      <div>
        <div className="">
          <h2>React Assignment</h2>
        </div>
        <div className="parent">
          <div>
            <input
              type="text"
              name="username"
              value={username}
              placeholder="User Name"
              onChange={e => setUsername(e.target.value)}
              required
            />
            <br />
            <br />
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
              required
            />
            <br />
            <br />
            <button onClick={() => onSubmit(username, password)}>LOGIN</button>
          </div>
        </div>
      </div>
    </div>
  );
};
