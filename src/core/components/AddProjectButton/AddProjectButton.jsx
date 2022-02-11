import PropTypes from 'prop-types';
import { PlusIcon } from '../../../shared/icons/icons';
import AddProjectButtonContainer from './AddProjectButtonStyles';

function AddProjectButton({ onAddClick }) {
  return (
    <AddProjectButtonContainer onClick={onAddClick} type="submit">
      <PlusIcon />
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
