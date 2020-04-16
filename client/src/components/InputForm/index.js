import React from "react";
import { useDispatch } from "react-redux";
import { showBasicData } from "../../actions/showBasicData";

const InputForm = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={()=> dispatch(showBasicData())}>submit</button>
    </div>
  );
};
export default InputForm;
