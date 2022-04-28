import React from 'react'

export default function Contact() {
  return (
    <>
        <div className="container-fluid know_card py-5">
        <div className="row justify-content-center">
                <h1 className="mt-5">Get In Touch</h1>
            </div>

        <div className="row justify-content-center">
            <div className="col-md-4 p-4 py-5 ">
                <form>
                    <input type="text" placeholder="Your Username" className="form-control mb-3"></input>
                    <input type="text" placeholder="Your Email" className="form-control mb-3"></input>
                    <input type="text" placeholder="Subject" className="form-control mb-3"></input>
                    <input type="text" placeholder="Message" className="form-control mb-3"></input>
                    <input type="submit" value="Send" className="btn btn-danger w-100"></input>
                </form>
            </div>
        </div>
</div>


<div className="container my-5">
    
        {/* google map     */}

            <div className="row">
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d57932.8572551834!2d67.0706239822847!3d24.83638998868746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1soxford%20university%20press!5e0!3m2!1sen!2s!4v1651103488525!5m2!1sen!2s" style={{border:0,height:"50vh"}} loading="lazy" className="w-100"></iframe>
            </div>
        
</div>
    </>
  )
}
