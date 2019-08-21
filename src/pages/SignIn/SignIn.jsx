import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import SignInComponent from '../../components/SignIn';

const useStyles = makeStyles(theme => ({
  caption: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container>
      <Typography component="h1" variant="h2" className={classes.caption}>
        Ceres
      </Typography>
      <SignInComponent />
    </Container>
  );
}
