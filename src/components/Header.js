import React from 'react'
import '../test_styles/Header.css'
import flipkart_logo from '../test_images/flipkart_logo.svg'
export default function Header() {
    return (
        <>
            <div>
                <nav class="navbar navbar-expand-lg  bg-light">
                    <a class="navbar-brand" href="#"><img src={flipkart_logo} alt="flipkart" /></a>


                    {/* <div class="collapse navbar-collapse" id="navbarSupportedContent"> */}

                        <form class=" firstNav form-inline my-2 my-lg-2 w-50">
                            <input class="form-control mr-sm-2 w-100" type="search" placeholder="Search" aria-label="Search"></input>
                            {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                        </form>



                        <div class="dropdown ml-5">
                            <a href="#" className='dropdown-toggle login_button  login_button' aria-expanded="false" data-mdb-toggle="dropdown" id="dropdownMenuButton" >Login</a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>

                        </div>

                        <ul class="navbar-nav mr-auto ml-5">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Cart<span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item ml-5 becomeSeller">
                                <a class="nav-link" href="#">Become Seller</a>
                            </li>

                        </ul>
                        <form class="secondNav form-inline my-2 my-lg-2 w-100">
                            <input class="form-control mr-sm-2 w-100" type="search" placeholder="Search" aria-label="Search"></input>
                            {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                        </form>

                    {/* </div> */}
                </nav>
            </div>
        </>
    )
}
