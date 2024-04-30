import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <form noValidate autoComplete="off">
        <TextField id="first-name" label="First Name" variant="outlined" />
        <TextField id="last-name" label="Last Name" variant="outlined" />
        <TextField id="hobby" label="Hobby" variant="outlined" />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    );
  }
}

export default App;