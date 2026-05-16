import Button from '../Button/Button'
import './Home.css'

const Home = () => {
  return (
    <div className={'home'}>
      <div className={'home-top'}>Hi , My name is </div>
      <div className={'home-title-1'}>Parsa Taheri !</div>
      <div className={'home-title-2'}>Mern Stack Developer .</div>
      <div className={'home-text'}>
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at
        <a id={'colored-text'}> upstatement.</a>{' '}
      </div>
      <Button value={'check out my resume'} />
    </div>
  )
}

export default Home
