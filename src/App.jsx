import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import './App.scss'
import React from "react"
import Header from './components/header/Header'
import Home from './pages/Home'

export class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0
    };
    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(index) {
    this.setState({selectedTab: index});
  }

  render () {
    return (
      <div className="App">
        <Header selectedTab={this.state.selectedTab} selectTab={this.selectTab.bind(this)}/>
        <Home selectedTab={this.state.selectedTab} selectTab={this.selectTab.bind(this)}/>
      </div>
    )
  }
}

export default App
