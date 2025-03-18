import logo from '../assets/logo-1 1.png'

//icons
import { CiLocationArrow1,CiHeadphones } from "react-icons/ci";
import { TbBrandGoogle } from "react-icons/tb";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

function FooterComponent() {
    const findProducts=['Brownze arnold','Chronograph blue','Smart phones','Automatic watch','Hair straighteners']
    const getHelp=['About us','Contact us','Return policy','Privacy policy','Payment policy']
    const aboutUs=['News','Service','Our policy','Custmer care',"Faq's"]
  return (
    <div className='bg-ligthBlue py-[5px]'>
        <div className='container mx-auto py-[18px] flex flex-col gap-[25px] px-[10px] md:px-0'>
            <div className="bg-white flex flex-col md:flex-row justify-between items-center rounded-lg p-[18px]">
                <h2 className="text-[28px] text-mainBlue font-semibold">Subscribe newsletter</h2>
                <div className=" flex gap-[20px] w-[100%] md:w-[50%] items-center justify-between">

                    <div className="bg-mainYellow text-white py-[15px] px-[15px] flex w-2/3 rounded-lg items-center justify-between"> 
                        <h2>Email address</h2>
                        <CiLocationArrow1 size={25}/>
                    </div>
                    <div className="flex justify-between items-center">
                        <CiHeadphones size={80} className="text-mainYellow" />
                        <h4 className="text-[13px]">
                            Call us 24/7 :<br/>
                            (+62) 0123 567 789
                        </h4>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row flex-wrap gap-[25px] justify-between items-center text-mainBlue">
                <div className="flex flex-col gap-[15px] w-[300px]">
                    <img src={logo} alt="Greska" className='w-fit' />
                    <p className='mt-[30px]'>
                    64 st james boulevard <br/>
                    hoswick , ze2 7zj
                    </p>
                    <div className='border-t border-gray-500 text-white flex gap-[10px] py-[15px] mt-[20px]'>
                        <TbBrandGoogle size={25}/>
                        <RiFacebookBoxLine size={25}/>
                        <FaInstagram size={25}/>
                    </div>
                </div>
                <div className="flex flex-col gap-[20px] w-[300px]">
                    <h2 className='font-semibold'>Find products</h2>
                    <ul className='flex flex-col gap-[5px] list-[square] marker:text-gray-500'>
                        {findProducts.map((el,i)=><li key={i}>{el}</li>)}
                    </ul>
                </div>
                <div className="flex flex-col gap-[20px] w-[300px]">
                    <h2 className='font-semibold'>Get Started</h2>
                    <ul className='flex flex-col gap-[5px] list-[square] marker:text-gray-500'>
                        {getHelp.map((el,i)=><li key={i}>{el}</li>)}
                    </ul>
                </div>
                <div className="flex flex-col gap-[20px] w-[300px]">
                    <h2 className='font-semibold'>About us</h2>
                    <ul className='flex flex-col gap-[5px] list-[square] marker:text-gray-500'>
                        {aboutUs.map((el,i)=><li key={i}>{el}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FooterComponent
