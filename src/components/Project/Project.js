import './Project.css';
import three1 from '../../pics/three.jpg';
import three2 from '../../pics/three1.jpg';
import three3 from '../../pics/three2.jpg';
import three4 from '../../pics/three3.jpg';
import wichtel1 from '../../pics/wichteln.png';
import wichtel2 from '../../pics/wichteln1.png';
import wichtel3 from '../../pics/wichteln2.png';
import wichtel4 from '../../pics/wichteln3.png';
import dash1 from '../../pics/dashboard.png';
import dash2 from '../../pics/dashpic1.png';
import dash3 from '../../pics/dashpic2.png';
import dash4 from '../../pics/dashpic3.png';
import vis1 from '../../pics/visualizer.png';
import vis2 from '../../pics/vispic1.png';
import vis3 from '../../pics/vispic2.png';
import vis4 from '../../pics/vispic3.png';
import dino1 from '../../pics/dino1.png';
import dino2 from '../../pics/dino2.png';
import dino3 from '../../pics/dino3.png';
import dino4 from '../../pics/dino4.png';
import axa1 from '../../pics/axa_logo.png';
import axa2 from '../../pics/bannerpic1.png';
import axa3 from '../../pics/bannerpic2.png';
import axa4 from '../../pics/bannerpic3.png';



export const projects = [
    {
        title: 'Three.JS Livingroom',
        description: 'Ein virtuelles Wohnzimmer erstellt in three.js',
        link: 'https://livingroom-visualizer.herokuapp.com/',
        linkDescription: 'Zur Visualisirung',
        pic1: three1,
        pic2: three2,
        pic3: three3,
        pic4: three4,
        picSize: 'project-pic-height'
    },
    {
        title: 'Wichtel-app',
        description: 'Eine Wichtel-App für die Weihnachtszeit, um zufällig auszuwählen wer wem was schenkt',
        link: 'https://pwagner86.github.io/wichtel_app/',
        linkDescription: 'Zur App',
        pic1: wichtel1,
        pic2: wichtel2,
        pic3: wichtel3,
        pic4: wichtel4,
        picSize: 'project-pic-width'
    },
    {
        title: 'Create your Dashboard',
        description: 'Der Benutzer kann sich registrieren und einloggen. Sobald man eingeloggt ist, kommt man auf sein Dashboard. Dort hat man verschiedene Optionen zur Auswahl. Man kann Farbschema, Layout, Destination, usw. ändern. Die Änderungen werden in einer Datenbank gespeichert. Im Dashboard werden Wetterdaten sowie Newsartikel mit einem AJAX Request geladen. Beide Requests werden nach einer gewissen Zeit neu versendet um auf dem aktuellen Stand zu bleiben.',
        link: 'https://github.com/PWagner86/create_your_dashboard',
        linkDescription: 'Github-Repo',
        pic1: dash1,
        pic2: dash2,
        pic3: dash3,
        pic4: dash4,
        picSize: 'project-pic-width'
    },
    {
        title: 'Livingroom Visualizer',
        description: 'Livingroom Visualizer is a schoolproject about a CMS written in PHP, mySQL, JavaScript, HTML and SASS. The goal is that the admin can add, delete and update news to the site and check the amount of registered users and their informations. As a loged in user, you can use the visualizer. This is a 3D environment build in three.js where you can load different furniture in a room, move and rotate them and create your virtual livingroom.',
        link: 'https://github.com/PWagner86/livingroom_visualizer',
        linkDescription: 'Github-Repo',
        pic1: vis1,
        pic2: vis2,
        pic3: vis3,
        pic4: vis4,
        picSize: 'project-pic-width'
    },
    {
        title: 'Dino Game',
        description: 'Eine 3D Simulation von verschiedenen Dinos, welche durchs Land laufen.',
        link: 'https://pwagner86.github.io/dino_game/',
        linkDescription: 'Zu den Dinos',
        pic1: dino1,
        pic2: dino2,
        pic3: dino3,
        pic4: dino4,
        picSize: 'project-pic-width'
    },
    {
        title: 'AXA Animation',
        description: 'Eine Banneranimation welche mit GSAP und Howler.js gemacht wurde. (nicht responsiv)',
        link: 'https://pwagner86.github.io/banner_animation_axa/',
        linkDescription: 'Zur Animation',
        pic1: axa1,
        pic2: axa2,
        pic3: axa3,
        pic4: axa4,
        picSize: 'project-pic-height'
    },

];

export const Project = ({ title, description, link, linkDescription, pic1, pic2, pic3, pic4, picSize }) => {
    return (
        <div className='project'>
            <h1 className='project-flex'>{ title }</h1>
            <div className="description size project-flex">
                <h2>{ description }</h2>
                <a href={ link } target='_blank'>{ linkDescription }</a>
            </div>
            <div className="pic-wrapper size project-flex">
                <div className="pic project-flex">
                    <img className={ picSize } src={ pic1 } alt="Bild von Projekt" />
                </div>
                <div className="pic project-flex">
                    <img className={ picSize } src={ pic2 } alt="Bild von Projekt" />
                </div>
                <div className="pic project-flex">
                    <img className={ picSize } src={ pic3 } alt="Bild von Projekt" />
                </div>
                <div className="pic project-flex">
                    <img className={ picSize } src={ pic4 } alt="Bild von Projekt" />
                </div>
            </div>
        </div>
    );
};
