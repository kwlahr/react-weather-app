import axios from "axios";

const City = () => {
  document.getElementById("city").value();
};
const State = () => {
  document.getElementById("state").value();
};

const apiRequestReducer = (state = {}, action) => {
  switch (action.type) {
    case "getBasicData":
      return axios
        .get(
          `api.openweathermap.org/data/2.5/weather?q=${City},${State}&appid=e118a9757bbd90e8cbd8a9d2eff8445f`
        )
        .then(function (response) {
          // handle success
          state = response.json();
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    default:
      return state;
  }
};

export default apiRequestReducer;
