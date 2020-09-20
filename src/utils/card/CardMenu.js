import React, { Component } from 'react';
import ModalImage from "../ModalAKG"
import img1 from "../../img/home/gambar1.jpg"

class CardMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  handleShow = () => {
    this.setState({
      show: true,
    });
  };
  handleCancel = () => {
    this.setState({
      show: false,
    });
  };
    render() {
        let {menu} =this.props
        return (
    <div>
      <div class="featured-item" style={{height:"667px"}}>
        <img class="card-img rounded-0" src={menu.food_picture} onClick={this.handleShow} alt=""/>
        {/* <img class="card-img rounded-0" src={`http://94da48e8dae8.ngrok.io/image/${menu.food_id}.jpg`} onClick={this.handleShow} alt=""/> */}
        {/* {console.log(menu.image)} */}
        <div class="item-body">
          <a href="#">
            <h3>{menu.food_name}</h3>
          </a>
          <p>{menu.food_desc}</p>
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
            <h3 class="price-tag">Rp.{menu.food_price}</h3>
        </div>
      </div>
    </div>
        <ModalImage 
          show={this.state.show} 
          handleClose={this.handleCancel} 
          menu={menu}
        />
</div>
    );
  }
}

export default CardMenu;