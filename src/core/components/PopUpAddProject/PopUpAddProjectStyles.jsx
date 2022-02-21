import styled from '@emotion/styled';
import {
  BackgroundWhiteColor, BorderColor, BorderHoverColor, TransparentBlack,
  WarningRedColor,
} from '../../../shared/colors';
import { blueButtonForProjects } from "../../../shared/basic-components/Buttons";
import { PopUpWindow } from "../../../shared/basic-components/PopUpWindow";

const PopUp = styled('div')`
  position: fixed;
  background: ${TransparentBlack};
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
`;

const PopUpProjectWindow = styled('div')`
  ${PopUpWindow};
  height: 320px;
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

const PopUpWarnings = styled('div')`
  font-size: 10px;
  color: ${WarningRedColor};
  position: absolute;
`;

const PopUpMid = styled('div')`
  position: relative;
  padding-top: 13%;
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
  ${blueButtonForProjects};
  position: absolute;
  right: 0;
  margin-top: 5px;
  box-sizing: border-box;
  align-items: center;
  padding: 0 16px;
  width: 80px;
  height: 40px;

`;

export {
  PopUp, PopUpProjectWindow, PopUpHeader, ClosePopUpButton, PopUpMid, InputPopUp, PopUpCreateButton,
  PopUpWarnings,
};
