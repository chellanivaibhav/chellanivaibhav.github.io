import React from 'react';
import Paper from 'material-ui/Paper';
import profilepic from '../images/profile.jpg';

import Chip from 'material-ui/Chip';
import {Grid} from 'semantic-ui-react';

class PaperHome extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = {chipData: [
      {key: 0, label: 'PHP'},
      {key: 1, label: 'Android'},
      {key: 2, label: 'Blockchain'},
      {key: 3, label: 'ReactJS'},
      {key: 4, label: 'HTML'},
      {key: 5, label: 'CSS'},
      {key: 6, label: 'JS'},
      {key: 7, label: 'Ethereum'},
      {key: 8, label: 'Solidity'},
      {key: 9, label: 'Truffle'},
      ]};
      this.styles = {
        chip: {
          margin: 4,
        },
        wrapper: {
          paddingLeft: '12em',
          display: 'flex',
          flexWrap: 'wrap',
        },
        paperStyle:{
          height: '33em',
          width: '85%',
          margin: 20,
          'margin-top':80,
          textAlign: 'center',
          display: 'inline-block',         
        },
        profileStyle:{
          'border-radius':'50%',
          'float':'left',
          'marginLeft':'1.6em',
          //'verticalAlign':'bottom',
          'marginTop':'5em',
          'height':'300px'
        },
        heading:{
          'fontSize':'240%',
          'padding':'0.2em'         
        },
         subheading:{
          'fontSize':'140%',
          'padding':'0.2em'         
        },
      };
    }

   
    renderChip(data) {
      return (
        <Chip
        key={data.key}
        
        style={this.styles.chip}
        >
        {data.label}
        </Chip>
        );
    }

    render() {
      return (

        <div>
        <Paper style={this.styles.paperStyle} zDepth={5} rounded={false} >
        <img src={profilepic} style={this.styles.profileStyle}  />
        <Grid>
        <div style={this.styles.subheading}>
        HELLO YOU 
        </div>
        <div style={this.styles.heading}>
        I`m Vaibhav Chellani  
        </div>
        <div style={this.styles.wrapper}>
        {this.state.chipData.map(this.renderChip, this)}
        </div>
        </Grid>
        </Paper>
        </div>
        );
    }
  }
  export default PaperHome;



