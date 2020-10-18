import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ robots: users });
      });
    console.log("didMount");
  }
  SearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };
  render() {
    const { robots, searchField } = this.state;
    const filteredCardList = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField);
    });
    return !robots.length ? (
      <h1> Loading </h1>
    ) : (
      <div className="tc">
        <h1> FriendsApp </h1>
        <SearchBox onChangeSearch={this.SearchChange} />
        <Scroll>
          <CardList robots={filteredCardList} />
        </Scroll>
      </div>
    );
  }
}
export default App;
