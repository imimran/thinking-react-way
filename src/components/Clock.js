import React from 'react';

class Clock extends React.PureComponent {
    state = { date: new Date() };

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    // eslint-disable-next-line class-methods-use-this
    handleClick() {
        console.log('Button clicked');
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        const { date } = this.state;
        return (
            <div>
                <h1 className="heading">
                    <span className="text">{date.toLocaleDateString('bn-BD')}</span>
                </h1>
                <button type="button" onClick={this.handleClick}>
                    Click Here
                </button>
            </div>
        );
    }
}

export default Clock;
