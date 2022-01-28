import './Contact.css';

export const Contact = () => {
  return <div className='contact main-size flex-center'>
      <h1 className='main-title'>Contact</h1>
      <a className='box' href="mailto:peter.wagner1986@gmail.com">
          Email: <br />
          peter.wagner1986@gmail.com
      </a>
      <a className='box' href="tel:+41787347317">
          Phone: <br />
          078 734 73 17
      </a>
  </div>;
};
