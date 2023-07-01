"use client"

import { useEffect, useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean
}


export const AlertModal = ({ isOpen, onClose, onConfirm, loading }: AlertModalProps) => {
  const [isMounted, setMounted ] = useState(false);

  useEffect(() =>{
    setMounted(true)
  },[])

  if(!isMounted) {
    return null;
  }

  return <Modal title="Are you sure?" description="Your data will be gone forever!" isOpen={isOpen} onClose={onClose}>
    <div className="pt-6 space-x-2 flex items-center justify-end w-full">
      <Button disabled={loading} variant="outline" onClick={onClose}>Cancel</Button>
      <Button disabled={loading} variant="destructive" onClick={onConfirm}>Confirm to delete</Button>
    </div>
  </Modal>

}