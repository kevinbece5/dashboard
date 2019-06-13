import React from 'react';
import * as Styles from './style';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import Login from './Authentication/signIn';
import SignUp from './Authentication/signUp';
import Profile from './Profile';
import { confirmLogin, confirmLogout } from './Actions'
import Profiles from './Profiles';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            logoutHover: false
        }
    }

    componentDidMount() {
        axios.get('/getUserInfo')
            .then(() => {
                this.props.history.push('/profile')
            })
            .catch((err) => {
                this.props.history.push('/login');
            })
    }

    onLogout = () => {
        axios.get('/logout')
            .then((res) => {
                return this.props.history.push('/login');
            })
    }


    render() {
        const { name, description, image } = this.state.user
        return (
            <Styles.Container>
                <Styles.Header>
                    <Styles.HeaderContainer>
                        <Link to="/profile" style={{ textDecoration: 'none' }} >
                            <Styles.Item selected={window.location.pathname === '/profile'}>
                                Profile
                            </Styles.Item>
                        </Link>
                        <Link to="/profiles" style={{ textDecoration: 'none' }} >
                            <Styles.Item selected={window.location.pathname === '/profiles'}>
                                All Profiles
                            </Styles.Item>
                        </Link>
                        <Styles.LogoutContainer>
                            <Styles.Item
                                onClick={this.onLogout}
                                onMouseEnter={() => this.setState({ logoutHover: true })}
                                onMouseLeave={() => this.setState({ logoutHover: false })}
                                selected={this.state.logoutHover} >
                                Logout
                            </Styles.Item>
                        </Styles.LogoutContainer>
                    </Styles.HeaderContainer>
                </Styles.Header>
                <Route exact path="/login" component={Login} />
                <Route exact path="/signUp" component={SignUp} />
                <Styles.Body>
                    <Styles.Scroller>
                        <Switch>
                            <Route exact path="/profiles" component={Profiles} />
                            <Route exact path="/profile" render={() => <Profile {...{ name, description, image }} />} />
                        </Switch>
                    </Styles.Scroller>
                </Styles.Body>
            </Styles.Container>
        )
    }
}

const mapStatetoProps = (state) => ({

});

const mapDispatchToProps = dispatch => ({
    confirmLogin: () => dispatch(confirmLogin()),
    confirmLogout: () => dispatch(confirmLogout())
});

export default connect(mapStatetoProps, mapDispatchToProps)(App);