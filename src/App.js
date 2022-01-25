import './App.css';
import { useState } from 'react';
import { CarouselItem, carouselItems } from './components/CarouselItem/CarouselItem';
import { HeaderNav } from './components/HeaderNav/HeaderNav';
import { Project, projects } from './components/Project/Project';

const App = () => {

  const [ index, setIndex ] = useState(0)

  const getIndex = ( i ) => {
    setIndex( i - 1);
  }


  return (
    <div className='app'>
      <header>
        <HeaderNav />
      </header>
      <nav className='carousel-wrapper app-flex'>
        <div className="carousel app-flex">
          {
            carouselItems.map( item => 
              <CarouselItem 
                key = { item.id.toString() }
                title = { item.title }
                pic = { item.pic }
                imgSize = { item.imgSize }
                getIndex = { () => getIndex( item.id ) }
              />
            )
          }
        </div>
      </nav>
      <main className='project-wrapper app-flex'>
          <Project 
            title = { projects[ index ].title }
            description = { projects[ index ].description }
            link = { projects[ index ].link }
            linkDescription = { projects[ index ].linkDescription }
            pic1 = { projects[ index ].pic1 }
            pic2 = { projects[ index ].pic2 }
            pic3 = { projects[ index ].pic3 }
            pic4 = { projects[ index ].pic4 }
            picSize = {projects[ index ].picSize}
          />
      </main>
    </div>
  );
};

export default App;
