
const defaultState ={
    videoFlag:false
};


const reducer =(state = defaultState,action)=>{
    switch(action.type){
        case "changeVideoFlag":{
            let newState =JSON.parse(JSON.stringify(state));
            newState.videoFlag = action.value;
            return newState;
        }
    }
    return state;
}

export default reducer