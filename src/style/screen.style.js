import styled from "styled-components";

export const StyledScreen = styled.div`
  background: ${props => props.theme === 1 ? "hsl(224, 36%, 15%)" : props.theme === 2 ? "hsl(0, 0%, 93%)" : "hsl(268, 71%, 12%)"};
  width: 100%;
  max-width: 480px;
  padding: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
  transition: .5s linear;
  @media screen and (max-width: 480px){
    width: 70%;
  }
`

export const StyledResult = styled.span`
color: ${props => props.theme === 1 ? "hsl(0, 0%, 100%)" : props.theme === 2 ? "hsl(60, 10%, 19%)" : "hsl(52, 100%, 62%)"};
font-size: 24px;
text-align: flex-end;
transition: .5s linear;
`