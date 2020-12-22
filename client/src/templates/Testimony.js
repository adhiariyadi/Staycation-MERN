import React from "react";
import Fade from "react-reveal/Fade";
import Star from "components/Star";
import Button from "components/Button";

export default function Testimony({ data }) {
  return (
    <Fade bottom>
      <section className="container">
        <div className="row align-items-center">
          <div className="col-auto" style={{ marginRight: 70 }}>
            <div className="testimonial-hero" style={{ width: 410 }}>
              <img
                src={`http://localhost:4000/${data.imageUrl}`}
                alt="Testimonial"
                className="position-absolute"
                style={{
                  width: 370,
                  height: 500,
                  zIndex: 1,
                  margin: "30px 0 0 30px",
                  borderRadius: "15px 15px 100px 15px",
                }}
              />
              <div
                className="frame"
                style={{
                  width: 365,
                  height: 500,
                }}
              ></div>
            </div>
          </div>
          <div className="col">
            <h4 style={{ marginBottom: 40 }}>{data.name}</h4>
            <Star value={data.rate} height={35} width={35} spacing={4}></Star>
            <h5 className="h2 font-weight-light line-height-2 my-3">
              {data.content}
            </h5>
            <span className="text-gray-500">
              {data.familyName}, {data.familyOccupation}
            </span>
            <div>
              <Button
                className="btn px-5"
                style={{ marginTop: 40 }}
                hasShadow
                isPrimary
                type="link"
                href={`/testimonial/${data._id}`}
              >
                Read Their Story
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
