import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography} from '@material-ui/core';

const styles = {
    root: {
      flexGrow: 1,
    },
  };

const Header = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar className="react-crud-header">
            <Typography variant="h6" color="inherit">
              React Node CRUD App
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
}

Header.PropTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);