import { createContext , useState  } from "react";

export const HouseContext = createContext ({
    house: "bighouse",
    setHouse: () => {},
});

export const HouseProvider = ({ children }) => {
    const [house, setHouse] = useState("penthouse");
    return (
        <HouseContext.Provider value={{house, setHouse}}>
            {children}
        </HouseContext.Provider>
    );
}
