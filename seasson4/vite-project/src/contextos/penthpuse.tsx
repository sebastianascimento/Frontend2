import { useContext  } from "react";
import { HouseContext } from "./context";

const Penthouse = () => {
    const {house, setHouse} = useContext(HouseContext);
    return (
        <button onClick={() => setHouse(house == "penthouse" ? "skhorthouse" : "penthouse" )}>
            Change house
        </button>
    );
}