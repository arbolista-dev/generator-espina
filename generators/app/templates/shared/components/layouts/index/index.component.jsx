/*global module*/

import React from 'react';
import _ from 'lodash';
import { toJS } from 'immutable';

import SpikeComponent from 'espina/shared/base_component';
import authenticate from 'shared/lib/mixins/authenticate_component';
import indexContainer from './index.container';
import { detailExample } from 'shared/reducers/current_example.reducer';

class IndexComponent
  extends authenticate(SpikeComponent) {

  get template(){
    return () => (
      <div id="index">
        {!this.data_loaded ?  <div  className="alert alert-warning">Loading examples...</div> : null}
        {this.data_loaded ? 
          <div className="btn-group">
            {
              this.examples.map((example)=>{
                return (
                   <button 
                    className="btn btn-primary"
                    key={example.id}
                    onClick={this.detailExample.bind(this, example)}>
                      {example.first_name} {example.last_name}
                  </button> 
                )
              })
            }
          </div>
          : null
        }
        <div>
          <button className="btn btn-primary"
            onClick={this.goToHiddenText.bind(this)}>{this.t('Show text')}</button>
        </div>
        <div className="space">
          
        </div>
        <div id="hidden">
          Hidden Text
        </div>
      </div>
    );
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
