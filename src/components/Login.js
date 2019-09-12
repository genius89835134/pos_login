import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Lock from "@material-ui/icons/Lock";
const styles = theme => ({
  LoginWindow: {
    background: "#f0f2f5",
    width: "350px",
    height: "300px",
    margin: "0 auto",
    borderRadius: "15px",
    textAlign: "center",
    lineHeight: "normal",
    boxShadow: "3px 3px 3px #5d5d5d"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  margin: {
    margin: "0 auto"
  },
  button: {
    width: "70%",
    fontFamily: "微軟正黑體",
    fontSize: "16px",
    color: "white",
    background: "#75d86e",
    margin: "30px auto"
  }
});

function InputWithIcon(props) {
  const { classes } = props;

  return (
    <div className={classes.LoginWindow}>
      <form className={classes.container} noValidate autoComplete="off">
        <div className={classes.margin}>
          <h3>POS系統</h3>

          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item>
              <TextField
                id="input-with-icon-grid"
                label="帳號"
                className={classes.textField}
              />
            </Grid>
          </Grid>
        </div>
        <div className={classes.margin}>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Lock />
            </Grid>
            <Grid item>
              <TextField
                id="standard-password-input"
                label="密碼"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
              />
            </Grid>
          </Grid>
        </div>
        <Button Button variant="contained" className={classes.button}>
          登入
        </Button>
      </form>
    </div>
  );
}

InputWithIcon.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InputWithIcon);
