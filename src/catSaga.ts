import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getCatsSuccess } from './redux/catSlice';


// The last point was ruined. So I take this endpoint as an example
function* toGetCatsFetch():any {
    const response = yield call(() => axios.get('https://jsonplaceholder.typicode.com/photos'))
    
    const cats = response.data

    yield put(getCatsSuccess(cats))
}

function* catSaga() {
    yield takeEvery('cats/getCatsFetch', toGetCatsFetch )
}

export default catSaga;