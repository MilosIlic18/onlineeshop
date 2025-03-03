import logo from '../assets/logo.png'
import { Link } from 'react-router'
// clerk
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
// icons
import { CiUser, CiHeart, CiShoppingCart } from "react-icons/ci"

function NavbarComponent() {
  return (
    <div className='bg-mainBlue flex gap-[10px] items-center py-[10px] md:h-[100px]'>
        <div className='container mx-auto p-3 flex gap-[10px] justify-between items-center flex-col md:flex-row md:h-[100px] md:p-0'>
            <Link to='/'><img src={logo} alt="Greska" /></Link>
            
            {/* search bar */}
            <div className="flex bg-textWhite rounded-[20px]">
                <input type="text" name="" id="" className="bg-transparent px-[20px] py-[15px] rounded-[20px] outline-none placeholder:text-mainYellow text-mainBlue" placeholder="Search any things"/>
                <button className="bg-mainYellow text-textWhite px-[30px] py-[15px] rounded-[20px]">Search</button>
            </div>
            
            {/* Login system & Cart/Favourite */}
            <div className="flex gap-[10px] text-textWhite items-center text-[18px]">
                <div className="flex gap-[5px] items-center"><CiUser size={25}/>
                <SignedOut>
                  <SignInButton />
                </SignedOut>
                <SignedIn>
                  <UserButton showName />
                </SignedIn>
                </div>
                <div className="flex gap-[5px] items-center"><CiHeart size={25}/> <span className="bg-mainYellow w-[20px] h-[20px] flex items-center justify-center rounded-full">0</span> <span>Favourite</span></div>
                <div className="flex gap-[5px] items-center"><CiShoppingCart size={25}/> <span className="bg-mainYellow w-[20px] h-[20px] flex items-center justify-center rounded-full">0</span> <span>Cart</span></div>
            </div>
        </div>
    </div>
  )
}

export default NavbarComponent
