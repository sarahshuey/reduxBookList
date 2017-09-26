import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
//make sure action created flows through all reducers
import { bindActionCreators } from "redux";

class BookList extends Component {
  render() {
    let style={
      "display":"flex",
      "flexDirection":"row",
      "color":"#67b581"
    }
    //must create a map function here to return the following:
    let data = this.props.books;
    let books = data.map(book => {
      return (
        <div key={book.id} className="container-fluid" style={style}>
          <li
            onClick={() => this.props.selectBook(book)}
            className="list-group-item" style={{listStyle:"none"}}
          >
            {book.title}
          </li>
        </div>
      );
    });

    return <ul className="list-group col-sm-4">{books}</ul>;
  }
}

function mapStateToProps(state) {
  console.log("mapstate", state.books);
  //what is returned will show up as props inside of BookList
  //this gives you access to books in props.. (books would be good for mapping)
  return { books: state.books };
}

//anything returned from this function will end up as props on
//BookList Container.
function mapDispatchToProps(dispatch) {
  //whenever selectBook is called, result should be passed to
  //all of the reducers. (flows through dispatch function -- like a funnel)
  return bindActionCreators(
    {
      selectBook: selectBook
    },
    dispatch
  );
}

//connect all functions to container component
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
