export const UserList = [

    {
        id: 1,
        name: 'John',
        username: 'Jonte',
        age: 30,
        nationality: 'KENYAN',
        friends: [

            {
                id: 2,
                name: 'Pedro',
                username: 'Pedi',
                age: 20,
                nationality: 'TANZANIAN'
            },
            {
                id: 3,
                name: 'Sharon',
                username: 'Sha',
                age: 30,
                nationality: 'KENYAN'
            },
        ]
    },
    {
        id: 2,
        name: 'Pedro',
        username: 'Pedi',
        age: 20,
        nationality: 'TANZANIAN',
        friends: [

            {
                id: 4,
                name: 'Doe',
                username: 'Doe',
                age: 30,
                nationality: 'UGANDAN'
            },
            {
                id: 3,
                name: 'Sharon',
                username: 'Sha',
                age: 30,
                nationality: 'KENYAN'
            },
        ]
    },
    {
        id: 3,
        name: 'Sharon',
        username: 'Sha',
        age: 30,
        nationality: 'KENYAN',
        friends: [

            {
                id: 1,
                name: 'John',
                username: 'Jonte',
                age: 30,
                nationality: 'KENYAN',
            },
            {
                id: 4,
                name: 'Doe',
                username: 'Doe',
                age: 30,
                nationality: 'UGANDAN'
            }
        ]
    },
    {
        id: 4,
        name: 'Doe',
        username: 'Doe',
        age: 30,
        nationality: 'UGANDAN',
        friends: [

            {
                id: 1,
                name: 'John',
                username: 'Jonte',
                age: 30,
                nationality: 'KENYAN',
            },
            {
                id: 3,
                name: 'Sharon',
                username: 'Sha',
                age: 30,
                nationality: 'KENYAN',
            }
        ]
    },
];
export const MovieList = [

    {
        id: 1,
        name: "Avengers Endgame",
        yearOfPublication: 2019,
        isInTheaters: true,
    },
    {
        id: 2,
        name: "Interstellar",
        yearOfPublication: 2007,
        isInTheaters: true,
    },
    {
        id: 3,
        name: "Superbad",
        yearOfPublication: 2009,
        isInTheaters: true,
    },
    {
        id: 4,
        name: "PedroTech The Movie",
        yearOfPublication: 2035,
        isInTheaters: false,
    },
];


export const OrderList = [

    {
        id: 6,
        deliveryAddress: "Juja",
        items: [

            {
                name: 'pizza',
                price: 250.50
            },
            {
                name: 'pizza',
                price: 250.50
            },
        ],
        total: 5000.50,
        discountCode: 'newuser2023',
        comment: 'im a new user',
        status: 'DELIVERED'
    },
    {
        id: 7,
        deliveryAddress: "Thika",
        items: [

            {
                name: 'pizza',
                price: 250.50
            },
            {
                name: 'pizza',
                price: 250.50
            }
        ],
        total: 5000.50,
        discountCode: 'newuser2023',
        comment: 'im a new user',
        status: 'PAID'
    },
    {
        id: 8,
        deliveryAddress: "Kiambu",
        items: [

            {
                name: 'pizza',
                price: 250.50
            },
            {
                name: 'pizza',
                price: 250.50
            },
        ],
        total: 5000.50,
        discountCode: 'newuser2023',
        comment: 'im a new user',
        status: 'IN_PROGRESS'
    },
    {
        id: 9,
        deliveryAddress: "Buru",
        items: [

            {
                name: 'pizza',
                price: 250.50
            },
            {
                name: 'pizza',
                price: 250.50
            },
        ],
        total: 5000.50,
        discountCode: 'newuser2023',
        comment: 'im a new user',
        status: 'IN_DELIVERY'
    },
    {
        id: 10,
        deliveryAddress: 'Mwihoko',
        items: [

            {
                name: 'pizza',
                price: 250.50
            },
            {
                name: 'pizza',
                price: 250.50
            }
        ],
        total: 5000.50,
        discountCode: 'newuser2023',
        comment: 'im a new user',
        status: 'IN_PROGRESS'
    },
];

export const holidayOffers = [

    {
        id: 1,
        name: 'Offer 1',
        visitedCount: 10,
        price: '100 USD',
        imageUrl: 'https://picsum.photos/200/300',
        description: 'Offer 1 description',
        dateAdded: '2023-03-27'
    },
    {
        id: 2,
        name: 'Offer 2',
        visitedCount: 5,
        price: '200 EUR',
        imageUrl: 'https://picsum.photos/200/300',
        description: null,
        dateAdded: '2023-03-26'
    },
    // add more holiday offers here
];