import React, { useEffect } from "react";
import QuotesList from "../components/quotes/QuotesList";
import useHttp from "../hooks/use-http";
import {getAllQuotes} from '../library/api'
import NoQuotesFound from '../components/quotes/NoQuotesFound'
import LoadingSpinner from '../components/UI/LoadingSpinner'


const AllQuotes = (props) => {
  const { sendRequest, status, data: loadedQuotes, error } = useHttp(
    getAllQuotes,
    true
  );

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className='centered focused'>{error}</p>;
  }

  if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }
  
  return <QuotesList  quotes={loadedQuotes}/>;
};

export default AllQuotes;
