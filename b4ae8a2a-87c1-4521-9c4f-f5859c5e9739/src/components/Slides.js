import React, { useState } from "react";

function Slides({ slides }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [maxItemsPerPage] = useState(1);
  const [totalNumberOfPages] = useState(slides.length);

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          disabled={currentPage <= 1}
          onClick={() => setCurrentPage(1)}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage <= 1}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          disabled={currentPage === totalNumberOfPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
      {slides
        .slice(
          currentPage * maxItemsPerPage - maxItemsPerPage,
          currentPage * maxItemsPerPage
        )
        .map(({ title, text }, idx) => {
          return (
            <div key={idx} id="slide" className="card text-center">
              <h1 data-testid="title">{title}</h1>
              <p data-testid="text">{text}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Slides;
