import React from 'react';

class Button extends React.PureComponent {
    render() {
        console.log('Button Component');
        const { change, locale } = this.props;
        return (
            <button type="button" onClick={() => change(locale)}>
                Click Here
            </button>
        );
    }
}
export default Button;
