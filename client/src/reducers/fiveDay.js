const fiveDayReducer = (state = false, action) => {
  switch (action.type) {
    case "showFiveDay":
      return (state = true);
    default:
      return state;
  }
};

export default fiveDayReducer;