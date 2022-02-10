import styled from '@emotion/styled';
import {
  BorderColor, BorderHoverColor, MainBlueColor, BackgroundWhiteColor,
} from '../../../shared/colors';
import {
  BaseFontFamily,
} from '../../../shared/variables';

const AddProjectButtonContainer = styled('button')`
  display: inline-block;
  position: relative;
  width: 250px;
  height: 170px;
  margin: 15px 15px 15px 15px;
  padding: 7px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 3px dashed ${BorderColor};
  background: ${BackgroundWhiteColor};
  color: ${MainBlueColor};
  font-family: ${BaseFontFamily};
    
  &:hover {
  cursor: pointer;
  text-decoration: underline;
  color: ${MainBlueColor};
  border: 3px dashed ${BorderHoverColor};
  }
`;

export default AddProjectButtonContainer;
