import './index.scss';
import LogoH from '../../assets/images/logo-h.png';
import profile_pic from '../../assets/images/profile_pic.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [ 'a', 'i', 'q', 'a', 'l']
    const jobAray = ['W', 'e', 'b', '', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        
        let timeoutId = setTimeout(() =>{
            setLetterClass('text-animate-hover')
        },4000)

        return()=>{
            clearTimeout(timeoutId)
        }
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <span className={`${letterClass} _13`}>,</span>
                    <br />
                    <span className={`${letterClass} _14`}>I</span>
                    <span className={`${letterClass} _15`}>'</span>
                    <span className={`${letterClass} _16`}>m</span>
                    <img className='logo-h' src={LogoH} alt="Haiqal hasyim Logo"/>
                    <AnimatedLetters letterClass={letterClass}
                        strArray={nameArray}
                        idx={15}
                    />
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={jobAray}
                        idx={22}
                    />

                </h1>
                <h2>Programming Enthusiast | FrontEnd | Mobile</h2>
                <Link to="/contact" className='flat-button'> CONTACT ME</Link>
            </div>
            <div className="profile_pic">
                <img className="profile" src={profile_pic} alt="Haiqal Hasyim"/>
            </div>
            <Logo/>
        </div>
        </>
    )
}

export default Home


