import styled from "styled-components";

export const StyledCalculator = styled.section`
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin: auto;
  background: ${props => props.theme === 1 ? "hsl(222, 26%, 31%)" : props.theme === 2 ? "hsl(0, 0%, 90%)" : "hsl(268, 75%, 9%)"};
  transition: .5s linear;
`