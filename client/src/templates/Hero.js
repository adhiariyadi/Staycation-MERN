import React from "react";
import Fade from "react-reveal/Fade";
import ImageHero from "assets/images/img-hero.jpg";
import IconCities from "assets/images/icons/icon-cities.svg";
import IconTraveler from "assets/images/icons/icon-traveler.svg";
import IconTreasure from "assets/images/icons/icon-treasure.svg";
import Button from "components/Button";
import formatNumber from "utils/formatNumber";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 50,
      behavior: "smooth",
    });
  }

  return (
    <Fade bottom>
      <section className="container pt-4">
        <div className="row align-items-center">
          <div className="col-auto pr-5" style={{ width: 530 }}>
            <h1 className="font-weight-bold line-height-1 mb-3">
              Forget Busy Work,
              <br />
              Start Next Vacation
            </h1>
            <p
              className="mb-4 font-weight-light text-gray-500 w-75"
              style={{ lineHeight: "170%" }}
            >
              We provide what you need to enjoy your holiday with family. Time
              to make another memorable moments.
            </p>
            <Button
              className="btn px-5"
              isPrimary
              hasShadow
              onClick={showMostPicked}
            >
              Show Me Now
            </Button>

            <div className="row" style={{ marginTop: 80 }}>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  width="36"
                  src={IconTraveler}
                  alt={`${props.data.trevelers} travelers`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.trevelers)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    travelers
                  </span>
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  width="36"
                  src={IconTreasure}
                  alt={`${props.data.treasures} treasures`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.treasures)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    treasures
                  </span>
                </h6>
              </div>
              <div className="col-auto">
                <img
                  width="36"
                  src={IconCities}
                  alt={`${props.data.cities} cities`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.cities)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    cities
                  </span>
                </h6>
              </div>
            </div>
          </div>

          <div className="col-6 pl-5">
            <div style={{ width: 560 }}>
              <img
                src={ImageHero}
                alt="Room with couches"
                className="img-fluid position-absolute"
                style={{
                  width: 520,
                  height: 410,
                  margin: "-30px 0 0 -30px",
                  zIndex: 1,
                  borderRadius: "100px 15px 15px 15px",
                }}
              />
              <div
                className="frame"
                style={{
                  width: 510,
                  height: 400,
                  margin: "0 -15px -15px 0",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
