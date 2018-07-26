import React, { Component } from 'react';

class ItemList extends Component {

  getItems() {
    const {items, action} = this.props;
    const products = [];
    
    items.map(function(item, key) {
      return products.push(<div key={key} className="item">
              <div>{item.name}</div>
              <div className="delete" onClick={() => action(key)}>{'X'}</div>
              <div className="amount">{item.amount}</div>
              <div className="price">{item.totalPrice} €</div>
            </div>);
    });
    
    return products;
  }

  render() {
    return (
      <div className="list">
        {this.getItems()}
      </div>
    );
  }
}

export default ItemList;
