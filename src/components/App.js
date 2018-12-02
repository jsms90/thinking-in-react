import React from "react";

import Menu from "./Navigations/Menu";
import NavBar from "./NavBar";
import Header from "./Header";
import Books from "./Books";
import About from "./About";
import Footer from "./Footer";
import books from "../mocks/books";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      books: books,
      selectedFilter: "All",
      menu: { open: false }
    };
  }

  toggleMenu = () => {
    this.setState({ menu: { open: !this.state.menu.open } });
  };

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
      <div id="page-wrap">
        <Menu
          pageWrapId="page-wrap"
          isOpen={this.state.menu.open}
          toggleMenu={this.toggleMenu}
        />

        <NavBar toggleMenu={this.toggleMenu} />

        <Header title="ReactJS Academy" />

        <Books
          selectFilter={this.selectFilter}
          selectedFilter={this.state.selectedFilter}
          books={this.state.books}
        />

        <About />

        <Footer />
      </div>
    );
  }
}

export default App;
