import styled from '@emotion/styled';

const SidebarWrapper = styled('div')`
  background-color: white ;
  height: 100vh;
  width: 200px;
  max-width: 200px;
  border-right:1px solid #e2e2e2;
  padding-top:15px;
  
  hr{
    height:0.5px;
    border-width:0;
    color:#e2e2e2;
    background-color: #e2e2e2;
    margin-bottom: 20px;
    margin-top: 10px;
    }
`;
const SidebarList = styled('ul')`
  list-style: none;
  padding-inline-start: 0px;
  
  li {
    display: flex;
    align-items: center;
    font-size: 14px;
    padding: 8px;
  
    &:hover{
      background-color: #F2F2F2;   
    }
  
    span {
      flex:5;
      margin: 3px;
      color: black;
      
      &:hover {
        cursor: pointer;
      }
    }
  }  
  
  div{
      padding: 8px;
    }
`;
const SidebarCurrent=styled('a')`
  color: #737373 ;
  font-size: 12px;
  margin-left: 15px;
  margin-bottom: 20px;
  
`;

export { SidebarWrapper, SidebarList, SidebarCurrent};
