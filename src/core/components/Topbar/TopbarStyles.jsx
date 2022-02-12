import styled from '@emotion/styled';

export const TopbarContainer = styled('div')`
  height: 56px;
  width: 100%;
  background-color: #F2F2F2;
  display: flex;
  align-items: center;
  top:0;
`;
export const TopbarLeft = styled('div')`
  display:flex;
  flex:10;
  align-items: center;
  
  img{
    margin-left: 16px;
    background-color:#F2F2F2 ;
    height: 28px;
    width: 28px;
  }
  
  div{
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    margin-left: 10px;
    color: black;
  }
`;
export const TopbarRight = styled('div')`
  flex:3;
  align-items: center;
  display:flex;
  justify-content: space-between;
  
  img{
    height:32px;
    width:32px;
    border-radius: 50%;
    margin-right: 10px;
    margin-left: 40%;
    object-fit: cover;
    aspect-ratio: 1/1;
  }
  
  div{
    margin-right: 40px;
  }
`;


