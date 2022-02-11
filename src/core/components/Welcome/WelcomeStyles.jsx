import styled from '@emotion/styled';

const theme = {
  blue: {
    default: '#1037AA',
    hover: '#1656fc',
  },
  white: {
    default: '#ffffff',
    hover: '#b8c9ff',
  },
};

export const CenterLayout = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 45px 130px;

  position: relative;
  min-width: 200px;
  width: 100%;
  height: 100%;

  background: #FFFFFF;
`;

export const Image = styled('img')`
  max-width: 90vw;
`;

export const WelcomeLayout = styled('div')`
  /* Frame 7667 */


  /* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;

  position: static;
  width: 657px;
  height: 990px;
  left: 475px;
  top: 45px;


  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 1;
  margin: 24px 0;
`;

export const Button = styled('button')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  width: 100%;
  height: 100%;
  min-height: 45px;
  right: 0;
  top: 0;
  background-color: ${(props) => theme[props.theme].default};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  transition: ease background-color 250ms;
  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 1;
  margin: 24px 0;

  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
`;

export const ButtonWrapper = styled('div')`
  display: flex;
  flex: none;
  flex-direction: column;
  width: 100%;
  max-width: 450px;
  min-width: 192px;
  order: 2;
  align-self: center;
  flex-grow: 1;
  margin: 24px 0;

`;

export const TextWrapper = styled('h1')`

  position: static;
  width: 100%;
  height: 100%;
  left: 646px;
  top: 516px;

  min-width: 49vw;
  font-family: Poppins,serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 54px;
  text-align: center;

  color: #000000;

  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 24px 0;
`;

export const ButtonText = styled('h1')`

  font-family: Poppins, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 20px;
  /* identical to box height, or 56% */

  text-align: center;

  color: #FFFFFF;

  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  /* Inside auto layout */

`;
