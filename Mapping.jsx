import React from "react";

const Mapping = () => {
  const oquvchilar = [
    { id: 1, ism: "Ali", yosh: 14 },
    { id: 2, ism: "Madina", yosh: 15 },
    { id: 3, ism: "Sardor", yosh: 16 },
  ];
  
  return (
    <div>
      <h2>O‘quvchilar ro‘yxati:</h2>
      {oquvchilar.map((oquvchi) => (
        <div key={oquvchi.id}>
          <p>Ism: {oquvchi.ism}</p>
          <p>Yosh: {oquvchi.yosh}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Mapping;
