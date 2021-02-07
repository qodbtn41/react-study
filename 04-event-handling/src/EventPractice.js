import React, { useState } from "react";

const EventPractice = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const onChange = (e) => {
    console.log(form);
    const nextForm = {
      // 객체나 배열을 변경할떄는 전체를 복사한 다음 원하는 값만 수정한다.
      ...form,
      [e.target.name]: e.target.value,
    };
    console.log(nextForm);
    setForm(nextForm);
  };
  const onClick = () => {
    alert(form.username + ": " + form.message);
    setForm({
      username: "",
      message: "",
    });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={form.username}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={form.message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
