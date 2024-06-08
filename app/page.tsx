"use client"

import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

export default function Home() {

  const { toast } = useToast()
  

  return (
    <div>
        <Button
      variant="secondary"
      className=""
      onClick={() => {
        toast({
          title: "Oops nastala chyba.",
          description: "Skúste to znova prosím.",
          action: <ToastAction altText="Try again">Skúsiť znovu</ToastAction>,
        })
      }}
    >
      Zobraziť chybu
    </Button>

    </div>
  );
}
