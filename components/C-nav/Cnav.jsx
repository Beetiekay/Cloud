import "../C-nav/Cnav.css"
import { CiBellOn, CiChat1,  CiCloudRainbow,  CiFileOn, CiHome, CiSearch } from "react-icons/ci";
import {FaChartArea,  FaChartPie, } from "react-icons/fa";
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

                        </div>

                       <div className="card-dp">
                        <div className="borf">
                          <div className="boxer"><h1>mdkk</h1></div> 
                          <div className="boxer"><h1>mdkk</h1></div> 
                          <div className="boxer"><h1>mdkk</h1></div> 
                        </div>
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