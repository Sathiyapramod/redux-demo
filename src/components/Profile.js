import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux"; 
import { fetchContentFromBackend } from "../store/userSlice"; //using useSelector redux function to fetch the data

function Home() {
  //store to the profile.js we are fetching the data
  const username = useSelector((state) => state.auth.username);
  const email = useSelector((state) => state.auth.email);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchContentFromBackend())
  },[dispatch])

  //fetching the state variables 
  const responseLists = useSelector((state)=>state.user.contentList);
  console.log(responseLists);
  const isContentLoading = useSelector((state)=>state.user.isLoading);
  const isError = useSelector((state)=>state.user.error);

  // console.log(responseLists);


  return (
    <div>
      Welcome,{username}, {email}
      <div>
        {responseLists.map((eachResponse)=>{
          return <div key={eachResponse['id']}>
            <span>{eachResponse['title']}</span>
          </div>
        })}
      </div>
    </div>
  );
}

export default Home;
