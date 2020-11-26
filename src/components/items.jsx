import React, { Component } from 'react';
import Top from './top'
class Items extends Component {
    state = {}
    render(props) { 
        console.log(this.props.buyAction)
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
                        <button onClick={()=>this.props.buyAction()} className='btn btn-info'>Buy{this.state.cart}</button>
                       
                    </span>
                </div>
            </div>
            </>
         );
    }
}
 
export default Items;