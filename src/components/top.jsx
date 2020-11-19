import React, { Component } from 'react';

class Top extends Component {
    state = { 
        cart:0,
     }
    render() { 
        return ( 
            <header >
               <div style={{'display':'flex','justifyContent':'space-between','paddingTop':20,'paddingLeft':40,'paddingRight':40}}>
                   <span>
                       <h3>
                       O'cart
                       </h3>
                   </span>
                 <span>
                 <ul>
                       <li><input type="text" className='form-control'/></li>
                       <li><span className='badge badge-info'>{this.state.cart}</span>  <i className="fa fa-shopping-cart" aria-hidden="true" style={{'fontSize':18}}></i>
</li>
                       <li>user</li>
                   </ul>
                 </span>
               </div>
            </header>
         );
    }
}
 
export default Top;