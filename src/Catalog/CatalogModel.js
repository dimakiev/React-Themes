import AbstractView from './../AbstractView';
import beerShopService from './../Service/BeerShop';
import { Intent } from './../Bootstrap';

class CatalogModel extends AbstractView {
  
  static DEFAULT_CATEGORY = 'all';
  
  constructor () {
    super();
    
    this.products = [];
    this.categories = [];
    
    this.state = {
      categories: [],
      products: [],
      loaded: false,
      activeCategory: CatalogModel.DEFAULT_CATEGORY
    };
  }
  
  componentDidMount() {
    beerShopService.getCategories().then(categories => {
      this.categories = categories;
      this.setState({categories: categories});
      this.categories.length && this.products.length && this.setState({loaded: true});
    });
    beerShopService.getProducts().then(products => {
      this.products = products;
      this.setState({products: products});
      this.categories.length && this.products.length && this.setState({loaded: true});
    });
  }
  
  setActiveCategory(category) {
    const products = (category === CatalogModel.DEFAULT_CATEGORY) ? this.products : this.products.filter((product) => product.country === category);
    this.setState({
      activeCategory: category,
      products: products
    });
  }
  
  buy(name, amount, totalPrice) {
    const product = {
      name: name,
      amount: parseInt(amount, 10),
      totalPrice: parseFloat(totalPrice)
    };
    
    Intent.publish('buy', null, product);
  }
  
}

export default CatalogModel;
