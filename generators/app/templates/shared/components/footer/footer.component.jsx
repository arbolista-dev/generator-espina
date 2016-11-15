/*global module*/

import React from 'react';

import SpikeComponent from 'espina/shared/base_component';

class FooterComponent extends SpikeComponent {

  get template(){
    return () => (
    	<div id="app_footer">
		  <div className="container">Footer</div>
		</div>
    )
  }

}

FooterComponent.propTypes = {

};

module.exports = FooterComponent;
