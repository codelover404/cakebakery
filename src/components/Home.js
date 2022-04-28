import React from "react";
import "../Style.css";
import banner_img from "../images/banner.png";

export default function Home() {
  return (
    <>
      {/* BANNER START */}
      <section className="top_banner align-center">
        <div className="container">
          <div className="row rh align-items-center justify-content-between">
            <div className="col-md-6 text-white pt-4 pt-sm-0">
              <h1>Curabitur arcu erat, accumsan id imperdiet</h1>
              <p>
                Cras ultricies ligula sed magna dictum porta. Nulla quis lorem
                ut libero malesuada feugiat. Curabitur arcu erat, accumsan id
                iwe beake the best and tasty case all arroung the world 
              </p>
              <a href="" className="btn btn-danger btn-lg">
                Taste me
              </a>
            </div>
            <div className="col-md-6 text-right">
              <img src={banner_img} className="w-100 banner_img"></img>
            </div>
          </div>
        </div>
      </section>
      {/* BANNER START */}

      {/* WELLCOME SECTION START */}

      <div className="container my-5">
        <div className="row rh align-items-center">
          <div className="col-md-6">
            <img src={banner_img} className="w-75 banner_img hidden_img"></img>
          </div>
          <div className="col-md-6">
            <h1 className="">
              Wellcome To <span className="text-danger">Bakery in</span>
            </h1>
            <p>
              Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut
              libero malesuada feugiat. Curabitur arcu erat, accumsan id
              iwe beake the best and tasty case all arroung the world 
            </p>
          </div>
        </div>
      </div>

      {/* WELLCOME SECTION END */}

      {/* KNOW MORE ABOUT START */}

      <div className="container">
        <div className="row justify-content-around">
          <div className="mt-3 col-md-3 mt-sm-3 shadow p-3 py-4 know_card text-white">
            <h4>we beake the best and tasty case all arroung the world </h4>
            <small>
              malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et,
              porttitor at sem.
            </small>
            <a
              href="#"
              className=" btn btn-outline-danger btn-sm d-inline-block mt-3"
            >
              Read more.
            </a>
          </div>
          <div className="col-md-3 mt-3 mt-sm-3 shadow p-3 py-4 know_card text-white">
            <h4>we beake the best and tasty case all arroung the world </h4>
            <small>
              malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et,
              porttitor at sem.
            </small>
            <a
              href="#"
              className=" btn btn-outline-danger btn-sm d-inline-block mt-3"
            >
              Read more.
            </a>
          </div>
          <div className="col-md-3 mt-3 mt-sm-3 shadow p-3 py-4 know_card text-white">
            <h4>we beake the best and tasty case all arroung the world </h4>
            <small>
              malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et,
              porttitor at sem.
            </small>
            <a
              href="#"
              className=" btn btn-outline-danger btn-sm d-inline-block mt-3"
            >
              Read more.
            </a>
          </div>
        </div>
      </div>

      {/* KNOW MORE ABOUT  END*/}

      {/* MOST POPULAR CAKES START */}

      <div className="container-fluid popular_cakes py-5 my-5">
        <div className="container my-5">
            <div className="row justify-content-center mb-5 ">
                <h1 className="text-white">Popular <span className="text-danger font-weight-bolder"> Cakes.</span></h1>
            </div>
          <div className="row justify-content-around">
            <div className="col-7 col-sm-5 col-md-3 mt-3 mt-sm-3 shadow p-3 py-4 know_card text-white">
              <img src={banner_img} className="w-75 banner_img"></img>

              <h4>we beake the best and tasty case all arroung the world </h4>
              <small>
                malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet
                et, porttitor at sem.
              </small>
              <a
                href="#"
                className=" btn btn-outline-danger btn-sm d-inline-block mt-3"
              >
                Read more.
              </a>
            </div>
            <div className="col-7 col-sm-5 col-md-3 mt-3 mt-sm-3 shadow p-3 py-4 know_card text-white">
              <img src={banner_img} className="w-75 banner_img"></img>

              <h4>we beake the best and tasty case all arroung the world </h4>
              <small>
                malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet
                et, porttitor at sem.
              </small>
              <a
                href="#"
                className=" btn btn-outline-danger btn-sm d-inline-block mt-3"
              >
                Read more.
              </a>
            </div>
            <div className="col-7 col-sm-5 col-md-3 mt-3 mt-sm-3 shadow p-3 py-4 know_card text-white">
              <img src={banner_img} className="w-75 banner_img"></img>

              <h4>we beake the best and tasty case all arroung the world </h4>
              <small>
                malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet
                et, porttitor at sem.
              </small>
              <a
                href="#"
                className=" btn btn-outline-danger btn-sm d-inline-block mt-3"
              >
                Read more.
              </a>
            </div>
          </div>




          <div className="row justify-content-around">
            <div className="col-7 col-sm-5 col-md-3 mt-3 mt-sm-3 shadow p-3 py-4 know_card text-white">
              <img src={banner_img} className="w-75 banner_img"></img>

              <h4>we beake the best and tasty case all arroung the world </h4>
              <small>
                malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet
                et, porttitor at sem.
              </small>
              <a
                href="#"
                className=" btn btn-outline-danger btn-sm d-inline-block mt-3"
              >
                Read more.
              </a>
            </div>
            <div className="col-7 col-sm-5 col-md-3 mt-3 mt-sm-3 shadow p-3 py-4 know_card text-white">
              <img src={banner_img} className="w-75 banner_img"></img>

              <h4>we beake the best and tasty case all arroung the world </h4>
              <small>
                malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet
                et, porttitor at sem.
              </small>
              <a
                href="#"
                className=" btn btn-outline-danger btn-sm d-inline-block mt-3"
              >
                Read more.
              </a>
            </div>
            <div className="col-7 col-sm-5 col-md-3 mt-3 mt-sm-3 shadow p-3 py-4 know_card text-white">
              <img src={banner_img} className="w-75 banner_img"></img>

              <h4>we beake the best and tasty case all arroung the world </h4>
              <small>
                malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet
                et, porttitor at sem.
              </small>
              <a
                href="#"
                className=" btn btn-outline-danger btn-sm d-inline-block mt-3"
              >
                Read more.
              </a>
            </div>
          </div>
        
        </div>
      </div>

      {/* MOST POPULAR CAKES END */}

      
    </>
  );
}
