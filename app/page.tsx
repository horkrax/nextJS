"use client"

import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import * as Toast from '@radix-ui/react-toast';
import { useState } from "react"

export default function Home() {

  const { toast } = useToast()

  const [handler , setHandler] = useState(0)

  const pripocitaj = () => {
    setHandler(handler+1)
  }

  const odcitaj = () => {
    setHandler(handler-1)
  }

  const resetuj = () => {
    setHandler(0)
  }



  

  return (
    <div className="flex justify-center">
      <button onClick={odcitaj} className="pt-2 pb-2 bg-teal-500 pl-8 pr-8 text-white ">{handler}</button>
      <h1>klikni na cislo a odcitaj ho</h1>

  <Toast.Provider swipeDirection="top">
    <Button
      variant="destructive"
      className=""
      onClick={() => {
        toast({
          className: "mb-1",
          variant: "destructive",
          title: "Oops citim klik.",
          description: "klikol si",
          duration: 2000,
          action: <ToastAction onClick={resetuj} altText="Try again">Resetovať</ToastAction>,
        })
      }}
    >
      Klikni a zobraz upozornenie
    </Button>
  </Toast.Provider>

    

    </div>
  );
}
