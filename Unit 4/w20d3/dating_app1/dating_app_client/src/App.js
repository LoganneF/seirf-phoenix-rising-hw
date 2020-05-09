import React, { Component } from 'react';
import Header from "./components/Header";
import Aside from "./components/Aside";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
class App extends Component {
  state= {
    daters: []
  };

  handleAdd = (event, formInputs) => {
    event.preventDefault();
    fetch("http://localhost:3000/users", {
      body: JSON.stringify(formInputs),
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((createdUser) => createdUser.json())
      .then((jsonedUser) => {
        this.setState({
          users: [jsonedUser, ...this.state.users],
        });
      })
      .catch((error) => console.log(error));
  };
  render() {
    return (
      <div className="HolyGrail">
        <Header />
        <Aside />
        <Main />
        <Nav />
        <Footer handleSubmit={this.handleAdd}/>
      </div>
    );
  }
}

export default App;
