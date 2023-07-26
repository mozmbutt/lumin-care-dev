import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { createContext, useContext, useState } from 'react'

const AccordionContext = createContext<{
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}>({ isOpen: false, setIsOpen: () => console.log() })

const AccordionProvider: React.FC<any> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='bg-theme-main-light rounded-lg mt-[-8px] lg:my-3'>
      <AccordionContext.Provider value={{ isOpen, setIsOpen }}>
        {children}
      </AccordionContext.Provider>
    </div>
  )
}

const AccordionHeader: React.FC<any> = ({ children }) => {
  const { isOpen, setIsOpen } = useContext(AccordionContext)

  return (
    <div
      className='cursor-pointer flex items-center justify-between p-4 text-base font-bold'
      onClick={() => setIsOpen((prev) => !prev)}>
      {children}
      <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} className='w-4 h-6 ml-2' />
    </div>
  )
}

const AccordionBody: React.FC<any> = ({ children, maxHeight = 450 }) => {
  const { isOpen } = useContext(AccordionContext)
  if (!isOpen) return null
  return (
    <div
      className='border-l-4 border-solid border-theme-main-dark p-4'
      style={{ maxHeight: isOpen ? maxHeight : 0 }}>
      <p>{children}</p>
    </div>
  )
}

const Accordion = Object.assign(AccordionProvider, {
  Header: AccordionHeader,
  Body: AccordionBody,
})

export { Accordion }
