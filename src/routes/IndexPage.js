import React from "react";
import { connect } from "dva";
import { withStyles } from "@material-ui/core/styles";
import Login from "../components/Login";

const styles = theme => ({
  LoginWindow: {
    background: "#f0f2f5",
    width: "350px",
    height: "300px",
    margin: "0 auto",
    borderRadius: "15px",
    textAlign: "center",
    lineHeight: "60px"
  },
  InputText: {
    margin: "0 auto",
    width: "300px",
    height: "200px",
    lineHeight: "30px",
    textAlign: "center"
  }
});
class IndexPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: []
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.LoginWindow}>
        <div className={classes.InputText}>
          <Login></Login>
        </div>
      </div>
    );
  }
}
IndexPage.propTypes = {};

export default withStyles(styles)(IndexPage);
