class BeerShop {
  
  constructor() {
    this.cart = [];
  }
  
  getCategories() {
    return new Promise((resolve) => {
        return setTimeout(() => {
          return fetch('categories.json').then((response) => {
            return resolve(response.json());
          });
        }, 1000);
    });
  }
  
  getProducts() {
    return new Promise((resolve) => {
        return setTimeout(() => {
          return fetch('products.json').then((response) => {
            return resolve(response.json());
          });
        }, 2000);
    });
  }
  
  mergeToCart(product, products) {
    const p = products.filter((item) => item.name === product.name);
    if (!p.length) {
      products.push(product);
    } else {
      const key = products.indexOf(p[0]);
      products[key] = {
        name: product.name,
        amount: p[0].amount + product.amount,
        totalPrice: p[0].totalPrice + product.totalPrice
      };
    }
    this.cart = products;
    localStorage.setItem('Cart', JSON.stringify(this.cart));
    return products;
  }
  
  setCartProducts(products) {
    this.cart = products;
    if (products.length) {
      localStorage.setItem('Cart', JSON.stringify(this.cart));
    } else {
      localStorage.removeItem('Cart');
    }
  }
  
  cleanCartProducts() {
    this.cart = [];
    localStorage.removeItem('Cart');
  }
  
  orderCartProducts() {
    this.cart = [];
    localStorage.removeItem('Cart');
  }
  
  getCartProducts() {
    const products = localStorage.getItem('Cart');
    if (!products) {
      return [];
    }
    this.cart = JSON.parse(products);
    return this.cart;
  }

}

const beerShopService = new BeerShop();
export default beerShopService;
