import Style from './hero.module.css';
import HeroImg from '../../assets/avataaars.svg'
function Hero(){
return <>
<div className={`${Style.heroSession} d-flex flex-column align-items-center justify-content-center pb-5 mt-5 pt-5`}>

    <div className={`${Style.width} pt-5`}>
<img src={HeroImg} className="w-100"/>
</div>
<h1 className={`${Style.h2} pb-3 pt-4 text-center`}>START BOOTSTRAP</h1>
   <div className=" d-flex justify-content-center">
    <p className={`${Style.divider} text-dark   px-2`}> </p>
    </div>

<span className={`${Style.span} text-center pt-4`}>Graphic Artist - Web Designer - Illustrator</span>
</div>

</>
}
export default Hero;