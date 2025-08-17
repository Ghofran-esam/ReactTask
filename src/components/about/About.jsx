import Style from './about.module.css'
function About(){
return <>
<div className={`${Style.AboutSession} mt-5  pb-5 text-dark pt-3 `}>
    <div className="container ">

<h2 className={`${Style.aboutHeader} mb-4 text-center pt-5`}>
    ABOUT
</h2>
<div className=" d-flex justify-content-center">
<p className={`${Style.divider} text-dark  px-2`}> </p>
</div>
        <div className="d-flex pt-5  justify-content-center gap-5 pt-3 ">
    <p className={`${Style.aboutInfo} w-30`}>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
    <p className={`${Style.aboutInfo} w-30`} >You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
</div>
<div className={` d-flex justify-content-center`}>
<button className={`${Style.button} mt-3 py-2 px-3`}>
    <i class="fa-solid fa-download "></i>
Free Downlowad</button>
</div>
</div>
</div>
</>
}
export default About;