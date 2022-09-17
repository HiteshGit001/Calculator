export const handleChanges = (state, action) => {
  // console.log(action);
  // if (action === "AC") {
  //   return ""
  // }
  // else if (action === "DEL") {
  //   // return state.slice(0, state.length - 1);
  //   return state.slice(0, -1);
  // }
  // else {
  //   return state.concat(action);
  // }
  switch (action) {
    case "AC":
      return ""
      break;
    case "DEL":
      return state.slice(0, -1);
      break;
    case "=":
      try {
        return eval(state).toString();
      }
      catch(err){
        return "Syntax error";
      }
      break;
    default:
      return state.concat(action);
  }
}