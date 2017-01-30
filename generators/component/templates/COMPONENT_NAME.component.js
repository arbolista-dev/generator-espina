/*global module*/

import React from 'react';
import SpikeComponent from 'espina/shared/base_component';
<% if (template) { %>import template from './<%= componentNameLowerCase %>.rt.html';<% }%>

class <%=  componentNameCamelCase %>Component extends SpikeComponent {
  <% if (template) { %>
  get template(){
    return template;
  }<% } else {  %> 
  render() {
    return ( 
      <div id="<%= componentNameLowerCase %>">
        <%= componentNameCamelCase %>Component body!
      </div>)
  }<% }%>
}

<%=  componentNameCamelCase %>Component.propTypes = {

};

module.exports =  <%=  componentNameCamelCase %>Component;
