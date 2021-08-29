import React, { Component } from 'react';


export default class HeadPoster extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} className='poster-flex'>
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <hr></hr>
                        <h2>{this.props.title}</h2>
                    </div>
                    <div>
                        <img src={this.props.src} alt='src'/>
                    </div>
                </div>
                
            </div>
        )
    }
}
