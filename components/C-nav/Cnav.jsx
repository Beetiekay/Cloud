import "../C-nav/Cnav.css"
import { CiBellOn, CiChat1,  CiClock1,  CiClock2,  CiCloudRainbow,  CiFileOn, CiHome, CiLock, CiPen, CiSearch, CiTimer, CiUser, CiViewTimeline } from "react-icons/ci";
import {FaChartArea,  FaChartPie, FaClock, FaEdit, FaPlay, FaPlusSquare, FaStar, FaTimes, } from "react-icons/fa";
import {MdShowChart} from "react-icons/md";
import {DiAws} from "react-icons/di"
import profile from "../C-nav/asset/p.jpg";



const Cnav = () =>{
   return (
       <>
       <div className="cnav-wrapper">
         <div className="nav-prof">
         <div className="nav">
            <ul>
                <div className="logo"><li><a href="#"><CiCloudRainbow/></a></li></div>

                <li><div className="hov"><a href="#"><CiHome/></a></div></li>
                <li><div className="hov"><a href="#"><FaChartPie/></a></div></li>
                <li><div className="hov"><a href="#"><CiFileOn/></a></div></li>
                <li><div className="hov"><a href="#"><CiChat1/></a></div></li>
            </ul>
         </div>
            
                  {/* Second section */}


          <div className="D-wrapper">

            <div className="inn-wrap">
             
               <div className="first">

               <div className="inpt">
               <div className="search-i"><CiSearch/></div>
               <input type="search" name="search" placeholder=" Search"/></div>
               
               <div className="mid-txt">
                <div className="nav-l"><a href="#">FeedBack</a></div>
                <div className="nav-l"><a href="#">Contacks</a></div>
                <div className="nav-l"><a href="#">Helps</a></div>
               </div>
                
                <div className="profile">
                  <div className="notication"><CiBellOn/></div>
                  <div className="dot"></div>
                  <div className="dp-img"><img src={profile}/></div>
                </div>
             </div>

            </div>
                      {/* Showcase section */}

               <div className="main">

                  <div className="inner-cont">

                        <div className="all-charts">
                          
                          <div className="cardwrapper">

                           <div className="card">
                              <div className="chart-i"><FaChartArea/></div>
                              <div className="cardtxt">
                                 <p>Visitors</p>
                                 <h4>10,320</h4>
                              </div>
                            </div>

                            <div className="card">
                              <div className="chart-i"><FaChartArea/></div>
                              <div className="cardtxt">
                                 <p>Customers</p>
                                 <h4>4,680</h4>
                              </div>
                            </div>


                            <div className="card">
                              <div className="chart-i"><FaChartArea/></div>
                              <div className="cardtxt">
                                 <p>Orders</p>
                                 <h4>2,980</h4>
                              </div>
                            </div>


                          </div>
                         
                       <div className="statistic-board">
                         <div className="inner-board">

                          <div className="boardtxt">
                            <p>Statistics</p>
                            <div className="droptxt">
                             <select>
                              <option>Year</option>
                              <option>2024</option>
                              <option>2023</option>
                              <option>2022</option>
                              <option>2021</option>
                              <option>2020</option>
                              <option>1999</option>
                              <option>1998</option>
                              <option>1997</option>
                              <option>1996</option>
                              <option>1995</option>
                             </select>
                            </div>
                          </div>
                          <div className="board">
                           <div className="inline-txt">
                            <p>3k</p>
                            <p>2k</p>
                            <p>1k</p>
                            <p>0</p>
                           </div>

                   <div className="inthebx">

                          <div className="st-bar">

                            <div className="bar">
                                <div className="bar-two">
                                </div>
                            </div>

                            <div className="bar upi">
                                <div className="bar-two upty">
                                </div>
                            </div>

                            <div className="bar up">
                                <div className="bar-two upt">
                                </div>
                            </div>

                            <div className="bar">
                                <div className="bar-two">
                                </div>
                            </div>

                            <div className="bar up">
                                <div className="bar-two upt">
                                </div>
                            </div>

                            <div className="bar">
                                <div className="bar-two">
                                </div>
                            </div>
                            <div className="bar">
                                <div className="bar-two">
                                </div>
                            </div>

                            <div className="bar upi">
                                <div className="bar-two upty">
                                </div>
                            </div>

                            <div className="bar upi">
                                <div className="bar-two upty">
                                </div>
                            </div>

                            <div className="bar">
                                <div className="bar-two">
                                </div>
                            </div>

                            <div className="bar">
                                <div className="bar-two">
                                </div>
                            </div>

                            <div className="bar up">
                                <div className="bar-two upt">
                                </div>
                            </div>

                          </div>

                          <div className="dtxt">
                            <p>Nov</p>
                            <p>Dec</p>
                            <p>Jan</p>
                            <p>Feb</p>
                            <p>Mar</p>
                            <p>April</p>
                            <p>May</p>
                          </div>
                          </div>
                          </div>
                         </div>

                          <div className="show-chart">

                            <div className="number-one">
                              <div className="timespent">
                                <div className="timetxt"><p>Spent Time</p> 
                                <p className="bgtxt">4h 26mint</p></div></div>

                                 <div className="md-chart"><MdShowChart/></div>
                                 <div className="days">
                                  <p>Sun</p>
                                  <p>Mon</p>
                                  <p>Tue</p>
                                  <p>Wed</p>
                                  <p>Thur</p>
                                  <p>Fri</p>
                                  <p>Sat</p>
                                 </div>
                            </div>

                            <div className="number-two">
                              <div className="twop">
                              <div className="dp-deatails">
                                <div className="user"><CiUser/></div>
                                <div className="dptxt"><h5>Bishir Tukur</h5> <p>Business Trainer</p></div>
                                <div className="social-i">
                                  <div className="i-con vid"><div className="play">
                                    <FaPlay/></div><p className="lpt">Video</p></div>
                                  <div className="i-con"><div className="duratime">
                                    <FaClock/></div><p>15<span>mins</span></p></div>
                                  <div className="i-con"><div className="star">
                                    <FaStar/></div><p>12<span>likes</span></p></div>
                                </div>
                               </div>
                             </div>
                               <div className="prghtxt"><p>How To <br/>Properly Manage Your Budget?</p></div>
                            </div>

                           </div>
                          </div>
                          </div>

                       <div className="card-dp">
                        <div className="pen-dtl"><div className="pen-i"><FaEdit/></div>
                        <div className="dollsr">$10.660</div></div>

                         <div className="circle-section">
                            <div className="circle">
                              <div className="seond-circle">
                                  <div className="percent">38%</div>
                              </div>
                            </div>
                         </div>

                         <div className="mycard"><p>My Card</p><p className="dash">..</p></div>

                         <div className="thecard">
                          <div className="innercard">

                            <div className="uptxt"><div className="nano"></div>
                             <h5><span>V</span>isa</h5>
                          </div>
                            
                            <div className="cardnumb">
                              <div className="dash">...</div>
                              <div className="dash">...</div>
                              <div className="dash">...</div>
                              <p>9546</p>
                            </div>
                            <div className="lastcardtxt">
                              <p>Islam Sani</p><p>07/2024</p>
                            </div>
                          </div>
                          </div>
                          <div className="transaction">
                            <p>Transaction</p> <div className="plus-i"><FaPlusSquare/></div></div>
                          <div className="transactio-li">
                            <div className="taxi-i"><DiAws/></div>
                            <div className="taxi-txt"><h4>Taxi</h4><p>02:22PM</p></div>
                            <div className="minuz">-59,29</div>
                          </div>
                          <div className="viewmore">View More...</div>

                       </div>
                  </div>

               </div>
                
          </div>
         </div>
       </div>
       </>
    )
};

export default Cnav;