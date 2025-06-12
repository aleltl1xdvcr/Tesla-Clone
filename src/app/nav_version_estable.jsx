'use client'

const a = [{ name: 'Vehículos', id: 'cars' }, { name: 'Energía', id: 'energy' }, { name: 'Carga', id: 'charging' }, { name: 'Descubrir', id: 'discover' }, { name: 'Tienda', id: 'shop' }]
import { FaUserCircle } from "react-icons/fa";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";
import { useThemeStore } from "@/stores/store-theme";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react"
import { useAnimate } from "motion/react"
import './styles.css'

const data_nav = {
  cars_data: [

    { name: 'Model S', img: '/images/car1.jpg' },
    { name: 'Model 3', img: '/images/car2.jpg' },
    { name: 'Model: 4', img: '/images/car3.jpg' },
    { name: 'Model Y', img: '/images/car4.jpg' },
    { name: 'Model X', img: '/images/car5.webp' },
    { name: 'Cybertruck', img: '/images/car6.webp' },
    { name: 'Inventario', img: '/images/inventory.jpeg' },
    //{ ul: ['Help Me Choose', 'Demo Drive', 'Trade -in', 'Compare', 'Workshops', 'Help Me Charge', 'Fleet', 'Semi', 'Roadster', 'Federal Tax Credit', 'We, Robot'] }
  ],

  energy_data: [
    { name: 'Solar Panels', img: '/images/energy1.jpg' },
    { name: 'Solar Roof', img: '/images/energy2.avif' },
    { name: 'Powerwall', img: '/images/energy3.jpeg' },
    { name: 'Megapack', img: '/images/energy4.webp' },
    //  { ul: ['Schedule a Consultation', 'Why Solar', 'Incentives', 'Support', 'Partner with Tesla', 'Commercial', 'Utilities',] }

  ],

  charging_data: [
    { name: 'Charging', img: '/images/charging1.webp' },
    { name: 'Home Charging', img: '/images/charging2.webp' },
    { name: 'Supercharging', img: '/images/charging3.webp' },
    //  { ul: ['Help Me Charge', 'Charging Calculator', 'Charging With NACS', 'Supercharger Voting', 'Host a Supercharger', 'Commercial Charging', 'Host Wall Connectors',] }

  ],

  discover_data: [

    { name: 'Model S', img: '/images/car1.jpg' },
    { name: 'Model 3', img: '/images/car1.jpg' },
    { name: 'Model: 4', img: '/images/car1.jpg' },
    //  { ul: ['z',] }


  ],

  shop_data: [
    { name: 'Charging', img: '/images/charging1.webp' },
    { name: 'Vehicle Accessories', img: '/images/shop1.jpeg' },
    { name: 'Apparel', img: '/images/shop2.jpg' },
    { name: 'Lifestyle', img: '/images/shop3.webp' },
    //  { ul: ['z',] }

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

  const M = useRef(null)

  useEffect(() => {
    if (THEME_STORE) {
      document.documentElement.setAttribute('data-theme', THEME_STORE);
      document.documentElement.className = THEME_STORE;
    }

  }, [THEME_STORE])


  const data_active = `${Object.entries(tabs).find(i => i[1] === true)?.[0]}_data`
  const sections_names = ['cars_data', 'energy_data', 'charging_data', 'discover_data', 'shop_data']

  useEffect(() => {
    const object_modal_nav = {
      cars: false,
      energy: false,
      charging: false,
      discover: false,
      shop: false,
    }


    function modal_nav(e) {
      if (!(e.target.classList.contains('cancel'))) return
      setTabs(object_modal_nav)
    }

    window.addEventListener('mouseover', (e) => modal_nav(e))

    // Array.from(document.getElementsByClassName('tab')).forEach((i, n) => {
    //   i.addEventListener('mouseenter', () => x())
    // })

    return () => {
      window.removeEventListener('mouseover', (e) => modal_nav(e))
      // Array.from(document.getElementsByClassName('tab')).forEach((i, n) => {
      //   i.removeEventListener('mouseenter', () => x())
      // })
    }
  }, [])

  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      animate(contentRef.current, { opacity: 1 }, { duration: 1.5, ease: "easeIn" }, { y: 3300 })

    }
  }, [data_active])

  const spring = {
    type: 'spring',
    damping: 10,
    stiffness: 100
  }

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

  const target_data = 8
  const data1 = data_nav?.[data_active]

  const length_data = data1?.length
  const extrasNeeded = target_data - length_data;
  const items = data1 && Array.isArray(data1) ? data1 : []

  const data = data1
  const data_ul = data_nav_ul?.[data_active]?.[0]?.ul

  console.log('DATA_ul:', data_ul?.map(i => i))

  function Modal() {
    const data = data_nav[data_active]
    return (
      <div
        className="bg-white"

        id="target_animate_nav"
      >
        <div>
          {data_active.slice(0, 9) !== 'undefinedd' ?

            <motion.div
              // style={{
              //   height: size + 'px',
              //   width: size + 'px'
              // }}
              layout
              transition={spring}
              //animate={}
              key={19302}
              className="w-full absolute z-40 top-[0px] left-0 flex justify-center items-end bg-blue-600 py-10"
            >
              <div
                ref={contentRef}
                className="flex flex-row justify-center items-start gap-5 w-full pt-[0px] container"
              >
                <div
                  className="w-10/12 flex-row flex gap-x-5 h-auto"
                >
                  <div
                    className="flex-wrap flex w-8/12"
                  >

                    <AnimatePresence
                      mode="wait"
                      initial={true}
                    >
                      <motion.div

                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        exit={{ opacity: 0 }}
                        key={`${0}___${0}__${0}`}
                        className="flex flex-row flex-wrap gap-3 items-center justify-center"
                      >
                        {
                          a.map((i, n) => (
                            data_active === sections_names[n] ?
                              data?.map((i, n) => (
                                <motion.div
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ duration: 0.2, delay: 0.1 }}
                                  exit={{ y: 0, opacity: 0 }}
                                  key={`${i.name}___${n}__${data_active}`}
                                  className="flex flex-col gap-3 items-center justify-center"
                                >
                                  <div
                                    className="relative w-[200px] h-[200px]"
                                  >
                                    <Image
                                      src={i.img}
                                      fill
                                      alt={i.name}
                                      objectFit="cover"
                                    />
                                  </div>
                                  <h1>{i.name}</h1>
                                </motion.div>
                              ))
                              : null
                          ))
                        }
                      </motion.div>

                    </AnimatePresence>

                  </div>
                  <div
                    className="w-3/12"
                  >
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iusto provident architecto, vel tempore esse, aperiam nulla maxime ad rerum incidunt, repellendus velit cumque modi quasi obcaecati vitae laboriosam et!
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            : null

          }

        </div>
      </div>
    )
  }

  function activateOnly(keyToActivate) {
    const newTabs = Object.fromEntries(Object.entries(tabs)
      ?.map(([key, value]) => [key, key === keyToActivate ? true : false]))
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

  return (
    <div
      className="w-full h-20 items-center flex flex-col justify-center ¿bg-black z-40            relative"
    >

      <div
        id="target2"
        className="absolute top-[50px] w-[100vw] left-0 justify-center flex"
      >
        <motion.div
        >
          <motion.div
            layout
            key={`${0}___${0}__${0}`}
            className="flex flex-row flex-wrap gap-3 items-center justify-center bg-white dark:bg-black w-[100vw] shrink-0"
          >
            {a.map((i, n) => (
              data_active === sections_names[n] ?
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  exit={{ y: 0, opacity: 0 }}
                  key={`${i.name}___${n}__${data_active}`}
                  className="flex flex-row items-start bg-blue-900 py-20 justify-center min-w-min"
                >
                  <div
                    className=" flex flex-row max-w-[80vw] justify-center bg-green-700"
                  >
                    <div
                      className="justify-end w-fit gap-x-4 flex-row border-r bg-yellow-400¿ border-white pr-12"
                    >
                      <div
                        className={`grid md:grid-cols-3 ${i.id === 'cars' ? 'xl:grid-cols-4' : 'xl:grid-cols-3'
                          } gap-6 flex-wrap flex flex-row bg-red-500 w-full`}
                      >
                        {
                          data?.map((i, n) => (
                            i.name && i.img ?
                              <div
                                key={n}
                                className={`flex flex-row p-0 bg-orange-600¿`}
                              >
                                <div
                                  className="w-full"
                                >
                                  <div
                                    className="relative w-[150px] h-[130px]"
                                  >
                                    <Image
                                      src={i.img}
                                      fill
                                      alt={i.name}
                                      objectFit="cover"
                                    />
                                  </div>
                                  <h1
                                    className="font-bold py-2"
                                  >{i.name}</h1>
                                  <div
                                    className="text-gray-700 flex flex-row items-center gap-x-5 text-[11.5px]"
                                  >
                                    <span
                                      className="underline"
                                    >Learn</span>
                                    <span
                                      className="underline"
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
                      className="w-3/12 pl-12"
                    >
                      <ul
                        className="flex flex-col gap-3"
                      >
                        {data_ul?.map((i, n) => (
                          <li
                            key={n}
                            className="text-[13px]"
                          >
                            {i}
                          </li>
                        ))}

                      </ul>
                    </div>
                  </div>
                </motion.div>
                : null
            ))}

          </motion.div>
        </motion.div>
      </div>


      <div
        className="flex flex-row items-center w-10/12 justify-between"
      >
        <div
          className="tab"
        >
          <h1>Tesla</h1>
        </div>
        <div
          className="flex flex-col"
        >

          <ul
            className="flex flex-row items-center gap-x-3"
          >
            {
              a.map((i, n) => (
                <li
                  id={`${i.id}`}
                  onMouseEnter={(e) => mouseEnterFn(e)}
                  key={`${i.name}_${n}`}
                  className="cursor-pointer hover:font-bold transition-colors duration-500 ease-in tab"
                >
                  {i.name}
                </li>
              ))
            }
          </ul>

        </div>

        <div
          className="flex flex-row items-center gap-x-2"
        >
          <span
            className="cursor-pointer"
            onClick={() => setThemeStore()}
          >
            {THEME_STORE === 'dark'
              ? <MdDarkMode size={25}
              />
              : THEME_STORE === 'dark'
                ? <MdLightMode size={25}
                />
                : <MdLightMode size={25}
                />
            }
          </span>
          <FaRegCircleQuestion
            size={25}
          />
          <BiWorld
            size={25}
          />
          <FaUserCircle
            size={25}
          />
        </div>
      </div>
      <div
        className="relative w-full hidden"
      >
        <Modal />
      </div>
    </div>
  )
}











