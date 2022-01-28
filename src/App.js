import './App.css';
import { useState, useEffect } from 'react';
import { CarouselItem, carouselItems } from './components/CarouselItem/CarouselItem';
import { HeaderNav } from './components/HeaderNav/HeaderNav';
import { Canvas } from './components/Canvas/Canvas';
import { Project, projects } from './components/Project/Project';
import { Skills } from './components/Skills/Skills';
import { Contact } from './components/Contact/Contact';
import { StartScreen } from './components/StartScreen/StartScreen';

const App = () => {

  const [ startScreen, setStartScreen ] = useState( '' );
  const [ showProject, setShowProject ] = useState( false );
  const [ showSkills, setShowSkills ] = useState( false );
  const [ showContact, setShowContact ] = useState( false );
  const [ index, setIndex ] = useState( 0 );

  const getIndex = ( i ) => {
    setIndex( i - 1 );
    setShowProject( true );
    showSkills ? setShowSkills( false ) : showContact ? setShowContact( false ) : setShowProject( true );
  };

  const getSkills = () => {
    setShowSkills( true );
    showProject ? setShowProject( false ) : showContact ? setShowContact( false ) : setShowSkills( true );
  };

  const getContact = () => {
    setShowContact( true );
    showProject ? setShowProject( false ) : showSkills ? setShowSkills( false ) : setShowContact( true );
  }

  useEffect( () => {
    setTimeout( () => setStartScreen( 'fade' ), 3000 );
  }, [] );


  return (
    <div className='app'>
      <StartScreen 
        startScreen = { startScreen }
      />
      <Canvas />
      <header>
        <HeaderNav />
      </header>
      <nav className='carousel-wrapper flex-center'>
        <div className="carousel flex-center">
          {
            carouselItems.map( item => 
              <CarouselItem 
                key = { item.id.toString() }
                title = { item.title }
                pic = { item.pic }
                imgSize = { item.imgSize }
                project = { item.project }
                skills = { item.skills }
                Contact = { item.contact }
                getIndex = { () => getIndex( item.id ) }
                getSkills = { () => getSkills() }
                getContact = { () => getContact() }
              />
            )
          }
        </div>
      </nav>
      <main className='project-wrapper flex-center'>
          {
            showProject ? <Project 
            title = { projects[ index ].title }
            description = { projects[ index ].description }
            link = { projects[ index ].link }
            linkDescription = { projects[ index ].linkDescription }
            pic1 = { projects[ index ].pic1 }
            pic2 = { projects[ index ].pic2 }
            pic3 = { projects[ index ].pic3 }
            pic4 = { projects[ index ].pic4 }
            picSize = {projects[ index ].picSize}
          /> : null 
          }
          {
            showSkills ? <Skills /> : null
          }
          {
            showContact ? <Contact /> : null
          }

      </main>
    </div>
  );
};

export default App;
