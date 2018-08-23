import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Table from 'components/table/';
import { getItem } from 'utils/localstorage';

export default class Multiplication extends Component {
  constructor(props) {
    super(props);
    this.state = {
        started: false,
        resume: false
    };
  }

  render() {
    return (
      <div style={{display: "flex", flexDirection: "column"}}>
        {getItem('multiplicationcols') && !this.state.started &&
          <Button
            onClick={() => this.setState({started: true, resume: true})}
            style={{margin: "auto", width: "50%", marginTop: "50px"}}
            color="primary"
            variant="outlined"
            size="small">
            Resume
          </Button>}
        {!this.state.started &&
          <Button
            onClick={() => this.setState({started: true})}
            style={{margin: "auto", width: "50%", marginTop: "50px"}}
            color="primary"
            variant="outlined"
            size="small">
            Start
          </Button>}
        {this.state.started &&
        <Table
          evaluate={(result, first, second) => result === first * second}
          name="multiplication"
          resume={this.state.resume}
          renderOperands={(first, second) => `${first} * ${second}`}
        />
        }
      </div>
    );
  }
}