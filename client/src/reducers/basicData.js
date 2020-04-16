const basicDataReducer = (state = false, action) => {
    switch(action.type) {
        case 'showData':
            return state = true
    }
}

export default basicDataReducer;