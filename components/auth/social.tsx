'use client'

import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { Button } from '@/components/ui/button'

export const Socical = () => {
  return (
    <div className=" flex items-center justify-center w-full gap-x-2">
      <Button className=" w-full" variant="outline" size="lg" onClick={() => {}}>
        <FcGoogle className=" h-5 w-5" />
      </Button>
      <Button className=" w-full" variant="outline" size="lg" onClick={() => {}}>
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  )
}
