import React from "react";
import { connect } from "react-redux";
import { getJobs } from "../store";
import Head from "next/head";
import Jobs from "../components/jobs";
import Container from "@material-ui/core/Container";

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
    return (
      <div>
        <Head>
          <title>My page title</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
        </Head>
        <Container maxWidth="sm">
          <Jobs />
        </Container>
      </div>
    );
  }
}
const mapDispatchToProps = { getJobs };
export default connect(
  null,
  mapDispatchToProps
)(Index);
