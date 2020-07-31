import React, { useState } from 'react';
import './App.css';
import useFetchJobs from './useFetchJobs';
import { Container } from 'react-bootstrap';
import Job from './Job';
import JobsPagination from './JobsPagination';

function App() {

  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, loading, error, hasNextPage } = useFetchJobs()


  return (
    <Container className='my-4'>
      <h2 className='mb-4'>Github Jobs</h2>
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <h2>Loading...</h2>}
      {error && <h2>Error. Try Refreshing</h2>}
      {
        jobs.map(job => {
          return <Job key={job.id} job={job}/>
        })
      }
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </Container>
  );
}

export default App;
