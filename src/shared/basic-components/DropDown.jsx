import PropTypes from "prop-types";
import {useState} from "react";
import {
  Dropdown, DropElement, DropContent, DropInput
} from "./DropDownStyles";


function DropDown( {drops} ) {
  const [showingDrops, setShowingDrops] = useState(false);
  const [name, setName] = useState('');
  const onHandleChange = (even) => {
    setName(even.target.value);
    even.target.value === '' ? setShowingDrops(false) : setShowingDrops(true);
  }
  const onHandleClick = (even) => {
    setName(even.target.outerText);
    setShowingDrops(false);
  }

  return (
    <Dropdown>
      <DropInput
        placeholder={'Search emails...'}
        onChange={onHandleChange}
        value = {name}
      />
      <DropContent style = {showingDrops ? {display: 'block'} : {display : 'none'}}>
        {drops.map((dropElement, index) => (
          <DropElement
            key = {index}
            onClick={onHandleClick}
            style={dropElement.includes(name) ? {display: 'block'} : {display : 'none'} }
          >
            {dropElement}
          </DropElement>
        ))}
      </DropContent>
    </Dropdown>
  )
}

DropDown.propTypes = {
  drops: PropTypes.array,
};

DropDown.defaultProps = {
  drops: ['Hello', 'Goodbye', 'Good morning'],
};

export default DropDown;