import tmdb from '../../images/tmdb-logo.svg'

export default function Footer() {
  return (
    <div className="footer">
      <div className='footer-text'>
        <h3>The Ultimate Movie Database</h3>
        <p>Powered by <img src={tmdb} alt="the movie database" /></p>
        <p>Providers provided by JustWatch</p>

        </div>
    </div>
  )
}
