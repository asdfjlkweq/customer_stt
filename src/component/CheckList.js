import React, { useState, useEffect } from "react";
import axios from "axios";

const CheckList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchInfo = () => {
      axios
        .get("http://34.64.167.142:5000/user/3/info")
        .then((Response) => {
          console.log(Response);
          setItems(Response.data.tasks);
        })
        .catch((Error) => {
          console.log(Error);
        });
    };

    // 처음에 한 번 호출
    fetchInfo();

    // 2초마다 반복하여 호출
    const interval = setInterval(fetchInfo, 2000);

    // 컴포넌트가 언마운트될 때 인터벌을 정리
    return () => clearInterval(interval);
  }, []);

  const toggleCheck = (id) => {
    setItems((prevState) =>
      prevState.map((item) =>
        item.id === id
          ? { ...item, status: { boolean: !item.status.boolean } }
          : item
      )
    );
  };

  return (
    <div>
      {items.map((item) => (
        <p key={item.id}>
          <input
            type="checkbox"
            checked={item.status.boolean}
            onChange={() => toggleCheck(item.id)}
            style={{ width: "50px", height: "50px" }}
          />
          <span
            style={{
              textDecoration: item.status.boolean ? "line-through" : "none",
              color: item.status.boolean ? "grey" : "white",
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
