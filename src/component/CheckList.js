import React, { useState } from "react";

const CheckList = () => {
  const data = [
    { id: 1, text: "파이프 용접", checked: false },
    {
      id: 2,
      text: "로딩 및 언로딩 시간 기록, 배송 시간 준수",
      checked: false,
    },
    {
      id: 3,
      text: "모든 화물에 대한 출발지와 목적지 문서화",
      checked: false,
    },
  ];
  const [items, setItems] = useState(data);

  const toggleCheck = (id) => {
    setItems((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div>
      {items.map((item) => (
        <p key={item.id}>
          <input
            type="checkbox"
            checked={item.checked}
            onChange={() => toggleCheck(item.id)}
            style={{ width: "50px", height: "50px" }}
          />
          <span
            style={{
              textDecoration: item.checked ? "line-through" : "none",
              color: item.checked ? "grey" : "white",
              fontSize: "50px",
            }}
          >
            {item.text}
          </span>
        </p>
      ))}
    </div>
  );
};

export default CheckList;
