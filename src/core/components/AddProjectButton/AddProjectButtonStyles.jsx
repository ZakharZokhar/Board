import styled from '@emotion/styled';

const AddProjectButtonContainer = styled('button')`
  display: inline-block;
  position: relative;
  width: 250px;
  height: 170px;
  margin: 15px 15px 15px 15px;
  padding: 7px;
  box-sizing: border-box;
  border-radius: 8px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: normal;
  border: 3px dashed #e5e5e5;
  font-size: 14px;
  background: white;
  color: blue;
    
  &:hover {
  cursor: pointer;
  text-decoration: underline;
  color: rgba(52, 52, 238, 0.986);
  border: 3px dashed #838080;
  }
`;

const PlusIcon = styled('span')`
    color: #bfbfbf;
    position: relative;
    top: 2px;
    padding-right: 5px;
`;

export { AddProjectButtonContainer, PlusIcon };
