import React from 'react'
import img2 from '../test_images/slide1.webp'
import img3 from '../test_images/slide2.webp'
import img4 from '../test_images/slide3.webp'
export default function Slider() {
  return (
    <>
    <div>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={img2} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src={img3} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src={img4} class="d-block w-100" alt="..."></img>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </>
  )
}
