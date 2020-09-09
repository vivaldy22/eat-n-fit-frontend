import React, { Component } from 'react';
import imgOrder1 from "../img/home/how-to-order-1.png"
import imgOrder2 from "../img/home/how-to-order-2.png"
import imgOrder3 from "../img/home/how-to-order-3.png"
import imgOrder4 from "../img/home/how-to-order-4.png"
import imgOrder5 from "../img/home/how-to-order-5.png"
class CaraPesan extends Component {
    render() {
        return (
<div>
    <div className="container-fluid" style={{marginBottom:"100px"}}>
    <div className="row mt-4">
	<div class="hero-banner hero-banner-sm"> 
		<div class="row mt-5">
			<div class="col-xs-12">
				<div class="line-sparator background"><span> </span></div>
			</div>
			<div class="col-xs-12 col-sm-12 col-sm-offset-0 col-md-2 col-md-offset-1 petunjuk-pemesanan step-1" style={{marginTop:"100px", marginLeft:"100px"}}>
				<div class="petunjuk-pemesanan-image"><img src={imgOrder1} alt="petunjuk pemesanan step 1" clas="img-responsive" width="auto" height="auto"/></div>
				<div class="petunjuk-pemesanan-title" style={{textAlign:"center", fontFamily:"PT Serif", color:"maroon", fontSize:"20px"}}>1. Login / Registrasi</div>
				<div class="petunjuk-pemesanan-desc" style={{ fontFamily:"PT Serif", color:"black", fontSize:"15px"}}>Silahkan melakukan <strong>login / registrasi</strong> pada aplikasi
				Eat & Fit yang dapat anda unduh di ponsel anda .</div>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-2 petunjuk-pemesanan step-2" style={{marginTop:"85px", marginLeft:"15px"}}>
				<div class="petunjuk-pemesanan-image"><img src={imgOrder2} alt="petunjuk pemesanan step 2" clas="img-responsive" width="210px" height="220px"/></div>
				<div class="petunjuk-pemesanan-title" style={{textAlign:"center", fontFamily:"PT Serif", color:"maroon", fontSize:"20px"}}>2. Pilih Package</div>
				<div class="petunjuk-pemesanan-desc" style={{ fontFamily:"PT Serif", color:"black", fontSize:"15px"}}>Pilih paket yang ingin Anda pesan.</div>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-2 petunjuk-pemesanan step-3" style={{marginTop:"100px", marginLeft:"15px"}}>
				<div class="petunjuk-pemesanan-image"><img src={imgOrder3} alt="petunjuk pemesanan step 3" clas="img-responsive" width="auto" height="auto"/></div>
				<div class="petunjuk-pemesanan-title" style={{textAlign:"center", fontFamily:"PT Serif", color:"maroon", fontSize:"20px"}}>3. Lengkapi Data Pemesanan</div>
				<div class="petunjuk-pemesanan-desc" style={{ fontFamily:"PT Serif", color:"black", fontSize:"15px"}}>Lengkapi data pemesanan Anda, sesuai informasi yang dibutuhkan.</div>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-2 petunjuk-pemesanan step-4" style={{marginTop:"100px"}}>
				<div class="petunjuk-pemesanan-image"><img src={imgOrder4} alt="petunjuk pemesanan step 4" clas="img-responsive" width="auto" height="auto"/></div>
				<div class="petunjuk-pemesanan-title" style={{textAlign:"center", fontFamily:"PT Serif", color:"maroon", fontSize:"20px"}}>4. Pembayaran</div>
				<div class="petunjuk-pemesanan-desc" style={{ fontFamily:"PT Serif", color:"black", fontSize:"15px"}}>Lakukan checkout pemesanan dan pilih metode pembayaran yang diinginkan. </div>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-2 petunjuk-pemesanan step-5" style={{marginTop:"100px"}}>
				<div class="petunjuk-pemesanan-image"><img src={imgOrder5} alt="petunjuk pemesanan step 5" clas="img-responsive" width="auto" height="auto"/></div>
				<div class="petunjuk-pemesanan-title" style={{textAlign:"center", fontFamily:"PT Serif", color:"maroon", fontSize:"20px"}}>5. Silahkan Tunggu</div>
				<div class="petunjuk-pemesanan-desc" style={{ fontFamily:"PT Serif", color:"black", fontSize:"15px"}}>Pesanan Anda akan diantar sesuai dengan data yang telah kami terima.</div>
			</div>
		</div>
	</div>
</div>
</div>
    </div>
        );
    }
}

export default CaraPesan;