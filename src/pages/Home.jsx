import Hero from "../components/Hero";
import wave from '../assets/wave.svg'

export default function Home() {
  return (
    <div className="flex relative flex-col min-h-[calc(100vh-120px)] items-center justify-center ">
      <Hero/>
      <img className="absolute bottom-0 w-full" src={wave}/>
    </div>
  )
}
