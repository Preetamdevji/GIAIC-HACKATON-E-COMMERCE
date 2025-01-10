// export const color = [
//     "white",
//     "Black",
//     "Red",
//     "Pink",
//     "Marun",
//     "Green",
//     "Yellow",
//     "Blue",
//     "Brown"
// ];

export const filters = [
    {id: "color",
    name: "color",
    options:[
        {value: "white", label: "White"},
        {value: "marun", label: "Marun"},
        {value: "black", label: "Black"},
        {value: "blue", label: "Blue"},
        {value: "green", label: "Green"},
        {value: "brown", label: "Brown"},
        {value: "purple", label: "Purple"},
        {value: "yellow", label: "Yellow"},
        {value: "red", label: "Red"},
        ],
    },

    {
        id: "size",
        name: "size",
        options: [
            {value: "S", label: "S"},
            {value: "M", label: "M"},
            {value: "L", label: "L"}
        ],
    },
];

export const singleFilter = [
    {
        id:"price",
        name:"price",
        options: [
            {value: "200-250", label: "Rs:200 To Rs:250"},
            {value: "250-350", label: "Rs:250 To Rs:350"},
            {value: "350-450", label: "Rs:350 To Rs:450"},
            {value: "450-550", label: "Rs:450 To Rs:550"},
            {value: "550-650", label: "Rs:550 To Rs:650"},
            {value: "650-800", label: "Rs:650 To Rs:800"},
        ],
    },
 
        {
            id:"discount",
            name:"discount Range",
            options: [
                {
                    value: "10",
                    label: "10% And Above"
                },
                {value: "20", label: "20% And Above"},
                {value: "30", label: "30% And Above"},
                {value: "40", label: "40% And Above"},
                {value: "50", label: "50% And Above"},
                {value: "60", label: "60% And Above"},
                {value: "70", label: "70% And Above"},
                {value: "80", label: "80% And Above"}
            ],
        },

        {
            id:"stock",
            name:"availability",
            options: [
                {value: "in_stock", label: "In Stock"},
                {value: "out_of_stock", label: "Out Of Stock"},
            ],
        },

];

export const sortOptions = [
    {value: "Price: Low to High", query: "price_low", current:false},
    {value: "Price: High to Low", query: "price_high", current:false},
];