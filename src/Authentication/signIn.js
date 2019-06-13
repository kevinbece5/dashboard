import React from "react";
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import * as Styles from "./style";
import axios from 'axios';
import { confirmLogin } from '../actions';
import { Spring, config } from 'react-spring';
import * as _ from 'lodash'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loginErr: false,
        }
    }

    componentDidMount() {
        axios.get('/confirmLogin')
            .then((res) => {
                if (res.status === 200) {
                    this.props.history.push('/profile');
                }
            })
    }


    email = (e) => {
        if (this.state.loginErr) {
            this.setState({ email: e.target.value, loginErr: false })
        } else {
            this.setState({ email: e.target.value })
        }
    }

    password = (e) => {
        if (this.state.loginErr) {
            this.setState({ password: e.target.value, loginErr: false })
        } else {
            this.setState({ password: e.target.value })
        }
    }

    login = () => {
        axios.post('/login', {
            email: this.state.email,
            password: this.state.password
        })
            .then((res) => {
                this.props.history.push('/profile');
            })
            .catch((err) => {
                console.log('err', err)
                this.setState({
                    loginErr: true
                })
            })
    }

    signUp = () => this.props.history.push('/signup')

    render() {
        return (
            <Styles.Container>
                {
                    this.state.loginErr &&
                    <Spring
                        from={{ opacity: 0, width: 0 }}
                        to={{ opacity: 1, width: 100 }}
                        config={config.stiff}
                    >
                        {({ opacity }) =>
                            <Styles.Error style={{ opacity }}>
                                <Styles.ErrorMessege>
                                    Incorrect Password or Email
                                </Styles.ErrorMessege>
                            </Styles.Error>
                        }
                    </Spring>
                }
                <Styles.Login>
                    <Styles.FieldContainer>
                        <Styles.Header>
                            Email
                        </Styles.Header>
                        <Styles.Input value={this.state.email} onChange={this.email} />
                    </Styles.FieldContainer>
                    <Styles.FieldContainer>
                        <Styles.Header>
                            Password
                        </Styles.Header>
                        <Styles.Input type="password" value={this.state.password} onChange={this.password} />
                    </Styles.FieldContainer>
                    <Styles.LoginContainer >
                        <Styles.Button onClick={this.login} > Login</Styles.Button>
                        <Styles.Button onClick={this.signUp} > Sign Up</Styles.Button>
                    </Styles.LoginContainer>
                </Styles.Login>
            </Styles.Container>
        )
    }
}

const mapStatetoProps = (state) => ({
    loggedIn: state.dashboard.loggedIn
});

const mapDispatchToProps = dispatch => ({
    confirmLogin: (email, password) => dispatch(confirmLogin(email, password)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(Login);