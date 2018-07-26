import AbstractView from './../AbstractView';
import { Intent } from './../Bootstrap';
import beerShopService from './../Service/BeerShop';

class CartModel extends AbstractView {
  
  
  constructor () {
    super();
    
    this.state = {
      products: []
    };
  }
  
  componentDidMount() {
    this.setState({products: beerShopService.getCartProducts()});
    Intent.subscribe('buy', this.addToCart.bind(this));
  }
  
  componentWillUnmount() {
    Intent.unsubscribe('buy', this.addToCart.bind(this));
  }
  
  addToCart(context, product) {
    const products = beerShopService.mergeToCart(product, this.state.products);
    this.setState({products: products});
  }
  
  deleteItem(key) {
    const products = this.state.products.filter((item , i) => i !== key);
    beerShopService.setCartProducts(products);
    this.setState({products: products});
  }
  
  clean() {
    beerShopService.cleanCartProducts();
    this.setState({products: []});
  }
  
  order() {
    beerShopService.orderCartProducts();
    this.setState({products: []});
    alert('Done!');
  }
  
}

export default CartModel;
