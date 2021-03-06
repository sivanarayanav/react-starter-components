/**
 * Created by ravi.hamsa on 6/29/16.
 */

import React, {Component} from "react";
import PropTypes from "prop-types";
import FormElement from './FormElement';


class HiddenInput extends FormElement {
    render() {

        let defaultValue = this.getDefaultValue();
        let formClasses = this.getFormClasses();
        let value = defaultValue || '';
        let errors = this.getErrors();

        return <input type="hidden" className="form-control" name={this.props.name}
                      onChange={this.onChange.bind(this)}
                      value={value}/>
    }
}


export default HiddenInput;

HiddenInput.defaultProps = {
    ...FormElement.defaultProps,
    type: 'hidden'
}

