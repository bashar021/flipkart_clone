import React from 'react'
import '../test_styles/Footer.css'
import visa from '../test_images/visa.svg'
export default function Footer() {
    return (
        <div>
            <footer class=" text-center text-lg-start">
                <div id="main_cont_footer" style={{ backgroundColor: 'black' }} class="container p-4">
                    <div className='row'>

                        <div class="col-lg-2 col-md-4 mb-4 mb-md-0">
                            <h6 class="text-uppercase">About</h6>

                            <ul class="list-unstyled mb-0" >
                                <li>
                                    <a href="#!" class="">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!" class="">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!" class="">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!" class="">Link 4</a>
                                </li>
                            </ul>
                        </div>


                        <div class="col-lg-2 col-md-4 mb-4 mb-md-0">
                            <h6 class="text-uppercase">Group companies </h6>

                            <ul class="list-unstyled mb-0">
                                <li>
                                    <a href="#!" >Link 1</a>
                                </li>
                                <li>
                                    <a href="#!" >Link 2</a>
                                </li>
                                <li>
                                    <a href="#!" >Link 3</a>
                                </li>
                                <li>
                                    <a href="#!" >Link 4</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-2 col-md-4 mb-4 mb-md-0">
                            <h6 class="text-uppercase">Help </h6>

                            <ul class="list-unstyled mb-0">
                                <li>
                                    <a href="#!" >Link 1</a>
                                </li>
                                <li>
                                    <a href="#!" >Link 2</a>
                                </li>
                                <li>
                                    <a href="#!" >Link 3</a>
                                </li>
                                <li>
                                    <a href="#!">Link 4</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-2 col-md-4 mb-4 mb-md-0">
                            <h6 class="text-uppercase">consumer policy</h6>

                            <ul class="list-unstyled mb-0">
                                <li>
                                    <a href="#!" >Link 1</a>
                                </li>
                                <li>
                                    <a href="#!" >Link 2</a>
                                </li>
                                <li>
                                    <a href="#!">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!" >Link 4</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-2 col-md-4 mb-4 mb-md-0">
                            <h6 class="text-uppercase">Mail us </h6>

                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                                molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
                                voluptatem veniam, est atque cumque eum delectus sint!
                            </p>
                        </div>

                        <div class="col-lg-2 col-md-4 mb-4 mb-md-0">
                            <h6 class="text-uppercase">Registered office address</h6>

                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                                molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
                                voluptatem veniam, est atque cumque eum delectus sint!
                            </p>
                        </div>




                    </div>


                </div>






                <div class=" footer_next_links container pb-3 pt-3" style={{ backgroundColor: 'black' }}>
                    
                    {/* <section > */}
                       
                        <a
                            data-mdb-ripple-init
                            class=" m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i class=""> Become a seller</i>
                        </a>

                       
                        <a
                            data-mdb-ripple-init
                            class=" m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i class="fab"> advertise</i
                        ></a>

                      
                        <a
                            data-mdb-ripple-init
                            class=" m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i class="fab ">gift cards</i
                        ></a>

                        
                        <a
                            data-mdb-ripple-init
                            class=" m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i class="fab ">help center</i
                        ></a>

                       
                        <a
                            data-mdb-ripple-init
                            class="  m-1"
                            href="#!"
                            role="button"
                           
                        ><i class="fab ">2007-2024 flipkart.com</i
                        ></a>
                        <div>
                            <img src={visa} alt="visa" />
                            
                        </div>
                       
                        
                    {/* </section> */}
                  
                </div>
               

            </footer>
        </div>


    )
}
