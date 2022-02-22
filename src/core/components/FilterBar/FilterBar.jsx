import {FilterBarContainer, Input, SelectButtonContainer, TextAboveInput} from "./FilterBarStyles";
import MySelect from "./MySelect";
import makeAnimated from "react-select/animated";
import {components} from "react-select";
import React, {useState} from "react"
import icon from '../../../shared/profilePicture.png'
// let multiselect_block = document.querySelectorAll(".multiselect_block");
// multiselect_block.forEach(parent => {
//   let label = parent.querySelector(".field_multiselect");
//   let select = parent.querySelector(".field_select");
//   let text = label.innerHTML;
//   select.addEventListener("change", function (element) {
//     let selectedOptions = this.selectedOptions;
//     label.innerHTML = "";
//     for (let option of selectedOptions) {
//       let button = document.createElement("button");
//       button.type = "button";
//       button.className = "btn_multiselect";
//       button.textContent = option.value;
//       button.onclick = _ => {
//         option.selected = false;
//         button.remove();
//         if (!select.selectedOptions.length) label.innerHTML = text
//       };
//       label.append(button);
//     }
//   })
// })
// eslint-disable-max-len
export const colourOptions = [
  {value: "Jerry Martin", label:   "Jerry Martin",image: icon,},
  {value: "Anthony Lopez", label:"Anthony Lopez",image: icon,},
  {value: "Joshua Johnson", label:"Joshua Johnson",image: icon,},
  {value: "Harold Hernandez", label: "Harold Hernandez", image: icon,},
  {value: "Brandon Greene", label:"Brandon Greene", image: icon,},
  {value: "Donald Rice", label: "Donald Rice",image: icon,},
  {value: "James Allen", label:"James Allen",image: icon,}];
export const colourOptions2 = [
  {value: "ocean", label: "Ocean", color: "#00B8D9" , IsColored: true},
  {value: "green", label: "Green", color: "#36B37E" , IsColored: true},
  {value: "forest",label: "Forest", color: "#00875A", IsColored: true},
  {value: "slate", label: "Slate", color: "#253858" , IsColored: true},
  {value: "silver",label: "Silver", color: "#666666", IsColored: true}];
export const colourOptions3 = [
  {value: "ocean", label: "15:00 2022-12-13", color: "#00B8D9"},
  {value: "blue", label: "45-22-33", color: "#0052CC"},
  {value: "forest", label: "2003-20-5", color: "#00875A"},
  {value: "slate", label: "9-10-34", color: "#253858"},
  {value: "silver", label: "12-03-33", color: "#666666"}];
export const colourOptions4 = [
  {value: "any", label: "Any Match", color: "#00B8D9"},
  {value: "conly", label: "Cards only", color: "#0052CC"},
  {value: "with", label: "With people", color: "#666666"}];


const Option = props => (<div>
  <components.Option {...props}>
    <input style={{order: 0, margin: 5}}
           type="checkbox"
           checked={props.isSelected}
           onChange={() => null}
    />{" "}
    <label style={{order: 3}}>{props.label}</label>
  </components.Option>
</div>);

const MultiValue = props => (<components.MultiValue {...props}>
  <span>{""}</span>
</components.MultiValue>);

const animatedComponents = makeAnimated();

const dot = (color = 'transparent', order = 1, size = 20, image=undefined) => ({
    alignItems: 'center',
    display: 'flex',

    ':before': {
      backgroundSize: 'contain',
      backgroundImage: `url(${image})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundColor: color,
      borderRadius: 3,
      content: '" "',
      display: 'block',
      marginRight: 5,
      height: size,
      width: size,
      order: order
    },
  });

const SelectStyles = {
  option: (styles, {data, isDisabled, isFocused, isSelected}) => {
    let size = (data.image || data.IsColored) ? 20 : 0
    return ({

      ...dot(data.color, 1, size, data.image),
      ...styles,
      padding: 8,
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
    });
  },
  indicatorsContainer: (styles, {data}) => ({...styles, padding: 3}),
  valueContainer: (styles, {data}) => ({...styles, padding: 2}),
  container: (styles) => ({...styles, width: "100%"}),
  multiValueRemove: (styles, {data}) => {
    const image = data.image
    return ({
      ...styles,
      color: data.color,
      backgroundColor: data.color,
      backgroundImage:  `url(${image})`,
      backgroundSize: "contain",
      width: 20,
      height: 20,
      padding: 0,
      textAlign: "center",
      ':hover': {
        backgroundColor: 'white',
        backgroundImage: undefined,
        color: data.color | 'black',
      },
    });
  },
  multiValueLabel: (styles, {data}) => ({
    ...styles, backgroundColor: "white",
    padding: 0
  }),
  multiValue: (styles) => ({...styles, backgroundColor: "white",}),
  singleValue: (styles, {data}) => ({...styles}),

}

export default function FilterBar() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     optionSelected: null, optionSelected2: null, optionSelected3: null, optionSelected4: null,
  //   };
  // }
  const [state, setState] = useState({
    optionSelected: [],
    optionSelected2: [],
    optionSelected3: [],
    optionSelected4: []
  });

  const handleChange = (selected) => {
    setState({
      selected
    });
  };
  return (
    <FilterBarContainer>
      <SelectButtonContainer>
        <TextAboveInput>Cards Search</TextAboveInput>
        <Input name="cardsName" type="search" placeholder="Enter a keyword"/>
      </SelectButtonContainer>
      <SelectButtonContainer>
        <TextAboveInput>Cards assigned to</TextAboveInput>
        <MySelect
          placeholder={"Select"}
          options={colourOptions}
          isMulti
          isSearchable={false}
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          components={{Option, MultiValue, animatedComponents}}
          onChange={handleChange}
          value={state.optionSelected}
          styles={SelectStyles}
        />
      </SelectButtonContainer>
      <SelectButtonContainer>
        <TextAboveInput>Labels</TextAboveInput>
        <MySelect
          placeholder={"Select"}
          options={colourOptions2}
          isMulti
          isSearchable={false}
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          components={{Option, MultiValue, animatedComponents}}
          onChange={handleChange}
          value={state.optionSelected2}
          styles={SelectStyles}
        />
      </SelectButtonContainer>
      <SelectButtonContainer>
        <TextAboveInput>Due date</TextAboveInput>
        <MySelect
          placeholder={"Select"}
          options={colourOptions3}
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          components={{MultiValue, animatedComponents}}
          onChange={handleChange}
          value={state.optionSelected3}
          styles={SelectStyles}
        />
      </SelectButtonContainer>
      <SelectButtonContainer>
        <TextAboveInput>Filter Type</TextAboveInput>
        <MySelect
          defaultValue={colourOptions4[0]}
          options={colourOptions4}
          hideSelectedOptions={false}
          components={{MultiValue, animatedComponents}}
          onChange={handleChange}
          // value={state.optionSelected4}
          styles={SelectStyles}
        />
      </SelectButtonContainer>
    </FilterBarContainer>
  );

}

