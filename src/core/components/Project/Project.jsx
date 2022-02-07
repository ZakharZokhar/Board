import { BsTrash } from 'react-icons/bs';
import { FcLikePlaceholder } from 'react-icons/fc';
import {
  ProjectContainer, HeadProject, RoleContainer, TrashButton, MidProject, Icon, BotProject,
} from './ProjectStyles';

function Project() {
  return (
    <ProjectContainer>
      <HeadProject>
        <RoleContainer>Admin</RoleContainer>
        <TrashButton type="submit">
          <BsTrash />
        </TrashButton>
      </HeadProject>
      <hr />
      <MidProject>
        <Icon>
          <FcLikePlaceholder />
        </Icon>
        Very very long beautiful nafffgfg
      </MidProject>
      <hr />
      <BotProject>12 users</BotProject>
    </ProjectContainer>
  );
}

export default Project;
