export interface iDATA {
    _id?: string | number;
    id: number;
    price: number;
    total?: number;
    title: string;
    url: () => {};
}

export const DATA: iDATA[] = [
    {
        id: 1,
        price: 1.0,
        title: "Carrot",
        url: require("../assets/carrot.png"),
    },
    {
        id: 2,
        price: 2.98,
        title: "Cabbage",
        url: require("../assets/cabbage.png"),
    },
    {
        id: 3,
        price: 3.66,
        title: "Tomato",
        url: require("../assets/tomato.png"),
    },
    {
        id: 4,
        price: 2.45,
        title: "Potato",
        url: require("../assets/potato.png"),
    },
    {
        id: 5,
        price: 0.98,
        title: "Leeks",
        url: require("../assets/leeks.png"),
    },
    {
        id: 6,
        price: 1.45,
        title: "Chile",
        url: require("../assets/chile.png"),
    },
    {
        id: 7,
        price: 5.68,
        title: "Pumpkin",
        url: require("../assets/pumpkin.png"),
    },
    {
        id: 8,
        price: 4.25,
        title: "Mushrooms",
        url: require("../assets/mushroom.png"),
    },
];
