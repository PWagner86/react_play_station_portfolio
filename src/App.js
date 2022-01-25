import './App.css';
import { CarouselItem } from './components/CarouselItem/CarouselItem';
import { HeaderNav } from './components/HeaderNav/HeaderNav';
import { carouselItems } from './components/CarouselItem/CarouselItem';

const App = () => {

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
              />
            )
          }
        </div>
      </nav>
      <main>
      
      </main>
    </div>
  );
};

export default App;
