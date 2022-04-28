import React from "react";
import about_img from "../images/aboutus.png";
import b1 from "../images/b1.jpg";
import b2 from "../images/b2.jpg";
import b3 from "../images/b3.jpg";

export default function About() {
  return (
    <>
      {/* WELLCOME SECTION START */}

      <div className="container my-5">
        <div className="row rh align-items-center">
          <div className="col-md-6">
            <img src={about_img} className="w-100 "></img>
          </div>
          <div className="col-md-6">
            <h1 className="">
              Wellcome To <span className="text-danger">Bakery in</span>
            </h1>
            <p>
              Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut
              libero malesuada feugiat. Curabitur arcu erat, accumsan id
              imperdiet et, porttitor at sem.Cras ultricies ligula sed magna
              dictum porta. Nulla quis lorem ut libero malesuada feugiat.
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            </p>
          </div>
        </div>
      </div>

      {/* our bakery SECTION END */}

      <div className="container my-5">
        <div className="row justify-content-center mb-5">
          <h1>
            Our{" "}
            <span className="text-danger font-weight-bolder"> Bakeries.</span>
          </h1>
        </div>
        <div className="row justify-content-center ">
          <div className="col-md-3">
            <img src={b1} className="w-100"></img>
          </div>
          <div className="col-md-6">
            <h4>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            </h4>
            <p>
              Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut
              libero malesuada feugiat. Curabitur arcu erat, accumsan id
              imperdiet et, porttitor at sem.Cras ultricies ligula sed magna
              dictum porta. Nulla quis lorem ut libero malesuada feugiat.
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            </p>
          </div>

          
        </div>

        <div className="row justify-content-center my-5">
          <div className="col-md-3">
            <img src={b2} className="w-100"></img>
          </div>
          <div className="col-md-6">
            <h4>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            </h4>
            <p>
              Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut
              libero malesuada feugiat. Curabitur arcu erat, accumsan id
              imperdiet et, porttitor at sem.Cras ultricies ligula sed magna
              dictum porta. Nulla quis lorem ut libero malesuada feugiat.
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            </p>
          </div>

          
        </div>

        <div className="row justify-content-center ">
          <div className="col-md-3">
            <img src={b3} className="w-100"></img>
          </div>
          <div className="col-md-6">
            <h4>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            </h4>
            <p>
              Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut
              libero malesuada feugiat. Curabitur arcu erat, accumsan id
              imperdiet et, porttitor at sem.Cras ultricies ligula sed magna
              dictum porta. Nulla quis lorem ut libero malesuada feugiat.
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            </p>
          </div>

          
        </div>
      </div>


    {/* PORTFOLIO START */}

        <div className="container know_card py-4 mb-5">
            <div className="row justify-content-center text-white">
                <div className="col-3 text-center">
                    <h4>Total Products</h4>
                    <h1 className="text-danger">900</h1>
                </div>
                <div className="col-3 text-center">
                    <h4>Total Branches</h4>
                    <h1 className="text-danger">90</h1>
                </div>
                <div className="col-3 text-center">
                    <h4>Happy Clients</h4>
                    <h1 className="text-danger">15900</h1>
                </div>
            </div>
        </div>

    {/* PORTFOLIO END */}


    </>
  );
}
