import { useMemo , useState } from "react"; 

const HeavyClaculation = () => {
    const [counter, setCounter] = useState(0);

    const heavyNumber = useMemo(() => {
        return counter * 2;