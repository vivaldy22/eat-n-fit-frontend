import React, { Component } from 'react';
import ModalImage from "../../utils/ModalAKG"

class CardMenu extends Component {
    render() {
        let {image, food_name,desc, price, cancel, show,handleShow} =this.props
        return (
    <div>
      <div class="featured-item" style={{height:"667px"}}>
      <img class="card-img rounded-0" src={image} onClick={ ()=>handleShow()} alt="" />
      {console.log(image)}
      <div class="item-body">
        <a href="#">
          <h3>{food_name}</h3>
        </a>
        <p>{desc}</p>
        <div class="d-flex justify-content-between">
          <ul class="rating-star">
            <li>
              <i class="ti-star"></i>
            </li>
            <li>
              <i class="ti-star"></i>
            </li>
            <li>
              <i class="ti-star"></i>
            </li>
            <li>
              <i class="ti-star"></i>
            </li>
            <li>
              <i class="ti-star"></i>
            </li>
          </ul> 
          <h3 class="price-tag">Rp.{price}</h3>
        </div>
      </div>
       
    </div>
</div>
        );
    }
}

export default CardMenu;