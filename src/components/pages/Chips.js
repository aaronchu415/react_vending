import React, { Component } from 'react';

class Chips extends Component {
  state = {
    loading: true
  }

  componentDidMount() {

    setTimeout(() => {
      this.setState({ loading: false })
    }, 500)
  }

  render() {

    const { loading } = this.state
    const LOADING_GIF = "https://cdn.dribbble.com/users/484807/screenshots/4421616/kinsella_jared_chemistryloading_2017-08-09.gif"
    const LOADING_ALT = 'loading'

    const PAGE_GIF = "https://media.giphy.com/media/CoLmHYnmx8ZWM/giphy.gif"
    const PAGE_ALT = 'Chips'

    const styles =
    {
      backgroundImage: 'url("./img/chips.jpg")',
      backgroundColor: '#cccccc',
      height: '100%',
      width: '100%',
      position: 'absolute',
      top: '0',
      left: '0',
      zIndex: '-1',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }

    if (loading) return <div><img alt={LOADING_ALT} src={LOADING_GIF}></img></div>
    return (
      <div style={styles}>
      </div>);
  }
}

export default Chips;