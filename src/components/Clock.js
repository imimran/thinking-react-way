import React from 'react';
import Button from './Button';

class Clock extends React.PureComponent {
    state = {
        date: new Date(),
        locale: 'bn-BD',
    };

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    // eslint-disable-next-line class-methods-use-this
    handleClick = (locale) => {
        console.log('Button clicked');
        this.setState({
            locale,
        });
    };

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        console.log('Clock Component');

        const { date, locale } = this.state;
        return (
            <div>
                <h1 className="heading">
                    <span className="text">{date.toLocaleTimeString(locale)}</span>
                </h1>
                {locale === 'bn-BD' ? (
                    <Button change={this.handleClick} locale="en-US" show={false} />
                ) : (
                    <Button change={this.handleClick} locale="bn-BD" show />
                )}
            </div>
        );
    }
}

export default Clock;
