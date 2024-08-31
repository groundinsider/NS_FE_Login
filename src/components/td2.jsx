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
  const[input, onChange] = useState();


  const setTd = async function(){
    try{
      onChange("asijdoisd");
      const a = await axios.get('http://localhost:3001/td');
      onChange(a.data);

      const {name, cost, id} = a.data[0];
      onChange(name);
    }
    catch(e){
      alert("td");
    }
  }


  useEffect((function(){
    setTd();
  }),[]);


  return(
    <div>
      {input}
    </div>
  );
};

export default Tmd;