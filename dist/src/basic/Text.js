Object.defineProperty(exports,"__esModule",{value:true});exports.Text=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName="src/basic/Text.js";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require("react");var _react2=_interopRequireDefault(_react);
var _reactNative=require("react-native");
var _lodash=require("lodash");var _lodash2=_interopRequireDefault(_lodash);

var _nativeBaseShoutemTheme=require("native-base-shoutem-theme");
var _animation=require("@shoutem/animation");
var _mapPropsToStyleNames=require("../Utils/mapPropsToStyleNames");var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Text=function(_Component){_inherits(Text,_Component);function Text(){_classCallCheck(this,Text);return _possibleConstructorReturn(this,(Text.__proto__||Object.getPrototypeOf(Text)).apply(this,arguments));}_createClass(Text,[{key:"render",value:function render()
{var _this2=this;
return(
_react2.default.createElement(_reactNative.Text,_extends({ref:function ref(c){return _this2._root=c;}},this.props,{__source:{fileName:_jsxFileName,lineNumber:12}}),
this.props.uppercase?
_lodash2.default.toUpper(this.props.children):
this.props.children));


}}]);return Text;}(_react.Component);


Text.propTypes=_extends({},
_reactNative.Text.propTypes,{
uppercase:_react.PropTypes.bool,
style:_react.PropTypes.oneOfType([
_react.PropTypes.object,
_react.PropTypes.number,
_react.PropTypes.array])});



Text.defaultProps={
uppercase:false};


var AnimatedText=(0,_animation.connectAnimation)(Text);
var StyledText=(0,_nativeBaseShoutemTheme.connectStyle)("NativeBase.Text",{},_mapPropsToStyleNames2.default)(
Text);exports.


Text=StyledText;
//# sourceMappingURL=Text.js.map