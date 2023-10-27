import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useEffect, useState } from 'react';
import { faAngular, faCss3, faGithub, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';


const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {

        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [])


    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={["A", "b", "o", "u", "t", "", "m", "e"]}
                            idx={15}
                        />
                    </h1>
                    <div className="desc-text">
                            
                        <p>Hello! I'm Haiqal, a Computer Science graduate from the University of Iowa with a fervor for technology. 
                            My passion for Frontend Web Design was ignited when I designed a website for my college, and I've since mastered skills in CSS, HTML, JavaScript, as well as frameworks like ReactJs, AngularJs, Bootstrap, and EmailJS. 
                           </p>
                    
                        <p>Alongside my tech journey, I've gained leadership insights from 1.5 years as a Multi-Unit Store Manager for Panda Express and innovated with 
                            Python by developing a Sampling Script method. I'm eager to delve deeper into web design and collaborate on groundbreaking projects!</p>
                    
                        <div className="p-highlights">
                            <p> 
                            Python, C++, C#, Java, Javascript
                            </p>

                        </div>
                        
                    </div>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faAngular} color='#DD0031' />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color='#FA06529' />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color='#5eD4e4' />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGithub} color='#EC4D28' />
                        </div>
                    </div>

                </div>
            </div>
        <Loader type="square-spin" />

        </>


    )
}

export default About

