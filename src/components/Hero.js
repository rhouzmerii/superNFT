import React from "react"
import flip from "../assets/flip.png"
import { BsArrowRight } from "react-icons/bs"
import Star2 from "../assets/Star 2.png"
import Star4 from "../assets/Star 4.png"
import Star5 from "../assets/Star 5.png"
import Star7 from "../assets/Star 7.png"
import Star8 from "../assets/Star 8.png"
import Star9 from "../assets/Star 9.png"
import Star11 from "../assets/Star 11.png"
import ro from "../assets/ro.png"
function Hero() {
  return (
    <div>
    <div className='flex  flex-col sm:flex-row sm:items-center sm:justify-between w-[100%] px-4 sm:px-20  relative'>
      <div className='flex '>
        <div className='flex flex-col'>
          <h1 className='text-[50px] sm:text-[80px] leading-[60px] text-white font-semibold font-clash mt-14'>
            Super NFT <br />
            <span className='font-normal'>Marketplace</span>
          </h1>
          <div className='my-4'>
            <img src={flip} alt='' />
            
          </div>
          <p className='text-[16px] font-inter text-white w-[100%] sm:w-[370px] mb-7'>
            The largest and unique Super rare NFT marketplace For
            crypto-collectibles
          </p>
          <div className='flex mb-2'>
            <button className='px-[15px] py-[8px] rounded-[30px] flex justify-center items-center  bg-[#15BFFD] text-white'>
              Connect Wallet
            </button>
            <button className='px-[15px] py-[8px] rounded-[30px] flex justify-center items-center text-primary'>
              Create NFT's{" "}
              <span className='ml-2'>
                <BsArrowRight />
              </span>
            </button>
          </div>
          <div>
            <h4 className='text-[20px] text-white font-semibold'>
              Last 7 days popular search
            </h4>
            <div className='flex w-[100%] sm:w-[466px] flex-wrap sm:gap-[10px]'>
              <button className='px-[20px] py-[4px] rounded-[30px] flex justify-center items-center bg-[#15BFFD] text-white my-5'>
                All
              </button>
              <button className='px-[20px] py-[4px] rounded-[30px] flex justify-center items-center border border-[#15BFFD] text-white my-5'>
                Music
              </button>
              <button className='px-[20px] py-[4px] rounded-[30px] flex justify-center items-center border border-[#15BFFD] text-white my-5'>
                3D Abstract
              </button>

              <button className='px-[20px] py-[4px] rounded-[30px] flex justify-center items-center border border-[#15BFFD] text-white my-5'>
                Game
              </button>
              <button className='px-[20px] py-[4px] rounded-[30px] flex justify-center items-center border border-[#15BFFD] text-white my-5'>
                Game
              </button>
              <button className='px-[20px] py-[4px] rounded-[30px] flex justify-center items-center border border-[#15BFFD] text-white my-5'>
                Game
              </button>
            
              <button className='px-[20px] py-[4px] rounded-[30px] flex justify-center items-center border border-[#15BFFD] text-white'>
                Cartoon
              </button>
              <button className='px-[20px] py-[4px] rounded-[30px] flex justify-center items-center border border-[#15BFFD] text-white'>
                Virtual World
              </button>
              <button className='px-[20px] py-[4px] rounded-[30px] flex justify-center items-center border border-[#15BFFD] text-white'>
                Classic
              </button>
            </div>
          </div>
        </div>
        <div className='absolute left-[671px]'>
          <img src={Star2} alt='' />
        </div>
        <div className='absolute top-[30px] left-[231px]'>
          <img src={Star4} alt='' />
        </div>
        <div className='absolute left-[20px] top-[57%]'>
          <img src={Star5} alt='' />
        </div>
        <div className='absolute right-[30px] top-[10px]'>
          <img src={Star7} alt='' />
        </div>
        <div className='absolute right-[30%] top-[80%]'>
          <img src={Star8} alt='' />
        </div>
        <div className='absolute top-[40px] left-[871px] '>
          <img src={Star9} alt='' />
        </div>
        <div className='absolute bottom-0 right-[300px] '>
          <img src={Star11} alt='' />
        </div>
      </div>
      <div className="relative">
      <div className="flex ">
        <div className='w-[260px] h-[400px] relative sla overflow-hidden bor  rotate-[-180deg]'></div>
        <div className=' top-[90px] w-[260px] h-[400px] relative sla overflow-hidden bor rotate-[200deg]'></div>
      </div>
    
      </div>
      <div className="absolute top-0 sm:right-[70px] right-0 -z-10 ">
        <img src={ro} className="w-[90px] sm:w-[155px]" alt="" />
      </div>
     
    </div>
    </div>
  )
}

export default Hero
