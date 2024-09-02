import { useState, createContext } from "react";
import "./login.css";

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
          
        </div>

        <div className="right">
        <div>
            <input
              className="set_data"
              value={input.studentId}
              placeholder="아이디"
              onChange={onChangeInput}
              name="studentId"
            />
          </div>
          <div>
            <input
              className="set_data"
              value={input.password}
              placeholder="비밀번호"
              onChange={onChangeInput}
              name="password"
              type="password"
            />
          </div>
          <input type = "submit" className="login-button" value = "로그인" />
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default Login;