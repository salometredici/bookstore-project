const books = [
    {
        id: '1',
        title: 'Fairy Tale',
        author: 'Stephen King',
        price: 16611,
        stock: 3,
        category: 'fiction',
        img: 'https://img1.od-cdn.com/ImageType-400/0439-1/%7B3BFCDB8C-F164-4718-8DF3-577B30C0E86F%7DIMG400.JPG',
        description: 'Fairy Tale by Stephen King (2022)'
    },
    {
        id: '2',
        title: 'Jane Eyre',
        author: 'Charlotte Brontë',
        price: 4588,
        stock: 10,
        category: 'fiction',
        img: 'https://img1.od-cdn.com/ImageType-400/8010-1/FFC/3A1/A3/%7BFFC3A1A3-A6D7-428E-9424-6DC3156C132C%7DImg400.jpg',
        description: 'Jane Eyre by Charlotte Brontë (1847)'
    },
    {
        id: '3',
        title: 'The Black Cat',
        author: 'Edgar Allan Poe',
        price: 2193,
        stock: 15,
        category: 'fiction',
        img: 'https://img1.od-cdn.com/ImageType-400/8010-1/279/5FD/D3/%7B2795FDD3-BE39-4A4E-98B5-38CEE58DE4ED%7DImg400.jpg',
        description: 'The Black Cat by Edgar Allan Poe (1843)'
    },
    {
        id: '5',
        title: 'The Untethered Soul',
        author: 'Michael A. Singer',
        price: 3500,
        stock: 8,
        category: 'non-fiction',
        img: 'https://img1.od-cdn.com/ImageType-400/2861-1/4CE/056/B0/%7B4CE056B0-63C9-47CA-94DC-EDBA884363E7%7DImg400.jpg',
        description: 'The Untethered Soul by Michael A. Singer (2007)'
    },
    {
        id: '6',
        title: 'Paris',
        author: 'Paris Hilton',
        price: 8700,
        stock: 15,
        category: 'non-fiction',
        img: 'https://img1.od-cdn.com/ImageType-400/0293-1/%7B8572C2CC-FF6F-411D-B57F-F248B1202F89%7DIMG400.JPG',
        description: 'Paris by Paris Hilton (2023)'
    },
    {
        id: '7',
        title: 'Thinking, Fast and Slow',
        author: 'Daniel Kahneman',
        price: 4350,
        stock: 9,
        category: 'non-fiction',
        img: 'https://img1.od-cdn.com/ImageType-400/1191-1/D63/4F1/A6/%7BD634F1A6-E460-4147-B12D-5CD7E73DE26E%7DImg400.jpg',
        description: 'Thinking, Fast and Slow by Daniel Kahneman (2011)'
    },
    {
        id: '8',
        title: 'An Immense World',
        author: 'Ed Yong',
        price: 6577,
        stock: 7,
        category: 'non-fiction',
        img: 'https://img1.od-cdn.com/ImageType-400/1191-1/%7B9432D5A5-6081-4E65-B3A6-B22508A5FE4B%7DIMG400.JPG',
        description: 'An Immense World by Ed Yong (2022)'
    },
    {
        id: '9',
        title: 'Shelter Dogs',
        author: 'Peg Kehret',
        price: 1580,
        stock: 10,
        category: 'children',
        img: 'https://img1.od-cdn.com/ImageType-400/2363-1/F00/D8F/3C/%7BF00D8F3C-DF12-4ABF-9119-4F22E1F09626%7DImg400.jpg',
        description: 'Shelter Dogs by Peg Kehret (2013)'
    },
    {
        id: '10',
        title: 'African Elephants',
        author: 'Kari Schuetz',
        price: 1270,
        stock: 15,
        category: 'children',
        img: 'https://img1.od-cdn.com/ImageType-400/2377-1/5E8/64D/34/%7B5E864D34-BBFC-4B09-BB20-4F62A194A1D3%7DImg400.jpg',
        description: 'African Elephants by Kari Schuetz (2014)'
    },
    {
        id: '11',
        title: 'Turtles',
        author: 'Emily Green',
        price: 1250,
        stock: 12,
        category: 'children',
        img: 'https://img1.od-cdn.com/ImageType-400/2377-1/209/932/94/%7B20993294-30B1-43E4-8C0D-3E1670D98366%7DImg400.jpg',
        description: 'Turtles by Emily Green (2012)'
    },
    {
        id: '12',
        title: 'Horses',
        author: 'Xist Publishing',
        price: 1250,
        stock: 10,
        category: 'children',
        img: 'https://img1.od-cdn.com/ImageType-400/2281-1/D1D/3F8/A7/%7BD1D3F8A7-5099-4CCA-9DE7-D0A0504DE8FA%7DImg400.jpg',
        description: 'Horses by Xist Publishing (2012)'
    },
    {
        id: '13',
        title: 'Fall Pumpkins',
        author: 'Martha E. H. Rustad',
        price: 1375,
        stock: 5,
        category: 'children',
        img: 'https://img1.od-cdn.com/ImageType-400/0955-1/71D/DC8/82/%7B71DDC882-94DE-43E0-B325-6B04B3958D24%7DImg400.jpg',
        description: 'Fall Pumpkins by Martha E. H. Rustad (2011)'
    },
    {
        id: '14',
        title: 'All Kinds of Children',
        author: 'Norma Simon',
        price: 2000,
        stock: 8,
        category: 'children',
        img: 'https://img1.od-cdn.com/ImageType-400/2363-1/B32/1F4/2C/%7BB321F42C-F6BD-4FC2-9D88-35FB27DA2E96%7DImg400.jpg',
        description: 'All Kinds of Children by Norma Simon (2014)'
    },
    {
        id: '15',
        title: 'Get Organized Without Losing it',
        author: 'Janet S. Fox',
        price: 2200,
        stock: 4,
        category: 'children',
        img: 'https://img1.od-cdn.com/ImageType-400/2943-1/117/BC7/B0/%7B117BC7B0-C83E-44CD-BC3B-FF4E9DA0D633%7DImg400.jpg',
        description: 'Get Organized Without Losing it by Janet S. Fox (2006)'
    },
    {
        id: '16',
        title: 'Animals in Fall',
        author: 'Martha E. H. Rustad',
        price: 2430,
        stock: 5,
        category: 'children',
        img: 'https://img1.od-cdn.com/ImageType-400/0955-1/AF6/E82/92/%7BAF6E8292-09C7-43EF-A8CE-C46B8ACE00A5%7DImg400.jpg',
        description: 'Animals in Fall by Martha E. H. Rustad (2011)'
    },
    {
        id: '17',
        title: 'Lions',
        author: 'Derek Zobel',
        price: 1250,
        stock: 11,
        category: 'children',
        img: 'https://img1.od-cdn.com/ImageType-400/2377-1/EF2/8C3/3B/%7BEF28C33B-AEC7-4A40-9270-252CE4EAB626%7DImg400.jpg',
        description: 'Lions by Derek Zobel (2013)'
    },
    {
        id: '18',
        title: 'I Am Malala',
        author: 'Malala Yousafzai',
        price: 7800,
        stock: 4,
        category: 'education',
        img: 'https://img1.od-cdn.com/ImageType-400/0887-1/793/06B/82/%7B79306B82-4437-4468-BD1E-DF04424CD5D0%7DImg400.jpg',
        description: 'I Am Malala by Malala Yousafzai (2014)'
    },
    {
        id: '19',
        title: 'There\'s No Such Thing as Bad Weather',
        author: 'Linda Åkeson McGurk',
        price: 5871,
        stock: 8,
        category: 'education',
        img: 'https://img1.od-cdn.com/ImageType-400/0439-1/939/667/BF/%7B939667BF-224D-4FF7-9BD6-41E123165010%7DImg400.jpg',
        description: 'There\'s No Such Thing as Bad Weather by Linda Åkeson McGurk (2017)'
    },
    {
        id: '20',
        title: 'Learn Spanish with Paul Noble for Beginners – Complete Course',
        author: 'Paul Noble',
        price: 6733,
        stock: 3,
        category: 'education',
        img: 'https://img1.od-cdn.com/ImageType-400/0292-1/%7BCBFD585C-D013-49CD-A273-C0ACA2CB3F18%7DIMG400.JPG',
        description: 'Learn Spanish with Paul Noble for Beginners – Complete Course by Paul Noble (2016)'
    },
    {
        id: '21',
        title: 'Accessible Mathematics',
        author: 'Steven Leinwand',
        price: 4100,
        stock: 2,
        category: 'education',
        img: 'https://img1.od-cdn.com/ImageType-400/8822-1/BF8/240/7D/%7BBF82407D-A173-45DA-B428-7B7F75833C25%7DImg400.jpg',
        description: 'Accessible Mathematics by Steven Leinwand (2020)'
    },
    {
        id: '22',
        title: 'How to Take Smart Notes',
        author: 'Sönke Ahrens',
        price: 3125,
        stock: 3,
        category: 'education',
        img: 'https://img1.od-cdn.com/ImageType-400/7635-1/B41/A32/69/%7BB41A3269-BC2A-4497-8C71-0A3F1FA3C694%7DImg400.jpg',
        description: 'How to Take Smart Notes by Sönke Ahrens (2017)'
    }
]

export const getAllBooks = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(books);
        }, 2000);
    });
}

export const getBookById = (bookId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(books.find(book => book.id === bookId));
        }, 2000);
    });
}

export const getBooksByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(books.filter(book => book.category === category));
        }, 2000);
    });
}

export const getBookByAuthor = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(books.filter(book => book.category === category));
        }, 2000);
    });
}
