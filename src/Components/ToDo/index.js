import React, { Component } from 'react';
import Switch from 'react-switch';

export default class ToDoComponent extends Component {
    state = {
        checked: false
    }
    componentDidMount() {
        const { item } = this.props;
        this.setState({ checked: item.completed })
    }

    toggleSwitch = () => {
        const { checked } = this.state;
        this.setState({ checked: !checked })
    };

    render() {
        const { item } = this.props
        return (
            <div className="col-12 mt-2">
                <Switch handleDiameter={10} height={15} width={30} onColor="#20c997" onChange={()=>this.toggleSwitch()} checked={this.state.checked} />
                <span className="text-checkbox ml-1">{item.title}</span>
            </div>
        )
    }
}
