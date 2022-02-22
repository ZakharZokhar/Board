import React, {useState} from "react";
import {components} from "react-select";
import makeAnimated from "react-select/animated";
import MySelect from "./MySelect";
import {SelectStyles} from "./SelectStyles";
import {colourOptions, colourOptions2, colourOptions3, colourOptions4} from "./data";
import {FilterBarContainer, Input, SelectButtonContainer, TextAboveInput} from "./FilterBarStyles";
import "./style.css"

const Option = props => (<div>
  <components.Option {...props}>
    <label className="custom-checkbox">
    <input
      style={{order: 0, margin: 5}}
           type="checkbox"
           checked={props.isSelected}
           onChange={() => null}
    />{" "}<span/>
    </label>
    <label style={{order: 3}}>{props.label}</label>
  </components.Option>
</div>);

const MultiValue = props => (<components.MultiValue {...props}>
  <span>{""}</span>
</components.MultiValue>);

const animatedComponents = makeAnimated();


export const FilterBar = () => {
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
        <Input name="cardsName" type="text" placeholder="Enter a keyword"/>
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
