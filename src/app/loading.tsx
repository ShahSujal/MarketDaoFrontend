import React from 'react'
import { CircleLoader } from 'react-spinners'
const investingThoughts = [
  "Investing should be more like watching paint dry or watching grass grow. If you want excitement, take $800 and go to Las Vegas.",
  "The stock market is filled with individuals who know the price of everything, but the value of nothing.",
  "In investing, what is comfortable is rarely profitable.",
  "The four most dangerous words in investing are: 'This time it's different.'",
  "Wide diversification is only required when investors do not understand what they are doing.",
  "Know what you own, and know why you own it.",
  "The individual investor should act consistently as an investor and not as a speculator.",
  "The stock market is a device for transferring money from the impatient to the patient.",
  "An investment in knowledge pays the best interest.",
  "Risk comes from not knowing what you're doing."
];

const loading = () => {
  return (
    <div className=' w-full h-screen justify-center items-center flex flex-col'>
      <CircleLoader color='white'  />
        <h1 className=' mt-4 text-white font-extralight font-paps '>
          {investingThoughts[Math.floor(Math.random() * investingThoughts.length)]}
        </h1>
    </div>
  )
}

export default loading