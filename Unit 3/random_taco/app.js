class App extends React.Component {
    state = {
        baseURL: 'http://taco-randomizer.herokuapp.com/random/?full-tack=true'
    }
    render () {
        return (
            <div>Hello World</div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector(".container")
)