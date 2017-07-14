// src/components/Home/index.js
import React, { Component } from 'react';
import classnames from 'classnames';
import logo from './logo.svg';

import './style.css';

class Home extends Component {
    static propTypes = {};
    static defaultProps = {};
    state = {};



    render() {
        const { className, ...props } = this.props;
        return (
            <div className={classnames('Home', className)} {...props}>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                <h1>
                    Home
                </h1>

            </div>
            </div>
        );
    }
}

export default Home;
