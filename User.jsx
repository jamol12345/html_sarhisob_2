import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  //URL manzildan userId olish uchun
  const { userId } = useParams();
  return(
    <div>
        <h1>User page</h1>
        <p>user ID: {userId}</p>
    </div>
  )
};

export default User;
