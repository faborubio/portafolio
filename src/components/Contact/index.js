import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_gzrqcfz', 'template_yeo3t4c', form.current, '-sEQbSovziK5M7Kuq')
          .then(() => {
              alert('Message sent successfully');
              window.location.reload(false);
          }, () => {
              alert('Failed to send the message, please try again');
          });
      };

    return (
        <>
            <div className="container contact-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C','o','n','t','a','c','t',' ','m','e']}
                        idx={15}
                        />
                    </h1>
                    <p>
                        I'm a very ambitious front-end developer looking for a role in an
                        established IT company with the opportunity to work with the latest
                        technologies on challenging and diverse projects.
                    </p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name='name' placeholder='Name' required/>
                                </li> 
                                <li className='half'>
                                    <input type="email" name='email' placeholder='Email' required/>
                                </li> 
                                <li >
                                    <input placeholder="Subject" type="text" name="subject" required/>
                                </li>
                                <li >
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>   
                                <li >
                                    <input type="submit" className='flat-button' value="SEND"/>
                                </li>   
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Fabian Rubio,
                    <br/>
                    Chile
                    <br/>
                    Calle 123, 0880 <br/>
                    Curico <br/>
                    <span>fabian.compu27@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[-34.99680714515615, -71.23630181290234]} zoom={13}>
                        <TileLayer url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'/>
                        <Marker position={[-34.99680714515615, -71.23630181290234]}>
                            <Popup>Fabian lives here</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}


export default Contact;