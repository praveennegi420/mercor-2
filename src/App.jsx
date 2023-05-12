import { motion, useScroll } from 'framer-motion';
import { useState, useRef, useEffect } from 'react'; 

function App() {

    const [item, setItem] = useState(1);
    const [activeIndex, setActiveIndex] = useState(0)
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({ target: targetRef })

    useEffect(() => {
        const slider = document.querySelector('.slide-slider')
        function handleScroll() {
            const inPercent = scrollYProgress.current * 100;
            if (inPercent <= 33) setItem(1);
            else if (inPercent <= 66) setItem(2);
            else setItem(3);
            slider.style.height = `${inPercent}%`;
        }

        window.addEventListener('scroll', handleScroll);
        return () => { window.removeEventListener('scroll', handleScroll); };
    }, []);

    useEffect(() => {
        setTimeout(() => { setActiveIndex((activeIndex + 1) % 3) }, 2000)
    }, [activeIndex])

    console.log(activeIndex);
    return (
        <>
            <section ref={targetRef} className="section font-custom ">
                <div className="container">
                    <div className="stacked_wrapper__PZJ2V">
                        <div className="stacked_head__r8uz7">
                            <div><div><div className="flex items-center gap-[5px] mb-4">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-[3px]">
                                    <path d="M8.75348 17.6952C7.72056 14.0706 3.94416 10.3084 0.305928 9.27938C-0.101976 9.14829 -0.101976 8.8599 0.305928 8.72226C3.95074 7.68666 7.72056 3.931 8.76005 0.299863C8.8719 -0.0999545 9.14164 -0.0999545 9.25349 0.299863C10.2864 3.931 14.0628 7.68666 17.6945 8.72226C18.1024 8.85335 18.1024 9.14829 17.6945 9.27938C14.0562 10.3084 10.2798 14.0706 9.24691 17.6952C9.13506 18.1016 8.86532 18.1016 8.75348 17.6952Z" fill="#A594FD"></path></svg>
                                <h4 className="font-normal">Workflow</h4></div><h2>Create at the speed of thought.</h2><p>Focus on your getting your thoughts out and crafting the best message while Chronicle does the heavy lifting for you</p></div></div></div>
                        <div className="stacked_stack__aeW9h"><div className="sticky top-0 left-0 flex items-center h-screen">

                            <motion.div
                                animate={{ opacity: item === 1 ? 1 : 0, y: 0 }}
                                initial={{ y: item == 1 ? 400 : 0, opacity: 0 }}
                                transition={{ easeIn: 'linear', duration: 0.3 }}
                                className="item absolute h-full top-0 left-0 w-full flex items-center pr-16">
                                <div className="box">
                                    <div className="p-2 pb-0">
                                        <div><div>
                                            <div className='p-20 py-[8rem]'>
                                                <div className='absolute top-[16rem] left-[6rem]'>
                                                    <motion.span
                                                        style={{ display: activeIndex === 0 ? 'block' : 'none' }}
                                                    >
                                                        <motion.span
                                                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                                            transition={{ duration: 2, ease: 'linear', repeat: Infinity }}
                                                            className='bg-lameWhite font-bold p-2 pt-8 text-black text-[1rem] pr-16 ml-[1rem] rounded-[8px]'>Shift
                                                        </motion.span>
                                                        <motion.span
                                                            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                                                            transition={{ duration: 2, ease: 'linear', repeat: Infinity }}
                                                            className='bg-lameBlack font-thin p-1.5 text-lameWhite text-[0.7rem] px-4 w-[200px] top-[-5rem] absolute left-[2rem] ml-[1rem] rounded-full'>Tidy up and organise all blocks.
                                                        </motion.span>
                                                        <motion.span
                                                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                                            transition={{ duration: 2, ease: 'linear', repeat: Infinity }}
                                                            className='bg-lameWhite px-5 p-3 font-bold top-[-1.77rem] text-[1.4rem] left-[8.5rem] absolute text-black rounded-[8px]'>#</motion.span>
                                                        <motion.span
                                                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                                            transition={{ duration: 2, ease: 'linear', repeat: Infinity }}
                                                            className='bg-lameWhite font-bold px-5 top-[-1.77rem] text-[1.4rem] left-[12.5rem] p-3 absolute text-black rounded-[8px]'>T</motion.span>
                                                    </motion.span>
                                                    <motion.span style={{ display: activeIndex === 1 ? 'block' : 'none' }}>
                                                        <motion.span
                                                            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 10 }}
                                                            transition={{ duration: 2, ease: 'linear', repeat: Infinity }}
                                                            className='bg-lameBlack font-thin p-1.5 text-lameWhite text-[0.7rem] px-4 w-[130px] top-[-5rem] absolute left-[3rem] ml-[1rem] rounded-full'>Select your blocks
                                                        </motion.span>
                                                        <motion.span
                                                            initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
                                                            transition={{ duration: 2, delay: 2, ease: 'easeInOut', repeat: Infinity }}
                                                            className='bg-lameWhite px-5 p-3 font-bold top-[-1.77rem] text-[1.4rem] left-[0.7rem] absolute text-black rounded-[8px]'>#</motion.span>
                                                        <motion.span
                                                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
                                                            transition={{ duration: 2, delay: 2, ease: 'easeInOut', repeat: Infinity }}
                                                            className='bg-lameWhite font-bold px-5 top-[-1.77rem] text-[1.4rem] left-[4.5rem] p-3 absolute text-black rounded-[8px]'>1</motion.span>
                                                        <motion.span
                                                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                                            transition={{ duration: 2, delay: 2, ease: 'easeInOut', repeat: Infinity }}
                                                            className='bg-lameWhite font-bold px-5 top-[-1.77rem] text-[1.4rem] left-[8.5rem] p-3 absolute text-black rounded-[8px]'>2</motion.span>
                                                        <motion.span
                                                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                                            transition={{ duration: 2, delay: 2, ease: 'easeInOut', repeat: Infinity }}
                                                            className='bg-lameWhite font-bold px-5 top-[-1.77rem] text-[1.4rem] left-[12.5rem] p-3 absolute text-black rounded-[8px]'>3</motion.span>
                                                    </motion.span>
                                                    <motion.span style={{ display: activeIndex === 2 ? 'block' : 'none' }}>
                                                    <motion.span
                                                            initial={{ opacity: 0}} animate={{ opacity:1}}
                                                            transition={{ duration: 2, ease: 'linear', repeat: Infinity }}
                                                            className='bg-lameBlack font-thin p-1.5 text-lameWhite text-[0.7rem] px-4 w-[130px] top-[-5rem] absolute left-[3rem] ml-[1rem] rounded-full'>Create new block
                                                        </motion.span>
                                                        <motion.span
                                                            initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }}
                                                            transition={{ duration: 2, delay: 4, ease: 'easeInOut', repeat: Infinity }}
                                                            className='bg-lameWhite font-bold p-2 px-6  top-[-1.77rem] text-[1.4rem] left-[7rem] absolute text-black rounded-[8px]'>/</motion.span>
                                                    </motion.span>
                                                </div>

                                            </div></div></div>
                                    </div>
                                    <div className="box__head px-10 pb-16 text-center">
                                        <h3 className="mb-4 text-[2.3rem]">A keyboard<br />first experience.</h3>
                                        <p className="text-mid px-[10px]">Powerful shortcuts and a keyboard-first workflow means you will get to your finish line in no time!</p>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                animate={{ opacity: item === 2 ? 1 : 0, y: 0 }}
                                initial={{ y: item == 2 ? 400 : 0, opacity: 0 }}
                                transition={{ easeIn: 'linear', duration: 0.3 }}
                                className="item absolute h-full top-0 left-0 w-full flex items-center pr-16 ">
                                <div className="box"><div className="p-0">
                                    <div><div>
                                        <motion.div
                                            transition={{ repeat: Infinity, duration: 2 }}
                                        >
                                            <motion.img className="rounded p-[4em] pb-16" src="/exp1.webp"
                                                style={{ display: activeIndex === 0 ? 'block' : 'none' }}
                                                animate={{ scale: 1 }} initial={{ scale: 0.9 }} exit={{ opacity: 0 }}
                                                transition={{ ease: 'linear', repeat: Infinity, duration: 2 }}
                                            />

                                            <motion.img className="rounded p-[4em] pb-16 " src="/expenses.webp"
                                                style={{ display: activeIndex === 1 ? 'block' : 'none' }}
                                                animate={{ scale: 1 }} initial={{ scale: 0.9 }} exit={{ opacity: 0 }}
                                                transition={{ ease: 'linear', repeat: Infinity, duration: 2 }}
                                            />
                                            <motion.div className="flex h-[16rem] mt-[4em] gap-3 justify-center"
                                                style={{ display: activeIndex === 2 ? 'flex' : 'none' }}
                                                animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -80 }} exit={{ opacity: 0 }}
                                                transition={{ ease: 'linear', repeat: Infinity, duration: 2 }}
                                            >
                                                <img className="rounded pb-16" src="/beverages.webp" />
                                                <img className="rounded pb-16" src="/online.webp" />
                                                <img className="rounded  pb-16" src="/staff.webp" />
                                            </motion.div>
                                        </motion.div>
                                    </div></div>
                                </div>
                                    <motion.div className='absolute left-[14rem] bottom-[20.6rem]'
                                        transition={{ repeat: Infinity, duration: 2, delay: 2, easeIn: 'easeInOut' }}
                                        animate={{ scale: 0.95 }}
                                        initial={{ scale: 1 }}
                                    >
                                        <motion.img
                                            animate={{ rotate: -180 }}
                                            transition={{ repeat: Infinity, duration: 2, delay: 2 }}
                                            className="rounded h-[3rem]" src="/rotate.webp" />
                                        <motion.img
                                            className="rounded h-[2.2rem] relative left-[1.2rem] bottom-[1.3rem]" src="/jessica.webp" />
                                    </motion.div>

                                    <div className="box__head px-10 pb-16 text-center">
                                        <h3 className="mb-4">Bullets to visuals<br />in a click.</h3>
                                        <p className="text-mid">Transform any block to any other and try different  options without any design hassle</p>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                animate={{ opacity: item === 3 ? 1 : 0 }}
                                initial={{ y: item == 3 ? 400 : 0, opacity: 0 }}
                                transition={{ easeIn: 'linear', duration: 0.3 }}
                                className="item absolute h-full top-0 left-0 bg-blue w-full flex items-center pr-16">
                                <div className="box"><div className="">
                                    <div><div><div>
                                        <motion.span
                                            animate={{ opacity: 1 }} initial={{ opacity: 0 }}
                                            transition={{ duration: 1, ease: 'easeInOut', repeat: Infinity }}
                                            className='text-blueBlue absolute top-[8rem] left-[4rem] text-[1.3rem]'>|</motion.span>
                                        <img className="rounded p-10 pt-1 pb-20" src="/project.webp" alt="img here" />
                                    </div></div></div></div>
                                    <motion.span
                                        animate={{ y: -200, opacity: 1 }} initial={{ y: 0, opacity: 0 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 3, delay: 2, ease: 'linear', repeat: Infinity }}
                                        className='text-blueBlue absolute top-[20rem] left-[2.7rem] text-[0.8rem]'>|</motion.span>

                                    <div className="box__head px-10 pb-16 text-center">
                                        <h3 className="mb-4 text-[2.3rem]">A powerful assistant<br />just a click away</h3>
                                        <p className="text-mid">Insert blocks, perform powerful actions and leverage the limitless power of AI - all without leaving your keyboard</p>
                                    </div>

                                </div>
                            </motion.div>

                            <div className="absolute top-[50%] right-0 -translate-y-[50%] flex flex-col items-center gap-2">
                                <span className="text-[12px] opacity-40">0{`${item}`}</span>
                                <div className="w-[4px] h-[400px] bg-[#232323] relative rounded-full overflow-hidden">
                                    <span className="slide-slider absolute top-0 left-0 w-full bg-[#A594FD] rounded-full"></span>

                                </div>
                                <span className="text-[12px] opacity-40">03</span>
                            </div>
                        </div>
                        </div>

                        <div className="stacked_slider__N_kDc">
                            <div className="swiper"><div className="swiper-wrapper">
                                {/* <div className="swiper-slide">
                                    <div className="box">
                                        <div className="p-2 pb-0">
                                            <div><div><div></div></div></div>
                                        </div>
                                        <div className="box__head px-4 pb-8 text-center">
                                            <h3 className="mb-4">A keyboard<br />first experience.</h3>
                                            <p>Powerful shortcuts and a keyboard-first workflow means you will get to your finish line in no time!</p>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="swiper-slide">
                                    <div className="box">
                                        <div className="p-0">
                                            <div><div><div>
                                                <img className="rounded p-[4em] pb-16" src="/exp1.webp" />
                                                <img className="rounded p-[4em] pb-16 hidden" src="/expenses.webp" />
                                                <div className="flex h-[16rem] mt-[4em] gap-3 justify-center hidden">
                                                    <img className="rounded pb-16" src="/beverages.webp" />
                                                    <img className="rounded pb-16" src="/online.webp" />
                                                    <img className="rounded  pb-16" src="/staff.webp" />
                                                </div>
                                            </div></div></div></div>
                                        <div className="box__head px-4 pb-8 text-center">
                                            <h3 className="mb-4">Bullets to visuals<br />in a click.</h3>
                                            <p>Transform any block to any other and try different  options without any design hassle</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide"><div className="box">
                                    <div className=""><div><div><div>
                                        <img className="rounded p-8 pt-0 pb-16" src="/public/project.webp" />
                                    </div></div></div></div>
                                    <div className="box__head px-4 pb-8 text-center">
                                        <h3 className="mb-4">A powerful assistant<br />just a click away</h3>
                                        <p>Insert blocks, perform powerful actions and leverage the limitless power of AI - all without leaving your keyboard</p>
                                    </div>
                                </div>
                                </div> */}
                            </div>
                                <div className="swiper-navigation">
                                    <button className="swiper-button-prev">
                                        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.7839 13.0898C11.7263 10.8726 13.0745 9.27999 14.4164 8.15476L0.000399147 8.15476L0.000399349 5.84475L14.4164 5.84475C13.0745 4.71952 11.7263 3.12687 10.7839 0.909713L12.8896 -0.000244683C14.5478 3.90108 17.7442 5.39197 19.0913 5.84475L19.0913 8.15476C17.7442 8.60754 14.5478 10.0984 12.8896 13.9998L10.7839 13.0898Z" fill="black"></path>
                                        </svg>
                                    </button>
                                    <button className="swiper-button-next">
                                        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.7839 13.0898C11.7263 10.8726 13.0745 9.27999 14.4164 8.15476L0.000399147 8.15476L0.000399349 5.84475L14.4164 5.84475C13.0745 4.71952 11.7263 3.12687 10.7839 0.909713L12.8896 -0.000244683C14.5478 3.90108 17.7442 5.39197 19.0913 5.84475L19.0913 8.15476C17.7442 8.60754 14.5478 10.0984 12.8896 13.9998L10.7839 13.0898Z" fill="black">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default App
