import React from 'react'
import { useSession } from "next-auth/react";


const Story = () => {
    const { data: session } = useSession();

  return (
    <div>Story


    </div>
  )
}

export default Story