import Style from './contact.module.css'
function Contact(){
    return <>
    <div className={`${Style.ContactSession} mt-5  pb-5 text-dark pt-3 `}>
        <div className="container  ">
    
    <h2 className={`${Style.contactHeader} text-dark mb-4 text-center pt-5`}>
 CONTACT ME
    </h2>
    <div className=" d-flex justify-content-center">
    <p className={`${Style.divider} text-dark  px-2`}> </p>
    </div>

<form className="w-100 mt-5 d-flex flex-column  align-items-center media ">
  <div className="mb-3 w-50 w-80-media w-50-media">

    <input type="email" className={`${Style.input} form-control p-3`} id="exampleInputEmail1" placeholder='Email address' aria-describedby="emailHelp" />
  </div>
  <div className="mb-3 w-50 w-80-media w-50-media ">
 
    <input type="password" className={`${Style.input} form-control p-3`} placeholder='Password' id="exampleInputPassword1" />
  </div>
 <div className="mb-3 w-50 w-80-media  w-50-media">

    <input type="password" className={`${Style.input} form-control p-3`}  placeholder='Phone Number' id="exampleInputPhone" />
  </div>

  <div className="mb-3 w-50 w-80-media w-50-media">

    <input type="password" className={`${Style.input} form-control p-3`} placeholder='Message' id="exampleInputMessage" />
  </div>
    <div className=" w-50 w-80-media w-50-media">
    
  <button type="submit" className={`${Style.button} btn btn-primary px-4 py-3`}>Send</button>
</div>
 
</form>

    </div>
    </div>
    </>
}
export default Contact;