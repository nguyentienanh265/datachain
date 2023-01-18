import EtherCard from "../widgets/EtherCard"
import Input from "../widgets/Input"

import { Link } from "react-router-dom"

const SubmitButton = () => {
    return  (
        <button className="w-full py-3 light-shadow rounded-lg bg-white glow-on-hover-square">
            <p className="text-transparent tracking-wider text-2xl font-semibold">
                Add image
            </p>
        </button>
    )
}

const Home = () => {

    return (
        <div className="w-full flex flex-row justify-center items-center">
            <div className="flex-1 mr-20">
                <div className="w-full flex flex-col justify-between items-center">
                    <Input placeholder='Image title' type='text'/>
                    <Input placeholder='Image description' type='textarea'/>
                    <Input placeholder='Upload image' type='file'/>

                    <SubmitButton />

                </div>
            </div>

            <div className="flex-1 flex items-center justify-center">
                <Link to='/info'>
                    <EtherCard />
                </Link>
            </div>
            
        </div>
    )
}

export default Home