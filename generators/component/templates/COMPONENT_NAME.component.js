/*global module*/

import React from 'react';
import SpikeComponent from 'espina/shared/base_component';
<% if (template) { %>import template from './<%= componentNameLowerCase %>.rt.html';<% }%>

class <%=  componentNameCamelCase %>Component extends SpikeComponent {

  get template(){
 	<% if (template) { %>return template;<% } else {  %> return ( <div id="<%= componentNameLowerCase %>">
  		<%= componentNameCamelCase %>Component body!
	</div>)<% }%>
  }

}

<%=  componentNameCamelCase %>Component.propTypes = {

};

module.exports =  <%=  componentNameCamelCase %>Component;
