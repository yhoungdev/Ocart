import React, { Component } from 'react';
import Top from './top'
class Items extends Component {
    state = {  }
    render(props) { 
        return ( 
            <>
           
            <div id='items'>
            
                {/* cards  */}
                <div className='goods'>
                <img src={this.props.pix} alt="" className='foto'/>
                    <span>
                        <ul>
                             <li>name: {this.props.name} </li>
                            <li>price: {this.props.price}</li>
                            <li>rate: {this.props.rate}</li>
                            
                        </ul>
                        <button className='btn btn-info'>Buy</button>
                        <h1>{this.state.cart}</h1>
                    </span>
                </div>
            </div>
            </>
         );
    }
}
 
export default Items;