import './Skills.css';
import html from '../../pics/html5.png';
import css from '../../pics/css3.jpg';
import sass from '../../pics/sass.png';
import js from '../../pics/js.svg';
import ts from '../../pics/ts.png';
import node from '../../pics/node.png';
import phpPic from '../../pics/php.svg.png';
import mysqlPic from '../../pics/mysql.svg.png';
import reactPic from '../../pics/react.svg';

export const Skills = () => {
  return <div className='skills main-size flex-center'>
      <h1 className='main-title'>Skills</h1>
      <div className="skill box"><img src={ html } alt="HTML 5 Logo" /></div>
      <div className="skill box"><img src={ css } alt="CSS Logo" /></div>
      <div className="skill box"><img src={ sass } alt="Sass Logo" /></div>
      <div className="skill box"><img src={ js } alt="JS Logo" /></div>
      <div className="skill box"><img src={ ts } alt="TS Logo" /></div>
      <div className="skill box"><img src={ node } alt="NodeJS Logo" /></div>
      <div className="skill box"><img src={ phpPic } alt="PHP Logo" /></div>
      <div className="skill box"><img src={ mysqlPic } alt="MySQL Logo" /></div>
      <div className="skill box"><img src={ reactPic } alt="React Logo" /></div>
  </div>;
};
