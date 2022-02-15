import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./banner.scss";
const Banner = () => {
  const owl_option = {
    nav: true,
    dots: false,
    dotsEach: false,
    loop: true,
    autoplay: false,
    navText: [
      "<i class='fas fa-angle-left'></i>",
      "<i class='fas fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        margin: 15,
      },
      361: {
        items: 1,
        margin: 15,
      },
      600: {
        items: 1,
        margin: 15,
      },
      700: {
        items: 3,
        margin: 40,
      },
      1000: {
        items: 4,
        margin: 40,
      },
      1200: {
        items: 4,
        margin: 40,
      },
    },
  };
  return (
    <>
      <section className="main_Section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-11 col-lg-11 col-12 m-auto">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                  <h1 className="ghghg">
                    Collect your <br /> favourite <br /> Chronicles
                  </h1>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui <br /> blanditiis praesentium voluptatum deleniti atque
                    corrupti quos quidem <br /> rerum facilis est et expedita
                    distinctio libero tempore, cum soluta nobis <br /> est.
                  </p>
                  <div className="two_items">
                    <button>How to Buy</button>
                    <div className="">
                      <h6>View on opensea</h6>
                      <span>
                        <img
                          src="./assestmeta/Crynical/bannerimg1.svg"
                          alt="img"
                          className="image-fluid"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                  <div className="banner_img">
                    <img
                      src="./assestmeta/Crynical/bannerimg.png"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadoww">
          <img
            src="./assestmeta/Crynical/s1.png"
            alt="img"
            className="image-fluid"
          />
        </div>
      </section>
      <section className="learn_us">
        <div className="shadoww">
          <img
            src="./assestmeta/Crynical/s2.png"
            alt="img"
            className="img-fluid"
          />
        </div>
        <div className="banner_imgncsjcn">
          <img src="./assestmeta/Crynical/learn1.svg" alt="img" />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-10 col-lg-10 col-md-10 col-12 m-auto">
              <div className="col_items">
                <div className="text">
                  <h1 className="ghghg">learn about us</h1>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium <br /> voluptatum deleniti atque
                    corrupti quos quidem rerum facilis est et expedita.
                  </p>
                </div>
                <div className="learnus_img">
                  <img src="./assestmeta/Crynical/picture.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadoww3">
          <img
            src="./assestmeta/Crynical/s3.png"
            alt="img"
            className="img-fluid"
          />
        </div>
        <div className="shadoww4">
          <img
            src="./assestmeta/Crynical/s4.png"
            alt="img"
            className="img-fluid"
          />
        </div>
      </section>
      <section className="who_we_are">
        <div className="container_fluid">
          <div className="row">
            <div className="col-xl-11 col-lg-11 col-md-11 col-12 m-auto">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                  <div className="about_us">
                    <div className="banner_imgncsjcn">
                      <img src="./assestmeta/Crynical/about1.svg" alt="img" />
                    </div>
                    <h5>Who We Are</h5>
                    <h4>
                      Nam libero tempore, cum soluta nobis est eligendi optio
                      cumque nihil impedit quo minus id quod maxime.
                    </h4>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui <br /> blanditiis praesentium voluptatum deleniti
                      atque corrupti quos <br /> quidem rerum facilis est et
                      expedita distinctio libero tempore, <br /> cum soluta
                      nobis est. <br /> <br />
                      Temporibus autem quibusdam et aut officiis debitis aut
                      rerum necessitatibus saepe eveniet ut et voluptates
                      repudiandae sint et molestiae non recusandae. Itaque earum
                      rerum hic tenetur a sapiente delectus
                    </p>
                    <h3>
                      At vero eos et accusamus et iusto odio dignissimos <br />{" "}
                      ducimus qui blanditiis praesentium voluptatum deleniti{" "}
                      <br /> atque.
                    </h3>
                    <button>Read Our WhitePaper</button>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                  <div className="about_img">
                    <img
                      src="./assestmeta/Crynical/aboutus.png"
                      alt="img"
                      className="image-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about_token">
      <div className="shadoww5">
          <img
            src="./assestmeta/Crynical/s5.png"
            alt="img"
            className="img-fluid"
          />
        </div>
        <div className="container_fluid">
          <div className="row">
            <div className="col-xl-11 col-lg-11 col-md-11 col-12 m-auto">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                  <div className="about_img">
                    <img src="./assestmeta/Crynical/token2.svg" alt="img" />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                  <div className="about_us">
                    <div className="banner_imgncsjcn">
                      <img src="./assestmeta/Crynical/token1.svg" alt="img" />
                    </div>
                    <h5>ABOUT TOKEN</h5>
                    <h4>
                      Nam libero tempore, cum soluta nobis est eligendi optio
                      cumque nihil impedit quo minus id quod maxime.
                    </h4>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui <br /> blanditiis praesentium voluptatum deleniti
                      atque corrupti quos <br /> quidem rerum facilis est et
                      expedita distinctio libero tempore, <br /> cum soluta
                      nobis est. <br /> <br />
                      Temporibus autem quibusdam et aut officiis debitis aut
                      rerum necessitatibus saepe eveniet ut et voluptates
                      repudiandae sint et molestiae non recusandae. Itaque earum
                      rerum hic tenetur a sapiente delectus
                    </p>
                    <h3>
                      At vero eos et accusamus et iusto odio dignissimos <br />{" "}
                      ducimus qui blanditiis praesentium voluptatum deleniti{" "}
                      <br /> atque.
                    </h3>
                    <button>BUY ON SYNSWAP</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadoww6">
          <img
            src="./assestmeta/Crynical/s6.png"
            alt="img"
            className="img-fluid"
          />
        </div>
      </section>
      <section className="outer">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-xl-10 col-lg-11 col-md-12 col-12 m-auto">
              <div className="hdhdhd">
                <div className="inner">
                  <p>TOKEN SYMBOL</p>
                  <h6>$CYNC</h6>
                </div>
                <span>|</span>
                <div className="inner">
                  <p>TOTAL SUPPLY</p>
                  <h6>1 Quadrillion</h6>
                </div>
                <span>|</span>
                <div className="inner">
                  <p>Current Price</p>
                  <h6>$0.001 </h6>
                </div>
                <span>|</span>
                <div className="inner">
                  <p>Market Cap</p>
                  <h6>$500M</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our_nft">
      <div className="shadoww7">
          <img
            src="./assestmeta/Crynical/s7.png"
            alt="img"
            className="img-fluid"
          />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-11 col-lg-11 col-md-10 col-12 m-auto">
              <div className="text">
                <div className="banner_imgncsjcn">
                  <img src="./assestmeta/Crynical/some1.svg" alt="img" />
                </div>
                <h1 className="ghghg">Some of our nfts</h1>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium <br /> voluptatum deleniti atque
                  corrupti quos quidem rerum facilis est et expedita.
                </p>
              </div>
              <div class="owl_option">
                <OwlCarousel className="owl-theme" {...owl_option}>
                  <div class="item">
                    <img src="./assestmeta/Crynical/our1.png" alt="img" />
                    <h4>Dystain #001</h4>
                  </div>
                  <div class="item">
                    <img src="./assestmeta/Crynical/our2.png" alt="img" />
                    <h4>Z-1A #001</h4>
                  </div>
                  <div class="item">
                    <img src="./assestmeta/Crynical/our3.png" alt="img" />
                    <h4>Niancia #001</h4>
                  </div>
                  <div class="item">
                    <img src="./assestmeta/Crynical/our4.png" alt="img" />
                    <h4>Z-Merc #001</h4>
                  </div>
                  <div class="item">
                    <img src="./assestmeta/Crynical/our1.png" alt="img" />
                    <h4>Dystain #001</h4>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
        <div className="shadoww8">
          <img
            src="./assestmeta/Crynical/s8.png"
            alt="img"
            className="img-fluid"
          />
        </div>
      </section>

      <section className="howtobuy">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-10 col-lg-10 col-md-11 col-12 m-auto">
              <div className="text">
                <div className="banner_imgncsjcn">
                  <img src="./assestmeta/Crynical/buy.svg" alt="img" />
                </div>
                <h1 className="ghghg">how to buy</h1>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium <br /> voluptatum deleniti atque
                  corrupti quos quidem rerum facilis est et expedita.
                </p>
              </div>
              <div className="main">
                <div className="left">
                  <img src="./assestmeta/Crynical/buy1.svg" alt="img" />
                </div>
                <div className="right">
                  <h4>Step-01</h4>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos <br />{" "}
                    ducimus qui blanditiis praesentium voluptatum deleniti{" "}
                    <br /> atque corrupti quos quidem rerum facilis est et{" "}
                    <br /> expedita.
                  </p>
                </div>
              </div>
              <div className="img_hold">
                <img src="./assestmeta/Crynical/buy5.svg" alt="img" />
              </div>
              <div className="main">
                <div className="right hdfbndjfj">
                  <h4>Step-02</h4>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos <br />{" "}
                    ducimus qui blanditiis praesentium voluptatum deleniti{" "}
                    <br /> atque corrupti quos quidem rerum facilis est et{" "}
                    <br /> expedita.
                  </p>
                </div>
                <div className="left">
                  <img src="./assestmeta/Crynical/buy2.svg" alt="img" />
                </div>
              </div>
              <div className="img_hold">
                <img src="./assestmeta/Crynical/buy4.svg" alt="img" />
              </div>
              <div className="main">
                <div className="left">
                  <img src="./assestmeta/Crynical/buy3.svg" alt="img" />
                </div>
                <div className="right">
                  <h4>Step-03</h4>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos <br />{" "}
                    ducimus qui blanditiis praesentium voluptatum deleniti{" "}
                    <br /> atque corrupti quos quidem rerum facilis est et{" "}
                    <br /> expedita.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadoww9">
          <img
            src="./assestmeta/Crynical/s9.png"
            alt="img"
            className="img-fluid"
          />
        </div>
      </section>
      <section className="join_our">
      <div className="shadoww10">
          <img
            src="./assestmeta/Crynical/s10.png"
            alt="img"
            className="img-fluid"
          />
        </div>
        <div className="container_fluid">
          <div className="row">
            <div className="col-xl-11 col-lg-11 col-md-11 col-12 m-auto">
              <div className="bg">
                <div className="text">
                  <div className="banner_imgncsjcn">
                    <img src="./assestmeta/Crynical/join1.svg" alt="img" />
                  </div>
                  <h1 className="ghghg">join our community</h1>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum <br /> deleniti atque
                    corrupti quos quidem rerum facilis est et expedita.
                  </p>
                </div>
                <div className="logo_img">
                  <div className="img">
                    <img
                      src="./assestmeta/Crynical/Frame 29.svg"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                  <div className="img">
                    <img
                      src="./assestmeta/Crynical/Frame 30.svg"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                  <div className="img">
                    <img
                      src="./assestmeta/Crynical/Frame 31.svg"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                  <div className="img">
                    <img
                      src="./assestmeta/Crynical/Frame 32.svg"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                  <div className="img">
                    <img
                      src="./assestmeta/Crynical/Frame 33.svg"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                  <div className="img">
                    <img
                      src="./assestmeta/Crynical/Frame 34.svg"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadoww11">
          <img
            src="./assestmeta/Crynical/s11.png"
            alt="img"
            className="img-fluid"
          />
        </div>
      </section>
      <section className="meet_our">
        <div className="container_fluid">
          <div className="row">
            <div className="col-xl-11 col-lg-11 col-md-11 col-12 m-auto">
              <div className="text">
                <div className="banner_imgncsjcn">
                  <img src="./assestmeta/Crynical/meet1.svg" alt="img" />
                </div>
                <h2>Meet Our Team</h2>
              </div>
              <div className="main_card">
                <div className="card">
                  <img
                    src="./assestmeta/Crynical/card1.png"
                    alt="img"
                    className="img-fluid"
                  />
                  <h6>PAUL BLAKE</h6>
                  <p>CEO OF CYN</p>
                  <div className="icon">
                    <img
                      src="./assestmeta/Crynical/icon.png"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="card">
                  <img
                    src="./assestmeta/Crynical/card2.svg"
                    alt="img"
                    className="img-fluid"
                  />
                  <h6>Clay Mcguire</h6>
                  <p>Designer</p>
                  <div className="icons">
                    <img
                      src="./assestmeta/Crynical/icon.png"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="card">
                  <img
                    src="./assestmeta/Crynical/card3.svg"
                    alt="img"
                    className="img-fluid"
                  />
                  <h6>Henry Young</h6>
                  <p>Artist Designer</p>
                  <div className="icons">
                    <img
                      src="./assestmeta/Crynical/icon.png"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="card">
                  <img
                    src="./assestmeta/Crynical/card2.svg"
                    alt="img"
                    className="img-fluid"
                  />
                  <h6>Joseph Barton</h6>
                  <p>NFTs Expert</p>
                  <div className="icons">
                    <img
                      src="./assestmeta/Crynical/icon.png"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact_us">
      <div className="shadoww12">
          <img
            src="./assestmeta/Crynical/s12.png"
            alt="img"
            className="img-fluid"
          />
        </div>
        <div className="container_fluid">
          <div className="row">
            <div className="col-xl-11 col-lg-11 col-md-11 col-12 m-auto">
              <div className="bg">
                <div className="text">
                  <div className="banner_imgncsjcn">
                    <img src="./assestmeta/Crynical/contact1.svg" alt="img" />
                  </div>
                  <h1 className="ghghg">contact us</h1>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum <br /> deleniti atque
                    corrupti quos quidem rerum facilis est et expedita.
                  </p>
                </div>
                <div className="main">
                  <div className="left">
                    <input type="text" placeholder="Full Name" />
                    <input type="text" placeholder="Email Address" />
                    <input type="text" placeholder="Subject" />
                    <div className="btn">
                      <button>Send</button>
                    </div>
                  </div>
                  <div className="right">
                    <input type="text" placeholder="Message" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="shadoww13">
          <img
            src="./assestmeta/Crynical/s13.png"
            alt="img"
            className="img-fluid"
          />
        </div> */}
      </section>
    </>
  );
};

export default Banner;
