
import {Row,Col,Button} from 'react-bootstrap'
import Blog from '../../Blog/Blog2';
import { CiHome } from "react-icons/ci";
import tem1Image from "..//..//../../public/Image/tem-1.png";



export default function DeatilP4({title}){
    return(
       <>
       <Row className='justify-content-center align-items-center bgSection gap-5'>
       <Col md={6}>
       <div  className='pt-3'>
       <h2 className='hed2 text-white'>AVON MALAYSIA</h2>
       <ul className='d-md-flex gap-3 para text-white'>
       <li><CiHome fontSize={25} /></li>
       <li>Home /</li>
       <li>PROJECTS /</li>
       <li>ECOMMERCE DEVELOPMENT</li>
       </ul>
       <div>
       <img src={tem1Image} alt=""  className='img-fluid'/>
       
       </div>
       </div>
       </Col>
       <Col md={4}>
       <div className='bg-white py-2 my-3 rounded-2'>
      <ul>
      <li className='flex gap-5 text-[#3b7fbf] font-medium md:text-xl text-sm py-3 border-bottom '><span>BRAND</span> <span>Avon Malaysia</span></li>
      <li className='flex gap-5 text-[#3b7fbf] font-medium md:text-xl text-sm py-3 border-bottom'><span>PROJECT <br /> STARTED</span> <span>	
      2015</span></li>
      <li className='flex gap-5 text-[#3b7fbf] font-medium md:text-xl text-sm py-3 border-bottom'><span>SERVICE</span> <span>	
      Digital Marketing, Web Design And Web Development</span></li>
      <li className='flex text-[#3b7fbf] font-medium md:text-xl text-sm py-3 border-bottom'><span>TECHNOLOGY:</span> <span>	
      ASP.NET, HTML and CSS (Wed Design and Development) / Google Ads and SEO program</span></li>
   

     
      </ul>
      </div>
    
       </Col>
      
       </Row>
       <Row className='justify-content-center align-items-center py-5'
            style={{backgroundImage:"url('Image/blue.png')",backgroundRepeat:"no-repeat",backgroundPosition:"right",backgroundSize:"50%"}}
            >
                <Col md={5}>
                    <div>
                        <h2 className='hed2'>AVON MALAYSIA</h2>
                        <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>


                </Col>
                <Col md={5} className='d-md-flex justify-content-center align-items-center'>
                    <img src="/Image/tem-1.png" alt="" className='img-fluid' />
                </Col>
            </Row>
            <Row className='justify-content-center align-items-center py-5 gap-5' style={{ background: "linear-gradient(to bottom,rgba(90,161,227,30%), rgba(90,161,227,10%))" }}

            >
                <Col md={5} className='d-md-flex justify-content-center align-items-center'>
                    <img src="/Image/Temp-3 (4).png" alt="" className='img-fluid' />
                </Col>
                <Col md={5}>
              
                <h2 className='hed2'>Client Requirement</h2>
                    <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                        laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

              
                    
                </Col>
            </Row>
            <Row className='justify-content-center align-items-center py-5'
            style={{backgroundImage:"url('Image/grey.png')",backgroundRepeat:"no-repeat",backgroundPosition:"left",backgroundSize:"50%"}}
            >
                <Col md={5}>
                <h2 className='hed2'>Challenges</h2>
                <p className='para' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    
                </Col>
                <Col md={5} className='d-md-flex justify-content-center align-items-center'>
                    <img src="/Image/Temp-3 (3).png" alt="" className='img-fluid' />
                </Col>
            </Row>
            <Row className='justify-content-center align-items-center py-5 gap-5' style={{ background: "linear-gradient(to bottom,rgba(90,161,227,30%), rgba(90,161,227,10%))" }}

            >
                <Col md={5} className='d-md-flex justify-content-center align-items-center'>
                    <img src="/Image/Temp-3 (2).png" alt="" className='img-fluid' />
                </Col>
                <Col md={5}>
               
                <h2 className='hed2'>Solution</h2>
                <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            
                   
                </Col>
            </Row>
            <Row className='justify-content-center align-items-center py-5'
            style={{backgroundImage:"url('Image/blue.png')",backgroundRepeat:"no-repeat",backgroundPosition:"right",backgroundSize:"50%"}}
            >
                <Col md={5}>
               
                <h2 className='hed2'>Assets</h2>
                <p className='text-left para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               
                   
                </Col>
                <Col md={5} className='d-md-flex justify-content-center align-items-center'>
                    <img src="/Image/temp-4.png" alt="" className='img-fluid' />
                </Col>
            </Row>
            <Row className='justify-content-center align-items-center py-5 gap-5'
             style={{ background: "linear-gradient(to bottom,rgba(90,161,227,30%), rgba(90,161,227,10%))" }}

            >
                <Col md={5} className='d-md-flex justify-content-center align-items-center'>
                    <img src="/Image/Temp-3 (1).png" alt="" className='img-fluid' />
                </Col>
                <Col md={5}>
               
                <h2 className='hed2'>Client Review And Website Link</h2>
                <p  className='text-left para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               
                </Col>
            </Row>
       <Blog title="Blogs"/>
       <Row style={{ backgroundColor: "#5e5e5e"}} className='justify-content-center gap-5 '>
       <Col md={12} className='d-md-flex justify-content-center align-items-center py-lg-3 fw-bold  text-light' style={{ letterSpacing: "2px",gap:"150px" }}>
           <p className='my-2'>Interested in a little more details, let us know how we can assist you Button</p>
           <Button variant='dark' className='my-2 py-2 btn-last-banner-contact-Us'>Contact-us</Button>
       </Col>
   </Row>
       
  
       </>
    )
}