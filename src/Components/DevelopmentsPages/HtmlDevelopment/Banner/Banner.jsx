
import {Row,Col} from 'react-bootstrap';
import htmlBannerimg from '../../../../../public/Image/Html-1.png'


export default function Banner(){
    return(
        <>
        <Row className='d-md-flex d-none justify-content-center align-items-center py-5'
        style={{backgroundImage:`url('${htmlBannerimg}')`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}
        >
        <Col md xl lg xxl  >
        <h2 className='hed1  font-bold ' style={{color:"#3b7fbf"}}>HTML  & Css  <span className='hed2 font-bold ' style={{color:"#3b7fbf"}}> <span  className='hed1  font-bold'>D</span>evelopment</span></h2>
        <p className='hed3 text-[#3b7fbf]'>Custom Web Development and Innovative Designs</p>
        <div className='col-md-5 font-medium py-3'>
        <p className='para'>
        </p>
        </div>
   
        </Col>
        </Row>
        <Row className='d-flex d-sm-none justify-content-center align-items-center'
        >
        <Col md className='px-0 '>
        <img src= {htmlBannerimg} alt=""  className='img-fluid'/>
        <div className='absolute w-50 top-10 left-10'>
        <h2 className=' text-[#3b7fbf] hed2'>HTml & Css Development</h2>
        </div>
        </Col>
        </Row>
        <Row className='d-flex justify-content-center align-items-center pt-5' >
        <Col md={10}>
        <h2 className='hed2 text-center'>Tailored Solutions for Your Business</h2>
      
        
        </Col>
        </Row>
        </>
    )
}