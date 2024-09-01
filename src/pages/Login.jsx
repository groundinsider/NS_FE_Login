import { useState, createContext } from "react";
import "./styles/login.css";

export const userContext = createContext();

function Login() {
  const [input, setInput] = useState({
    studentId: "",
    name: "",
  })

  const [user, setUser] = useState({
    studentId: "",
    name: "",
    password: "",
    phoneNumber: "",
    email: "",
  })

  function onChangeInput(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }

  function onChangeUser(e){
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className="container">
      <div className="header">Login</div>
      <div className="login-box">
        <div className="left">
          <div>
            <span>Student ID</span>
            <input
              className="set_data"
              value={input.studentId}
              onChange={onChangeInput}
              name="studentId"
            />
          </div>
          <div>
            <span>Password</span>
            <input
              className="set_data"
              value={input.password}
              onChange={onChangeInput}
              name="password"
              type="password"
            />
          </div>
          <input type = "submit" className="login-button" value = "Login" />
        </div>

        <div className="right">
          <div>
            <span>Student ID</span>
            <input
              className="set_data"
              value={user.studentId}
              onChange={onChangeUser}
              name="studentId"
            />
          </div>
          <div>
            <span>Your Name</span>
            <input
              className="set_data"
              value={user.name}
              onChange={onChangeUser}
              name="name"
            />
          </div>
          <div>
            <span>Password</span>
            <input
              className="set_data"
              value={user.password}
              onChange={onChangeUser}
              name="password"
              type="password"
            />
          </div>
          <div>
            <span>Phone Number</span>
            <input
              className="set_data"
              value={user.phoneNumber}
              onChange={onChangeUser}
              name="phoneNumber"
            />
          </div>
          <div>
            <span>Your email</span>
            <input
              className="set_data"
              value = {user.email}
              onChange = {onChangeUser}
              name = "email"
            />
          </div>
          <input type = "submit" className="login-button" value = "Create"/>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default Login;