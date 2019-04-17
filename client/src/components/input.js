import React from 'react';

class Input extends React.Component{


  render(){
    const {placeholder, name, onChange, value} = this.props;
    return (
      <form>
        <label>
          {this.props.name}
          <input value={value} type="text" name={name} placeholder={placeholder} onChange={onChange} />
        </label>
      </form>
  );
  }
}

Input.defaultProps = {
  borderStyle: {
    borderRadius: 50,
    width: "80%",
    height: 60,
    padding: 10,
    backgroundColor: "#005FE1"
  },
  inputStyle: {
    height: "100%",
    width: "100%",
    color: "white",
    fontSize: 20
  },
  placeholderTextColor: "#cdcdcd"
};

export default Input;
