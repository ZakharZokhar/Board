import styled from '@emotion/styled';
import {
  MainBlueColor, BackgroundWhiteColor, BorderColor, BorderHoverColor, TransparentBlack,
} from '../../../shared/colors';

const HrStyled = styled('hr')`
  margin-top: 10px;
`;

const PopUp = styled('div')`
  position: fixed;
  background: ${TransparentBlack};
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
`;

const PopUpWindow = styled('div')`
  position: relative;
  width: 300px;
  margin: calc(100vh - 85vh - 20px) auto 0;
  height: 300px;
  max-height: 70vh;
  background: ${BackgroundWhiteColor};
  border-radius: 8px;
  padding: 20px;
  border: 1px solid ${BorderColor};
  overflow: auto;
  font-weight: 600;
`;

const PopUpHeader = styled('div')`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  padding: 15px 0;
  margin-bottom: 10px;
`;

const ClosePopUpButton = styled('button')`
  position: absolute;
  right: 20px;
  top: 30px;
  height: 40px;
  width: 40px;
  background: ${BackgroundWhiteColor};
  border: 1px solid ${BorderColor};
  box-sizing: border-box;
  border-radius: 8px;
    
  &:hover {
  border: 1px solid ${BorderHoverColor};
  cursor: pointer;
  }
`;

const PopUpMid = styled('div')`
  position: relative;
  padding-top: 7%;
`;

const InputPopUp = styled('input')`
  display: block;
  margin: 5% 0;
  padding: 0 10px;
  border: 1px solid ${BorderColor};
  box-sizing: border-box;
  border-radius: 8px;
  height: 30px;
`;

const PopUpCreateButton = styled('button')`
  position: absolute;
  right: 0;
  margin-top: 5px;
  box-sizing: border-box;
  align-items: center;
  padding: 0 16px;
  background: ${MainBlueColor};
  border-radius: 8px;
  color: ${BackgroundWhiteColor};
  border: none;
  width: 80px;
  height: 40px;
    
  &:hover {
  color: ${MainBlueColor};
  cursor: pointer;
  background: ${BackgroundWhiteColor};
  border: 1px solid ${MainBlueColor};
  }
`;

export {
  PopUp, PopUpWindow, PopUpHeader, ClosePopUpButton, PopUpMid, InputPopUp, PopUpCreateButton,
  HrStyled,
};
