import React, { Component } from 'react';

class Macbook extends Component {
  state = {
    loading: true
  }

  componentDidMount() {

    setTimeout(() => {
      this.setState({ loading: false })
    }, 2000)
  }

  render() {

    const { loading } = this.state
    const LOADING_GIF = "https://cdn.dribbble.com/users/484807/screenshots/4421616/kinsella_jared_chemistryloading_2017-08-09.gif"
    const LOADING_ALT = 'loading'

    const PAGE_GIF = "https://media.giphy.com/media/kK0ig3VKMgrS0/giphy.gif"
    const PAGE_ALT = 'Macbook'

    if (loading) return <div><img alt={LOADING_ALT} src={LOADING_GIF}></img></div>
    return (
      <div className='PageContainer'>
        <img alt={PAGE_ALT} src={PAGE_GIF}></img>
      </div>);
  }
}

export default Macbook;