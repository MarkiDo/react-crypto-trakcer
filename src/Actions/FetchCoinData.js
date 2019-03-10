import axios from 'axios';
import USER_TOKEN from './../Utils/Constants';
import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_FAIL
} from '../Utils/ActionTypes';

export default function FetchCoinData() {
    return dispatch => {
        dispatch({
            type: FETCHING_COIN_DATA
        })
        const AuthStr = 'Bearer '.concat(USER_TOKEN);
        return axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
                headers: {
                    'X-CMC_PRO_API_KEY': '83b23302-582e-43b3-8ad1-473e6256ee27'
                },
                params:{
                    limit: 10
                }
            })
            .then(res => {
                dispatch({
                    type: FETCHING_COIN_DATA_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: FETCHING_COIN_DATA_FAIL,
                    payload: err.data
                })
            })
    }
}