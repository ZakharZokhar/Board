import styled from '@emotion/styled';


export const FilterBarContainer = styled('div')`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;  
  border-bottom: 1px solid #E5E5E5;

`;
export const NewReactSelect = styled('ReactSelect')`
  width: 100%;
`

export const TextAboveInput = styled('div')`
  margin-left: 10px;
  margin-top: 10px;
`

export const Input = styled('input')`
  font-family: 'Poppins', sans-serif;
  padding: 0 0 0 5px;
  height: 44px;
  border-radius: 5px;
  border-color: hsl(0, 0%, 80%);
  width: 95%;
  border-style: solid;
  border-width: 1px;
  transition: all 0.1s ease-in-out;

  &:focus {
    border-color: blue;
    box-shadow: 0 0 0 1px #2684ff;
    outline: #1037AA;
  }
`


export const SelectButtonContainer = styled('div')`
  padding: 5px 5px 10px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;


