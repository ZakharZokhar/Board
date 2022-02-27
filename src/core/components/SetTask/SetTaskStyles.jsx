import styled from '@emotion/styled';
import {
    BackgroundWhiteColor,
    BorderColor, BorderHoverColor, MainBlueColor,
    RoleColor, TransparentBlack,
} from '../../../shared/colors';

export const ClosePopUpButton = styled('button')`
  height: 40px;
  width: 40px;
  background: ${BackgroundWhiteColor};
  border: 1px solid ${BorderColor};
  box-sizing: border-box;
  border-radius: 8px;
  margin-left: 5px;  
  margin-right: 5px;  
  &:hover {
  border: 1px solid ${BorderHoverColor};
  cursor: pointer;
  }
`;
export const PopUp = styled('div')`
  position: fixed;
  background: ${TransparentBlack};
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
`;
export const SetTaskWrapper = styled('div')`
  background-color: #fff;
  display: block;
  position: relative;
  width: 735px;
  height: 820px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2%;
  margin-bottom: 0;
  border: 1px solid ${BorderColor};
  box-sizing: border-box;
  border-radius: 8px;
`;

export const Header = styled('div')`
  border-bottom: 1px solid ${BorderColor};
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;

  span{
    margin: 10px;
    font-size: 18px;
    font-weight: 600;
  }
  
  div{
  display:flex;
  align-items: center;
  }
`;

export const LabelWrap = styled('div')`
  display: block;
  padding: 10px 0;
  word-break: break-word;
`;

export const InputForTime = styled('input')`
  height: 20px;
  width: 40px;
  display: inline-block;
  margin: 0 10px;
`;

export const ButtonStyle = styled('button')`
  border: 0;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: ${BackgroundWhiteColor};
    
  &:hover {
  cursor: pointer;
`;

export const InputName = styled('input')`
  border: 1px solid ${BorderColor};
  border-radius: 8px;
  margin: 10px;
  resize:none;
`;

export const Feed = styled('div')`
  height: 668px;
  width: 511px;
`;

export const Rightbar = styled('div')`
  border-left: 1px solid ${BorderColor};
  background-color: white ;
  height: 668px;
  width: 224px;
  max-width: 224px;

`;

export const DivTimer = styled('div')`
  padding-top: 33px;
  padding-left: 20px;
  padding-right: 20px;
  display: block;
  hr{
    height:0.5px;
    border-width:0;
    color:#e2e2e2;
    background-color: #e2e2e2;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  div{
    display:flex;
  }
`;
export const SpanStyled=styled('span')`
  flex:1;
  font-weight: ${props=>(props.fw || '400')};
`;
export const PopUpCreateButton = styled('button')`
  position: relative;
  right: 0;
  margin-top: 5px;
  box-sizing: border-box;
  align-items: center;
  padding: 0 16px;
  border-radius: 8px;
  width: ${props=>(props.Width || '80')}px;
  height: 40px;
    
  &:hover {
  cursor: pointer;
  }
`;
export const WhiteButton=styled(PopUpCreateButton)`
  background: ${BackgroundWhiteColor};
  color: black;
  border: 1px solid ${BorderColor};
  margin-right: 20px;
  
  &:hover {
    background: ${RoleColor};
  }

`;
export const BlueButton=styled(PopUpCreateButton)`
  background: ${MainBlueColor};
  color: ${BackgroundWhiteColor};
  border: none;
  &:hover {
    color: black;
    border: 1px solid ${BorderColor};
    background: ${RoleColor};
  }
`;
export const DivJustifyContentRight= styled('div')`
  justify-content: right;
  `;
export const DivAssigned = styled('div')`
  margin-top: 34px;
  display: block;
  padding-left: 20px;
  padding-right: 20px;
  div{
    margin-top: 12px;
    align-items: center;
    svg{
      position: relative;
      object-fit: cover;
      left: 450px;
      bottom:40px;
    }
    span {
      position: relative;
      top: 15px;
    }
  }
  img{
    height:40px;
    width:40px;
    border-radius: 50%;
    margin: 6px;
    object-fit: cover;
    aspect-ratio: 1/1;
  }
`;

export const DivDescription = styled('div')`
  margin-top: 34px;
  padding-left: 20px;
  padding-right: 20px;
  display:block;
  
  div{
    display:flex;
  }
`;
export const InputPopUp = styled('textarea')`
  margin-top: 12px;
  margin-bottom: 10px;
  padding: 10px 10px;
  border: 1px solid ${BorderColor};
  border-radius: 8px;
  width: 448px;
  resize:none;
`;

export const ABold = styled('a')`
  font-size: ${props=>(props.fs || '14')}px;
  font-weight: 600;
  margin-left: ${props=>(props.ml || '0')}px;
  margin-right: ${props=>(props.mr || '0')}px;
  margin-top: ${props=>(props.mt || '15')}px;
  margin-bottom: ${props=>(props.mb || '15')}px;
`;
export const FeedRightbarWrapper=styled('div')`
  display: flex;
  justify-content: space-between;
`;