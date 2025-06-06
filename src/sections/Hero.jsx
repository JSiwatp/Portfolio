import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Button from '../components/Button'
import { words } from '../constants'
import HeroExperience from '../components/HeroModels/HeroExperience'

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.hero-text h1',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'power2.inOut' }
    )
  })

  return (
    <section id='hero' className='relative overflow-hidden'>
      <div className='absolute top-0 left-0 z-10'>
        <img src='/images/bg.png' alt='' />
      </div>

      <div className='hero-layout'>
        {/* LEFT: Hero Content */}
        <header className='flex flex-col justify-center w-full xl:w-1/2 items-center md:items-start text-center md:text-left'>
          <div className='flex flex-col gap-7'>
            <div className='hero-text'>
              <h1>
                HELLO!
                {/* <span className='slide'>
                  <span className='wrapper'>
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className='flex items-center md:gap-3 gap-1 pb-2'
                      >
                        <img
                          src={word.imgPath}
                          alt='person'
                          className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50'
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span> */}
              </h1>
              <h1>I"M SIWAT</h1>
              <h1>PHUTTHABURI</h1>
            </div>

            <p className='text-white-50 md:text-xl relative z-10 pointer-events-none'>
              I'm looking for a full-time job
              {/* as Front-end, */}
              <br />
              {/* Back-end and Fullstack. */}
            </p>

            <Button
              text='See My Work'
              className='md:w-80 md:h-16 w-60 h-12'
              id='work'
            />
          </div>
        </header>
        {/* RIGHT: 3D Model or Visual */}
        <figure className='w-full xl:w-1/2 flex justify-center items-center mt-10 xl:mt-0'>
          {/* <div className='hero-3d-layout'> */}
          <div className='w-full max-w-2xl'>
            {/* <HeroExperience /> */}
            <img
              src='/images/heroImgv2.png'
              alt='Hero Image'
              className='w-full h-auto object-contain'
            />
          </div>
        </figure>
      </div>
    </section>
  )
}

export default Hero
