/*global module*/

import React from 'react';

import SpikeComponent from 'espina/shared/base_component';
import container from './login.container';
import { login } from 'shared/reducers/session.reducer';

class LoginComponent extends SpikeComponent {

  constructor(props, context){
    super(props, context);
    var login = this;
    login.state = {};
  }

  get template(){
    return () => (
      <div id="login">
        <button className="btn btn-primary btn-lg"
          onClick={this.login.bind(this)}>{this.t('Login')}</button>
      </div>
    );
  }

  login(){
    this.pushRoute('Index', login);
  }

}

LoginComponent.propTypes = {
  login: React.PropTypes.func.isRequired
};

module.exports = container(LoginComponent);
