import React from 'react';
import CatalogView from './../CatalogView';
import Category from './Category';
import Item from './Item';
import './Catalog.css';

class Catalog extends CatalogView {
  
  static CATALOG_ID = 'catalog';
  
  constructor () {
    super();
    this.setId(Catalog.CATALOG_ID);
  }
  
  setActiveCategory(category) {
    this.setAnimation('animation-products-fade-out', 'products', () => {
      this.setAnimation('animation-products-fade-in', 'products', null);
      super.setActiveCategory(category)
    });
  }
  
  buy(name, amount, totalPrice) {
    super.buy(name, amount, totalPrice);
  }
  
  getCategories() {
    const self = this;
    const {activeCategory} = this.state;
    const categories = [];
    
    categories.push(<Category
                    key={Catalog.DEFAULT_CATEGORY}
                    isActive={activeCategory === Catalog.DEFAULT_CATEGORY}
                    name={Catalog.DEFAULT_CATEGORY.toUpperCase()}
                    action={() => this.setActiveCategory(Catalog.DEFAULT_CATEGORY)}
                    />);
                    
    self.state.categories.map(function(category, key) {
      return categories.push(<Category key={key}
                             isActive={activeCategory === category}
                             name={category}
                             action={() => self.setActiveCategory(category)}
                             />);
    });
    return categories;
  }
  
  getProducts() {
    const self = this;
    const products = [];
    self.state.products.map(function(product, key) {
      return products.push(<Item key={key} name={product.name} price={product.price} action={self.buy} />);
    });
    return products;
  }
  
  render() {
    const {loaded} = this.state;
    
    return (
      <div id={this.getId()} className="catalog" ref={(view) => this.setView(view)}>
        <h1 className="header">{'Beer Shop'}</h1>
        {!loaded && <div className="loading">{'Loading...'}</div>}
        {loaded && <ul className="categories">
          {this.getCategories()}
        </ul>}
        {loaded && <div className="products">
          <div className="header">
            <div>{'Name'}</div>
            <div>{'Amount'}</div>
            <div>{'Price'}</div>
            <div>{'Total price'}</div>
          </div>
          {this.getProducts()}
        </div>}
        <div className="footer">{'All rights reserved ©'}</div>
      </div>
    );
  }
}

export default Catalog;
