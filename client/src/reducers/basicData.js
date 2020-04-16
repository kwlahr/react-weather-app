const basicDataReducer = (state = false, action) => {
  switch (action.type) {
    case "showBasicData":
      return (state = true);
    case "hideBasicData":
      return (state = false);
    default:
      return state;
  }
};

export default basicDataReducer;
