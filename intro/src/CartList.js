import React, { Component } from 'react';
import {Table, Badge} from "reactstrap";
export default class CartList extends Component {

      renderCart=()=>{
          return(
        <Table striped>
             <thead>
            <tr>
              <th>#</th>
              <th>Category Id</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Unit In Stock</th>
              <th>Quantity</th>
            </tr>
          </thead>
            <tbody>
               {
                   this.props.cart.map(cartItem=>(
                       <tr key={cartItem.product.id}>
                           <td>{cartItem.product.id}</td>
                           <td>{cartItem.product.categoryId}</td>
                           <td>{cartItem.product.productName}</td>
                           <td>{cartItem.product.unitPrice}</td>
                           <td>{cartItem.product.unitsInStock}</td>
                           <td>{cartItem.quantity}</td>
                           <td>   <Badge color="danger" onClick= {()=>this.props.removeFromChart(cartItem.product)}>
                X
                </Badge></td>
                       </tr>
                   ))
               }

            </tbody>
        </Table>
        )
      }

    render() {
        return (
            <div>
                {this.renderCart()}
            </div>
        )
    }
}
