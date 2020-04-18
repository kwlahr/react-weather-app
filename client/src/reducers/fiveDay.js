const fiveDayReducer = (state = false, action) => {
  switch (action.type) {
    case "showFiveDay":
      return (state = true);
    case "hideFiveDay":
      return (state = false);
    default:
      return state;
  }
};

export default fiveDayReducer;
