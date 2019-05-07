import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import IconActionHelp from '@material-ui/icons/Help';
import IconActionInfo from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

const SignToolbar = () => (
  <Toolbar style={{ backgroundColor: 'none' }}>
    <Typography style={{ flexGrow: 1 }}>Sign a message</Typography>
    <IconButton tooltip="Help">
      <IconActionHelp />
    </IconButton>
    <IconButton tooltip="Info">
      <IconActionInfo />
    </IconButton>
  </Toolbar>
);

export default SignToolbar;
