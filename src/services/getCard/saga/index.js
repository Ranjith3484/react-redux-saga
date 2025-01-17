import { put, takeLatest, select } from "redux-saga/effects";
import Axios from "axios";
import { ACTION_TYPES, SAGA_ACTIONS, API_END_POINTS } from "../../../constants";

function* workAllDataCard(action) {
    yield put({ type: ACTION_TYPES.GET_DATA_CARD_STARTED });
    let token = yield select(state => state.login.accessToken);
    try {
        const resultData = yield Axios.get(`${API_END_POINTS.GET_DATA_CARD}?access_token=${action.param}`,
            { headers: { 'isAuthRequired': true, 'Content-Type': 'application/json', } }
        );
        yield put({
            type: ACTION_TYPES.GET_DATA_CARD_SUCCESS,
            payload: resultData.data,
        });
    } catch (err) {
        yield put({
            type: ACTION_TYPES.GET_DATA_CARD_ERROR
        })
    }
}


export default function* watchAllDataCard() {
    yield takeLatest(SAGA_ACTIONS.GET_DATA_CARD, workAllDataCard);
}