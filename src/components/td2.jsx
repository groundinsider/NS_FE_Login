import {useState, useEffect} from "react";

function useInput(){
  const [input, setInput] = useState("");


  function onChange(e){
    setInput(e.target.value)
  }

  return [input, onChange];
}

function Tmd(){
  const[input, onChange] = useInput();

  useEffect((function(){
    alert("td");
  }));

  return(
    <div>
      <input value = {input} onChange = {onChange}/>
    </div>
  );
};

export default Tmd;