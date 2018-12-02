import React from "react";
import books from "../../mocks/books";
import BookFilter from "./BookFilter";
import BookList from "./BookList";

const filters = ["All", "Web", "Mobile", "DevOps", "Essentials"];

class Books extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedFilter: "All",
      books: books
    };
  }

  selectFilter = filter => {
    this.setState({
      selectedFilter: filter,
      books:
        filter === "All"
          ? books
          : books.filter(book => book.category === filter)
    });
  };

  render() {
    return (
      <section id="books">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>Books</h2>
              <hr className="star-primary" />
            </div>
          </div>
          <BookFilter
            filters={filters}
            selectedFilter={this.state.selectedFilter}
            selectFilter={this.selectFilter}
          />
          <BookList books={this.state.books} />
        </div>
      </section>
    );
  }
}

export default Books;
