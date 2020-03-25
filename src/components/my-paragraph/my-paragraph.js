import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './my-paragraph.css';

class MyParagraph extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.text
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            name: e.target.name.value
        });
    }

    render() {
        return (
            <>
                <p className="text-center">Hola {this.state.name}</p>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" />
                    <button type="submit">change name</button>
                </form>
            </>
        );
    }
}

export default MyParagraph;