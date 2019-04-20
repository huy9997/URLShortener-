import React from 'react'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import styled from 'styled-components'

const container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`;

class shortenedURL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputURL: '',
    }
  }
  render(){
    return(
      <container>
        <Input></Input>
        <Button>Submit</Button>
      </container>
    );
  }
}

export default shortenedURL;
