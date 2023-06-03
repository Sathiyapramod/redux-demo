import React from "react";
import { useSelector } from "react-redux";

function Home() {
  //store to the profile.js we are fetching the data
  const username = useSelector((state) => state.auth.username);
  const email = useSelector((state) => state.auth.email);

  return (
    <div>
      Welcome,{username}, {email}
    </div>
  );
}

export default Home;
