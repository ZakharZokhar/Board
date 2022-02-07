import PropTypes from 'prop-types';
import { BsPlusLg } from 'react-icons/bs';
import { AddProjectButtonContainer, PlusIcon } from './AddProjectButtonStyles';

function AddProjectButton({ onAddClick }) {
  return (
    <AddProjectButtonContainer onClick={onAddClick} type="submit">
      <PlusIcon>
        <BsPlusLg />
      </PlusIcon>
      Add new project
    </AddProjectButtonContainer>
  );
}

AddProjectButton.propTypes = {
  onAddClick: PropTypes.func,
};

AddProjectButton.defaultProps = {
  onAddClick: null,
};

export default AddProjectButton;
