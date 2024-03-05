import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      Welcome! {user.username} and {user.password}
    </div>
  );
}

export default Profile;
