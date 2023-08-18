import React from 'react';
import HeroSlider, { Slide } from 'hero-slider';
// import umesh from "../../Assets/pictures/umesh.jpg"
// import contact from "../../Assets/pictures/contact-bg.jpg"

const ImageSlider = ({slide}) => {
    const  images  = slide;

    return (
        <div>
            <HeroSlider
                settings={{
                    slidingDuration: 250,
                    slidingDelay: 100,
                    shouldAutoplay: true,
                    shouldDisplayButtons: true,
                    autoplayDelay: 100,
                    autoplayDuration: 5000, 
                    height: "10vh",
                }}
                slidingAnimation="left_to_right"
                orientation="horizontal"
                initialSlide={1}
                onBeforeChange={(previousSlide, nextSlide) =>
                    console.log("onBeforeChange", previousSlide, nextSlide)
                }
                onChange={(nextSlide) => console.log("onChange", nextSlide)}
                onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.33)',
                }}
            >
                {images.map((image, index) => (
                    <Slide
                        key={index}
                        background={{
                            backgroundImageSrc: image,
                            backgroundAttachment: "fixed",
                            backgroundSize: "contain",
                            backgroundPosition: "center"
                        }}
                    />
                ))}
            </HeroSlider>
        </div>
    );
}

export default ImageSlider;
