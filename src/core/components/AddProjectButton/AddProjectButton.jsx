import { BsPlusLg } from 'react-icons/bs';
import { AddProjectButtonContainer, PlusIcon } from './AddProjectButtonStyles';

function AddProjectButton() {
  return (
    <AddProjectButtonContainer type="submit">
      <PlusIcon>
        <BsPlusLg />
      </PlusIcon>
      Add new project
    </AddProjectButtonContainer>
  );
}

export default AddProjectButton;
