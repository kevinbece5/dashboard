import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
`;

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
`;

export const ProfilePicture = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
`;

export const Name = styled.span`
    padding: 25px 0;
    align-self: center;
    font-size: 19px;
`;
