import React from 'react';
import './App.css';
import useFetchJobs from './useFetchJobs';
import { Container } from 'react-bootstrap';

function App() {

  const { jobs, loading, error } = useFetchJobs()


  return (
    <Container>
      {loading && <h2>Loading...</h2>}
      {error && <h2>Error. Try Refreshing</h2>}
      <h2>{jobs.length}</h2>
    </Container>
  );
}

export default App;
