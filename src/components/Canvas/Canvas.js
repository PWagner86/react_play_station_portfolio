import { useRef, useEffect } from 'react';
import './Canvas.css';

export const Canvas = () => {
    
    const canvasRef = useRef( null );


    // let x = 5;
    // let y = 5;
    const particles = [];

    const draw = ( ctx, x, y ) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc( x, y, Math.floor( ( Math.random() + 0.1 ) * 5), 0, 2 * Math.PI );
        ctx.fill()
    }


    useEffect( () => {

        const canvas = canvasRef.current;
        const context = canvas.getContext( '2d' );
        let xSpeed = ( ( Math.random() + 0.1 ) * 0.7 );
        let ySpeed = ( ( Math.random() + 0.1 ) * 0.7 );
        let x = Math.floor( Math.random() * ( 100 - window.innerWidth ) );
        let y = Math.floor( Math.random() * ( window.innerHeight / 5 ) );    
        let animationFrameId;
        
        for( let i = 0; i < 200; i++ ){
            particles[ i ] = draw( context, x, y );
        };      

        const render = () => {
            x = x + xSpeed;
            y = y + ySpeed;
            if( x > window.innerWidth || y > window.innerHeight ){
                x =  Math.floor( Math.random() * ( 100 - window.innerWidth ) );
                y = Math.floor( Math.random() * ( window.innerHeight / 5 ) );
            };
            draw( context, x, y );
            animationFrameId = window.requestAnimationFrame( render );
        };

        render();

        return () => {
            window.cancelAnimationFrame( animationFrameId );
        }
        
    }, [ draw ] );

    return(
        <canvas className='canvas' ref={ canvasRef }/>
    )
};
