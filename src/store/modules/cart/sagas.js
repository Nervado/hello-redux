import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';
import { formatPrice } from '../../../util/format';

import { addToCartSuccess, updateAmmountSuccess } from './actions';

function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmmount = stock.data.amount; // ammount
  const currentAmmount = productExists ? productExists.ammount : 0;

  const ammount = currentAmmount + 1;

  if (ammount > stockAmmount) {
    toast.error('Quantidade indisponível no estoque!');
    return;
  }
  if (productExists) {
    yield put(updateAmmountSuccess(id, ammount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      ammount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));

    history.push('/cart');
  }
}

function* updateAmount({ id, ammount }) {
  if (ammount <= 0) return;

  const stock = yield call(api.get, `stock/${id}`);
  const stockAmount = stock.data.amount;
  if (ammount > stockAmount) {
    toast.error('Quantidade indisponível no estoque!');
    return;
  }

  yield put(updateAmmountSuccess(id, ammount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
