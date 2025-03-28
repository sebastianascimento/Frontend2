
type Player = {
    name: string;
    age: number;
    game: string;
};

const playerPartial : Partial<Player> = {name: "Miguel"};
const playerReadonly : Readonly<Player> = {name: "Miguel" , age: 34 , game:"football"};
const playerPick : Pick<Player , "name" | "game"> = {name : "Manuel" , game: "basktball" };
const playerOmit : Omit<Player , "age"> = {name: "Ze da gota" , game : "tenis"};

console.log(playerPartial);
console.log(playerOmit);
console.log(playerPick);
console.log(playerReadonly);








