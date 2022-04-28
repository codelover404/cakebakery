import React from 'react'

export default function Footer() {
  return (
    <>
        
    <footer className="bg-light py-5">
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row align-items-center">
                            <div className="col-md-4">
                                <h4>BE THE FIRST TO KNOW.</h4>
                                <small className=".adtervisement-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, voluptate.</small> 
                            </div>
                            <div className="col-md-4 d-flex align-items-center">
                                <input type="text" className="form-control" style={{width: "100%", height:" 8vh"}}></input>
                                <button className="btn btn-danger" style={{height: "8vh"}}>Subscribe</button>
                            </div>
                            <div className=" mt-3 mt-md-0 col-md-4">
                                <ul className="list-unstyled d-flex align-items-center justify-content-end">
                                    <li className="shadow-sm bg-danger text-light mx-3 p-2 px-3"><i className="fab fa-facebook"></i></li>
                                    <li className="shadow-sm bg-danger text-light mx-3 p-2 px-3"><i className="fab fa-twitter"></i></li>
                                    <li className="shadow-sm bg-danger text-light mx-3 p-2 px-3"><i className="fab fa-instagram"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-5">
                    <hr/>
                    <div className="col-md-3">
                        <h6>GET IN TOUCH</h6>
                        <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero molestiae corporis error, natus officiis eum eaque dolore nobis in tempora tenetur quam eligendi? Voluptatibus velit laborum officia </small>

                    </div>
                    <div className="col-md-3">
                        <h6>OUR COMPANY</h6>
                        <ul className="list-unstyled">
                            <li>About us</li>
                            <li>Career</li>
                            <li>Contact</li>
                            <li>Gallery</li>
                        </ul>
                </div>
                <div className="col-md-3">
                    <h6>CUSTOMER SUPPORT</h6>
                    <ul className="list-unstyled">
                        <li>Customer service</li>
                        <li>store location</li>
                    </ul>
            </div>
            <div className="col-md-3">
                <h6>Navigator SUPPORT</h6>
                <ul className="list-unstyled">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                </div>
            </div>
        </div>
        </div>
    </footer>
    </>
  )
}
