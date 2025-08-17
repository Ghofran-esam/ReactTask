import Cabin from "../../assets/cabin.png";
import Cake from "../../assets/cake.png";
import Circus from "../../assets/circus.png";
import Game from "../../assets/game.png";
import Submarine from "../../assets/submarine.png";
import Safe from "../../assets/safe.webp"
import Style from './portfolio.module.css'
function Portfolio(){
return <>
<div className="text-center pt-5">
    <div className=" text-center">
<h2 className={`${Style.portfolioTitle} text-dark mb-4`}>PORTFOLIO</h2>
<div className="d-flex  justify-content-center">
<p className={`${Style.divider} text-dark     px-2`}> </p>
</div>
<div className="container  ">
<div className="row mt-4 ">
<div className="card   col-lg-4 col-md-6 mt-4 border-0" >
  <img src={Cabin} className="card-img-top" alt="..." />
  
</div>
<div className="card col-lg-4 col-md-6 mt-4  border-0" >
  <img src={Cake} className="card-img-top" alt="..." />
  
</div>
<div className="card col-lg-4 col-md-6 mt-4 border-0">
  <img src={Circus} className="card-img-top" alt="..." />
  
</div>
<div className="card col-lg-4 col-md-6 mt-4 border-0" >
  <img src={Game} className="card-img-top" alt="..." />
  
</div>
<div className="card col-lg-4  col-md-6 mt-4 border-0" >
  <img src={Submarine} className="card-img-top" alt="..." />
  
</div>
<div className="card col-lg-4 col-md-6  mt-4 border-0" >
  <img src={Safe} className="card-img-top" alt="..." />
  
</div>

</div>
</div>
</div>
</div>
</>
}
export default Portfolio;