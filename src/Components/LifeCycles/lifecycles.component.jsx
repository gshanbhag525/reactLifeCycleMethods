import React from 'react';

class Lifecycles extends React.Component {
    constructor() {
        super()
        console.log("cosntructor ")
    }


    // mount update unmount 3 stages of lifecycle
    
    //mount
    componentDidMount() {
        console.log("component did mount")
    }

    // update
    componentDidUpdate() {
        console.log("components did update")
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("components should update?")
        return nextProps.text !== this.setState.text;
    }

    //unmount
    componentWillUnmount() {
        console.log("compone will unmount")
    }

    render() {
        return(
            <div className='lifecycles'>
                {console.log("render")}
                <h3>LIFECYCLES COMPONENT</h3>
                {this.props.text}
            </div>
        );
    }

}

export default Lifecycles;