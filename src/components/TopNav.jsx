import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function ButtonAppBar(props) {
  const { classes, children } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid container justify="space-between">
            {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton> */}
            <Grid item>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                What's Left
              </Typography>
            </Grid>
            <Grid item>{children}</Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
