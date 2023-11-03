import React, { useState, useEffect } from "react";
import CheckList from "../component/CheckList";
import Notice from "../component/Notice";
import SpeechToText from "../component/SpeechToText";
import logo from "../asset/microphone.png";
import UserText from "../component/UserText";

const Client = () => {
  const [click, setClick] = useState(false);
  // const [showNotice, setShowNotice] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowNotice(false);
  //   }, 10000);
  // });

  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100vh",
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          marginLeft: "10%",
          paddingBottom: "20px",
          paddingTop: "20px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <CheckList />
        {/* <UserText /> */}

        <button
          style={{
            alignSelf: "center",
            padding: "0px",
            marginRight: "10%",
          }}
          onClick={() => setClick(!click)}
        >
          <img src={logo} alt="로고 이미지" width="100px" height="100px" />
        </button>
      </div>

      {/* {showNotice ? (
        <div
          style={{
            backgroundColor: "white",
            width: "80%",
            marginLeft: "10%",
          }}
        >
          <Notice />
        </div>
      ) : (
        ""
      )} */}

      {click ? (
        <div
          style={{
            backgroundColor: "white",
            width: "80%",
            marginLeft: "10%",
          }}
        >
          <div style={{ color: "red", fontSize: "50px", marginLeft: "40%" }}>
            인식 중
          </div>
          <SpeechToText />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Client;
