import React, { Component } from 'react';
import classNames from 'classnames';
import './Theme.css';

class Theme extends Component {

  static DESKTOP_THEME = 'Desktop';
  static MOBILE_THEME = 'Mobile';

  constructor () {
    super();

    this.state = {
      activeTheme: Theme.DESKTOP_THEME
    };
  }
  
  componentDidMount() {
    const {activeTheme} = this.props;
    this.setState({activeTheme: activeTheme});
  }
  
  getThemes() {
    const classListDesktop = classNames({
        active: this.state.activeTheme === Theme.DESKTOP_THEME
    });
    const classListMobile = classNames({
        active: this.state.activeTheme  === Theme.MOBILE_THEME
    });
    const themes = [];
    themes.push(<a href="/Desktop" key="desktop" className={classListDesktop}>{'D'}</a>);
    themes.push(<a href="/Mobile" key="mobile" className={classListMobile}>{'M'}</a>);
    return themes;
  }

  render() {
    
    return (
      <div className="theme">
        <h3>{'Theme'}</h3>
        {this.getThemes()}
      </div>
    );
  }
}

export default Theme;
