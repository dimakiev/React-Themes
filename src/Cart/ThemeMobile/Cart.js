import React from 'react';
import CartView from './../CartView';
import ItemList from './ItemList';
import './Cart.css';

class Cart extends CartView {
  
  constructor () {
    super();
    this.setId(Cart.CART_ID);
  }

  render() {
    const deleteItem = super.deleteItem.bind(this);
    const {products} = this.state;
    
    return (
      <div id={this.getId()} className="cart" ref={(view) => this.setView(view)}>
        <h4 className="header">{'Your Cart'}</h4>
        <ItemList items={products} action={deleteItem} />
        {products.length ? <button className="clean-button" onClick={() => super.clean()}>{'CLEAN UP'}</button> : null}
        {products.length ? <button className="pay-button" onClick={() => super.order()}>{'ORDER NOW'}</button> : null}
      </div>
    );
  }
}

export default Cart;
