import { ScaleLoader } from "react-spinners"
export default function Loader() {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-120px)]">
        <ScaleLoader color="#cd6bd4" size={150} />
    </div>
  )
}
