import Link from "next/link";


export default function Header() {
    return (
        <header className="header-main">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="header-logo">
                        <img src="images/faces-of-boston.png" alt="" />
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="header-nav">
                        <ul>
                            <li>
                                <Link href={`/`}>Home</Link>
                            </li>
                            <li>
                                <Link href={`about`}>About Us</Link>
                            </li>
                            <li>
                                   <Link href={`gallery`}>galleries</Link>
                            </li>
                            <li>
                                <Link href={`contact`}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="header-end">
                        <input type="search" name="" id="" placeholder="Search" />
                        <span><i className="fa fa-search"></i></span>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}