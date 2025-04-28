import React from 'react'
import Carousel from '@/app/components/ui/Carousel'

const page = () => {
  const arduino_paths = [
    '/mech/diagram.png', '/mech/block.jpg'
  ]
  
  const panel = 'space-y-5 px-2 py-10 md:w-6/8 md:px-0'
  const header= 'text-3xl font-bold'

  return (
    <div className='flex flex-col items-center'>
      <div className='relative w-full h-[1750px] lg:h-screen'>
        <img src='/mech/full-picture.jpg' className='absolute w-full h-full object-cover brightness-40'></img>
        <h1 className={`${header} absolute top-0 left-0 lg:top-10 lg:left-1/8 text-gray-300`}>Mechatronic Color Sorting Conveyor</h1>
        <div className="relative flex flex-col items-center space-y-5 mt-25 lg:flex-row lg:justify-evenly lg:space-y-0 lg:mt-0 lg:top-1/2 transform lg:-translate-y-1/2">
          <div className="w-[300px] h-[500px]">
            <iframe className="rounded-md w-full h-full shadow-xl border-2 border-gray-500" src="https://www.youtube.com/embed/XdCFYtW8jBc" title="v3" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className="w-[300px] h-[500px]">
            <iframe className="rounded-md w-full h-full shadow-xl border-2 border-gray-500" src="https://www.youtube.com/embed/--vCE5AsHIY" title="v2" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className="w-[300px] h-[500px]">
            <iframe className="rounded-md w-full h-full shadow-xl border-2 border-gray-500" src="https://www.youtube.com/embed/8P3UF1Z6qRs" title="v1" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>
      </div>
      <div className={panel}>
        <h1 className={header}>Overview</h1>
          <p>
            This project is characterized by a conveyor belt that automatically sorts colored blocks.
            When unsorted colored blocks are palced onto the conveyor, the system moves them forward,
            collecting color data, storing it with a FIFO algorithm, and sorting them in the corresponding
            color bin on a plate controlled by a stepper motor. The videos above demonstrate the system.
          </p>
          <p>
            List of components: Arduino Mega 2560, DC motor, stepper motor, Hall Effect sensor, IR sensor, color sensor,
            laser sensor.
          </p>
          <Carousel id='arduino-diagrams' paths={arduino_paths} />
      </div>
      <div className={panel}>
        <h1 className={header}>Arduino</h1>
          <p>
            A high-level description of an Arduino board can be reduced to a microcontroller (MCU) and a
            printed circuit board (PCB), emphasizing the MCU as the essential tool and the PCB as its
            interfacing environment. The ATmel ATmega 328P (328P) MCU plus an Arduino PCB submit the
            Arduino Uno to this description. Interaction with the 328P is facilitated by the PCB it sits
            on, however, plenty of users elect to interface with these chips using a Custom PCB or even
            just a breadboard.
          </p>
          <p>
            MCU instructions are typically programmed in C or C++ using an Integrated Development Environment
            (IDE), like Atmel's Microchip Studio. Other languages and IDE's like Assembly or Python and Visual
            Studio or Arduino IDE can be used. The applications presented here are written mostly in C using
            Microchip Studio.
          </p>
          <p>
            These instruction files (scripts) are compiled, or translated, into files an MCU can understand,
            called hex (hexadecimal) files, and uploaded to the MCU from a computer. Instructions given to
            an MCU often map a system of inputs to program logic which maps a system of outputs back through
            the PCB for some function, like controlling an LED.
          </p>
          <img src='/mech/arduino.jpg' className='rounded-lg shadow-xl'></img>
      </div>
    </div>
  )
}

export default page