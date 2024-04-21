import Link from "next/link";

export default function Footer (){
   return (
      <>
         <footer className="footer-main">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="footer-logo">
                            <img src="images/faces-of-boston.png" alt="" />
                            <p>Lorem Ipsum is simply dummy text of the <br/> printing and typesetting industry. Lorem Ipsum <br/> has been the industry's standard dummy text
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer-contact">
                            <h4>Contact US</h4>
                            <p>Call Us: +0214 - 859 - 582</p>
                            <p>Mail Us: sswee38823@aol.com</p>
                            <ul>
                                <li>
                                    <Link href=""><i className='bx bxl-facebook'></i></Link>
                                </li>
                                <li>
                                    <Link href=""><i className='bx bxl-twitter'></i></Link>
                                </li>
                                <li>
                                    <Link href=""><i className='bx bxl-instagram-alt'></i></Link>
                                </li>
                                <li>
                                    <Link href=""><i className='bx bxl-pinterest-alt'></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="footer-subcribe">
                            <h4>Subcribe</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing</p>
                            <input type="email" name="" id="" placeholder="email address" />
                            <span><i className='bx bxs-send'></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div className="copyright">
            <div className="container"> 
                <div className="footer-copyright">
                    <p>COPYRIGHT 2022, <span>facesofboston.</span> ALL RIGHTS RESERVED.</p>
                    <p>terms and condition &nbsp;<span>|</span>&nbsp;
                        <Link href="privacy-policy.html">privacy policy</Link></p>
                </div>
            </div>
        </div>
        </>
   )
}