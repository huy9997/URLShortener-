import React from 'react'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import styled from 'styled-components';
import axios from 'axios'

const Contain = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`;
class shortenedURL extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputURL: ''
    }
  }
  
  handleChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    })
   }
  handleSubmit = event => {
    event.preventDefault();
    console.log(event);
      axios.post('/api/shortenedURL', {
        urlData: this.state.inputURL
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render(){
    return(
      <Contain>
        <Input onChange={this.handleChange} placeholder="Enter URL"></Input>
        <Button onClick={this.handleSubmit}>Submit</Button>
      </Contain>
    );
  }
}

export default shortenedURL;
