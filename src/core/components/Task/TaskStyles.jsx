import styled from "@emotion/styled";
import {BackgroundWhiteColor} from "../../../shared/colors";
import AvatarImage from "../../../shared/basic-components/AvatarImage";

const TaskContainer = styled('div')`
  position: relative;
  width: 280px;
  height: 140px;
  margin: 15px 15px 15px 15px;
  padding: 7px;
  background-color: ${BackgroundWhiteColor};
  box-sizing: border-box;
  border-radius: 8px;
`;

const MidTask = styled('div')`
  height: 70px;
  white-space: normal;
  width: 270px;
  word-break: break-word;
`;

const BotTask = styled('div')`
  padding-top: 10px;
`;

const TaskAvatar = styled('img')`
  ${AvatarImage};
  position: relative;
  margin-right: 15px;
  bottom: 5px;
`;


export { TaskContainer, BotTask, MidTask, TaskAvatar };
