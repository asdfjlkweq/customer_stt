import React, { useState } from "react";

const Notice = () => {
  return (
    <div
      style={{
        flexDirection: "row",
        display: "flex",
        paddingLeft: "10px",
        paddingRight: "10px",
      }}
    >
      <div style={{ color: "red", fontSize: "50px", alignSelf: "center" }}>
        {"<"}NOTICE{">    "}
      </div>
      <div style={{ wdith: "30px" }} />
      <div style={{ fontSize: "40px", alignSelf: "center" }}>
        현재 호우주의보가 예상되어 있으니 작업자 분들은 실내로 대피하시기
        바랍니다.
      </div>
    </div>
  );
};

export default Notice;
