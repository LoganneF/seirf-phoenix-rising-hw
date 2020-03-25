class App extends React.Component {
    state = {
        baseURL: 'http://taco-randomizer.herokuapp.com/random/?full-tack=true/?',
       
    }

    handleSubmit (event) {
        event.preventDefault()
        this.setState(
            {
            fetchURL: this.state.baseURL
        }, () => {
            console.log(this.state.fetchURL)
            fetch("http://taco-randomizer.herokuapp.com/random/?full-tack=true")  
                .then(response => {
                    return response.json()
            }).then(json => this.setState({
                taco: json
            }),
                err => console.log(err))
        })
    };
    render () {
        return (
            <div>Random Taco</div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector(".container")
)