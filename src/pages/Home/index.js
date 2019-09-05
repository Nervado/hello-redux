import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-duramo-lite-2-0-masculino/36/COL-3586-036/COL-3586-036_zoom1.jpg"
          alt="tenis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-duramo-lite-2-0-masculino/36/COL-3586-036/COL-3586-036_zoom1.jpg"
          alt="tenis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-duramo-lite-2-0-masculino/36/COL-3586-036/COL-3586-036_zoom1.jpg"
          alt="tenis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
        </button>
      </li>{' '}
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-duramo-lite-2-0-masculino/36/COL-3586-036/COL-3586-036_zoom1.jpg"
          alt="tenis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
        </button>
      </li>{' '}
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-duramo-lite-2-0-masculino/36/COL-3586-036/COL-3586-036_zoom1.jpg"
          alt="tenis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
        </button>
      </li>{' '}
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-duramo-lite-2-0-masculino/36/COL-3586-036/COL-3586-036_zoom1.jpg"
          alt="tenis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
        </button>
      </li>{' '}
    </ProductList>
  );
}
