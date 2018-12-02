import React from "react";

const BookFilter = ({ filters, selectedFilter, selectFilter, ...props }) => {
  const tabItems = filters.map(filter => (
    <li
      className={filter === selectedFilter ? "active" : ""}
      key={filter}
      onClick={() => selectFilter(filter)}
    >
      <a href="#0">{filter}</a>
    </li>
  ));

  return (
    <div className="row">
      <div className="col-lg-12">
        <ul className="nav nav-pills text-center">{tabItems}</ul>
      </div>
    </div>
  );
};

export default BookFilter;
