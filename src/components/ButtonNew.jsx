import React from "react";

const ButtonNew = ({ onNewRowClick }) => {
  return (
    <div className="action-button-new">
      <button className="button-new" onClick={onNewRowClick}>New</button>
    </div>
  );
};

export default ButtonNew;
