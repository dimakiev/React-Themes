const Intent = require('pubsubjs').create();
const activeTheme = (window.location.pathname === '/') ? 'Desktop' : window.location.pathname.substring(1);
const Catalog = require('./Catalog/Theme' + activeTheme + '/Catalog').default;
const Cart = require('./Cart/Theme' + activeTheme + '/Cart').default;
export {Intent, Catalog, Cart, activeTheme};