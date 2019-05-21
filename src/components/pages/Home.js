import React, { Component } from 'react';

class Home extends Component {
  state = {
    loading: true
  }

  componentDidMount() {

    setTimeout(() => {
      this.setState({ loading: false })
    }, 0)
  }

  render() {

    const { loading } = this.state
    const LOADING_GIF = "https://cdn.dribbble.com/users/484807/screenshots/4421616/kinsella_jared_chemistryloading_2017-08-09.gif"
    const LOADING_ALT = 'loading'

    const PAGE_GIF = "https://cdn.cnn.com/cnnnext/dam/assets/171004155619-singapore-vending-machine-chef-in-box-008-full-169.jpg"
    const PAGE_ALT = 'Vending Machine'

    if (loading) return <div><img alt={LOADING_ALT} src={LOADING_GIF}></img></div>
    return (
      <div className='PageContainer'>
        <img style={{ width: '100vh' }} alt={PAGE_ALT} src={PAGE_GIF}></img>
      </div>);
  }
}


export default Home;