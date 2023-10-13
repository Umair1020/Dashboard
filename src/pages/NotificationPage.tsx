import { Avatar, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Taskasign from 'componets/Taskasign';

const NotificationPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentSlideSet, setCurrentSlideSet] = useState(0);
    const [processingNext, setProcessingNext] = useState(false)
    const cardsPerPage = 4;
    //kia is bar ko aga peacha karna sa change karnwna ha kia bol tw daniyal ye he rha tha ok
    const slideSets = [
        [
            {
                name: 'John Doe',
                avatarSrc: 'avatar1.png',
                socialIcon: <WhatsAppIcon style={{ color: '#25d366' }} />,
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            },
            {
                name: 'John Doe',
                avatarSrc: 'avatar1.png',
                socialIcon: <InstagramIcon style={{ color: '#c32aa3' }} />,
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            },
            {
                name: 'John Doe',
                avatarSrc: 'avatar1.png',
                socialIcon: <WhatsAppIcon style={{ color: '#25d366' }} />,
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            },
            {
                name: 'John Doe',
                avatarSrc: 'avatar1.png',
                socialIcon: <WhatsAppIcon style={{ color: '#25d366' }} />,
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            },
           
            // Add more cards as needed
    ]
]
// const totalSlides = slideSets.length;
    const totalSlides = slideSets[currentSlideSet].length;
    const totalPages = Math.ceil(totalSlides / cardsPerPage);

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => {
            const newSlide = prevSlide === 0 ? totalSlides - 1 : prevSlide - 1;
            console.log("Prev Slide: ", newSlide);
            return newSlide;
        });
    };

    const nextSlide = () => {
        // Disable the "Next" button while processing
        if (processingNext) {
            return;
        }
        setProcessingNext(true);
    
        setCurrentSlide((prevSlide) => {
            const newSlide = prevSlide === totalSlides - 1 ? 0 : prevSlide + 1;
            console.log("Next Slide: ", newSlide);
            return newSlide;
        });
    
        // Enable the "Next" button after a delay (adjust the delay time as needed)
        setTimeout(() => {
            setProcessingNext(false);
        }, 1000); // Adjust the delay time (milliseconds) as needed
    };
    

    const changeSlideSet = (setIndex: number) => {
        setCurrentSlideSet(setIndex);
        setCurrentSlide(0);
    };

    const renderSlides = () => {
        const start = currentSlide * cardsPerPage;
        const end = start + cardsPerPage;
        const currentSet = slideSets[currentSlideSet].slice(start, end);

        return currentSet.map((slide, index) => (
            <div
                key={index}
                style={{
                    padding: '16px',
                    boxSizing: 'border-box',
                    maxHeight: '400px',
                    backgroundColor: '#303030',
                    borderRadius: '20px',
                    marginRight: '8px',
                    color: 'white',
                    marginTop: "50px",
                    width: '250px',
                }}
            >
                {/* Avatar and Social icons in the same row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <div style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Avatar alt="Remy Sharp" src={slide.avatarSrc} />
                        <div style={{ marginTop: '8px', textAlign: 'center', fontSize: "20px", fontWeight: "400" }}>{slide.name}</div>
                    </div>
                    <div>
                        <IconButton style={{ color: slide.socialIcon.props.style.color }}>
                            {slide.socialIcon}
                        </IconButton>
                    </div>
                </div>
                {/* Text */}
                <div>
                    <p className='para' style={{ margin: 0, textAlign: "center", fontSize: "18px", fontWeight: 300 }}>
                        {slide.text}
                    </p>
                </div>
            </div>
        ));
    };

    return (
        <div>
            <Typography variant="h5" component="h2" sx={{
                fontFamily: "poppins",
                fontSize: 20,
                color: "#fff"
            }}> <br />
                Notification
            </Typography>
            <Typography variant="h5" component="h2" sx={{
                fontSize: 20,
                color: "#fff"
            }}> <br />
                New Messages
            </Typography>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'center', // Center-align the card sets
                    }}
                >
                    {renderSlides()}
                </div>
                <div>
                    <button onClick={prevSlide} disabled={currentSlide === 0}>Previous</button>
                    <button onClick={nextSlide} disabled={currentSlide === totalSlides - 1}>Next</button>
                </div>
            </div>
            <hr />
           <Taskasign />
        </div>
    );
};

export default NotificationPage;
