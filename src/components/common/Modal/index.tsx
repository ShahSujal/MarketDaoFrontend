import LoadWarn from '@/components/icons/LoadWarn'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import React from 'react'

type Props = {}

const Modal = (props: Props) => {
    const [open, setOpen] = React.useState(true)
    const handleOpenChange = (val: boolean) => {
      setOpen(val)
    }
    const modalMessage = {
      loadingTitle: "Loading...",
      loadingDescription: "Please wait while we load your data",
    }
  return (
    <Dialog open={open} onOpenChange={(val) => handleOpenChange(val)} modal>
    <DialogContent
      onOpenAutoFocus={(e) => e.preventDefault()}
      className="max-w-2xl bg-[#EEEBFF]"
    >
      <DialogTitle className="hidden"></DialogTitle>
      <div className="flex flex-col items-center justify-center space-y-8 pt-7">
        <div className="text-center text-2xl font-bold leading-[3rem]">
          {modalMessage.loadingTitle}
        </div>
        <LoadWarn/>
        <div className="text-center text-lg font-normal leading-6">
          {modalMessage.loadingDescription}
        </div>
      </div>
    </DialogContent>
  </Dialog>
  )
}

export default Modal