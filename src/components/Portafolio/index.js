import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import portfolioData from '../../data/portfolio.json';
import './index.scss';

const Portafolio = () => {

    const[letterClass, setLetterClass] = useState('text-animate');
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
        return () => {
            clearTimeout(timer);
        }
    });

    const renderPortafolio = (portfolio) => {
        return (
            <div className='images-container'>
                {
                    portfolio.map((portf, idx) => {
                        return (
                            <div className='image-box' key={idx}>
                                <img src={portf.cover} className='portfolio-image' alt="portfolio" />
                                <div className='content'>
                                    <p className='title'>{portf.title}</p>
                                    <h4 className='description'>{portf.description}</h4>
                                    <button className='btn' onClick={() => window.open(portf.url)}>
                                        View
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        );
    }

    return (
        <>
            <div className='container portafolio-page'>
                <h1 className='page-title'>
                    <AnimatedLetters letterClass={letterClass} strArray={"Portfolio".split("")} idx={15}/>
                </h1>
                <div>
                    {renderPortafolio(portfolioData.portfolio)}
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Portafolio;