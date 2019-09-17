import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Login from "../components/Login";
import "./IndexPage.css";
const styles = theme => ({
  container: {
    width: "100%"
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
      <div className={classes.container}>
        <Login />
      </div>
    );
  }
}
IndexPage.propTypes = {};

export default withStyles(styles)(IndexPage);
