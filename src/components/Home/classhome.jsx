import React from 'react';
class ClassComponentsHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    componentDidMount() {
        document.title = `You clicked ${this.state.count} times`;
    }
    componentDidUpdate() {
        document.title = `You clicked ${this.state.count} times`;
    }
    render() {
        return (
            <div>
                <p>Class Component</p>
                <h4 className="name">Đây là props :  {this.props.name}</h4>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click me
                </button>
            </div>
        );
    }
}
export default ClassComponentsHome;