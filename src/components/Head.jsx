import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constant";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion,setsuggestion]=useState([]);
  // console.log(searchQuery);
  useEffect(() => {
    //API call
    
    // make an api call after every press
    // but if the difference between 2 API calls is <200ms
    // decline the API call
    const timer=setTimeout(()=> getSearchSuggestion(),200);
    return () =>{
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async ()=>{
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setsuggestion(json[1]);
  }

  const dispatch = useDispatch();
  const togglemenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg ">
      <div className="flex col-span-1">
        <img
          onClick={() => togglemenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png"
        />
        <img
          className="h-8 mx-2"
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"
        />
      </div>
      <div className="col-span-10 px-10">
        <div>
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100 relative top-1.5">
          <img
            className="h-6 mx-4 pt-1 "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJIHcWSp0-wssziSeabC656cEbQRawhzPjag&usqp=CAU"
            alt="search"
          />
        </button>
        </div>
        <div className="fixed bg-white py-2 px-5 w-[27rem] shadow-lg rounded-lg border border-gray-100">
          <ul>
          {suggestion.map(s=><li key={s} className="py-2 shadow-sm hover:bg-gray-200"> 🔍 {s}</li>)}
            
           
          </ul>
        </div>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
        />
      </div>
    </div>
  );
};
export default Head;
