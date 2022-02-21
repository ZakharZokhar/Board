import PropTypes from 'prop-types';
import { PlusIcon } from '../../../shared/icons/icons';
import AddElementButtonContainer from './AddElementButtonStyles';

function AddElementButton({ onAddClick, buttonName }) {
    return (
        <AddElementButtonContainer onClick={onAddClick} type="button">
            <PlusIcon />
            {buttonName}
        </AddElementButtonContainer>
    );
}

AddElementButton.propTypes = {
    onAddClick: PropTypes.func,
    buttonName: PropTypes.string,
};

AddElementButton.defaultProps = {
    onAddClick: null,
    buttonName: null,
};

export default AddElementButton;
