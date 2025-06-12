'use client'

import { useThemeStore } from "@/stores/store-theme";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react"
import { useAnimate } from "motion/react"
import './styles.css'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { SiTesla } from "react-icons/si";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { MdOutlineKeyboardArrowRight, MdDarkMode, MdLightMode } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi"

const sections = [
  { name: 'Vehicles', id: 'cars' }, 
  { name: 'Energy', id: 'energy' }, 
  { name: 'Charging', id: 'charging' }, 
  { name: 'Discover', id: 'discover' }, 
  { name: 'Shop', id: 'shop' }
]

const sectionsModalMenu = [
  { name: 'Vehicles', id: 'cars' }, 
  { name: 'Energy', id: 'energy' }, 
  { name: 'Charging', id: 'charging' }, 
  { name: 'Discover', id: 'discover' }, 
  { name: 'Shop', id: 'shop' },
  { name: 'Support', id: 'support' },
  { name: 'United States', id: 'region' },
  { name: 'Account', id: 'account' },
]

const data_nav = {
  cars_data: [
    { name: 'Model S', img: '/images/models-nav.avif', url: '/' },
    { name: 'Model 3', img: '/images/model3-nav.avif', url: '/' },
    { name: 'Model Y', img: '/images/modely-nav.avif', url: '/' },
    { name: 'Model X', img: '/images/modelx-nav.avif', url: '/' },
    { name: 'Cybertruck', img: '/images/cybertruck-nav.avif', url: '/' },
    { name: 'Inventario', img: '/images/inventory-nav.avif', url: '/' },
  ],

  energy_data: [
    { name: 'Solar Panels', img: '/images/solarPanels-nav.avif', url: '/' },
    { name: 'Solar Roof', img: '/images/solarRoof-nav.avif', url: '/' },
    { name: 'Powerwall', img: '/images/powerwall-nav.avif', url: '/' },
    { name: 'Megapack', img: '/images/megapack-nav.avif', url: '/' },
  ],

  charging_data: [
    { name: 'Charging', img: '/images/charging-nav.avif', url: '/' },
    { name: 'Home Charging', img: '/images/homeCharging-nav.avif', url: '/' },
    { name: 'Supercharging', img: '/images/supercharging-nav.avif', url: '/' },
  ],

  discover_data: [
    { name: 'Resources', list: ['Demo Drive', 'Insurance', 'American Heroes', 'Learn', 'Video Guides', 'Customer Stories', 'Events', 'Workshops'] },
    { name: 'Location Services', list: ['Find Us', 'Find a Collision Center', 'Find a Certified Installer'] },
    { name: 'Company', list: ['About', 'Careers', 'Investor Relations'] },
  ],

  shop_data: [
    { name: 'Charging', img: '/images/charging-shop-nav.avif', url: '/' },
    { name: 'Vehicle Accessories', img: '/images/vehicle-accesories-nav.avif', url: '/' },
    { name: 'Apparel', img: '/images/apparel-nav.avif', url: '/' },
    { name: 'Lifestyle', img: '/images/lifestyle-nav.avif', url: '/' },
  ]
}

const data_nav_ul = {
  cars_data: [
    { ul: ['Help Me Choose', 'Demo Drive', 'Trade -in', 'Compare', 'Workshops', 'Help Me Charge', 'Fleet', 'Semi', 'Roadster', 'Federal Tax Credit', 'We, Robot'] }
  ],

  energy_data: [
     { ul: ['Schedule a Consultation', 'Why Solar', 'Incentives', 'Support', 'Partner with Tesla', 'Commercial', 'Utilities',] }
  ],

  charging_data: [
     { ul: ['Help Me Charge', 'Charging Calculator', 'Charging With NACS', 'Supercharger Voting', 'Host a Supercharger', 'Commercial Charging', 'Host Wall Connectors',] }
  ],

  discover_data: [
     { ul: ['z',] }
  ],

  shop_data: [
     { ul: ['z',] }
  ]
}

export default function Nav() {
  const [scope, animate] = useAnimate()
  const setThemeStore = useThemeStore((state) => state.setThemeStore)
  const THEME_STORE = useThemeStore((state) => state.theme)
  const [tabs, setTabs] = useState({
    cars: false,
    energy: false,
    charging: false,
    discover: false,
    shop: false,
  })

  useEffect(() => {
    if (THEME_STORE) {
      document.documentElement.setAttribute('data-theme', THEME_STORE);
      document.documentElement.className = THEME_STORE;
    }
  }, [THEME_STORE])

  const data_active = `${Object.entries(tabs).find(i => i[1] === true)?.[0]}_data`
  const sections_names = ['cars_data', 'energy_data', 'charging_data', 'discover_data', 'shop_data']

  useEffect(() => {
    const div1_backnavbar = document.getElementById('div1_backnavbar')
    const nav = document.getElementById('nav')
    function fnBacknavbar() {
      const scrollY = window.scrollY
      const heightNav = nav.offsetHeight * 1.5
      if (scrollY > heightNav) {
        if (div1_backnavbar.classList.contains('hidden')) {
          div1_backnavbar.classList.remove('hidden')
        }
      } else if (scrollY <= heightNav) {
        if (!(div1_backnavbar.classList.contains('hidden'))) {
          div1_backnavbar.classList.add('hidden')
        }
      }
    }

    if (div1_backnavbar) {
      window.addEventListener('scroll', () => fnBacknavbar())
    }

    const object_modal_nav = {
      cars: false,
      energy: false,
      charging: false,
      discover: false,
      shop: false,
    }

    function modal_nav(e) {
      console.log('event', e.target.classList.contains('cancel'), e.target)
      if (!(e.target.classList.contains('cancel'))) return
      setTabs(object_modal_nav)
    }

    window.addEventListener('mouseover', (e) => modal_nav(e))

    return () => {
      window.removeEventListener('mouseover', (e) => modal_nav(e))
      window.removeEventListener('scroll', () => fnBacknavbar())

    }
  }, [])

  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      animate(contentRef.current, { opacity: 1 }, { duration: 1.5, ease: "easeIn" }, { y: 3300 })

    }
  }, [data_active])

  const [isOpen, setIsOpen] = useState(false)

  async function expFn(e) {
    const id = e.target.id
    activateOnly(id)

    const x = document.getElementById('target2')
    if (isOpen) {
      await animate(x, { height: 0 }, { duration: 0.5 });
    } else {
      await animate(x, { height: "auto" }, { duration: 0.5 });
    }
    setIsOpen(!isOpen);
  };

  const data1 = data_nav?.[data_active]

  const data = data1
  const data_ul = data_nav_ul?.[data_active]?.[0]?.ul

  function activateOnly(keyToActivate) {
    const newTabs = Object.fromEntries(Object.entries(tabs)
      ?.map(([key, _]) => [key, key === keyToActivate ? true : false]))
    setTabs(newTabs);
  }

  async function mouseEnterFn(e) {
    const id = e.target.id
    activateOnly(id)
    const x = document.getElementById('target2')

    if (isOpen) {
      await animate(x, { height: 0 }, { duration: 0.5 });
    } else {
      await animate(x, { height: "auto" }, { duration: 0.5 });
    }

    setIsOpen(!isOpen);
  }

  const pathname = usePathname().slice(1)

  const classNamesArrDiv2 = {
    "modely": "hidden xl:flex w-full h-20 items-center flex-col justify-center bg-transparent dark:bg-black group hover:dark:bg-neutral-900 z-50 top-0 absolute",
    "default": "hidden xl:flex w-full h-12 items-center flex-col justify-center bg-white dark:bg-black group z-40 fixed top-0 left-0",
  }
  
  const classNameDataDiv2 = classNamesArrDiv2[pathname] || classNamesArrDiv2['default']

  function BackNavBar() {
    return (
      <div
        id="div1_backnavbar"
        className="cancel bg-neutral-700/30 backdrop-blur-3xl backdrop-invert-0 items-center flex fixed z-50 top-0 w-full h-fit hidden"
      >
        <div
          className="w-full px-12 py-2 flex flex-row justify-between items-center" 
        >
          <div>
            <h1>Model Y</h1>
          </div>
          <div
            className="cancel flex flex-row gap-x-5 items-center font-stretch-75% text-[13.6px]"
          >
            <Link
              href='/x'
            >
              Demo Drive
            </Link>
            <Link
              href='/xc'
              className="cancel px-8 py-1 bg-zinc-900 rounded-[3px] hover:bg-neutral-600 transition-colors duration-400"
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <ModalMenu />
      <div
        className="nocancel flex justify-center items-start w-full flex-col"
      >

        {
          pathname === 'modely' ?
            <BackNavBar />
            : null
        }

        <div
          id="nav"
          className={classNameDataDiv2}

        >
          <div
            id="target2"
            className="nocancel absolute top-[48px] w-[100vw] left-0 justify-center flex z-40"
          >
            <motion.div
            >
              <motion.div
                layout
                key={`${0}___${0}__${0}`}
                className="nocancel flex flex-row flex-wrap gap-3 items-center justify-center bg-white dark:bg-black dark:group-hover:bg-neutral-900 w-[100vw] shrink-0 border-b-2 border-white dark:border-b-2 dark:border-black"
              >
                {sections.map((i, n) => (
                  data_active === sections_names[n] ?
                    i.id !== 'discover' ? i.id === 'shop' ?
                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                        exit={{ y: 0, opacity: 0 }}
                        key={`${i.name}___${n}__${data_active}`}
                        className="nocancel flex flex-row items-start py-20 justify-center min-w-min"
                      >
                        <div
                          className="nocancel flex flex-row max-w-[80vw] justify-center"
                        >
                          <div
                            className={`justify-end w-fit gap-x-4 flex-row ${i.id !== 'shop' ? 'border-r border-white pr-12' : null}`}
                          >
                            <div
                              className={`${i.id !== 'shop' ? `grid md:grid-cols-3 ${i.id === 'cars' ? 'xl:grid-cols-4' : 'xl:grid-cols-3'}` : null}
                           gap-6 flex-wrap flex flex-row w-full`}
                            >
                              {
                                data?.map((i, n) => (
                                  i.name && i.img ?
                                    <div
                                      key={n}
                                      className={`flex flex-row px-4`}
                                    >
                                      <div
                                        className="w-full"
                                      >
                                        <div
                                          className="nocancel relative w-[200px] h-[100px]"
                                        >
                                          <Image
                                            src={`/Tesla-Clone${i.img}`}
                                            fill
                                            alt={i.name}
                                            objectFit="cover"
                                          />
                                        </div>
                                        <Link
                                          href={i.url}
                                        >
                                          <h1
                                            className="nocancel font-bold py-2"
                                          >
                                            {i.name}
                                          </h1>
                                        </Link>
                                      </div>

                                    </div>
                                    : null
                                ))
                              }
                            </div>
                          </div>

                          <div
                            className={`w-3/12 pl-12 ${i.id === 'shop' ? 'hidden' : null}`}
                          >
                            <ul
                              className="nocancel flex flex-col gap-3"
                            >
                              {data_ul?.map((i, n) => (
                                <li
                                  key={n}
                                  className="cancel text-[13px]"
                                >
                                  {i}
                                </li>
                              ))}

                            </ul>
                          </div>
                        </div>
                      </motion.div>
                      : <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                        exit={{ y: 0, opacity: 0 }}
                        key={`${i.name}___${n}__${data_active}`}
                        className="nocancel flex flex-row items-start py-20 justify-center min-w-min"
                      >
                        <div
                          className="nocancel flex flex-row max-w-[80vw] justify-center"
                        >
                          <div
                            className={`justify-end w-fit gap-x-4 flex-row ${i.id !== 'shop' ? 'border-r border-white pr-12' : null}`}
                          >
                            <div
                              className={`${i.id !== 'shop' ? `grid md:grid-cols-3 ${i.id === 'cars' ? 'xl:grid-cols-4' : 'xl:grid-cols-3'}` : null}
                         gap-6 flex-wrap flex flex-row w-full`}
                            >
                              {
                                data?.map((i, n) => (
                                  i.name && i.img ?
                                    <div
                                      key={n}
                                      className={`flex flex-row px-4`}
                                    >
                                      <div
                                        className="w-full flex flex-col items-center"
                                      >
                                        <div
                                          className="nocancel relative w-[200px] h-[100px]"
                                        >
                                          <Image
                                            src={`/Tesla-Clone${i.img}`}
                                            fill
                                            alt={i.name}
                                            objectFit="cover"
                                          />
                                        </div>
                                        <Link
                                          href={i.url}
                                        >
                                          <h1
                                            className="nocancel font-bold py-2"
                                          >
                                            {i.name}
                                          </h1>
                                        </Link>

                                        <div
                                          className='text-gray-700 dark:text-neutral-100 flex flex-row items-center w-fit gap-x-5 text-[11.5px]'
                                        >
                                          <span
                                            className="nocancel underline"
                                          >Learn</span>
                                          <span
                                            className="nocancel underline"
                                          >order</span>
                                        </div>

                                      </div>

                                    </div>
                                    : null
                                ))
                              }
                            </div>
                          </div>

                          <div
                            className={`w-3/12 pl-12 ${i.id === 'shop' ? 'hidden' : null}`}
                          >
                            <ul
                              className="nocancel flex flex-col gap-3"
                            >
                              {data_ul?.map((i, n) => (
                                <li
                                  key={n}
                                  className="nocancel text-[13px]"
                                >
                                  {i}
                                </li>
                              ))}

                            </ul>
                          </div>
                        </div>
                      </motion.div>
                      : <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                        exit={{ y: 0, opacity: 0 }}
                        key={`${i.name}___${n}__${data_active}`}
                        className="nocancel flex flex-row items-start py-20 justify-center min-w-min"
                      >
                        <div
                          className="flex flex-row max-w-[80vw] justify-center"
                        >
                          <div
                            className="nocancel justify-end w-fit flex-row"
                          >
                            <div
                              className={`flex flex-row items-start gap-[80px]`}
                            >
                              {
                                data?.map((i, n) => (
                                  <div
                                    key={n}
                                    className={`flex flex-col`}
                                  >
                                    <h1
                                      className="nocancel text-neutral-300 pb-5"
                                    >
                                      {i.name}
                                    </h1>
                                    <ul
                                      className="nocancel flex flex-col gap-3"
                                    >
                                      {
                                        i.list.map((i, index) => (
                                          <li
                                            key={index}
                                          >
                                            {i}
                                          </li>
                                        ))
                                      }
                                    </ul>
                                  </div>
                                ))
                              }
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    : null
                ))}

              </motion.div>
            </motion.div>
          </div>

          <div
            className="nocancel flex flex-row items-center w-11/12 justify-between"
          >
            <div
              className="nocancel tab"
            >
              <SiTesla
                size={28}
              />
            </div>
            <div
              className="nocancel flex flex-col"
            >

              <ul
                className="nocancel flex flex-row items-center gap-x-7"
              >
                {
                  sections.map((i, n) => (
                    <li
                      id={`${i.id}`}
                      onMouseEnter={(e) => mouseEnterFn(e)}
                      key={`${i.name}_${n}`}
                      className="nocancel cursor-pointer hover:font-bold transition-colors duration-500 ease-in text-[16px]"
                    >
                      {i.name}
                    </li>
                  ))
                }
              </ul>

            </div>

            <div
              className="nocancel flex flex-row items-center gap-x-2"
            >
              <span
                className="nocancel cursor-pointer"
                onClick={() => setThemeStore()}
              >
                {THEME_STORE === 'dark'
                  ? <MdDarkMode size={23}
                  />
                  : THEME_STORE === 'dark'
                    ? <MdLightMode size={23}
                    />
                    : <MdLightMode size={23}
                    />
                }
              </span>
              <FaRegCircleQuestion
                size={22}
              />
              <BiWorld
                size={22}
              />
              <FaUserCircle
                size={22}
              />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

function ModalMenu() {
  const container = useRef(null)
  const menu = useRef(null)
  const close = useRef(null)
  const tesla = useRef(null)

  function handleClickModal() {
    const current = container.current
    if (current.classList.contains('opacity-0')) {
      current.classList.remove('opacity-0', 'pointer-events-none')
      current.classList.add('opacity-100')
      menu.current.classList.remove('opacity-100')
      menu.current.classList.add('opacity-0', 'pointer-events-none')
      close.current.classList.remove('opacity-0', 'pointer-events-none')
      close.current.classList.add('opacity-100')
      tesla.current.classList.remove('opacity-100')
      tesla.current.classList.add('opacity-0')

    } 
    else if (current.classList.contains('opacity-100')) {
      current.classList.remove('opacity-100')
      current.classList.add('opacity-0', 'pointer-events-none')
      close.current.classList.remove('opacity-100')
      close.current.classList.add('opacity-0', 'pointer-events-none')
      menu.current.classList.remove('opacity-0', 'pointer-events-none')
      menu.current.classList.add('opacity-100')
      tesla.current.classList.remove('opacity-0')
      tesla.current.classList.add('opacity-100')
  } 
}

  function Modal() {
  return (
    <div
      ref={container}
      className={`opacity-0 pointer-events-none transition-opacity duration-300 ease-in-out fixed z-40 dark:bg-black bg-white top-[48px] h-[85vh] w-full`}
    >
      <div
        className=""
      >
        <ul
          className="cancel text-[18px] px-4 py-7"
        >
          {
            sectionsModalMenu.map((i, n) => (
              <div
                key={n}
                className="w-full flex flex-row items-center justify-between px-3 py-6"
              >
                <li
                >
                  {i.name}
                </li>
                {
                  i.id === 'shop' || i.id === 'account' || i.id === 'support' 
                  ?
                    null
                  : 
                    <MdOutlineKeyboardArrowRight />
                }
              </div>
          ))
          }
        </ul>
      </div>
    </div>
  )
  }

  return (
    <div
      className="cancel flex flex-col"
    >
      <div
        className='w-full h-12 px-10 items-center flex flex-row justify-between bg-white dark:bg-black group hover:dark:bg-neutral-900 z-40 fixed top-0 left-0 xl:hidden'
      >
        <div
          ref={tesla}
          className="cancel opacity-100 transition-opacity duration-300 ease-in-out"
        >
          <SiTesla size={28} />
        </div>
        <div
          onClick={() => handleClickModal()}
          className="cancel opacity-0 pointer-events-none absolute right-0 pr-10"
          ref={close}
        >
          <IoMdClose
            size={28}
          />
        </div>
        <div
          onClick={() => handleClickModal()}
          className="cancel opacity-100"
          ref={menu}
        >
          <CiMenuBurger
            size={28}
          />
        </div>
      
      </div>
      <Modal />
    </div>
  )
}