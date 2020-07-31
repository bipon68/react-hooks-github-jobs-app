import React, { useState } from 'react';
import './App.css';
import useFetchJobs from './useFetchJobs';
import { Container } from 'react-bootstrap';
import Job from './Job';

function App() {

  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, loading, error } = useFetchJobs()


  return (
    <Container>
      {loading && <h2>Loading...</h2>}
      {error && <h2>Error. Try Refreshing</h2>}
      {
        jobs.map(job => {
          return <Job key={job.id} job={job}/>
        })
      }
    </Container>
  );
}

export default App;
