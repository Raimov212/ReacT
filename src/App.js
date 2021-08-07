import React from 'react';
import Body from './body/body'
import Navbar from './navbar/navbar'
import Sidebar from './sidebar/sidebar'
import './App.css'

class G95 extends React.Component{
  render(){
    return(
      <div className='app-container'>
        <Sidebar />
        <div className='app-main'>
          <Navbar />
          <Body />
        </div>
      </div>
    )
  }
}
export default G95
