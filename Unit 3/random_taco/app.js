class FullTaco extends React.Component {
    render () {
      return  (
        <div>
          <h1>Shell: {this.props.taco.shell.name}</h1>
          <p>{this.props.taco.shell.recipe}</p>

          <h1>Base layer: {this.props.taco.base_layer.name}</h1>
          <p>{this.props.taco.base_layer.recipe}</p>
  
          <h1>Mixin: {this.props.taco.mixin.name}</h1>
          <p>{this.props.taco.mixin.recipe}</p>
  
          <h1>Condiment: {this.props.taco.condiment.name}</h1>
          <p>{this.props.taco.condiment.recipe}</p>
  
        </div>
      )
    }
  }
  
  class App extends React.Component {
      
    state = {
        baseURL: "https://taco-randomizer.herokuapp.com/random/?full-tack=true",
    }
  
    componentDidMount = () => {
      fetch("https://taco-randomizer.herokuapp.com/random/?full-tack=true")
        .then(response => response.json())
        .then(json => this.setState({ taco: json}));
    }
  
    render() {
      console.log(this.state)
      return (
        <React.Fragment>
          <h1>Random Taco</h1>
          {this.state.taco ? <FullTaco taco={this.state.taco}/> : ""}
        </React.Fragment>
      )
      }
  }
  
  
  ReactDOM.render(
      <App/>, 
      document.querySelector(".container")
  )