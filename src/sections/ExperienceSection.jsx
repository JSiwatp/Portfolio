import TitleHeader from '../components/TitleHeader'
import { expCards } from '../constants/index.js'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const ExperienceSection = () => {
  const cardRefs = useRef([])

  useGSAP(() => {
    gsap.utils.toArray('.timeline-card').forEach(card => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: 'left left',
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%'
        }
      })
    })
    gsap.to('.timeline', {
      transformOrigin: 'bottom bottom',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.timeline',
        start: 'top center',
        end: '70% center',
        onUpdate: self => {
          gsap.to('.timeline', {
            scaleY: 1 - self.progress
          })
        }
      }
    })
    gsap.utils.toArray('.expText').forEach(text => {
      gsap.from(text, {
        xPercent: 0,
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: text,
          start: 'top 60%'
        }
      })
    })
  }, [])

  // const handleMouseMove = index => e => {
  //   const card = cardRefs.current[index]
  //   if (!card) return

  //   const rect = card.getBoundingClientRect()
  //   const mouseX = e.clientX - rect.left - rect.width / 2
  //   const mouseY = e.clientY - rect.top - rect.height / 2

  //   let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI)

  //   angle = (angle + 360) % 360

  //   card.style.setProperty('--start', angle + 60)
  // }

  return (
    <section
      id='experience'
      className='w-full md:mt-40 mt-20 section-padding xl:px-0'
    >
      <div className='w-full h-full md:px-20 px-5'>
        <TitleHeader
          title='Professional Work Experience'
          sub='My Career Overview'
        />

        <div className='mt-32 relative'>
          <div className='realative z-50 xl:space-y-32 space-y-10'>
            {expCards.map(card => (
              <div key={card.title} className='exp-card-wrapper'>
                <div className='xl:w-2/6' />

                <div className='xl:w-4/6'>
                  <div className='flex items-start'>
                    <div className='timeline-wrapper'>
                      <div className='timeline' />
                      <div className='gradient-line w-1 h-full' />
                    </div>

                    <div className='expText flex xl:gap-20 md:gap-10 gap-5 ralative z-20 '>
                      <div className='timeline-logo'>
                        <img
                          src={card.logoPath}
                          alt='logo'
                          className='w-10 h-10 md:w-12 md:h-12 xl:w-16 xl:h-16 object-contain'
                        />
                      </div>
                      <div>
                        <h1 className='font-semibold text-3xl'>{card.title}</h1>
                        <p className='my-5 text-white-50'>{card.date}</p>
                        <p className='text-[#839cb5] italic'>
                          Responsibilities
                        </p>
                        <ul className='list-disc ms-5 mt-5 flex flex-col gapp-5 text-white-50'>
                          {card.responsibilities.map(responsibility => (
                            <li key={responsibility} className='text-lg'>
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
