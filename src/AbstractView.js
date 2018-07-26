import { Component } from 'react';

class AbstractView extends Component {
  
  constructor () {
    super();
    this.view = null;
    this.id = '';
  }
  
  setView(view) {
    this.view = view;
  }
  
  getView() {
    return this.view;
  }
  
  setId(id) {
    this.id = id;
  }
  
  getId(id) {
    return this.id;
  }
  
  setAnimation(className, element = null, action = null) {
    const self = this;
    const view = (element) ? self.view.getElementsByClassName(element)[0] : self.view;
    view.classList.add(className);
    view.addEventListener('animationend', () => {
      view.classList.remove(className);
      action && action();
    });
  }
  
  
}

export default AbstractView;
