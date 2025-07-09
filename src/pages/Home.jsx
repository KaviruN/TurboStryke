import { WavyBackground } from "../components/WavyBackground";
import CarModels from "../components/CarModel";

function Home() {
    return (
        <>
            <WavyBackground />
            <div className="home">
                <h1>Your one-stop shop for<br /> custom car tuning<br />  and performance upgrades.</h1>
                <div className="car-model">
                    <CarModels />
                </div>
            </div>
            
        </>
    );
}

export default Home;