import React from "react";
import icon_calendar from "../../resources/images/icons/calendar.png";
import icon_location from "../../resources/images/icons/location.png";
import icon_menu from "../../resources/images/icons/menu.png";
import Zoom from "react-reveal/Zoom";
import "../styles.css";

const VenueInfo = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
          <Zoom duration={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red">
                    <div
                      className="vn_icon"
                      style={{
                        background: `url(${icon_calendar})`
                      }}
                    >
                      {" "}
                    </div>
                  </div>
                  <div className="vn_title">Next Project</div>

                  <div className="vn_desc">Data Compression Algorythms</div>
                </div>
              </div>
            </div>
          </Zoom>

          <Zoom duration={500} delay={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_yellow">
                    <div
                      className="vn_icon"
                      style={{
                        background: `url(${icon_location})`
                      }}
                    >
                      {" "}
                    </div>
                  </div>
                  <div className="vn_title">Team Meetings</div>

                  <div className="vn_desc">Minutes and bottom lines</div>
                </div>
              </div>
            </div>
          </Zoom>

          <Zoom duration={500} delay={1000}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_blue">
                    <div
                      className="vn_icon"
                      style={{
                        background: `url(${icon_menu})`
                      }}
                    >
                      {" "}
                    </div>
                  </div>
                  <div className="vn_title">General options</div>

                  <div className="vn_desc">Projects you can join</div>
                </div>
              </div>
            </div>
          </Zoom>


        </div>
      </div>
    </div>
  );
};

export default VenueInfo;
