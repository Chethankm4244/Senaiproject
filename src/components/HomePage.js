import React from "react";
import "./HomePage.css";
import img from "../images/left.png";
import girl from "../images/girl.png";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { IoIosRadioButtonOn } from "react-icons/io";
import { TiLocationArrowOutline } from "react-icons/ti";
import { GiHeavyTimer } from "react-icons/gi";
import { MdSunny } from "react-icons/md";
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { BiWind } from "react-icons/bi";
import { BsCloudHaze2 } from "react-icons/bs";
import { ImSun } from "react-icons/im";
import { TbTemperature } from "react-icons/tb";
import { BsCloudLightningRain } from "react-icons/bs";

import GaugeChart from "react-gauge-chart";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

const style = {
  height: 200,
  width: 200,
};

const HomePage = () => {
  const data = {
    data: {
      labels: ["11%", "14%", "28%", "37%", "16%", "10%", "36%", "12%", "40%"],
      datasets: [
        {
          label: "First Dataset",
          data: [18, 24, 25, 30, 24, 20, 15, 30, 70],
          backgroundColor: "rgb(57, 43, 161)",
          borderColor: "rgb(57, 43, 161)",

          fill: true,

          pointBorderColor: "rgb(57, 43, 161)",

          showLine: true,
        },
      ],
    },
    options: {
      scales: {
        y: {
          grid: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
          labels: {
            boxWidth: 0,
          },
        },
      },
    },
  };

  return (
    <div className="container">
      <div className="innercontainer">
        <div className="leftcontainer">
          <img src={img} alt="" />
          <div className="icons">
            <BsFillPlusSquareFill className="icon1" />
            <BsThreeDots className="icon2" />
            <span className="icon3">°C </span>
            <IoIosRadioButtonOn className="icon4" />
            <span>°F</span>
          </div>
          <div className="cityname">
            <TiLocationArrowOutline className="loc" />
            <span>New york, USA</span>
            <GiHeavyTimer className="timer" />
            <span className="time1">07:19</span>
          </div>
          <div className="date">
            <span className="today">Today 28 Sept</span>
            <GiHeavyTimer className="timer1" />
            <span className="time2">19:32</span>
          </div>
          <div className="temp">
            <FaLessThan className="lessthan" />
            <p className="temperature">27°</p>
            <FaGreaterThan className="greaterthan" />
            <MdSunny className="sun" />
            <p className="sunny">Sunny</p>
          </div>
        </div>
        <div className="rightcontainer">
          <div className="header">
            <div className="left">
              <span>Welcome back Isabella!</span>
              <p>Check out today's weather information</p>
            </div>
            <div className="right">
              <BsThreeDots className="dot" />
              <img src={girl} alt="" className="girlimg" />
            </div>
          </div>
          <div className="home">
            <div className="top">
              <div className="graph">
                <div className="t-header">
                  <span className="hour">Upcomming hours</span>
                  <span className="right-s">
                    <select name="" id="" className="rain-p">
                      <option value="">Rain precipitation</option>
                    </select>
                    <p className="days">Next days </p>
                  </span>
                </div>

                <div className="list-h">
                  <li>Now</li>
                  <li>11:00</li>
                  <li>12:00</li>
                  <li>13:00</li>
                  <li>14:00</li>
                  <li>15:00</li>
                  <li>16:00</li>
                  <li>17:00</li>
                </div>

                <div className="list-i">
                  <li>
                    <ImSun />
                  </li>
                  <li>
                    <ImSun />
                  </li>
                  <li>
                    <BsCloudHaze2 />
                  </li>
                  <li>
                    <BsCloudHaze2 />
                  </li>
                  <li>
                    <ImSun />
                  </li>
                  <li>
                    <BsCloudHaze2 />
                  </li>
                  <li>
                    <BsCloudHaze2 />
                  </li>
                  <li>
                    <ImSun />
                  </li>
                </div>

                <div className="list-t">
                  <li>27°</li>
                  <li>28°</li>
                  <li>28°</li>
                  <li>29°</li>
                  <li>30°</li>
                  <li>29°</li>
                  <li>29°</li>
                  <li>28°</li>
                </div>

                <div className="addition">
                  <p className="add">Pressure = ↓1011mb</p>
                  <p className="add">Cloud Cover = 87%</p>
                  <p className="add">Visibility = 16km</p>
                  <p className="add">Cloud Ceiling = 500m</p>
                </div>

                <div className="Apps">
                  <Line data={data.data} options={data.options}></Line>
                </div>
              </div>
              <p>More details of today's weather</p>
            </div>
            <div className="bottom">
              <div className="b-top">
                <div className="container1">
                  <div className="input">
                    <span>Humidity</span>
                    <span className="iconss">
                      <WiHumidity className="icn" />
                    </span>
                  </div>
                  <div>
                    <span className="percent">82% </span>
                    <span>bad</span>
                  </div>
                  <div className="humidity">
                    <div className="line1">
                      <p className="content">good</p>
                      <div className="color1"></div>
                    </div>
                    <div className="line2">
                      <p className="content">normal</p>
                      <div className="color1"></div>
                    </div>
                    <div className="line3">
                      <p className="content">bad</p>
                      <div className="color">
                        <div className="innercolour1"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container1">
                  <div className="input">
                    <span>Wind</span>
                    <span className="iconss">
                      <BiWind className="icn1" />
                    </span>
                  </div>
                  <div className="wind">
                    <GaugeChart
                      id="gauge-chart1"
                      nrOfLevels={5}
                      percent={0.3}
                      textColor="#fff"
                      needleBaseColor="#00008b"
                      needleColor="#00008b"
                      colors={[
                        "#00008b",
                        "#00008b",
                        "#808080",
                        "#808080",
                        "#808080",
                      ]}
                      style={style}
                    />
                  </div>
                  <div className="speed">8 Km/hr</div>
                </div>
                <div className="container1">
                  <div className="input">
                    <span>Precipitation</span>
                    <span className="iconss">
                      <BsCloudHaze2 className="icn1" />
                    </span>
                  </div>
                  <div className="percentage">
                    <span>1.4 cm</span>
                  </div>
                  <div className="precipitation">
                    <div className="bar1">
                      <span>1</span>
                      <div className="p-color1"></div>
                    </div>
                    <div className="bar2">
                      <span>2</span>
                      <div className="p-color2">
                        <div className="pcolor"></div>
                      </div>
                    </div>
                    <div className="bar3">
                      <span>3</span>
                      <div className="p-color"></div>
                    </div>
                    <div className="bar4">
                      <span>4</span>
                      <div className="p-color"></div>
                    </div>
                    <div className="bar5">
                      <span>5</span>
                      <div className="p-color"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="b-bottom">
                <div className="container1">
                  <div className="input">
                    <span>UV index</span>
                    <span className="iconss">
                      <ImSun className="icn1" />
                    </span>
                  </div>
                  <div>
                    <span className="percent">4 </span>
                    <span>medium</span>
                  </div>
                  <div className="precipitation">
                    <div className="bar1">
                      <span>0-2</span>
                      <div className="p-color1"></div>
                    </div>
                    <div className="bar2">
                      <span>3-5</span>
                      <div className="p-color2">
                        <div className="pcolor"></div>
                      </div>
                    </div>
                    <div className="bar3">
                      <span>6-7</span>
                      <div className="p-color"></div>
                    </div>
                    <div className="bar4">
                      <span>8-10</span>
                      <div className="p-color"></div>
                    </div>
                    <div className="bar5">
                      <span>10+</span>
                      <div className="p-color"></div>
                    </div>
                  </div>
                </div>
                <div className="container1">
                  <div className="input">
                    <span>Feels like</span>
                    <span className="iconss">
                      <TbTemperature className="icn1" />
                    </span>
                  </div>
                  <div className="percentage">
                    <span>30°</span>
                  </div>
                  <div className="feels">
                    <div className="per">
                      <span>0°</span>
                      <span>25°</span>
                      <span>50°</span>
                    </div>
                    <div className="f-bar">
                      <div className="rbar"></div>
                    </div>
                  </div>
                </div>
                <div className="container1">
                  <div className="input">
                    <span>Chance of rain </span>
                    <span className="iconss">
                      <BsCloudLightningRain className="icn1" />
                    </span>
                  </div>
                  <div className="percentage">
                    <span>42%</span>
                  </div>
                  <div className="feels">
                    <div className="per">
                      <span>0%</span>
                      <span>25%</span>
                      <span>50%</span>
                      <span>75%</span>
                      <span>100%</span>
                    </div>
                    <div className="f-bar">
                      <div className="fbar"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
