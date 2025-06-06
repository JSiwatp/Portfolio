import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import TitleHeader from '../components/TitleHeader'

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {
  const sectionRef = useRef(null)
  const project1Ref = useRef(null)
  const project2Ref = useRef(null)
  const project3Ref = useRef(null)

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current
    ]
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100'
          }
        }
      )
    })
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    )
  }, [])

  return (
    <section id='work' ref={sectionRef} className='app-showcase '>
      <div className='w-full '>
        <div className='mb-10'>
          <TitleHeader title='My Recent Work Experience' sub='PORTFOLIO' />
        </div>

        <div className='showcaselayout'>
          {/* LEFT */}
          <div className='first-project-wrapper' ref={project1Ref}>
            <div className='image-wrapper'>
              <img src='/images/project1v1.png' alt='Reading studio' />
            </div>
            <div className='text-content'>
              <h2>Reading Studio</h2>
              <p className='text-white-50 md:text-xl'>
                "A web application built with React, Node.js, Bootstrap and
                phpMyAdmin."
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className='project-list-wrapper overflow-hidden'>
            <div className='project' ref={project2Ref}>
              <div className='image-wrapper bg-[#ffefdb]'>
                <img
                  src='/images/project2.png'
                  alt='Library Management Platform'
                />
              </div>
              <h2>Tourvisto</h2>
              <p className='text-white-50 md:text-xl'>
                "A web application built with React, Appwrite, tailwind and
                Vite."
              </p>
            </div>

            {/* <div className='project' ref={project3Ref}>
              <div className='image-wrapper bg-[#ffe7eb]'>
                <img src='/images/project3.png' alt='YC Directory App' />
              </div>
              <h2>YC Directory - A Startup Showcase App</h2>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection
