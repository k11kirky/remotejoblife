import React from "react";
import { connect } from "react-redux";
import { getJobs } from "../store";
import Jobs from "../components/jobs";

class Index extends React.Component {
  static getInitialProps({ reduxStore, req }) {
    const isServer = !!req;
    // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
    return {};
  }

  componentDidMount() {
    // DISPATCH ACTIONS HERE FROM `mapDispatchToProps`
    this.props.getJobs();
  }

  render() {
    return <Jobs />;
  }
}
const mapDispatchToProps = { getJobs };
export default connect(
  null,
  mapDispatchToProps
)(Index);
