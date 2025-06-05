const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='flex flex-col justify-center items-center md:items-start'>
          <a className='gradient-text'>SIWAT PHUTTHABURI</a>
        </div>
        <div className='socials' />
        <div className='flex flex-col justify-center'>
          <p className='text-center md:text-end'>
            © {new Date().getFullYear()} SIWAT PHUTTHABURI All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
