import React from 'react';
import axios from 'axios';
import * as Styles from './style';


export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            imageEdit: false,
            nameEdit: false,
            descriptionEdit: false,
            image: '',
            name: '',
            description: '',
        }
    }

    componentDidMount() {
        this.getUserInfo();
    }

    updateField = (field) => {
        axios.post('/updateUserInfo', { id: this.state.id, field: { field, value: this.state[field] } })
            .then(() => this.setState({ [`${field}Edit`]: false }))
            .then(() => this.getUserInfo())
    }

    getUserInfo = () => {
        axios.get('/getUserInfo')
            .then((res) => {
                const { name, description, image, id } = res.data;
                this.setState({
                    user: {
                        name,
                        description,
                        image,
                        id
                    },
                    image,
                    name,
                    description
                })
            })
    }

    name = (e) => this.setState({ name: e.target.value })

    description = (e) => this.setState({ description: e.target.value })

    render() {
        return (
            <Styles.Container>
                {this.state.imageEdit ?
                    <Styles.ItemContainer>
                        <Styles.Input className={"input-group-text"} />
                        <Styles.Edit>Save</Styles.Edit>
                        <Styles.Edit>Back</Styles.Edit>
                    </Styles.ItemContainer>
                    :
                    <Styles.ProfilePicture src={this.state.user.image} />
                }
                {this.state.nameEdit ?
                    <Styles.ItemContainer>
                        <Styles.Input value={this.state.name} onChange={this.name} className={"input-group-text"} />
                        <Styles.Edit onClick={() => this.updateField('name')}>Save</Styles.Edit>
                        <Styles.Edit onClick={() => this.setState({ nameEdit: false })}>Back</Styles.Edit>
                    </Styles.ItemContainer>
                    :
                    <Styles.ItemContainer>
                        <Styles.Name>{this.state.user.name}</Styles.Name>
                        <Styles.Edit onClick={() => this.setState({ nameEdit: true })}>Edit</Styles.Edit>
                    </Styles.ItemContainer>
                }
                {this.state.descriptionEdit ?
                    <Styles.ItemContainer>
                        <Styles.TextArea class="form-control" value={this.state.description} onChange={this.description} className={"input-group-text"} />
                        <Styles.Edit onClick={() => this.updateField('description')}>Save</Styles.Edit>
                        <Styles.Edit onClick={() => this.setState({ descriptionEdit: false })}>Back</Styles.Edit>
                    </Styles.ItemContainer>
                    :
                    <Styles.ItemContainer>
                        <Styles.Description>{this.state.user.description}</Styles.Description>
                        <Styles.Edit onClick={() => this.setState({ descriptionEdit: true })}>Edit</Styles.Edit>
                    </Styles.ItemContainer>
                }
            </Styles.Container>
        )
    }
}
