/**
 * Created by ravi.hamsa on 6/29/16.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _FormElement2 = require('./FormElement');

var _FormElement3 = _interopRequireDefault(_FormElement2);

var Select = (function (_FormElement) {
    _inherits(Select, _FormElement);

    function Select() {
        _classCallCheck(this, Select);

        _get(Object.getPrototypeOf(Select.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Select, [{
        key: 'render',
        value: function render() {

            var defaultValue = this.getDefaultValue();
            var selectText = this.props.selectText || 'Select';
            var options = this.props.options || [];
            var formClasses = this.getFormClasses();

            return _react2['default'].createElement(
                'fieldset',
                { className: formClasses },
                _react2['default'].createElement(
                    'label',
                    null,
                    this.props.label
                ),
                _react2['default'].createElement(
                    'select',
                    { className: 'form-control', name: this.props.name,
                        placeholder: this.props.placeholder, onChange: this.onChange.bind(this), value: defaultValue },
                    _react2['default'].createElement(
                        'option',
                        { value: '-1' },
                        selectText
                    ),
                    options.map(function (option, index) {
                        return _react2['default'].createElement(
                            'option',
                            { value: option.id, key: index },
                            option.name
                        );
                    }, this)
                ),
                this.props.helperText ? _react2['default'].createElement(
                    'small',
                    { className: 'text-muted' },
                    this.props.helperText
                ) : '',
                this.props.errors ? _react2['default'].createElement(
                    'small',
                    { className: 'text-muted' },
                    this.props.errors
                ) : ''
            );
        }
    }]);

    return Select;
})(_FormElement3['default']);

exports['default'] = Select;
module.exports = exports['default'];