import React from 'react'
import { FaSistrix, FaMicrophone } from 'react-icons/fa'

const Home = (props) => {
  const [state, setState] = React.useState('');

  const searchGoogle = (e) => {
    console.log('ishu');
    console.log(state+"ffffff");
    
    props.history.push({ pathname: `/search?q=${state}` });
    
  };



  return (
    <div className='home'>
      <div className="home__container">
        <div className="home__logo">
          <img src="/image/googlelogo.png" alt="Logo" />
        </div>
        <form className="home__form" onSubmit={searchGoogle}>
          <div><FaSistrix className="search__icon" /> </div>
          <input type="text" className="home__input" value={state}  onChange={(e) => {setState(e.target.value);console.log(state);}} />
          <div className="home__group">
            <input type="submit" className="home__btn" value="Google Search" />
          </div>
          {/* <FaSistrix className='searh__icon' /> */}
          <FaMicrophone className="microphone" />
        </form>
      </div>
    </div>
  )
}

export default Home