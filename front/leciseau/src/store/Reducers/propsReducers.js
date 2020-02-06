const basicState = {
    haircut : []

  }
  
  const storeHaircut = (state = basicState, action) => {
    console.log("yolo")
    switch (action.type) {
      case 'COUPE':{
        console.log("action", action)
        return {...state, haircut: action.value}
      }
      default: return state
    }
  }
  
  export default storeHaircut