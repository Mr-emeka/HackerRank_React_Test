import React, { useState } from "react";
import "./App.css";
import "h8k-components";

import Articles from "./components/Articles";

const title = "Sorting Articles";

function App({ articles }) {
  const [state, setState] = useState({
    sortedArticles: articles,
  });

  const sortByMostUpvoted = () => {
    const sorted = state.sortedArticles.sort((a, b) => {
      return b.upvotes - a.upvotes;
    });
    setState({ sortedArticles: sorted });
  };
  const sortByMostRecent = () => {
    const sorted = state.sortedArticles.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    setState({ sortedArticles: sorted });
  };
  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button
          data-testid="most-upvoted-link"
          className="small"
          onClick={() => sortByMostUpvoted()}
        >
          Most Upvoted
        </button>
        <button
          data-testid="most-recent-link"
          className="small"
          onClick={() => sortByMostRecent()}
        >
          Most Recent
        </button>
      </div>
      <Articles articles={state.sortedArticles} />
    </div>
  );
}

export default App;
