import styled from '@emotion/styled';

const PlusIconStyle = styled('svg')`
  position: relative;
  top: 2px;
  padding-right: 5px;
`;

const CloseIconStyle = styled('svg')`
  margin-top: 3px;
`;
const IconStyle =styled('svg')`
  margin-right: ${props=>(props.mr || '10')}px;
  margin-left: ${props=>(props.ml || '10')}px;
`;
const DiamondIconStyle = styled('svg')`
  padding-right: 5px;
  font-size: 20px;
`;
export const ExpandIc = styled('svg')`
  width: 30px;
  height: 30px;
  margin-top: 22px;
`;
export const TrashIc = styled('svg')`
  width: 50px;
  height: 50px;
   margin-top: 5px;
`;

export { PlusIconStyle, CloseIconStyle, DiamondIconStyle, IconStyle};
