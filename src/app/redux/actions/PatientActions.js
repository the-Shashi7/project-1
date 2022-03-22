import axios from '../../../axios';

export const GET_PATIENTS_LOADING = 'GET_PATIENTS_LOADING';
export const GET_PATIENTS_FULLFILLED = 'GET_PATIENTS_FULLFILLED';
export const CREATE_PATIENT = 'CREATE_PATIENT';

export const getPatients = (dispatch) => {
    dispatch({
        type: GET_PATIENTS_LOADING,
    });
    axios.post('/patient/getPatients',{
        select:{},
        project:{},
        limit:50,
        skip:0
    }).then((res) => {
        dispatch({
            type: GET_PATIENTS_FULLFILLED,
            payload: res.data,
        })
    })
}

