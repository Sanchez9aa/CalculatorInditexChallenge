import styled from "styled-components";

export const StyledHeader = styled.header`
  display:flex;
  justify-content: space-between;
  height: 75px;
  align-items: center;
  max-width: 480px;
  width: 100%;
  padding-top: 15px;

  @media screen and (max-width: 480px){
    width: 85%;
  }
`

export const StyledLetter = styled.span`
color: ${props => props.theme === 1 ? "#fff" : props.theme === 2 ? "hsl(60, 10%, 19%)" : "hsl(52, 100%, 62%)"};
font-weight: 700;
font-size: 24px;
transition: .5s linear;
`
