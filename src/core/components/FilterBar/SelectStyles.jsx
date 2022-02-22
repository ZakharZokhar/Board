
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

export const SelectStyles = {
  option: (styles, {data, isDisabled, isFocused, isSelected}) => {
    const size = (data.image || data.IsColored) ? 20 : 0
    console.log(styles)
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

