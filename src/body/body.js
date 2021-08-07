import React, {Component} from 'react'
import './body.css'
import keys from './keys.png'
import drive from './drive.png'
import settings from './settings.png'
import battery from './battery.png'
import Tires from './Tires.png'
import lock from './lock.png'
import left from './left.png'
import right from './right.png'
import car from './Car.png'
import grafic1 from './grafic1.png'
import grafic2 from './grafic2.png'


export default class body extends Component {
    render(){
        return(
            <div className='class'>
                <div className='class1'>
                    <div className='body-border'>
                        <img src={keys} alt='keys' className='keys'></img>
                        <div className='kubic'>Start</div>
                    </div>
                    <div className='body-border'>
                    <img src={drive} alt='drive' className='keys'></img>
                        <div className='kubic'>Drive</div>
                    </div >
                    <div className='body-border'>
                    <img src={settings} alt='settings' className='keys'></img>
                        <div className='kubic'>Maintinance</div>
                    </div >
                    <div className='body-border'>
                    <img src={battery} alt='battery' className='keys'></img>
                        <div className='kubic'>Battery</div>
                    </div>
                    <div className='body-border'>
                    <img src={Tires} alt='Tires' className='keys'></img>
                        <div className='kubic'>Tires</div>
                    </div>
                    <div className='body-border'>
                    <img src={lock} alt='lock' className='keys'></img>
                        <div className='kubic'>Lock</div>
                    </div>
                </div>
                <div className='class2'>
                <div className='body-middle'>
                        <div className='middle-left'>
                            <div className='middle-left-top'>
                                <div className='top-text'>Infinite Renault</div>
                                <div className='top-text-small'>TM</div>
                                <div className='img-left-border'>
                                    <img src={left} alt='left' className='img-left'></img>
                                </div>
                                <div className='img-right-border'>
                                    <img src={right} alt='right' className='img-right'></img>
                                </div>
                            </div>
                            <div className='middle-left-bottom'>
                                <img src={car} alt='car' className='car-width'></img>
                            </div>
                        </div>
                        <div className='middle-right'>
                            <div className='middle'>
                                <div className='middle-top'>
                                    <div className='img-cat-background'>
                                        <i className='fa fa-paw' style={{color:'green'}}></i>
                                        <div className='paw-main1'>
                                            <div className='paw-number'>72</div>
                                            <div className='paw-text'>Championships</div>
                                        </div> 
                                        
                                    </div>
                                </div>
                                <div className='middle-middle'>
                                    <div className='img-cat-background coffee'>
                                        <i className='fa fa-coffee' style={{color:'blue'}}></i>
                                        <div className='paw-main2'>
                                            <div className='paw-number'>32</div>
                                            <div className='paw-text'>Skins</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='middle-bottom'>
                                    <div className='img-cat-background trophy'>
                                        <i className='fa fa-trophy' style={{color:'yellow'}}></i>
                                        <div className='paw-main3   '>
                                            <div className='paw-number'>64</div>
                                            <div className='paw-text'>Trophies_Won </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                    
                <div className='class3'>
                    <div className='bottom-img'>
                        <div className='grafic1'>
                            <img src={grafic1} alt='grafic1'></img>
                        </div>
                        <div className='grafic2'>
                            <img src={grafic2} alt='grafic2'></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}