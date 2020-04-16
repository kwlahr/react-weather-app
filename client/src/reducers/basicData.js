const basicDataReducer = (state = false, action) => {
  switch (action.type) {
    case "showBasicData":
      return (state = true);
    default:
      return state;
  }
};

export default basicDataReducer;
