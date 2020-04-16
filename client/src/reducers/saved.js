const savedReducer = (state = false, action) => {
  switch (action.type) {
    case "showSaved":
      return (state = true);
    default:
      return state;
  }
};

export default savedReducer;
