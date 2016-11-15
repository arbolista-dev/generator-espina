/*global module*/

import React from 'react';
import _ from 'lodash';
import { toJS } from 'immutable';

import SpikeComponent from 'espina/shared/base_component';
import authenticate from 'shared/lib/mixins/authenticate_component';
import indexContainer from './index.container';
import { detailExample } from 'shared/reducers/current_example.reducer';
import template from './index.rt.html';

class IndexComponent
  extends authenticate(SpikeComponent) {

  get template(){
    return template;
  }

  get examples(){
    return this.props.examples && _.values(this.props.examples.get('examples').toJS());
  }

  get data_loaded(){
    return !!this.props.examples && !this.props.examples.get('load_error');
  }

  componentDidMount(){
    this.props.ensureExamples(this.props.session.get('token'));
  }

  detailExample(example){
    // route_name, action, payload.
    this.pushRoute('Details', detailExample, {id: example.id});
  }
  goToHiddenText() {
    this.pushRoute('Index', null,{},{},"#hidden");
  }

}

IndexComponent.propTypes = {
  ensureExamples: React.PropTypes.func.isRequired,
  examples: React.PropTypes.object,
  session: React.PropTypes.object.isRequired
};

module.exports = indexContainer(IndexComponent);
