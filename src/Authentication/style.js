import styled from 'styled-components'


export const Container = styled.div`
    font-family: sans-serif;
    background-color: #1f4d79;
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    justify-content: center;
    flex-direction: column
`;

export const Login = styled.div`
    align-self: center;
    background-color: #fff;
    border-radius: 5px;
    width: 30%;
    height: 50%;
    display: flex;
    flex-direction: column;
`;

export const Header = styled.span`
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 1px;
    padding-right: 8px;
    width: 25%;
`;

export const Input = styled.input`
    padding: 4px;
    width: 65%;
    border-radius: 8px;
    border-width: 1px;
`;


export const Button = styled.button`
    display: flex;
    justify-content: center;
    padding: 6px;
    margin: auto;
    width: 45%;
    font-size: 20px;
    border-radius: 11px;
    background-color: #779;
    color: #FFF;
    font-family: sans-serif;
`;

export const FieldContainer = styled.div`
    display: flex;
    height: 40%;
    align-items: center;
    padding: 0 14px;

`;

export const SignUpContainer = styled.div`
    display: flex;
    height: 25%;
    align-items: center;
    padding: 0 14px;
`;

export const Error = styled.div`
    align-self: center;
    color: red;
    border-radius: 5px;
    width: 30%;
    height: 10%;
    align-items: center;
    display: flex;
    justify-content: center;
`;

export const ErrorMessege = styled.span`

`;

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px 0;
`;

export const TextArea = styled.textarea`
    padding: 4px;
    width: 65%;
    border-radius: 8px;
    border-width: 1px;
`;