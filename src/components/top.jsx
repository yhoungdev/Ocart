import React, { Component } from 'react';

class Top extends Component {
    state = { 
        cart:0
     }
      
    render() { 
        console.log(this.props.cartItems)
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
                       <li><input type="text" className='form-control' placeholder='search'/>
</li>
                       <li><span className='badge badge-info'>{this.props.cartItems}</span>  <i className="fa fa-shopping-cart" aria-hidden="true" onClick={()=>alert('chill still under developement , this should be done by push notification instead of Alert')}style={{'fontSize':18}}></i>
</li>
                       
                   </ul>
                 </span>
               </div>
            </header>
         );
    } 
}
 
export default Top;