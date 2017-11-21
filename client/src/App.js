import React, { Component } from "react"
import Container from "./Components/Container"
import Wrapper from "./Components/Wrapper"
import Title from "./Components/Title"
import Search from "./Components/Search"
import Results from "./Components/Results"
import Saved from "./Components/Saved"
import API from "./utils/API.js"

class App extends Component {
  state = {
    topic: "",
    startYear: "",
    endYear: "",
    result: {}
  }

  searchArticles = (topic, startYear, endYear) => {
    API.search(topic, startYear, endYear)
    .then(res => this.setState({ result: res.data }))
    .catch(err => console.log(err))
  }
  
  handleInputChange = event => {
    const value = event.target.value
    const name = event.target.name
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    this.searchArticles(this.state.topic, this.state.startYear, this.state.endYear)
  }

  render() {
    return (
      <Container>
        <Wrapper>
          <Title />
          <Search 
            value={this.state.search}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}/>
          <Results />
          <Saved />
        </Wrapper>
      </Container>
    );
  }
}

export default App;
