import React from 'react';
import Paper from 'material-ui/Paper';
import profilepic from '../images/profile.jpg';

const style = {
  height: 400,
  width: 1000,
  margin: 20,
  'margin-top':80,
  textAlign: 'center',
  display: 'inline-block',
};

const PaperHome = () => (
  <div>
    <Paper style={style} zDepth={5} rounded={false} >
          <img src={profilepic} style={{height:'200px','marginRight':'10px'}}  />

    </Paper>
  </div>
);

export default PaperHome;