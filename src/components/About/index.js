// src/components/About/index.js
import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import classnames from 'classnames';

import logo from './logo.svg';
import './style.css';

// class About extends Component {
//
//   // static propTypes = {}
//   // static defaultProps = {}
//   // state = {}
//
//     constructor(props) {
//         super(props);
//         this.handleFieldChanged = this.handleFieldChanged.bind(this);
//         this.handleSubmitClicked = this.handleSubmitClicked.bind(this);
//         this.errorFor = this.errorFor.bind(this);
//         this.state = {
//             showErrors: false,
//             validationErrors: { },
//         }
//     }

//     onCreateAccount() {
//         alert('Account Created');
//     }
//
//     handleSubmitClicked() {
//         this.setState({showErrors: true});
//         if($.isEmptyObject(this.state.validationErrors) === false) return null;
//         return this.props.onCreateAccount(this.state);
//     }
//     errorFor(field) {
//         return this.state.validationErrors[field] || "";
//     }
//
//     handleFieldChanged(field) {
//         return (e) => {
//             // update() is provided by React Immutability Helpers
//             // https://facebook.github.io/react/docs/update.html
//             let newState = update(this.state, {
//                 [field]: {$set: e.target.value}
//             });
//             newState.validationErrors = run(newState, fieldValidations);
//             this.setState(newState);
//         };
//     }

//     render() {
//     const { className, ...props } = this.props;
//     return (
//       <div className={classnames('About', className)} {...props}>
//         <h1>
//           About
//         </h1>
//       <div>
//       <h2>Account Details</h2>
//       <ul >
//           <li>
//           <label>Name</label>
//           <input type="text" ref="name" placeholder="enter your name here" />
//   </li>
//       <li>
//       <label>Password</label>
//       <input type="password" ref="password" placeholder="enter your password"  />
//   </li>
//       <li>
//       <label>Email</label>
//       <input type="email" ref="email" placeholder="enter your email here"  />
//   </li>
//           {/*<button  onClick={this.handleSubmitClicked}> Submit </button>*/}
//         <button  onSubmit={this.onSubmit} > Submit </button>
//
//       </ul>
//       </div>
//       </div>
//
//     );
//   }
// }

 class About extends Component {
    getInitialState() {
        return {
            username: ""
        };
    }

     handleUsernameChange(evt) {
         this.setState({
             username: evt.target.value
         });
     }

    onSubmit(e) {
      e.preventDefault();
       // session1 = this.setState({username: this.refs.username.getDOMNode().value});
      //  alert(ReactDOM.findDOMNode(this.refs.username).value);
//alert({username: this.refs.username.getDOMNode().value});
       alert("Hello ");
      /* Do something... */
    }
    render(){
        const { className, ...props } = this.props;
        return (

            <div className={classnames('App', className)} {...props}>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" align="center"/>
                    <h2>Enter your details here!</h2>
                </div>

                {/*<div class="container" id="main">*/}
                    {/*<div class="hero-unit">*/}

                    <table>

                <tr>
                <div>
                    <td>    <label>Name : </label></td>
                    <td>  <input type="text" ref="username" onChange={this.handleUsernameChange}></input></td>
                </div>
                </tr>

                <tr>
                <div>
                    <td>  <label>Password : </label></td>
                    <td><input type="password" ref="password"></input></td>
                </div>
                </tr>

                <tr>
                <div>
                    <td>  <label>Confirm Password : </label></td>
                    <td>   <input type="password" ref="confirmpassword"></input></td>
                </div>
                </tr>

                     <tr>
                        <div>
                            <td> <label>Email : </label></td>
                            <td> <input type="email" ref="email"></input></td>
                        </div>
                     </tr>

                <tr>
                    <td colspan="2"> <button onClick={this.onSubmit} > Submit </button></td>
                </tr>

                    </table>
             </div>

        )
    }
}

export default About;

