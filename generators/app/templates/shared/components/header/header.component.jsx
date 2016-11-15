/*global module*/

import React from 'react';

import SpikeComponent from 'espina/shared/base_component';
import { login, logout } from 'shared/reducers/session.reducer';

class HeaderComponent extends SpikeComponent {

  get template(){
    return () => (
      <nav style={{"marginBottom":"0px"}} className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button type="button" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar" className="navbar-toggle collapsed">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a href="/" className="navbar-brand">Spike</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              {!this.logged_in ?
                <li><a href="#"
                  onClick={this.login.bind(this)}>{this.t('Login')}</a></li>
                : null }
              {this.logged_in ?
                <li><a href="#"
                  onClick={this.logout.bind(this)}>{this.t('Logout')}</a></li>
                : null
              }
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  get logged_in(){
    return this.props.logged_in;
  }

  login(){
    this.pushRoute('Index', login);
  }

  logout(){
    this.pushRoute('Login', logout);
  }

}

HeaderComponent.propTypes = {
  logged_in: React.PropTypes.bool.isRequired
};

module.exports = HeaderComponent;
