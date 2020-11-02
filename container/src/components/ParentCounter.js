import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setText } from "../store";

const ParentCounter = () => {
  const dispatch = useDispatch();
  const { text } = useSelector((state) => state);
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => dispatch(setText(e.target.value))}
      />
      <span>{text}</span>
    </div>
  );
};

export default ParentCounter;
