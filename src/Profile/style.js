import styled from 'styled-components';

export const ProfilePicture = styled.img`
    width: 50%;
    margin: auto;
    border-radius: 12px;
`;

export const Name = styled.span`
    margin: auto;
    padding: 10px 0;
    font-size: 25px;
`;

export const Description = styled.span`
    margin: auto;
    padding: 10px 0;
    font-size: 25px;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const Edit = styled.span`
    padding: 0 15px;
    font-size: 15px;
    margin: auto 0;
`;

export const ItemContainer = styled.div`
    display: flex;
    padding: 30px 0px;

`;

export const TextArea = styled.textarea`
    &:focus {
        outline: none;
    }
`

export const Input = styled.input`
    &:focus {
        outline: none;
    }
`