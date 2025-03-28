import {useMemo} from "react";  

type Props = {
    list: Array<string>;
    filter: string;
};

const NameLsit = ({item }) => {
    const filter