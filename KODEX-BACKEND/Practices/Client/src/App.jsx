import React from "react";
import axios from "axios";
const App = () => {
  let HandleApi = async () => {
    try {
      let response = await axios.post("http://localhost:5000/api/users/getData", {
        name: "Shivani Pathak",
        email:"SwarupDas@gmail.com",
        password:'Sikkim',
        mobile:7318657035,
      });
      console.log(response);
      
    } catch (error) {
      console.log("This is the error", error);
    }
  };

  return (
    <div className="Rupa">
      <h1>Hello baby</h1>
      <button onClick={HandleApi}>Get Response from server</button>
    </div>
  );
};

export default App;
