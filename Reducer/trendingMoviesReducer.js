const initialstate = {
    data:[],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialstate, action){
    switch (action.type) {
        case 'TRENDING_MOVIES':
            return{
                ...state,
                data:action.payload,
            }
        default:
            return state;
    }
}

