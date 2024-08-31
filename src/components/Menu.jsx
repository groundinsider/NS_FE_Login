function Menu(props){
  console.log(props);
  

  return (
    <button 
      
      style = {{color: props.color}}>{props.text}
    </button>
  );
}

Menu.defaultProps = {
  color: "black",
}

export default Menu;