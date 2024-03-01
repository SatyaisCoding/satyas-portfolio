import Image from 'next/image';
import React from 'react';
import Coffee from '@/public/coffee.png';

function BuyCoffee() {
  return ( 
  <a target='_blank' className="fixed bottom-5 left-5 bg-white w-[3.1rem] h-[3.1rem] pt-1 -rotate-12 border borderBlack dark:border-white rounded-full dark:bg-yellow-400" href="https://www.buymeacoffee.com/satyaiscoding" ><Image src={Coffee} alt="coffee" width={100} height={100}></Image></a>
  )
}

export default BuyCoffee
