import React, { Component } from "react";

import { Cardlist } from "./components/card-list/card-list.component";

import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class Test extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    var arr = [];
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ monsters: users });
      })
      .catch((err) => console.error(err.description));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const newMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1 className="heading">Monster Rolodex</h1>
        <SearchBox
          placeholder={"search monsters"}
          handlechange={this.handleChange}
          // handlechange={(e) => this.setState({ searchField: e.target.value })}
        />
        <Cardlist name={newMonsters} />
      </div>
    );
  }
}

export default Test;
