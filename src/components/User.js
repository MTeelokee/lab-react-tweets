import React from "react";

export default function User({ userData }) {
  return (
    <div>
      {" "}
      <span className="user">
        <span className="name">{userData.name}</span>
        <span className="handle">{userData.handle}</span>
      </span>
    </div>
  );
}