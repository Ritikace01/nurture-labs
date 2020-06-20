import React, { Component } from "react";
import ClearIcon from "@material-ui/icons/Clear";
import SearchIcon from "@material-ui/icons/Search";

class Sidebar extends Component {
  render() {
    return (
      <div className="card p-3">
        <div className="card-title">
          <h5>EXPERTISE</h5>
        </div>
        <div className="card-text">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Branding"
              aria-label="Branding"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <span class="input-group-text" id="basic-addon2">
                <SearchIcon />
              </span>
            </div>
          </div>
          <button className="btn btn-sm">
            <div className="col d-flex justify-content-center">
              <p>Strategy</p>
              <ClearIcon fontSize="small" />
            </div>
          </button>
          <br />
          <br />
          <h5 style={{ marginBottom: "1rem" }}>FOCUS AREA</h5>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Focus Area"
              aria-label="Focus Area"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <span class="input-group-text" id="basic-addon2">
                <SearchIcon />
              </span>
            </div>
          </div>
          <button className="btn btn-sm">
            <div className="col d-flex justify-content-center">
              <p>Focus Area</p>
              <ClearIcon fontSize="small" />
            </div>
          </button>
          <h5 style={{ marginTop: "3rem" }}>RATINGS</h5>

          <div className="row">
            <div className="col d-flex justify-content-center">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <input
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                    />
                  </div>
                </div>
                <div className="col d-flex justify-content-left">
                  <i className="fa fa-star mr-1" style={{ color: "#F39C12" }} />
                  <i className="fa fa-star mr-1" style={{ color: "#F39C12" }} />
                  <i className="fa fa-star mr-1" style={{ color: "#F39C12" }} />
                  <i className="fa fa-star" style={{ color: "#F39C12" }} />
                </div>
              </div>
            </div>
            <div className="col d-flex justify-content-center">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <input
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                    />
                  </div>
                </div>
                <div className="col d-flex justify-content-left">
                  <i className="fa fa-star mr-1" style={{ color: "#F39C12" }} />
                  <i className="fa fa-star mr-1" style={{ color: "#F39C12" }} />
                  <i className="fa fa-star " style={{ color: "#F39C12" }} />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col d-flex justify-content-center">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <input
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                    />
                  </div>
                </div>
                <div className="col d-flex justify-content-left">
                  <i className="fa fa-star mr-1" style={{ color: "#F39C12" }} />
                  <i className="fa fa-star mr-1" style={{ color: "#F39C12" }} />
                  <i className="fa fa-star " style={{ color: "#F39C12" }} />
                </div>
              </div>
            </div>
            <div className="col d-flex justify-content-center">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <input
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                    />
                  </div>
                </div>
                <div className="col d-flex justify-content-left">
                  <i className="fa fa-star mr-1" style={{ color: "#F39C12" }} />
                  <i className="fa fa-star " style={{ color: "#F39C12" }} />
                </div>
              </div>
            </div>
          </div>

          <h5 style={{ marginTop: "2rem" }}>PRICE</h5>
          <div className="row">
            <div className="col d-flex justify-content-center">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <input
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                    />
                  </div>
                </div>
                <div className="col d-flex justify-content-left">
                  <p>Free</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col d-flex justify-content-center">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <input
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                    />
                  </div>
                </div>
                <div className="col d-flex justify-content-left">
                  <p>Less than 25$</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col d-flex justify-content-center">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <input
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                    />
                  </div>
                </div>
                <div className="col d-flex justify-content-left">
                  <p>$25 - $50</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col d-flex justify-content-center">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <input
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                    />
                  </div>
                </div>
                <div className="col d-flex justify-content-left">
                  <p>$50 - $100</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col d-flex justify-content-center">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <input
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                    />
                  </div>
                </div>
                <div className="col d-flex justify-content-left">
                  <p>More than $100</p>
                </div>
              </div>
            </div>
          </div>

          <h5 style={{ marginTop: "2rem" }}>LANGUAGE</h5>
          <div className="row">
            <div className="col d-flex justify-content-center">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <input
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                    />
                  </div>
                </div>
                <div className="col d-flex justify-content-left">
                  <p>English</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col d-flex justify-content-center">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <input
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                    />
                  </div>
                </div>
                <div className="col d-flex justify-content-left">
                  <p>French</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col d-flex justify-content-center">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <input
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                    />
                  </div>
                </div>
                <div className="col d-flex justify-content-left">
                  <p>German</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col d-flex justify-content-center">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <input
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                    />
                  </div>
                </div>
                <div className="col d-flex justify-content-left">
                  <p>Hindi</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col d-flex justify-content-center">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <input
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                    />
                  </div>
                </div>
                <div className="col d-flex justify-content-left">
                  <p>Mandarin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
