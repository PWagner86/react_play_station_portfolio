import './CarouselItem.css';
import three1 from '../../pics/three.jpg';
import wichtel1 from '../../pics/wichteln.png';
import dash1 from '../../pics/dashboard.png';
import livingroom1 from '../../pics/visualizer.png';
import dino1 from '../../pics/dino1.png';
import axa1 from '../../pics/axa_logo.png';
import gear from '../../pics/cogs-solid.svg';
import mail from '../../pics/envelope-regular.svg';

export const carouselItems = [
    {
      id: 1,
      title: 'Three.JS Livingroom',
      pic: three1,
      imgSize: 'pic-size-width'
    },
    {
      id: 2,
      title: 'Wichtel-App',
      pic: wichtel1,
      imgSize: 'pic-size-width'
    },
    {
      id: 3,
      title: 'Create your Dashboard',
      pic: dash1,
      imgSize: 'pic-size-width'
    },
    {
      id: 4,
      title: 'Livingroom Visualizer',
      pic: livingroom1,
      imgSize: 'pic-size-width'
    },
    {
      id: 5,
      title: 'Dino Game',
      pic: dino1,
      imgSize: 'pic-size-width'
    },
    {
      id: 6,
      title: 'AXA Animation',
      pic: axa1,
      imgSize: 'pic-size-height'
    },
    {
      id: 7,
      title: 'Skills',
      pic: gear,
      imgSize: 'pic-size-height icon'
    },
    {
      id: 8,
      title: 'Contact',
      pic: mail,
      imgSize: 'pic-size-height icon'
    },
  ];


export const CarouselItem = ( { title, pic, imgSize } ) => {
    return (
        <div className='carousel-item carousel-transition'>
            <div className='inner'>
                <h3 className='carousel-flex'>{ title }</h3>
                <div className="pic-wrapper carousel-flex">
                    <img className={ imgSize } src={ pic } alt="Logos der Projekte" />
                </div>
            </div>
            <div className="arrow-wrapper carousel-flex carousel-transition">
                <i className="far fa-arrow-alt-circle-down"></i>
            </div>
        </div>
    );
};
