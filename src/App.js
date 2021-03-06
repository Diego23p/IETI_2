import React, {Component} from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import logo from './components/logo.svg';
import {Login} from "./components/Login";
import {TodoApp} from "./components/TodoApp";
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {isLoggedIn:false};
        this.setUser = this.setUser.bind(this);
    }

    setUser() {
        localStorage.setItem("Diego",1234);
        if (localStorage.getItem("isLoggedIn") == null){
            localStorage.setItem("isLoggedIn",false)
         }
    }

    render() {

        const LoginView = () => {
            return <Login/>
        };

        const TodoAppView = () => {
            if (localStorage.getItem("isLoggedIn") == "false"){
                alert("Inicie sesión para ir a ToDo")
                return <Redirect to="/" />
            }
            return <TodoApp/>
        };

        return (
            <Router>
                <div className="App" onLoad={this.setUser}>
                
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>

                    <br/>
                    <br/>

                    <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                            <React.Fragment>
                                <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
                                    Menu
                                </Button>
                                <Menu {...bindMenu(popupState)}>
                                    <MenuItem onClick={popupState.close}>
                                        <Link to="/" >Login</Link>
                                    </MenuItem>
                                    <MenuItem onClick={popupState.close}>
                                        <Link to="/todo" > Todo </Link>
                                    </MenuItem>
                                </Menu>
                            </React.Fragment>
                        )}
                    </PopupState>

                    <div>
                        <Route exact path="/" component={LoginView}/>
                        <Route path="/todo" component={TodoAppView}
                        />
                    </div>
                </div>
            </Router>
        );
    }

}

export default App;