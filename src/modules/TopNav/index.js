import React, { Component } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom"

import "./style.css";


class TopNav extends Component {
    state = {
        current: "",
    };

    handleClick = e => {
        this.setState({
            current: e.key,
        });
    };

    static getDerivedStateFromProps(nextProps) {
        return {current: nextProps.location.pathname}
    }

    render() {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
                className="top-menu"
            >
                <Menu.Item key="/rain-chance">
                    <Link to="/rain-chance">
                        Rain Chance
                    </Link>
                </Menu.Item>
                <Menu.Item key="/static-weather">
                    <Link to="/static-weather">
                        Weather Info
                    </Link>
                </Menu.Item>
            </Menu>
        );
    }
}

export default TopNav;
