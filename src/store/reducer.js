
const defaultState ={
    videoFlag:false,
    userInfo:null,
    token:null,
};


const reducer =(state = defaultState,action)=>{
    switch(action.type){
        case "changeVideoFlag":{
            let newState =JSON.parse(JSON.stringify(state));
            newState.videoFlag = action.value;
            return newState;
        }
        case "setToken":{
            let newState = JSON.parse(JSON.stringify(state));
            newState.token = action.value;
            return newState;
        }
        case "setUserInfo":{
            let newState = JSON.parse(JSON.stringify(state));
            newState.userInfo = action.value;
            return newState;
        }
    }
    return state;
}

export default reducer