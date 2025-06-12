'use client'

import '@splidejs/react-splide/css/core';
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { IoMdPause, IoIosSend } from "react-icons/io";
import { FaPlay, FaMessage } from "react-icons/fa6";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import { GiSteeringWheel } from "react-icons/gi";
import { useAnimate, motion } from 'motion/react';

export default function ModelY() {
  const [scope, animate] = useAnimate()
  function Main() {
    return (
      <div
        className="cancel w-full flex justify-center items-start translate-y-[-75px]¿ absolute top-0"
      >
        <div
          className="cancel w-full relative"
        >
          <div
            className="cancel relative w-full h-[91vh]"
          >
            <Image
              src='/Tesla-Clone/images/Model-Y-2-Hero-Desktop.avif'
              fill
              objectFit="cover"
              alt="model y"
            />
            <div
              className="absolute flex justify-center items-start w-full"
            >
              <div
                className="cancel flex flex-col items-center w-fit translate-y-[70px] leading-tight"
              >
                <h1
                  className="cancel text-[75px] font-bold"
                >
                  Model Y
                </h1>
                <p
                  className="cancel text-[23px] font-bold underline decoration-black underline-offset-4"
                >
                  Starting at $37,490
                </p>
                <p
                  className="cancel text-[15px] pt-1"
                >After $7,500 Federal Tax Credit</p>
                <div
                  className="cancel w-fit gap-x-5 flex flex-row items-center text-[13px] mt-5"
                >
                  <Link
                    href='/x'
                    className="cancel py-2 px-16 rounded-[3px] text-white"
                  >
                    Order Now
                  </Link>
                  <Link
                    href='/x'
                    className="cancel bg-black text-white px-16 rounded-[3px] py-2"
                  >
                    Demo Drive
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  function Part1() {
    return (
      <div>
        <div
          className="h-[40vh] w-full justify-center flex items-center"
        >
          <ul
            className="flex flex-row"
          >
            <li
              className="h-fit pr-12 border-r border-white"
            >
              <div
                className="flex flex-row items-end leading-none"
              >
                <span
                  className="text-[90px] font-bold items-end"
                >
                  357
                </span>
                <span
                  className="text-[25px]"
                >mi</span>
              </div>
              <p
                className="text-neutral-200 text-[22px]"
              >Range (EPA est.)</p>
            </li>
            <li
              className="h-fit px-12 border-r border-white"
            >
              <div
                className="flex flex-row items-end leading-none"
              >
                <span
                  className="text-[90px] font-bold items-end"
                >
                  357
                </span>
                <span
                  className="text-[25px]"
                >mi</span>
              </div>
              <p
                className="text-neutral-200 mt text-[22px]"
              >Range (EPA est.)</p>
            </li>
            <li
              className="h-fit pl-12"
            >
              <div
                className="flex flex-row items-end leading-none"
              >
                <span
                  className="text-[90px] font-bold items-end"
                >
                  357
                </span>
                <span
                  className="text-[25px]"
                >mi</span>
              </div>
              <p
                className="text-neutral-200 mt text-[22px]"
              >Range (EPA est.)</p>
            </li>
          </ul>

        </div>
        <div
          className="px-[30px] py-16"
        >
          <div
            className="relative w-full h-[500px]"
          >
            <Image
              className="rounded-[8px]"
              fill
              objectFit="cover"
              alt="modely 2"
              src='/Tesla-Clone/images/modely2.avif'
            />
          </div>
        </div>
      </div>
    )
  }

  const base = useRef(null)

  useEffect(() => {
    const prevBase = Array.from(document.querySelectorAll('.modely_item_slide')).map((i, index) => (0))
    base.current = prevBase
  }, [])

  useEffect(() => console.log(base.current, [base.current]))

  function Part2() {
    const data1 = [
      {
        title: 'Even Quieter',
        description: 'An updated wheel and tire package offers a smoother driving experience. Redesigned body castings reduce parts from 70 to 1 for fewer gaps. All to create a whisper-quiet ride.',
        img: '/images/carousel1.modely.1.avif'
      },
      {
        title: 'More Efficient',
        description: 'Redesigned to improve range, performance and longevity.',
        img: '/images/carousel1.modely.2.avif'
      },
      {
        title: 'Distinctive Lighting',
        description: 'Our single, cross-car lamp is the first indirect reflective body panel taillight of its kind.',
        img: '/images/carousel1.modely.3.avif'
      }
    ]

    function Carrusel1() {
      function fnSplideMove(splide) {
        const left = document.getElementById('modely1-arrow-left')
        const right = document.getElementById('modely1-arrow-right')
        const n = splide.index
        const l = splide.length

        if (n === 0) {
          if (left.classList.contains('opacity-100')) {
            left.classList.remove('opacity-100')
            left.classList.add('opacity-0')
          }
        }
        if (n !== 0) {
          if (!(left.classList.contains('opacity-100')) && left.classList.contains('opacity-0')) {
            left.classList.remove('opacity-0')
            left.classList.add('opacity-100')
          }
        }
        if (n === l - 1) {
          if (right.classList.contains('opacity-100')) {
            right.classList.remove('opacity-100')
            right.classList.add('opacity-0')
          }
        }

        if (n !== l - 1) {
          if (!(right.classList.contains('opacity-100')) && right.classList.contains('opacity-0')) {
            right.classList.remove('opacity-0')
            right.classList.add('opacity-100')
          }
        }
      }

      function handleClickArrows(e) {
        const id = e.target.id
        const subLeft = document.getElementById('button-prev-modely1')
        const subRight = document.getElementById('button-next-modely1')
        if (id === 'modely1-arrow-left' || id === 'button-prev-modely1') {
          subRight.classList.remove('border-2', 'border-white')
          subLeft.classList.add('border-2', 'border-white')
        }
        if (id === 'modely1-arrow-right' || id === 'button-next-modely1') {
          subLeft.classList.remove('border-2', 'border-white')
          subRight.classList.add('border-2', 'border-white')
        }
      }

      return (
        <div
          className="cancel justify-start items-center w-full py-10"
        >
          <Splide
            onMove={(splide) => fnSplideMove(splide)}
            options={{
              type: 'splide',
              label: 'Carrusel de Projectos',
              rewind: false,
              speed: 850,
              easing: 'ease-in-out',
              rewindSpeed: 650,
              rewindByDrag: true,
              width: '100%',
              fixedWidth: '78%',
              perPage: 2,
              start: 0,
              gap: 25,
              paginationKeyboard: true,
              preloadPages: 4,
              drag: 'free',
              focus: 'center',
              snap: true,
              wheel: false,
              cover: false,
              arrows: true,
              pagination: false,
              mediaQuery: 'min',
            }}
            className='slide'
            hasTrack={false}
            autoFocus={true}
            aria-label='Carousel cars'
          >
            <SplideTrack
            >
              {
                data1.map((i, index) => (
                  <SplideSlide
                    key={index}
                  >
                    <div>
                      <div
                        className="relative w-full h-[600px] overflow-hidden"
                      >
                        <Image
                          className="rounded-[7px] "
                          src={`/Tesla-Clone${i.img}`}
                          alt={i.title}
                          fill
                          objectFit="cover"
                        />
                      </div>
                      <div
                        className="mt-2"
                      >
                        <div
                          className="flex flex-col"
                        >
                          <h1
                            className="font-bold text-[50px]"
                          >
                            {i.title}
                          </h1>
                          <p
                            className="text-[21px] text-neutral-300"
                          >
                            {i.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SplideSlide>
                ))
              }
            </SplideTrack>
            <div className="cancel splide__arrows w-full sm:flex justify-between flex-row absolute z-30 top-5/12 left-0"
            >
              <div
                onClick={(e) => handleClickArrows(e)}
                id="modely1-arrow-left"
                className="cancel opacity-0 transition-opacity duration-800 ease-in-out splide__arrow border splide__arrow--prev">
                <div id='button-prev-modely1'
                  className='cancel flex flex-row w-fit absolute top-0 left-[60px] px-2 py-1 rounded-[3px] cursor-pointer bg-zinc-900/90'
                >
                  <BiChevronLeft
                    className='cancel pointer-events-none'
                    size={25}
                  />
                </div>
              </div>

              <div
                onClick={(e) => handleClickArrows(e)}
                id="modely1-arrow-right"
                className="cancel opacity-100 transition-opacity duration-800 ease-in-out splide__arrow splide__arrow--next">
                <div id='button-next-modely1'
                  className='cancel w-fit flex-row flex absolute top-0 right-[60px] px-2 py-1 rounded-[3px] cursor-pointer bg-zinc-900/90'
                >
                  <BiChevronRight
                    className='cancel pointer-events-none'
                    size={25}
                  />
                </div>
              </div>
            </div>
          </Splide>
        </div>
      )
    }

    return (
      <div
        className="flex flex-col items-center"
      >
        <div
          className="flex flex-col leading-tight w-9/12 translate-x-[-22px]"
        >
          <h1
            className="text-[70px] font-bold"
          >
            Redesigned From End to End
          </h1>
          <p
            className="text-[25px] leading-tight text-neutral-300"
          >
            From the front bumper to the taillight, the exterior is completely redesigned to unlock maximum efficiency so you can get the most range out of every charge. With updated suspension, wheels and tires, your ride will be smoother and quieter.
          </p>
        </div>
        <div
          className="w-full"
        >
          <Carrusel1 />
        </div>
      </div>
    )
  }

  function Part3() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const togglePlay = () => {
      const video = videoRef.current;
      if (!video) return;

      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    };

    const data2 = [
      {
        title: 'Immersive Soundscape',
        description: 'Step inside, close the door and experience the vast silence offered by specially engineered acoustic glass. Queue up your favorite songs and listen as your cabin turns into your own private sound studio.',
      },
      {
        title: 'Comfort From Any Seat',
        description: 'Front and rear touchscreens put all your climate and entertainment settings within reach. Heated and ventilated seats, power recline and soft-touch textiles provide added comfort.',
      },
      {
        title: 'Even More Connected',
        description: 'Calls come in clear. Data downloads fast. Doors and trunks unlock when you approach. Enhanced connectivity and signal range keep you and your vehicle in sync. Bluetooth capability keeps passengers entertained.',
      },
    ]

    const iconsData2 = ['FaVolumeUp', 'FaVolumeUp', 'FaVolumeUp']

    return (
      <div
        className="flex flex-col w-full justify-center items-center"
      >
        <div
          className="w-full my-10"
        >
          <div
            className="w-full px-[40px] relative"
          >
            <video
              ref={videoRef}
              src="/Tesla-Clone/videos/Model-Y-2-Starship-Desktop.webm"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={togglePlay}
              className="mt-4 bg-zinc-600/80 backdrop-blur-xl text-white font-bold p-4 rounded absolute bottom-[30px] left-[70px]"
            >
              {isPlaying ? <IoMdPause /> : <FaPlay />}
            </button>
          </div>
        </div>

        <div
          className='w-9/12'
        >
            <h1
              className='text-[65px] font-bold leading-tight'
            >
            All-New Interior
            </h1>
            <p>
            Refined materials integrate with advanced features to create a reimagined cabin environment that changes your perception of what riding in a car should feel like.
            Immersive Soundscape
            Step inside, close the door and experience the vast silence offered by specially engineered acoustic glass. Queue up your favorite songs and listen as your cabin turns into your own private sound studio.
            </p>
            <div
              className='flex flex-row items-start gap-12'
            >
              {
                data2.map((i, index) => (
                  <div
                    key={index}
                    className='flex flex-col'
                  >
                    {/* <Icon n={index} /> */}
                    <h1
                      className='text-[45px] font-bold'
                    >
                      {i.title}
                    </h1>
                    <p>
                      {i.description}
                    </p>
                  </div>
                ))
              }
            </div>
        </div>

      </div>
    )
  }

  return (
    <div
      className="cancel w-full flex flex-col justify-center items-start mt-[80px] overflow-hidden"
    >
      <Main />

      <div
        className="w-full mt-[600px]"
      >
        <Part1 />
        <Part2 />
        <Part3 />
      </div>

      <Footer />

    </div>
  )
}


export function Footer() {
  const [scope, animate] = useAnimate()
  const placeholdersData = ['"What makes Tesla different that other EVs?"', '"Where can I drive the Model 3?"', '"Compare Model 3 and Model Y"', '"What´s Dog Mode?"', '"What does the Tesla app do?"']
  const [placeholder, setPlaceholder] = useState(0)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholder(prev => (prev + 1) % placeholdersData.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      ref={scope}
      className="w-full flex justify-center items-center fixed z-40 left-0 bottom-0 pt-1.5 pb-3 bg-white text-black dark:bg-black"
    >
      <div
        className='flex flex-row items-center border border-white px-2 py-1 rounded-[6px] bg-neutral-200 dark:text-white dark:bg-neutral-900'
      >
        <FaMessage
          size={30}
          className='pr-3'
        />
        <span
          className='pr-5'
        >
          Ask a question
        </span>

        <div
          className='relative'
        >
          <input
            className='pr-5 placeholder:transition-opacity w-[400px] placeholder:duration-1000 placeholder:ease-in outline-none'
            type="text"
            onChange={(e) => setInputValue(e.currentTarget.value)}
          />
          <div
            className={`absolute top-0 left-0 ${inputValue.length >= 1 ? 'hidden' : null}`}
          >

            <div
              className={`placeholder__item`}
              id={placeholdersData[placeholder]}
            >

              {
                placeholdersData.map((i, n) => (
                  placeholdersData[n] === placeholdersData[placeholder] ?
                    <motion.h1
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1.8, delay: 0.2, }}
                      key={`${n}___${i}__${0}`}
                      className={`text-black/80 dark:text-neutral-100`}
                    >
                      {placeholdersData[placeholder]}
                    </motion.h1>
                    : null
                ))
              }
            </div>
          </div>
        </div>
        <div
          className={`transition-colors duration-800 ease-in-out ${inputValue.length >= 1 ? 'bg-blue-500 cursor-pointer' : 'bg-neutral-500 cursor-not-allowed'}  p-1 rounded-[1px]`}
        >
          <IoIosSend />
        </div>
      </div>
      <div
        className='pl-5 border border-white rounded-[7px] px-4 py-2 ml-5 bg-neutral-200 dark:text-white dark:bg-neutral-900'
      >
        <Link
          href='/x'
          className='flex flex-row items-center text-[15px] gap-3'
        >
          <GiSteeringWheel
            size={23}
          />
          <span>
            Schedule a Drive Today
          </span>
        </Link>
      </div>
    </div>
  )
}