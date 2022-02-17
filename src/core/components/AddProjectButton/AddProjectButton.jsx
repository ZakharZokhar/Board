import PropTypes from 'prop-types';
import { PlusIcon } from '../../../shared/icons/icons';
import AddProjectButtonContainer from './AddProjectButtonStyles';

function AddProjectButton({ onAddClick, buttonName }) {
  return (
    <AddProjectButtonContainer onClick={onAddClick} type="submit">
      <PlusIcon />
        {buttonName}
    </AddProjectButtonContainer>
  );
}

AddProjectButton.propTypes = {
  onAddClick: PropTypes.func,
  buttonName: PropTypes.string,
};

AddProjectButton.defaultProps = {
  onAddClick: null,
  buttonName: null,
};

export default AddProjectButton;
