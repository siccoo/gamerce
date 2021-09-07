import bcrypt from "bcryptjs";

const data = {
    users: [
        {
            name: "Jason Bourne",
            email: "admin@example.com",
            password: bcrypt.hashAsync("1234", 8),
            isAdmin: true
        },
        {
            name: "Green Dennis",
            email: "user@example.com",
            password: bcrypt.hashAsync("123456", 8),
            isAdmin: false
        },
        {
            name: "Mambo Salisu",
            email: "admin@init.com",
            password: bcrypt.hashSync("1234", 8),
            isAdmin: true
        },
        {
            name: "Jason Bourne",
            email: "user@example.com",
            password: bcrypt.hashSync("123456", 8),
            isAdmin: false
        }
    ],
    products: [
        {
            _id: '1',
            name: 'PlayStation 5',
            category: 'Video Games',
            image: '/images/ps5.jpg',
            price: 110000,
            countInStock: 30,
            brand: 'Sony',
            rating: 4.5,
            numReviews: 10,
            description: 'High Quality',
        },
        {
            _id: '2',
            name: 'PlayStation 6',
            category: 'Video Games',
            image: '/images/ps6.jpg',
            price: 130000,
            countInStock: 0,
            brand: 'Sony',
            rating: 4.9,
            numReviews: 13,
            description: 'High Quality',
        },
        {
            _id: '3',
            name: 'PlayStation 4',
            category: 'Video Games',
            image: '/images/ps4.jpg',
            price: 100000,
            countInStock: 20,
            brand: 'Sony',
            rating: 4.1,
            numReviews: 9,
            description: 'High Quality',
        },
        {
            _id: '4',
            name: 'PlayStation 3',
            category: 'Video Games',
            image: '/images/ps3.jpg',
            price: 75000,
            countInStock: 15,
            brand: 'Sony',
            rating: 3.2,
            numReviews: 6,
            description: 'High Quality',
        },
        {
            _id: '5',
            name: 'Nintendo GameBoy',
            category: 'Action Games',
            image: '/images/nintendo1.jpg',
            price: 45000,
            countInStock: 8,
            brand: 'Sonic',
            rating: 3.6,
            numReviews: 5,
            description: 'High Quality',
        },
        {
            _id: '6',
            name: 'Nintendo Box',
            category: 'Video Games',
            image: '/images/nintendo2.jpg',
            price: 34000,
            countInStock: 28,
            brand: 'Sonic',
            rating: 3.5,
            numReviews: 3,
            description: 'High Quality',
        },
    ],
}

export default data;