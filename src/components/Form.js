import React from 'react';

class Form extends React.Component {
    state = {
        title: 'js',
        text: 'Js is asesame',
        gender: 'Male',
        isHonest: true,
    };

    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value,
        });
        // if (e.target.type === 'text') {
        //     this.setState({
        //         title: e.target.value,
        //     });
        // } else if (e.target.type === 'textarea') {
        //     this.setState({
        //         text: e.target.value,
        //     });
        // } else if (e.target.type === 'select-one') {
        //     this.setState({
        //         gender: e.target.value,
        //     });
        // } else if (e.target.type === 'checkbox') {
        //     this.setState({
        //         isHonest: e.target.checked,
        //     });
        // } else {
        //     console.log(e.target.value);
        //     console.log('Nothing');
        // }
    };

    submitHandlar = (e) => {
        const { title, text, gender, isHonest } = this.state;
        e.preventDefault();
        console.log(title, text, gender, isHonest);
    };

    render() {
        const { title, text, gender, isHonest } = this.state;
        return (
            <form onSubmit={this.submitHandlar}>
                <input type="text" name="text" value={title} onChange={this.handleChange} />
                <br />
                <br />
                <textarea
                    type="textarea"
                    name="textarea"
                    value={text}
                    onChange={this.handleChange}
                />
                <br />
                <br />
                <select
                    type="select-one"
                    name="select-one"
                    value={gender}
                    onChange={this.handleChange}
                >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <br />
                <br />
                <input
                    type="checkbox"
                    name="checkbox"
                    checked={isHonest}
                    onChange={this.handleChange}
                />
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Form;
