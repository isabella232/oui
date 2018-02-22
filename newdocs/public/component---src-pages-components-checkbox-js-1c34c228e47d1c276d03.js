webpackJsonp([0x8d2b22515019],{245:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var r=l(1),i=n(r),u=l(5),d=n(u),s=l(297),f=n(s),p=l(632),b=n(p),h={name:"Checkbox\n",description:"",start:{line:1,column:1},end:{line:14,column:4},example:[{type:"html",description:null,code:'<ul class="oui-input-list">\n  <li>\n    <input name="checkbox-set-1" id="bar-1" type="checkbox" checked>\n    <label class="oui-label" for="bar-1">Checkbox Option #1\n  </li>\n  <li>\n    <input name="checkbox-set-1" id="bar-2" type="checkbox">\n    <label class="oui-label" for="bar-2">Checkbox Option #2\n  </li>\n</ul>'}]},m={description:"Generates a `checkbox` element wrapped in a Label",methods:[],props:{checked:{type:{name:"bool"},required:!1,description:"Boolean to set checkbox, for controlled component"},defaultChecked:{type:{name:"bool"},required:!1,description:"Boolean for how checkbox renders initially"},isDisabled:{type:{name:"bool"},required:!1,description:"Prevents checkbox from being modified and appears disabled"},label:{type:{name:"string"},required:!1,description:"Text that describes the checkbox"},onChange:{type:{name:"func"},required:!1,description:"Function that fires when the checkbox is clicked"},testSection:{type:{name:"string"},required:!1,description:"Hook for automated JavaScript tests"}},private:!1},k={react:m,examples:f.default?f.default:null,readme:b.default?b.default:null,sass:h},x=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return c(t,e),t.prototype.render=function(){return i.default.createElement(d.default,{data:k})},t}(i.default.Component);t.default=x,e.exports=t.default},632:function(e,t){e.exports="# Checkbox Component\n\n- Add storybook link\n- Add design guidelines"},297:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=l(1),o=n(a),c=l(298),r=n(c),i=function(){};t.default=[{examples:[o.default.createElement(r.default,{defaultChecked:!1,label:"onChange Example",onChange:i})]},{examples:[o.default.createElement("div",null,o.default.createElement(r.default,{label:"First Value"}),o.default.createElement(r.default,{label:"Second Value"}),o.default.createElement(r.default,{label:"Third Value"}))]},{examples:[o.default.createElement(r.default,{defaultChecked:!0,label:"Checked by default"})]},{examples:[o.default.createElement(r.default,{isDisabled:!0,defaultChecked:!0,label:"Disabled checkbox"})]}],e.exports=t.default},298:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=l(1),o=n(a),c=l(2),r=n(c),i=l(9),u=n(i),d=l(31),s=n(d),f=function(e){var t=e.checked,l=e.defaultChecked,n=e.isDisabled,a=e.label,c=e.onChange,r=e.testSection,i=(0,u.default)({"flush--bottom":!0,"push--left":!0,"weight--normal":!0,"cursor--pointer":!0,"oui-label--disabled":n}),d=(0,u.default)({"flex--none":!0});return o.default.createElement(s.default,{testSection:r&&r+"-label"},o.default.createElement("div",{className:"flex"},o.default.createElement("input",{"data-oui-component":!0,type:"checkbox",defaultChecked:l,checked:t,className:d,disabled:n,onChange:c,"data-test-section":r,style:{marginTop:"0.35em"}}),o.default.createElement("div",{className:i},a)))};f.propTypes={checked:r.default.bool,defaultChecked:r.default.bool,isDisabled:r.default.bool,label:r.default.string,onChange:r.default.func,testSection:r.default.string},t.default=f,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-components-checkbox-js-1c34c228e47d1c276d03.js.map