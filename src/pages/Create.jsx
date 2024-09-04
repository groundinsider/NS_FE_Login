import { useState } from 'react';
import "./Create.css";

function Create() {
  const [input, setInput] = useState({
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

  return (  
    <div className="container">
      <div className="header">Login</div>
      <div className="login-box">
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
            value={input.name}
            placeholder="이름"
            onChange={onChangeInput}
            name="name"
          />
        </div>
        <div>
        <input
            className="set_data"
            value={input.password}
            placeholder="비밀번호"
            onChange={onChangeInput}
            name="password"
            type = "password"
        />
        </div>
        <input type = "submit" className="login-button" value = "로그인" />
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default Create;