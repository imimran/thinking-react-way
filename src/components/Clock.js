import React from 'react';

class Clock extends React.PureComponent {
    render() {
        const { locale } = this.props;
        return (
            <h1 className="heading">
                <span className="text">{new Date().toLocaleDateString(locale)}</span>
            </h1>
        );
    }
}

export default Clock;
