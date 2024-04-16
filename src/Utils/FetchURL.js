import axios from 'axios';
import {SIGNIN_FAILED_ACTION, SIGNIN_SUCCESS_ACTION} from "../Constants/ActionTypes";
import BaseURL from "./BaseURL";
import { useDispatch } from 'react-redux';

const FetchURL = async ({ url, method = 'GET', data }) => {

    const dispatch = useDispatch();
    const baseUrl = await BaseURL();
    const token = await localStorage();

    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            // url: baseUrl + 'api/login/',
            url: baseUrl + 'api/search-etf/all',
            header: {
                // Authorization: 'Bearer '+
            }
        })
            .then((res) => {
                resolve(res.data.data);
                dispatch({
                    type: SIGNIN_SUCCESS_ACTION,
                    logged: true,
                    loading: false,
                    userInfo: res.data.data.email
                })
            })
            .catch((err) => {
                reject(err);
                console.log(err);
                dispatch({
                    type: SIGNIN_FAILED_ACTION,
                    logged: false,
                    loading: false,
                    error: true
                })
            })
    })
}

export default FetchURL;
