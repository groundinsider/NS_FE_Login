import {useState, useEffect} from "react";
import axios from "axios";

function useInput(){
  const [input, setInput] = useState("");


  function onChange(e){
    setInput(e.target.value)
  }

  return [input, onChange];
}

function Tmd(){
  const[input, onChange] = useState("");


  useEffect((function(){
    onChange("td");
  }),[]);


  return(
    <div>
     
    </div>
  );
};

export default Tmd;