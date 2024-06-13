import { Button } from "../../assets/components/Button"
import hero from "../../assets/images/hero.png"
export const Hero: React.FC = () => {
    return(
        <div className="min-h-screen bg-white w-full center relative"> 
            <div className="w-11/12 lg:w-10/12 flex flex-col lg:flex-row items-center justify-between z-10 xl:gap-[50px]">
                <div className="flex flex-col gap-5 w-full lg:w-5/12">
                    <h1 className="font-bold text-5xl">This and that</h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa alias libero a nulla ab et quisquam beatae nobis repellat. Inventore, praesentium sapiente dolor fugiat repellendus tempore quasi aliquam unde itaque?
                    </p>

                    <div className="flex gap-3 items-center">
                        <Button
                            text="Get started"
                            className="bg-primary text-white w-full"
                        />

                        <Button
                            text="Contact us"
                            className="border border-primary bg-transparent text-primary w-full"
                        />

                    </div>
                </div>


                <img src={hero} alt="Hero Image" className="w-10/12 lg:w-5/12"/>
            </div>
        </div>
    )
}