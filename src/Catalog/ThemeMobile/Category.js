import React, { Component } from 'react';
import classNames from 'classnames';

class Category extends Component {
  
  render() {
    const {name, isActive, action} = this.props;
    const classList = classNames('category', {
        active: isActive
    });
    
    return (
      <li className={classList} onClick={action}>
        {name} 
      </li>
    );
  }
}

export default Category;
