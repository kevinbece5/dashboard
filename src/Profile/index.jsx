import React from 'react';
import * as Styles from './style';


const Profile = (props) => (
    <Styles.Container>
        <Styles.ProfilePicture src={props.image} />
        <Styles.Name>{props.name}</Styles.Name>
        <Styles.Description>{props.description}</Styles.Description>
    </Styles.Container>
)

export default Profile;