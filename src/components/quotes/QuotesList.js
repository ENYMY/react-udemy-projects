import React, { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";
import QuoteItem from "./QuoteItem";
import classes from "./QuotesList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuotesList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
 

  const isSortingAscending = queryParams.get('sort') === 'asc';

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const changeSortingHandler = () => {
    history.push('/quotes?sort=' + (isSortingAscending ? 'desc' : 'asc'));
  };

  return (
    <Fragment>
       <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? 'Descending' : 'Ascending'}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            text={quote.text}
            author={quote.author}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuotesList;
