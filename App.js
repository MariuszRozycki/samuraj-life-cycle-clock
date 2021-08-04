class App extends React.Component {

  state = {
    active: true,
  }

  handleClick = () => {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    return (
      <div>
        <SwitchButton active={this.state.active} click={this.handleClick} />
        {this.state.active && <Clock />}
      </div>
    )
  }
}



const SwitchButton = props => {
  return (
    <button onClick={props.click}>{props.active ? 'Turn off' : 'Turn on'}</button>
  )
}



class Clock extends React.Component {

  interval = '';

  state = {
    time: this.getTime()
  }

  getTime() {
    const currentTime = new Date;
    return ({
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds()
    })
  }

  setTime = () => {
    const time = this.getTime();
    this.setState({
      time
    })
  }

  componentDidMount() {
    console.log('Clock mounted');
    this.interval = setInterval(this.setTime, 1000);
  }

  componentWillUnmount() {
    console.log('Clock unmounted');
    clearInterval(this.interval);
  }

  render() {
    const { hours, minutes, seconds } = this.state.time;
    return (
      <>
        <div>{hours}:{minutes > 9 ? minutes : '0' + minutes}:{seconds > 9 ? seconds : '0' + seconds}</div>
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));