import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Login from "../components/Login";
import "./IndexPage.css";
const styles = theme => ({
  container: {
    background: "#4a9258",
    width: "100%",
    height: "100%"
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
        <Login></Login>
      </div>
    );
  }
}
IndexPage.propTypes = {};

export default withStyles(styles)(IndexPage);
