import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

function JobList({ jobs }) {
  return (
    <div>
      {jobs.map((job, index) => {
        return <JobCard job={job} key={`job-${index}`} />;
      })}
    </div>
  );
}

function JobCard({ job }) {
  const classes = useStyles();
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>{job.title}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography dangerouslySetInnerHTML={{ __html: job.content }} />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

function mapStateToProps(state) {
  const { jobs } = state;
  return { jobs };
}

export default connect(mapStateToProps)(JobList);
