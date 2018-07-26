import React, { Component } from 'react';
import classNames from 'classnames';

class Item extends Component {
  
  constructor () {
    super();
    this.view = null;
    this.state = {
      amount: 0  
    };
  }
  
  changeAmount = () => {
    if (this.view.value < 0 || this.view.value > 24) {
      return;
    }
    this.setState({amount: this.view.value});
  }
  
  buy(name, totalPrice) {
    const {action} = this.props;
    const {amount} = this.state;
    action(name, amount, totalPrice);
    this.setState({amount: 0});
  }
  
  render() {
    const {name, price} = this.props;
    const {amount} = this.state;
    const classList = classNames('item');
    const classButton = classNames('button', {disabled: parseInt(amount, 10) === 0});
    const totalPrice = (amount * price).toFixed(2);
    
    return (
      <div className={classList}>
        <div>{name}</div>
        <div><input type="number" onChange={this.changeAmount} value={amount} placeholder="0" ref={(view) => this.view = view} /></div>
        <div>{price} €</div>
        <div>{totalPrice} € <button className={classButton} onClick={() => this.buy(name, totalPrice)}>Buy</button></div>
      </div>
    );
  }
}

export default Item;
