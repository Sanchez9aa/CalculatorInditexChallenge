import styled from 'styled-components'

export const StyledButtonsWrapper = styled.div`
  padding: 40px;
  background: ${props => props.theme === 1 ? "hsl(223, 31%, 20%)" : props.theme === 2 ? "hsl(0, 5%, 81%)" : "hsl(268, 71%, 12%)"};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  grid-auto-rows: minmax(100px, auto);
  width: 100%;
  max-width: 480px;
  border-radius: 10px;
  transition: .5s linear;
  @media screen and (max-width: 480px){
    width: 70%;
    grid-gap: 15px
  }
`

export const StyledButton = styled.span`
  padding: 25px;
  color: ${props => props.theme === 1 ? "hsl(221, 14%, 31%)" : props.theme === 2 ? "hsl(60, 10%, 19%)" : "hsl(52, 100%, 62%)"};
  background-color: ${props => props.theme === 1 ? "hsl(30, 25%, 89%)" : props.theme === 2 ? "hsl(45, 7%, 89%)" : "hsl(268, 47%, 21%)"};
  box-shadow: ${props => props.theme === 1 ? " 0 4px 0 0 hsl(28, 16%, 65%)" : props.theme === 2 ? "0 4px 0 0 hsl(35, 11%, 61%)" : "0 4px 0 0 hsl(290, 70%, 36%)"};
  cursor: pointer;
  border-radius: 5px;
  font-size: 40px;
  text-align: center;
  &:nth-last-child(1){
    grid-column: -1 / 3;
  }
  transition: .5s linear;
  display: flex;
  align-items: center;
  justify-content: center;
  &:active{
    transform: translateY(20px);
  }
  &:hover{
    background: rgba(0,0,0,0.1);
  }
  @media screen and (max-width: 480px){
    padding: 15px;
    height: 40%;
    width: 40%;
    font-size: 35px;
  }
`
export const StyledButtonDark = styled.span`
  padding: 25px;
  color: ${props => props.theme === 1 ? "hsl(0, 0, 100%)" : props.theme === 2 ? "hsl(60, 10%, 19%)" : "hsl(52, 100%, 62%)"};
  background-color: ${props => props.theme === 1 ? "hsl(225, 21%, 49%)" : props.theme === 2 ? "hsl(185, 42%, 37%)" : "hsl(281, 89%, 26%)"};
  box-shadow: ${props => props.theme === 1 ? "0 4px 0 0 hsl(224, 28%, 35%)" : props.theme === 2 ? "0 4px 0 0 hsl(185, 58%, 25%)" : "0 4px 0 0 hsl(285, 91%, 52%)"};
  cursor: pointer;
  border-radius: 5px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  &:nth-last-child(2){
    grid-column: 1 / 3;
  }
  transition: .5s linear;
  &:hover{
    background: rgba(0,0,0,0.1);
  }
  &:active{
    transform: translateY(20px);
  }
  @media screen and (max-width: 480px){
    padding: 15px;
    height: 40%;
    width: 40%;
    font-size: 35px;
    &:nth-last-child(2){
    width: 72%;
    font-size: 20px;
  }
  }
`

export const StyledEqualButton = styled.span`
  padding: 25px;
  color: ${props => props.theme === 3 ? "hsl(198, 20%, 13%)" : "hsl(0, 0%, 100%)"};
  background-color: ${props => props.theme === 1 ? "hsl(6, 63%, 50%)" : props.theme === 2 ? "hsl(25, 98%, 40%)" : "hsl(176, 100%, 44%)"};
  box-shadow: ${props => props.theme === 1 ? "0 4px 0 0 hsl(6, 70%, 34%)" : props.theme === 2 ? "0 4px 0 0 hsl(25, 99%, 27%)" : "0 4px 0 0 hsl(177, 92%, 70%)"};
  cursor: pointer;
  border-radius: 5px;
  font-size: 40px;
  text-align: center;
  &:nth-last-child(1){
    grid-column: -1 / 3;
  }
  transition: .5s linear;
  &:hover{
    background: rgba(0,0,0,0.1);
  }
  &:active{
    transform: translateY(20px);
  }
  @media screen and (max-width: 480px){
    padding: 15px;
    height: 40%;
    width: 40%;
    font-size: 35px;
    &:nth-last-child(1){
      width: 72%;
    }
  }
`

export const StyledHiddenVissibility = styled.h1`
width: 1px;
height: 1px;
overflow: hidden;
position: absolute`