import { WavyBackground } from "../components/WavyBackground";
import CarModels from "../components/CarModel";

function Home() {
    return (
        <>
            <WavyBackground />
            <div className="home">
                <div className="home-content">
                    <h1>Your one-stop shop for custom car tuning  and performance upgrades.</h1>
                </div>
                <div className="car-model">
                    <CarModels />
                </div>
            </div>
            
        </>
    );
}

export default Home;