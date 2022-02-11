import styled from '@emotion/styled';

const SidebarWrapper = styled('div')`
  flex:1;
  background-color: white ;
  height: 100vh;
  width: 200px;
  max-width: 200px;
  border-right:1px solid #e2e2e2;
  padding-top:15px;
`;
const SidebarList = styled('ul')`
  list-style: none;
  padding-inline-start: 0px;
`;
const SidebarListItem = styled('li')`
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 3px;
`;
const SidebarIcon = styled('svg')`
flex:1;
    margin-right: 1 px;
    margin-left: 3 px;
    height: 22px;
    width: 22px;
`;

export { SidebarWrapper, SidebarList,SidebarListItem,SidebarIcon };
