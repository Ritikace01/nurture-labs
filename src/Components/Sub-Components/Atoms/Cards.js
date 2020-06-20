import React, { Component } from "react";
import Profile from "../../../Images/person.png";
import TimerIcon from "@material-ui/icons/Timer";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import TranslateIcon from "@material-ui/icons/Translate";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import getInfo from "../../../Fake/Details";

class Cards extends Component {
  state = {
    details: [],
  };

  componentDidMount() {
    this.setState({ details: getInfo() });
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-3">
          <div className="card-deck">
            <div className="d-flex flex-column flex-width">
              {this.state.details.map((info) => (
                <div className="card" style={{ marginTop: "2rem" }}>
                  <div className="row">
                    <div className="col-3">
                      <img style={{ padding: "1vw" }} src={Profile} />
                      <p style={{ paddingLeft: "3rem" }}>
                        Price : <span style={{ color: "#58D68D " }}>FREE</span>
                      </p>
                      <i
                        style={{ paddingLeft: "3rem", color: "#F39C12" }}
                        className="fa fa-star"
                      ></i>{" "}
                      4.9 (120)
                    </div>

                    <div className="col-9 " style={{ padding: "1vw" }}>
                      <div className="card-title">
                        <div className="container-4">
                          <div style={{ flex: "1" }}>
                            <h5>{info.name}</h5>
                            <p>{info.job}</p>
                          </div>
                          <div
                            style={{
                              flex: "1",
                              textAlign: "right",
                              paddingRight: "2rem",
                            }}
                          >
                            <FavoriteBorderIcon
                              style={{
                                marginRight: "1rem",
                                color: "#EB984E ",
                              }}
                            />
                            <button
                              style={{ backgroundColor: "#EB984E " }}
                              type="button"
                              class="btn btn-primary border-0"
                            >
                              View Profile
                            </button>
                          </div>
                        </div>
                        <hr />
                        <div className="col d-flex justify-content-left">
                          <p style={{ marginRight: "2rem" }}>
                            <TimerIcon fontSize="small" />
                            {info.schedule}
                          </p>
                          <p style={{ marginRight: "2rem" }}>
                            <LocationOnIcon />
                            {info.location}
                          </p>
                          <p style={{ marginRight: "2rem" }}>
                            <TranslateIcon />
                            {info.languages}
                          </p>
                        </div>
                      </div>
                      <div className="card-text">{info.profile}</div>
                      <div className="col d-flex justify-content-left mt-4 p-0">
                        <button className="btn btn-sm pl-0">Marketing</button>
                        <button className="btn btn-sm">SEO</button>
                        <button className="btn btn-sm">
                          Content Marketing
                        </button>
                        <button className="btn btn-sm">
                          Marketing Automation
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Cards;
