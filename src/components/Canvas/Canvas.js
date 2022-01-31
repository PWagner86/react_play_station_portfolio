import { useRef, useEffect } from 'react';
import { Particle } from './Paricle';
import './Canvas.css';

export const Canvas = () => {
    
    const canvasRef = useRef( null );


    useEffect( () => {

        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const context = canvas.getContext( '2d' );

        const particles = [];

        for( let i = 0; i < 200; i++ ){
            particles[ i ] = new Particle( context, canvas.width, canvas.height );
        }

        const render = () => {
            context.clearRect( 0, 0, canvas.width, canvas.height );
            particles.forEach( particle => {
                particle.show();
                particle.float();
            });
            window.requestAnimationFrame( render );
        };

        render();

    }, [] );

    return(
        <canvas className='canvas' ref={ canvasRef }/>
    )
};
