import {
    GET_PATIENTS_LOADING,
    GET_PATIENTS_FULLFILLED,
} from "../actions/PatientActions";
export const IntialState = {
    patients:[],
    isLoading:false
};

const PatientReducer = (state = IntialState, action) => {
    switch (action.type) {
        case GET_PATIENTS_LOADING:
            return {
                ...state,
                isLoading:true
            };
            case GET_PATIENTS_FULLFILLED:
                return {
                    ...state,
                    patients:action.payload.data,
                    isLoading:true
                };    
        case 'PATIENT_LOADING':
            return {
                ...state,
                isLoading:true
            };
        default:
            return state;
    }
};

export default PatientReducer;