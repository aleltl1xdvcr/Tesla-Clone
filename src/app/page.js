'use client'

import Image from "next/image";
import '@splidejs/react-splide/css/core';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { useEffect, useRef, useState } from "react";
import { useAnimate } from "motion/react"
import './styles.css'
import { Intersection } from '@splidejs/splide-extension-intersection';
import { SlEnergy } from "react-icons/sl";
import { FaPlug } from "react-icons/fa";
import { Footer } from "./modely/page";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Carousel1_data = [
  { img: '/images/home1.avif', name: 'Model Y', apr: '1.99% APR Financing', details: 'Ends June 16 for AWD and June 30 for RWD' },
  { img: '/images/home2.avif', name: 'Model 3', apr: '0% APR Available' }

]

const Carousel2_data = [
  { img: '/images/model3.avif', type: 'Midsize SUV', name: 'Model 3', description: 'Up to 357 mi Range (EPA est.)', description2: 'From $37,490 After Federal Tax Credit2' },
  { img: '/images/modely.avif', type: 'Sports Sedan', name: 'Model Y', description: 'Lease from $349/mo With Zero Down' },
  { img: '/images/cybertruck.avif', type: 'Utility Truck', name: 'Cybertruck', description: 'Lease from $779/mo' },
  { img: '/images/modelx.avif', type: 'Luxury Sub', name: 'Model X', description: 'Free Supercharging on Inventory' },
  { img: '/images/models.avif', type: 'Luxury Sedan', name: 'Model S', description: 'Free Supercharging on Inventory' },

]

export default function Home() {
  const [scope, animate] = useAnimate()
  const base = useRef(null)
  const items_slider_ref = useRef([])

  useEffect(() => {
    const prevBase = Array.from(document.querySelectorAll('.item_slide')).map((i, index) => (0))
    base.current = prevBase
  }, [])

  useEffect(() => {
    function handleSlideResize() {
      const el = document.getElementById('carousel1')
      el.style.transition = 'transform 0.5s ease';
      el.style.transform = `translateX(50px)`
    }

    window.addEventListener('resize', () => handleSlideResize())
    return () => {
      window.removeEventListener('resize', () => handleSlideResize())
    }
  }, [])

  function y() {
    const el = document.getElementById('splide_container')
    if (el) {
      animate(el, { opacity: 1 }, { duration: 5.5, ease: "easeIn", from: { opacity: 0 } })
    }
  }

  function getIndex(index) {
    return base.current.indexOf(index)
  }

  function Carrusel1() {
    const splideRef = useRef(null)

    return (
      <div
        className="cancel flex justify-start items-center relative"
      >
        <div
          ref={scope}
          className="cancel w-full h-full cancel"
        >
          <Splide
            style={{

            }}
            ref={splideRef}
            options={{
              type: 'fade',
              label: 'Carrusel de Projectos',
              rewind: true,
              speed: 650,
              rewindSpeed: 650,
              rewindByDrag: true,
              width: '100%',
              perPage: 1,
              start: 0,
              paginationKeyboard: true,
              preloadPages: 4,
              drag: 'free',
              focus: 'center',
              snap: true,
              wheel: false,
              cover: false,
              arrows: true,
              pagination: true,
              mediaQuery: 'min',
              autoplay: 'pause',
              interval: 5000,
              intersection: {
                inView: {
                  autoplay: true,
                },
                outView: {
                  autoplay: false
                }
              }
            }
            }
            extensions={{ Intersection }}
            className='cancel slide'
            hasTrack={false}
            autoFocus={true}
            aria-label='Carousel cars'
          >
            <SplideTrack className="cancel" id='splide_container'>
              {Carousel1_data?.map((i, index) => (
                <SplideSlide className='cancel' key={index}>
                  <div
                    key={index}
                    className="cancel h-full text-white">
                    <div
                      id={`item-${index}`}
                      className="cancel h-full w-full"
                    >
                      <div className="cancel w-[100vw] h-[80vh]">
                        <Image
                          priority
                          className='cancel'
                          objectFit="cover"
                          fill
                          src={`/Tesla-Clone${i.img}`}
                          alt={i.name}
                          key={`${index}`}
                        />
                      </div>
                    </div>
                    <div
                      className="cancel justify-start items-center absolute top-22 left-0 w-full h-full flex flex-col gap-3"
                    >
                      <div
                        className="cancel flex flex-col w-fit h-fit leading-tight"
                      >
                        <div
                          className="cancel  flex flex-col items-center gap-3"
                        >
                          <h1
                            className="cancel text-[70px] font-bold leading-tight"
                          >
                            {i.name}
                          </h1>
                          <h2
                            className="cancel translate-y-[-20px] text-[24px] flex flex-col text-center"
                          >
                            <span
                              className="underline"
                            >{i.apr}</span>
                            {
                              i.details ?
                                <span
                                  className="text-[16px] underline-offset-auto"
                                >
                                  {i?.details}
                                </span>
                                : null
                            }
                          </h2>
                        </div>
                        <div
                          className="cancel pt-1 flex flex-row gap-x-2"
                        >
                          <button
                            className="cancel bg-blue-500 hover:bg-blue-800 transition-colors duration-600 w-[230px] text-white py-2.5 text-center rounded-[4px]"
                          >
                            Order now
                          </button>
                          <button
                            className="cancel bg-gray-50 text-black w-[230px] py-2.5 text-center rounded-[4px]"
                          >
                            View Inventory
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </SplideTrack>

            <div className="cancel  splide__arrows w-full sm:flex justify-between flex-row absolute z-30 top-6/12 left-0"
            >
              <div className="cancel  splide__arrow splide__arrow--prev">
                <div id='button-prev'
                  className='cancel flex flex-row w-fit absolute top-0 left-[60px] hover:scale-150 transition-transform duration-200 px-2 py-1 rounded-[3px] ease-in-out cursor-pointer bg-white text-black'
                >
                  <BiChevronLeft
                    onClick={() => y()}
                    className='cancel '
                    size={25}
                  />
                </div>
              </div>

              <div className="cancel  splide__arrow splide__arrow--next">
                <div id='button-next'
                  className='cancel w-fit flex-row flex absolute top-0 right-[60px] hover:scale-155 transition-transform duration-200 px-2 py-1 rounded-[3px] ease-in-out cursor-pointer bg-white text-black'
                >
                  <BiChevronRight
                    onClick={() => y()}
                    className='cancel '
                    size={25}
                  />
                </div>
              </div>
            </div>

            <div
              className='cancel flex justify-center items-center h-[44px] absolute top-10/12 mt-5 left-6/12'
            >
              <ul className='cancel splide__pagination'></ul>
            </div>

          </Splide >
        </div>
      </div>
    )
  }

  function Carrusel2() {

    const fnToPosition = (position) => {
      const el = document?.getElementById('item_slide0')
      base.current = base.current.map((i, index) => index === position ? 1 : 0)
      const length = base.current.length
      const index = getIndex(1)
      const indexNonZero = (index === 0 ? 1 : index)
      const container_scope = containerCarouselRef1.current
      const windowInnerWidth = container_scope.clientWidth
      const el2 = containerCarouselRef1.current
      const itemWidth = el.offsetWidth
      const x = ((windowInnerWidth - itemWidth) / 2) - ((1 * indexNonZero) - 20)
      const exception = index === 0
      const exception2 = index === length - 1
      const slotException2 = 20
      const valueException2 = ((itemWidth) * indexNonZero) - (itemWidth / 3) - slotException2
      const distanceCondition = exception ? 50 : exception2 ? valueException2 : (((itemWidth)) * indexNonZero) - x
      const distance = exception
        ? Math.abs(distanceCondition)
        : exception2
          ? Math.sign(distanceCondition) === -1 ? distanceCondition : '-' + distanceCondition
          : Math.sign(distanceCondition) === -1 ? distanceCondition : '-' + distanceCondition

      el2.style.transition = 'transform 0.7s ease-in-out'
      el2.style.transform = `translateX(${distance}px)`
    }

    function getIndex(index) {
      return base.current.indexOf(index)
    }

    const containerCarouselRef1 = useRef(null)

    return (
      <div
        key={containerCarouselRef1}
        id="container_scope"
        className="cancel  flex items-center h-screen justify-center overflow-hidden"
        ref={scope}

      >

        <div
          style={{
            transform: 'translateX(50px)',
            transitionDuration: '2s',
          }}
          key={'xyz'}
          ref={containerCarouselRef1}
          id="carousel1"
          className="cancel  flex flex-row w-full h-fit transition-transform duration-1000 ease carousel1"
        >
          {
            Carousel2_data.map((i, n) => (
              <div
                ref={(el) => (items_slider_ref.current[n] = el)}
                onClick={() => fnToPosition(n)}
                key={n}
                className="cancel  item_slide relative pr-10"
                id={`item_slide${n}`}
              >
                <div
                  className="cancel  w-[75vw]¿ w-[80vw] md:w-[70vw] lg:w-[75vw] xl:w-[70vw] h-[80vh] relative"
                >
                  <Image
                    priority
                    className="cancel  rounded-[8px]"
                    objectFit="cover"
                    fill
                    src={`/Tesla-Clone${i.img}`}
                    alt={i.name}
                  />
                </div>

                <div
                  className="cancel  "
                >
                  <div
                    className="cancel text-white absolute left-[25px] top-7/12"
                  >

                    <div>
                      <h1
                        className="cancel font-bold text-[50px] "
                      >
                        {i.name}
                      </h1>
                      <p
                        className="cancel  underline text-[22px]"
                      >
                        {i.description}
                      </p>
                      {
                        i?.description2
                          ?
                          <p
                            className="cancel  text-[15px]"
                          >
                            {i.description2}
                          </p>
                          : null
                      }

                      <div
                        className="cancel  flex flex-row gap-x-2 mt-5 text-[15px]"
                      >
                        <button
                          className="cancel bg-blue-500 hover:bg-blue-800 transition-colors duration-600 text-white w-[170px] py-2 text-center rounded-[4px]"
                        >
                          Order now
                        </button>
                        <button
                          className="cancel text-black dark:text-black bg-gray-50 w-[170px] py-2 text-center rounded-[4px]"
                        >
                          View Inventory
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

      </div>
    )
  }

  const c3data = [
    {
      name: 'Solar Panels',
      description: 'Use solar Energy to Power Your Home and Charge Your Tesla',
      img: '/images/solarPanels-c2.avif'
    },
    {
      name: 'Powerwall',
      description: 'Keep Your Lights On During Outages',
      img: '/images/powerwall-c2.avif'
    },
    {
      name: 'Solar Roof',
      description: 'Generate Clean Energy With your Roof',
      img: '/images/solarRoof-c2.avif'
    },
    {
      name: 'Megapack',
      description: 'Massive Batteries for Massive Energy Support',
      img: '/images/megapack-c2.avif'
    },

  ]

  function Carousel3() {
    const items_slider_ref = useRef([])

    const fnToPosition = (position) => {
      const el = document?.getElementById('item_slidec3.0')
      base.current = base.current.map((i, index) => index === position ? 1 : 0)
      const length = base.current.length
      const index = getIndex(1)
      const indexNonZero = (index === 0 ? 1 : index)
      const container_scope = containerCarouselRef1.current
      const windowInnerWidth = container_scope.clientWidth
      const el2 = containerCarouselRef1.current
      const itemWidth = el.offsetWidth
      const x = ((windowInnerWidth - itemWidth) / 2) - ((1 * indexNonZero) - 20)
      const exception = index === 0
      const exception2 = index === length - 1
      const slotException2 = 20
      const valueException2 = ((itemWidth) * indexNonZero) - (itemWidth / 3) - slotException2
      const distanceCondition = exception ? 50 : exception2 ? valueException2 : (((itemWidth)) * indexNonZero) - x
      const distance = exception
        ? Math.abs(distanceCondition)
        : exception2
          ? Math.sign(distanceCondition) === -1 ? distanceCondition : '-' + distanceCondition
          : Math.sign(distanceCondition) === -1 ? distanceCondition : '-' + distanceCondition

      el2.style.transition = 'transform 0.7s ease-in-out  '
      el2.style.transform = `translateX(${distance}px)`
    }

    function getIndex(index) {
      return base.current.indexOf(index)
    }

    const containerCarouselRef1 = useRef(null)

    return (
      <div
        key={containerCarouselRef1}
        id="container_scopec3"
        className="cancel  flex items-center h-screen justify-center overflow-hidden text-white"
        ref={scope}

      >

        <div
          style={{
            transform: 'translateX(50px)',
            transitionDuration: '2s',
          }}
          key={'xyz'}
          ref={containerCarouselRef1}
          id="carouselc3.1"
          className="cancel  flex flex-row w-full h-fit transition-transform duration-1000 ease carousel1"
        >
          {
            c3data.map((i, n) => (
              <div
                ref={(el) => (items_slider_ref.current[n] = el)}
                onClick={() => fnToPosition(n)}
                key={n}
                className="cancel  item_slide relative pr-10"
                id={`item_slidec3.${n}`}
              >
                <div
                  className="cancel  w-[75vw]¿ w-[80vw] md:w-[70vw] lg:w-[75vw] xl:w-[70vw] h-[80vh] relative"
                >
                  <Image
                    priority
                    className="cancel  rounded-[8px]"
                    objectFit="cover"
                    fill
                    src={`/Tesla-Clone${i.img}`}
                    alt={i.name}
                  />
                </div>

                <div
                  className="cancel  "
                >
                  <div
                    className="cancel  absolute left-[25px] top-7/12"
                  >

                    <div>
                      <h1
                        className="cancel  font-bold text-[50px] "
                      >
                        {i.name}
                      </h1>
                      <p
                        className="cancel  underline text-[22px]"
                      >
                        {i.description}
                      </p>
                      {
                        i?.description2
                          ?
                          <p
                            className="cancel  text-[15px]"
                          >
                            {i.description2}
                          </p>
                          : null
                      }

                      <div
                        className="cancel  flex flex-row gap-x-2 mt-5 text-[15px]"
                      >
                        <button
                          className="cancel  bg-blue-500 hover:bg-blue-800 transition-colors duration-600 text-white px-6 py-2 text-center rounded-[4px]"
                        >
                          Order now
                        </button>
                        <button
                          className="cancel px-6 py-2 text-center rounded-[4px] bg-white text-black dark:text-black"
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

      </div>
    )
  }

  return (
    <div
      id="xyz"
      className="cancel">
      <main className="cancel">
        <Carrusel1 />
        <Carrusel2 />
        <MapComponent />
        <Carousel3 />
        <Footer1 />
      </main>
      <Footer />
    </div>
  );
}

const map_data = [
  {
    name: 'Compare Models',
    description: 'Find the Tesla vehicle that´s right for you',
    img: '/images/compareModels.avif'
  },
  {
    name: 'American Heroes',
    description: 'Military, first responder, teacher and student purchase program.',
    img: '/images/americanHeroes.avif'
  }
]

function MapComponent() {
  return (
    <div
      className="cancel w-full flex justify-center flex-col"
    >
      <div
        className="cancel flex justify-center items-center py-16 px-[50px]"
      >
        <div
          className="cancel w-full flex flex-row items-start gap-8"
        >
          {
            map_data.map((i, n) => (
              <div
                className="cancel w-full h-[220px] flex flex-row gap-x-5 items-center bg-neutral-100 text-black dark:text-white dark:bg-zinc-800 rounded-[5px]"
                key={n}
              >
                <div
                  className="cancel flex flex-col items-center xl:items-start w-full xl:w-8/12 p-5 h-full"
                >
                  <div
                    className="cancel flex flex-col gap-1 w-full items-center xl:items-start"
                  >
                    <h1
                      className="cancel text-[32px] font-bold w-full text-center xl:text-start"
                    >
                      {i.name}
                    </h1>
                    <p
                      className="cancel text-neutral-800 dark:text-neutral-300 text-center xl:text-start"
                    >
                      {i.description}
                    </p>
                  </div>
                  <div
                    className="cancel pt-5"
                  >
                    <button
                      className="cancel bg-black px-16 py-3 text-center flex items-center text-[13px] rounded-[4px] text-white dark:text-neutral-200"
                    >
                      {
                        i.name === 'Compare Models'
                          ? 'Compare Models'
                          : 'Learn More'
                      }
                    </button>
                  </div>
                </div>
                <div
                  className="cancel h-full w-5/12 relative hidden xl:flex"
                >
                  <Image
                    className="cancel rounded-tr-[5px] rounded-br-[5px]"
                    src={`/Tesla-Clone${i.img}`}
                    alt={i.description}
                    fill
                    objectFit="cover"
                  />
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <video
        width={1000}
        height={1500}
        className=" md:h-fit w-full px-10 rounded-[8px]"
        src="/Tesla-Clone/videos/map_component_video1.mp4"
        autoPlay
        loop
      />

      <div
        className="cancel flex flex-col justify-center px-10 items-center"
      >

        <div
          className="cancel flex flex-col  lg:flex-row items-start gap-10 lg:mt-[-20px] xl:mt-16 px-10 text-black"
        >
          <div
            className="cancel w-full lg:w-9/12"
          >
            <div>
              <h1
                className="cancel dark:text-white text-[40px] font-bold"
              >
                Find Your Charge
              </h1>
              <p
                className="cancel text-neutral-900 dark:text-neutral-300"
              >View the network of Tesla Superchargers and Destination Chargers available near you.</p>
            </div>
            <div
              className="cancel lg:flex flex-row items-center w-fit pt-5 text-[14px] gap-x-5 hidden"
            >
              <button
                className="cancel px-6 py-2 text-white bg-zinc-800 rounded-[4px]"
              >View Network</button>
              <button
                className="cancel px-6 py-2 text-white bg-zinc-900 rounded-[4px]"
              >Learn More</button>
            </div>
          </div>
          <div
            className="cancel flex flex-row items-start gap-x-5 w-5/12 xl:w-3/12"
          >
            <div
              className="cancel flex flex-col items-start"
            >
              <div
                className="cancel flex flex-row items-center gap-5"
              >
                <span
                  className="cancel text-[45px]"
                >570</span>
                <span
                  className="cancel rounded-full bg-red-600 border border-white p-3"
                >
                  <SlEnergy
                    size={30}
                    className=" "
                  />
                </span>
              </div>
              <span
                className="cancel text-neutral-900 dark:text-neutral-300 whitespace-nowrap"
              >Superchargers</span>
            </div>

            <div
              className="cancel flex flex-col items-start"
            >
              <div
                className="cancel flex flex-row items-center gap-x-5"
              >
                <span
                  className="cancel text-[45px]"
                >
                  198
                </span>
                <span
                  className="cancel rounded-full p-3 bg-gray-300 border border-white"
                >
                  <FaPlug
                    size={30}
                  />
                </span>
              </div>

              <span
                className="cancel text-neutral-900 dark:text-neutral-300 whitespace-nowrap"
              >
                Destination Chargers
              </span>
            </div>
          </div>

          <div
            className="cancel flex flex-row items-center w-fit pt-5 text-[14px] gap-x-5 lg:hidden"
          >
            <button
              className="cancel px-6 py-2 bg-zinc-800 rounded-[4px]"
            >View Network</button>
            <button
              className="cancel px-6 py-2 bg-zinc-900 rounded-[4px]"
            >Learn More</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export const Footer1 = () => {
  return (
    <div
      className="cancel px-[100px]¿ lg:px-[180px] h-[60vh] flex justify-center items-end pb-32 lg:pb-16"
    >
      <div
        className="cancel flex flex-col gap-5 w-fit h-fit justify-center items-center"
      >
        <div
          className="cancel w-10/12 justify-center items-center flex pt-[50px]"
        >
          <ul
            className="cancel flex flex-row items-center justify-between w-fit text-[12px] flex-wrap gap-x-10"
          >
            <li
              className="cancel whitespace-nowrap"
            >Tesla © 2025</li>
            <li className="cancel whitespace-nowrap"
            >Privacy & Legal</li>
            <li className="cancel whitespace-nowrap"
            >Vehicle Recalls</li>
            <li className="cancel whitespace-nowrap"
            >Contact</li>
            <li className="cancel whitespace-nowrap"
            >News</li>
            <li className="cancel whitespace-nowrap"
            >Get Updates</li>
            <li className="cancel whitespace-nowrap"
            >Locations</li>
            <li className="cancel whitespace-nowrap"
            >Learn</li>
          </ul>
        </div>
      </div>
    </div>
  )
}