import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import SignInComponent from '../../components/SignIn';

const useStyles = makeStyles(theme => ({
  caption: {
    paddingTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: theme.palette.primary.main
  }
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container className={classes.signInMain}>
      <Typography component="h1" variant="h2" className={classes.caption}>
        CERES
      </Typography>
      <SignInComponent />
    </Container>
  );
}
