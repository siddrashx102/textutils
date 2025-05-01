import React from "react";

export default function Alert({ alert }) {
  return (
    <div>
      <div className="alert alert-success fade show" role="alert">
        {alert}
      </div>
    </div>
  );
}
