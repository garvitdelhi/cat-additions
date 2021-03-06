import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Table from 'components/table/';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { getItem } from 'utils/localstorage';

export default class Subtraction extends Component {
  constructor(props) {
    super(props);
    this.state = {
        started: false,
        resume: false
    };
  }

  renderRules = () => {
    return (
      <div style={{margin: "auto", marginTop: "50px", textAlign: "center"}}>
        <List>
          <ListItem>
            <ListItemText>
              Subtraction
            </ListItemText>
          </ListItem>
        </List>
      </div>
      );
  }

  render() {
    return (
      <div style={{display: "flex", flexDirection: "column"}}>
        {this.renderRules()}
        {getItem('subtractiondata') && !this.state.started &&
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
          evaluate={(result, first, second) => result === Math.abs(first - second)}
          name="subtraction"
          resume={this.state.resume}
          renderOperands={(first, second) => first > second ? `${first} - ${second}` : `${second} - ${first}`}
        />
        }
      </div>
    );
  }
}
