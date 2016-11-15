/*global module*/

import React from 'react';

import SpikeComponent from 'espina/shared/base_component';
import { login, logout } from 'shared/reducers/session.reducer';

class HeaderComponent extends SpikeComponent {

  get template(){
    return () => (
      <nav style="margin-bottom:0px;" class="navbar navbar-default">
        <div class="container">
          <div class="navbar-header">
            <button type="button" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar" class="navbar-toggle collapsed">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a href="/" class="navbar-brand">Spike</a>
          </div>
          <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
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
