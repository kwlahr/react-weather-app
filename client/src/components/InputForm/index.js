import React from "react";
import { useDispatch } from "react-redux";
import { showBasicData } from "../../actions/showBasicData";
import { hideBasicData } from "../../actions/hideBasicData";

const InputForm = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={()=> dispatch(showBasicData())}>show</button>
      <button onClick={()=> dispatch(hideBasicData())}>hide</button>
    </div>
  );
};
export default InputForm;
