import React from 'react'
import { signOut, useSession } from "next-auth/react";


const Navbar = () => {
  const { data: session } = useSession();

  return (
    <header>
        <nav>
            <ul>
                <li>
                    <img
                 className="w-[44px] cursor-pointer rounded-full"
                 src={session?.user?.image}
                 alt="dp"
                 onClick={signOut}
                    />
                </li>
                <li><button
                
                onClick={signOut}
                >Logout</button></li>
            </ul>

        </nav>
    </header>
  )
}

export default Navbar