/*global module*/

import React from 'react';

import SpikeComponent from 'espina/shared/base_component';

class MissingComponent extends SpikeComponent {

  get template(){
    return () =>(
    	<div id="missing" class="alert alert-danger">
		  {this.t("The route you're looking for does not exist.")}
		</div>
   	);
  }

}

MissingComponent.propTypes = {

};

module.exports = MissingComponent;
