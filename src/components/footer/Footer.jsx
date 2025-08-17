import Style from './footer.module.css'
function Footer(){
return <>

<div className={`${Style.footerBackground} pb-4 pt-0 `}>
    <div className="container d-flex  justify-content-center ">
        <div className="ms-3   row">
<div className="d-flex mt-5 flex-column text-center  col-lg-4 col-md-4 col-sm-6 ">
<h2 className={`${Style.h2} pb-2 `}>LOCATION</h2>
<span className={`${Style.span}`}>2215 John Daniel Drive</span>
<span className={`${Style.span}`}> Clark,MO 65243</span>
</div>

<div  className="col-lg-4  text-center mt-5 col-md-4 col-sm-6">
<h2 className={`${Style.h2} pb-3`}>
    AROUND THE WEB
</h2>
<div className="d-flex gap-4 justify-content-center">
  <i className="fa-brands fa-facebook-f" />
  <i className="fa-brands fa-twitter" />
  <i className="fa-brands fa-linkedin-in" />
<i className="fa-solid fa-basketball"></i>
</div>

</div>

<div className=" text-center col-lg-4 mt-5 col-md-4 col-sm-6">
<h2 className={`${Style.h2}  `}> 
    ABOUT FREELANCER
</h2>
<p className={`${Style.p}  pt-2`}>Freelance is a free to use,MIT licensed Bootstrap theme created by 
     <a className={`${Style.a} ps-2`}>Start Bootstrap</a>
</p>
</div>
</div>
</div>

</div>
<div className={`${Style.copyRight}  p-2 text-center  `}>
Copyright © Your Website 2023
</div>
</>
}
export default Footer;