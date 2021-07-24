import React from 'react';

class Button extends React.PureComponent {
    render() {
        console.log('Button Component');
        const { change, locale, show } = this.props;
        return (
            <diV>
                <button type="button" onClick={() => change(locale)}>
                    {locale === 'bn-BD' ? 'Change Clock' : 'ঘড়ি পরিবর্তন করুন'}
                </button>
                {show && <p>Hello</p>}
            </diV>
        );
    }
}
export default Button;
