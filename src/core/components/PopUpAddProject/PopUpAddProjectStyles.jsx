import styled from '@emotion/styled';

const PopUp = styled('div')`
  position: fixed;
  background: #00000050;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  font-family: "Poppins";
`;

const PopUpWindow = styled('div')`
  position: relative;
  width: 300px;
  margin: calc(100vh - 85vh - 20px) auto 0;
  height: 220px;
  max-height: 70vh;
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  border: 1px solid #999;
  overflow: auto;
  font-weight: 600;
`;

const PopUpHeader = styled('div')`
  font-family: Poppins;
  font-style: normal;
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
  background: white;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 8px;
  color: #e5e5e5;
    
  &:hover {
  color: #838080;
  border: 1px solid #838080;
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
  border: 1px solid #e5e5e5;
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
  background: #1037aa;
  border-radius: 8px;
  color: white;
  border: none;
  width: 80px;
  height: 40px;
  font-family: "Poppins";
    
  &:hover {
  color: #1037aa;
  cursor: pointer;
  background: white;
  border: 1px solid #1037aa;
  }
`;

export {
  PopUp, PopUpWindow, PopUpHeader, ClosePopUpButton, PopUpMid, InputPopUp, PopUpCreateButton,
};
