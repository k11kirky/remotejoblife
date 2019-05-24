import { connect } from "react-redux";

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
  return (
    <div>
      <h1>{job.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: job.content }} />
    </div>
  );
}

function mapStateToProps(state) {
  const { jobs } = state;
  return { jobs };
}

export default connect(mapStateToProps)(JobList);
