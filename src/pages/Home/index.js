import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { MdAddShoppingCart } from 'react-icons/md';

import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../util/format';

import { ProductList } from './styles';

class Home extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get(`products`);
    const data = response.data.map(product => ({
      ...product,
      priceFormmatted: formatPrice(product.price),
    }));
    this.setState({ products: data });
  }

  handleAddProduct = id => {
    // eslint-disable-next-line react/prop-types
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { products } = this.state;
    // eslint-disable-next-line react/prop-types
    const { ammount } = this.props;

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormmatted}</span>
            <button
              type="button"
              onClick={() => this.handleAddProduct(product.id)}
            >
              <div>
                <MdAddShoppingCart size={16} color="#FFF" />{' '}
                {ammount[product.id] || 0}
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

const mapStateToProps = state => ({
  ammount: state.cart.reduce((ammount, product) => {
    ammount[product.id] = product.ammount;
    return ammount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
