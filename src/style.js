import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    height:100%;
    width:100%;
    flex-flow: column;
    font-family: Khula;
    overflow:hidden;
`

export const Header = styled.div`
    background-color: #182939;
    display:flex;
    align-items: center;
    height: 80px;
    padding-left: 24px;
`

export const HeaderContainer = styled.div`
    display:flex;
    height: 40px;
    width: 100%;
    font-family: Avenir;
    font-size: 23px;
    font-weight: 900;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: -0.2px;
    text-align: center;
`;


export const Item = styled.div`
    width: 120px;
    font-size: 23px;
    font-weight: 900;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: -0.2px;
    color: #ffffff;
    margin-right: 24px;
    border-bottom: ${(props) => props.selected ? '6px solid #7e90f6' : ''};
`

export const Body = styled.div`
    display:flex;
    justify-content: center;
    flex:1;
    height: 100%:
`

export const Scroller = styled.div`
    display:flex;
    height:100%;
    overflow:scroll;
    padding: 40px;
    width:100%;
    justify-content:center;
`;

export const LogoutContainer = styled.div`
    display: flex;
    width: 78%;
    justify-content: flex-end;

`