import React, { Component } from 'react';
import ModalImage from "../../utils/ModalPacket"

class CardPacket extends Component {
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
        let {packet} =this.props
        return (
    <div>
      <div class="featured-item" style={{height:"667px"}}>
        <img class="card-img rounded-0" src={packet.packet_picture} onClick={this.handleShow} alt="" />
        {/* {console.log(menu.image)} */}
        <div class="item-body">
          <a href="#">
            <h3>{packet.packet_name}</h3>
          </a>
          <p>{packet.desc}</p>
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
            <h3 class="price-tag">Rp.{packet.total_price}</h3>
        </div>
      </div>
    </div>
        <ModalImage 
          show={this.state.show} 
          handleClose={this.handleCancel} 
          packet={packet}
        />
</div>
    );
  }
}

export default CardPacket;