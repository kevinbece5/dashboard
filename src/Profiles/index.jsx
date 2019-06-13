import React from 'react';
import * as Styles from './style';
import axios from 'axios';

export default class Profiles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get('/allUsers')
            .then((res) => {
                console.log('here', res.request.responseURL);
                this.setState({
                    users: res.data
                })
            })
    }

    render() {
        return (
            <Styles.Container>
                {
                    this.state.users.length && this.state.users.map((i) => (
                        <Styles.ProfileContainer>
                            <Styles.ProfilePicture src={i.image} />
                            <Styles.Name>{i.name}</Styles.Name>
                        </Styles.ProfileContainer>
                    ))
                }
            </Styles.Container>
        )
    }
}