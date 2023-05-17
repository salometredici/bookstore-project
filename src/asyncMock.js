const books = [
    {
        id: '1',
        title: 'Fairy Tale',
        author: 'Stephen King',
        price: 16611,
        stock: 3,
        category: 'fiction',
        img: 'https://img1.od-cdn.com/ImageType-400/0439-1/%7B3BFCDB8C-F164-4718-8DF3-577B30C0E86F%7DIMG400.JPG',
        description: 'Fairy Tale by Stephen King (2022) - Legendary storyteller Stephen King goes into the deepest well of his imagination in this spellbinding novel about a seventeen-year-old boy who inherits the keys to a parallel world where good and evil are at war, and the stakes could not be higher—for that world or ours.'
    },
    {
        id: '2',
        title: 'Jane Eyre',
        author: 'Charlotte Brontë',
        price: 4588,
        stock: 10,
        category: 'fiction',
        img: 'https://img1.od-cdn.com/ImageType-400/8010-1/FFC/3A1/A3/%7BFFC3A1A3-A6D7-428E-9424-6DC3156C132C%7DImg400.jpg',
        description: 'Initially published under the pseudonym Currer Bell in 1847, Charlotte Brontë’s Jane Eyre erupted onto the English literary scene, immediately winning the devotion of many of the world’s most renowned writers, including William Makepeace Thackeray, who declared it a work “of great genius.” Widely regarded as a revolutionary novel, Brontë’s masterpiece introduced the world to a radical new type of heroine, one whose defiant virtue and moral courage departed sharply from the more acquiescent and malleable female characters of the day. Passionate, dramatic, and surprisingly modern, Jane Eyre endures as one of the world’s most beloved novels.'
    },
    {
        id: '3',
        title: 'The Black Cat',
        author: 'Edgar Allan Poe',
        price: 2193,
        stock: 15,
        category: 'fiction',
        img: 'https://img1.od-cdn.com/ImageType-400/8010-1/279/5FD/D3/%7B2795FDD3-BE39-4A4E-98B5-38CEE58DE4ED%7DImg400.jpg',
        description: 'The Black Cat by Edgar Allan Poe (1843) - "The Black Cat" is one of Edgar Allan Poe\'s most memorable stories. The tale centers around a black cat and the subsequent deterioration of a man. The story is often linked with "The Tell-Tale Heart" because of the profound psychological elements these two works share. \nEdgar Allan Poe\'s short story "The Black Cat", first published in the August 19, 1843, issue of the Saturday Evening Post, is a chilling story written through the eyes of a man awaiting death for the murder of his wife.'
    },
    {
        id: '5',
        title: 'The Untethered Soul',
        author: 'Michael A. Singer',
        price: 3500,
        stock: 8,
        category: 'non-fiction',
        img: 'https://img1.od-cdn.com/ImageType-400/2861-1/4CE/056/B0/%7B4CE056B0-63C9-47CA-94DC-EDBA884363E7%7DImg400.jpg',
        description: 'The Untethered Soul by Michael A. Singer (2007) - What would it be like to free yourself from limitations and soar beyond your boundaries? What can you do each day to discover inner peace and serenity? The Untethered Soul—now a #1 New York Times bestseller—offers simple yet profound answers to these questions.'
    },
    {
        id: '6',
        title: 'Paris',
        author: 'Paris Hilton',
        price: 8700,
        stock: 15,
        category: 'non-fiction',
        img: 'https://img1.od-cdn.com/ImageType-400/0293-1/%7B8572C2CC-FF6F-411D-B57F-F248B1202F89%7DIMG400.JPG',
        description: 'Paris by Paris Hilton (2023) - The Memoir strips away all we thought we knew about a celebrity icon, taking us back to a privileged childhood lived through the lens of undiagnosed ADHD, a teenage rebellion that triggered a panicked – and perilous – decision by her parents. Led to believe they were saving their child\'s life, Paris\'s mother and father had her kidnapped and saw her sent to a series of \'emotional growth boarding schools\', where she survived almost two years of verbal, physical and sexual abuse. In the midst of a hell we now call the \'troubled teen industry\', Paris created a beautiful inner world where the ugliness couldn\'t touch her. She came out, resolving to trust no-one but herself as she transformed that fantasy world into a multibillion-dollar reality.'
    },
    {
        id: '7',
        title: 'Thinking, Fast and Slow',
        author: 'Daniel Kahneman',
        price: 4350,
        stock: 9,
        category: 'non-fiction',
        img: 'https://img1.od-cdn.com/ImageType-400/1191-1/D63/4F1/A6/%7BD634F1A6-E460-4147-B12D-5CD7E73DE26E%7DImg400.jpg',
        description: 'Thinking, Fast and Slow by Daniel Kahneman (2011) - In his mega bestseller, Thinking, Fast and Slow, Daniel Kahneman, the renowned psychologist and winner of the Nobel Prize in Economics, takes us on a groundbreaking tour of the mind and explains the two systems that drive the way we think.'
    },
    {
        id: '8',
        title: 'An Immense World',
        author: 'Ed Yong',
        price: 6577,
        stock: 7,
        category: 'non-fiction',
        img: 'https://img1.od-cdn.com/ImageType-400/1191-1/%7B9432D5A5-6081-4E65-B3A6-B22508A5FE4B%7DIMG400.JPG',
        description: 'An Immense World by Ed Yong (2022) - In An Immense World, Ed Yong coaxes us beyond the confines of our own senses, allowing us to perceive the skeins of scent, waves of electromagnetism, and pulses of pressure that surround us. We encounter beetles that are drawn to fires, turtles that can track the Earth’s magnetic fields, fish that fill rivers with electrical messages, and even humans who wield sonar like bats. We discover that a crocodile’s scaly face is as sensitive as a lover’s fingertips, that the eyes of a giant squid evolved to see sparkling whales, that plants thrum with the inaudible songs of courting bugs, and that even simple scallops have complex vision. We learn what bees see in flowers, what songbirds hear in their tunes, and what dogs smell on the street. We listen to stories of pivotal discoveries in the field, while looking ahead at the many mysteries that remain unsolved.'
    },
    {
        id: '9',
        title: 'Shelter Dogs',
        author: 'Peg Kehret',
        price: 1580,
        stock: 10,
        category: 'children',
        img: 'https://img1.od-cdn.com/ImageType-400/2363-1/F00/D8F/3C/%7BF00D8F3C-DF12-4ABF-9119-4F22E1F09626%7DImg400.jpg',
        description: 'Shelter Dogs by Peg Kehret (2013) - From the award-winning author Peg Kehret comes a collection of true stories about the amazing lives of eight shelter dogs. Many of these dogs were unwanted because of their size, behavior, or medical condition. All of the dogs found owners who loved and cared for them and ultimately helped change their lives in tremendous ways. The dogs have changed the owners\' lives, too.'
    },
    {
        id: '10',
        title: 'African Elephants',
        author: 'Kari Schuetz',
        price: 1270,
        stock: 15,
        category: 'children',
        img: 'https://img1.od-cdn.com/ImageType-400/2377-1/5E8/64D/34/%7B5E864D34-BBFC-4B09-BB20-4F62A194A1D3%7DImg400.jpg',
        description: 'African Elephants by Kari Schuetz (2014) - African elephants can weigh as much as 16,000 pounds! If their size isn\'t enough to make them stand out, they also have huge ears, long trunks, and ivory tusks. This title will engage beginning readers as it explains how Earth\'s largest land mammals use their trunks to keep themselves cool.'
    },
    {
        id: '11',
        title: 'Turtles',
        author: 'Emily Green',
        price: 1250,
        stock: 12,
        category: 'children',
        img: 'https://img1.od-cdn.com/ImageType-400/2377-1/209/932/94/%7B20993294-30B1-43E4-8C0D-3E1670D98366%7DImg400.jpg',
        description: 'Turtles by Emily Green (2012) - Did you know that some turtles live to be over 100 years old? Some live in the ocean, others on land, and some live both in water and on land! Young readers will discover what turtles eat, where they live, and how their shells and other physical features help them survive in the wild.'
    },
    {
        id: '12',
        title: 'Horses',
        author: 'Xist Publishing',
        price: 1250,
        stock: 10,
        category: 'children',
        img: 'https://img1.od-cdn.com/ImageType-400/2281-1/D1D/3F8/A7/%7BD1D3F8A7-5099-4CCA-9DE7-D0A0504DE8FA%7DImg400.jpg',
        description: 'Horses by Xist Publishing (2012) - Beautiful horses prance, trot and gallop across the page of this book of photographs. Substantially less expensive than a real horse and much less mess, this book is sure to feed your child\'s passion for horses. Each page features a different horse breed with a title.Used as a jumpstart for interaction, Discover Series Picture Books are a great way to introduce horses, their sounds and colors to kids.'
    },
    {
        id: '13',
        title: 'Fall Pumpkins',
        author: 'Martha E. H. Rustad',
        price: 1375,
        stock: 5,
        category: 'children',
        img: 'https://img1.od-cdn.com/ImageType-400/0955-1/71D/DC8/82/%7B71DDC882-94DE-43E0-B325-6B04B3958D24%7DImg400.jpg',
        description: 'Fall Pumpkins by Martha E. H. Rustad (2011) - Audisee® eBooks with Audio combine professional narration and text highlighting for an engaging read aloud experience! It\'s time for a trip to the pumpkin patch! Find out how pumpkins grow. See the many things we do with pumpkins. Let\'s carve a jack-o\'-lantern. Spooky! What happens in fall? Find out in the Fall\'s Here! series, part of the Cloverleaf Books™ collection. These nonfiction picture books feature kid-friendly text and illustrations to make learning fun!'
    },
    {
        id: '14',
        title: 'All Kinds of Children',
        author: 'Norma Simon',
        price: 2000,
        stock: 8,
        category: 'children',
        img: 'https://img1.od-cdn.com/ImageType-400/2363-1/B32/1F4/2C/%7BB321F42C-F6BD-4FC2-9D88-35FB27DA2E96%7DImg400.jpg',
        description: 'All Kinds of Children by Norma Simon (2014) - Norma Simon uses both the neighborhood and the international stage to celebrate children. Each carefully chosen example and comparison will help to forge a connection to friends and neighbors, other cultures, and faraway lands. As children enjoy this book, the world will grow a little smaller while understanding and acceptance will grow larger.'
    },
    {
        id: '15',
        title: 'Get Organized Without Losing it',
        author: 'Janet S. Fox',
        price: 2200,
        stock: 4,
        category: 'children',
        img: 'https://img1.od-cdn.com/ImageType-400/2943-1/117/BC7/B0/%7B117BC7B0-C83E-44CD-BC3B-FF4E9DA0D633%7DImg400.jpg',
        description: 'Get Organized Without Losing it by Janet S. Fox (2006) - Kids today have a lot to keep track of—and keep organized. Schoolwork, friends, activities, chores...rooms, backpacks, lockers, desks...and what about fun? Here\'s friendly, practical, humorous help for kids who want to manage their tasks, their time, and their stuff—without going overboard or being totally obsessed. Tips, techniques, strategies, and examples empower kids to conquer clutter, prioritize tasks, handle homework, prepare for tests, plan projects, stop procrastinating, and start enjoying the benefits of being organized: less stress and more success. Lists and steps make it doable; jokes and cartoons make it enjoyable. Recommended for any kid who\'s frustrated, overwhelmed, and sick of hearing "Clean your room!" "Where\'s your homework?" and "You\'re going to be late AGAIN!"'
    },
    {
        id: '16',
        title: 'Animals in Fall',
        author: 'Martha E. H. Rustad',
        price: 2430,
        stock: 5,
        category: 'children',
        img: 'https://img1.od-cdn.com/ImageType-400/0955-1/AF6/E82/92/%7BAF6E8292-09C7-43EF-A8CE-C46B8ACE00A5%7DImg400.jpg',
        description: 'Animals in Fall by Martha E. H. Rustad (2011) - Audisee® eBooks with Audio combine professional narration and text highlighting for an engaging read aloud experience! Honk! Geese are flying south. Grr! Black bears are looking for a den. Munch! Deer are eating extra food. Find out what other animals do to get ready for winter. What happens in fall? Find out in the Fall\'s Here! series, part of the Cloverleaf Books™ collection. These nonfiction picture books feature kid-friendly text and illustrations to make learning fun!'
    },
    {
        id: '17',
        title: 'Lions',
        author: 'Derek Zobel',
        price: 1250,
        stock: 11,
        category: 'children',
        img: 'https://img1.od-cdn.com/ImageType-400/2377-1/EF2/8C3/3B/%7BEF28C33B-AEC7-4A40-9270-252CE4EAB626%7DImg400.jpg',
        description: 'Lions by Derek Zobel (2013) - Did you know that a group of lions is called a pride? Have you heard that lions work together to stalk their prey? This book for young readers offers this information as it presents lions on the prowl. It teaches children about the physical and behavioral characteristics of these big cats.'
    },
    {
        id: '18',
        title: 'I Am Malala',
        author: 'Malala Yousafzai',
        price: 7800,
        stock: 4,
        category: 'education',
        img: 'https://img1.od-cdn.com/ImageType-400/0887-1/793/06B/82/%7B79306B82-4437-4468-BD1E-DF04424CD5D0%7DImg400.jpg',
        description: 'I Am Malala by Malala Yousafzai (2014) - I Am Malala. This is my story.\nMalala Yousafzai was only ten years old when the Taliban took control of her region. They said music was a crime. They said women weren\'t allowed to go to the market. They said girls couldn\'t go to school. Raised in a once-peaceful area of Pakistan transformed by terrorism, Malala was taught to stand up for what she believes. So she fought for her right to be educated. And on October 9, 2012, she nearly lost her life for the cause: She was shot point-blank while riding the bus on her way home from school. No one expected her to survive. Now Malala is an international symbol of peaceful protest and the youngest ever Nobel Peace Prize winner. In this Young Readers Edition of her bestselling memoir, which has been reimagined specifically for a younger audience and includes exclusive photos and material, we hear firsthand the remarkable story of a girl who knew from a young age that she wanted to change the world — and did. Malala\'s powerful story will open your eyes to another world and will make you believe in hope, truth, miracles and the possibility that one person — one young person — can inspire change in her community and beyond.'
    },
    {
        id: '19',
        title: 'There\'s No Such Thing as Bad Weather',
        author: 'Linda Åkeson McGurk',
        price: 5871,
        stock: 8,
        category: 'education',
        img: 'https://img1.od-cdn.com/ImageType-400/0439-1/939/667/BF/%7B939667BF-224D-4FF7-9BD6-41E123165010%7DImg400.jpg',
        description: 'There\'s No Such Thing as Bad Weather by Linda Åkeson McGurk (2017) - When Swedish-born Linda Åkeson McGurk moved to Indiana, she quickly learned that the nature-centric parenting philosophies of her native Scandinavia were not the norm. In Sweden, children play outdoors year-round, regardless of the weather, and letting babies nap outside in freezing temperatures is common and recommended by physicians. Preschoolers spend their days climbing trees, catching frogs, and learning to compost, and environmental education is a key part of the public-school curriculum. In the US, McGurk found the playgrounds deserted, and preschoolers were getting drilled on academics with little time for free play in nature. And when a swimming outing at a nearby creek ended with a fine from a park officer, McGurk realized that the parenting philosophies of her native country and her adopted homeland were worlds apart. Struggling to decide what was best for her family, McGurk embarked on a six-month journey to Sweden with her two daughters to see how their lives would change in a place where spending time in nature is considered essential to a good childhood. Insightful and lively, There\'s No Such Thing as Bad Weather is a fascinating personal narrative that illustrates how Scandinavian culture could hold the key to raising healthy, resilient, and confident children in America.'
    },
    {
        id: '20',
        title: 'Learn Spanish with Paul Noble for Beginners – Complete Course',
        author: 'Paul Noble',
        price: 6733,
        stock: 3,
        category: 'education',
        img: 'https://img1.od-cdn.com/ImageType-400/0292-1/%7BCBFD585C-D013-49CD-A273-C0ACA2CB3F18%7DIMG400.JPG',
        description: 'Learn Spanish with Paul Noble for Beginners – Complete Course by Paul Noble (2016) - No grammar tests. No memory drills. No chance of failure. Welcome to Learn with Paul Noble – a unique, tried and tested language learning method that has been used by almost a million people to speak fluently and confidently in no time at all. This course covers European and Latin American Spanish. Take a simple, relaxed approach to learning a language that has been proven to succeed every time. Unlike more traditional language learning courses, Paul Noble\'s unique method has no grammar tests, no memory drills and no chance of failure. Whatever your experience with languages, whether you\'re an absolute beginner or someone with basic knowledge who wants to improve their ability, this is the course to get you speaking Spanish quickly, easily, and effortlessly. Just listen, interact and learn wherever you are. In this audiobook, Paul will introduce you to the basics of the Spanish language and guide you through over 12 hours of everyday scenarios that will build your confidence. You will learn a huge range of vocabulary in no time at all, and be able to quickly make your new knowledge work for you in a variety of situations like asking for directions, eating out and talking about yourself. A native-speaking Spanish expert will help you to perfect your pronunciation as you progress through the course. Language learning has finally become fun, enjoyable and accessible. A downloadable booklet is also included to use as a reference and revision tool. This download contains the entire course – Parts 1, 2, and 3. To continue your language learning journey once you\'ve completed this course, download Next Steps in Spanish with Paul Noble for Intermediate Learners – Complete Course.'
    },
    {
        id: '21',
        title: 'Accessible Mathematics',
        author: 'Steven Leinwand',
        price: 4100,
        stock: 2,
        category: 'education',
        img: 'https://img1.od-cdn.com/ImageType-400/8822-1/BF8/240/7D/%7BBF82407D-A173-45DA-B428-7B7F75833C25%7DImg400.jpg',
        description: 'Accessible Mathematics by Steven Leinwand (2020) - Raising students\' math achievement doesn\'t mean ripping up your planning book and starting over. In Accessible Mathematics Steven Leinwand (author of Sensible Mathematics) shows how small shifts in the good teaching you already do can make a big difference in student learning.'
    },
    {
        id: '22',
        title: 'How to Take Smart Notes',
        author: 'Sönke Ahrens',
        price: 3125,
        stock: 3,
        category: 'education',
        img: 'https://img1.od-cdn.com/ImageType-400/7635-1/B41/A32/69/%7BB41A3269-BC2A-4497-8C71-0A3F1FA3C694%7DImg400.jpg',
        description: 'How to Take Smart Notes by Sönke Ahrens (2017) - The key to good and efficient writing lies in the intelligent organisation of ideas and notes. This book helps students, academics and nonfiction writers to get more done, write intelligent texts and learn for the long run. It teaches you how to take smart notes and ensure they bring you and your projects forward.\nThe Take Smart Notes principle is based on established psychological insight and draws from a tried and tested note-taking-technique. This is the first comprehensive guide and description of this system in English, and not only does it explain how it works, but also why. It suits students and academics in the social sciences and humanities, nonfiction writers and others who are in the business of reading, thinking and writing.Instead of wasting your time searching for notes, quotes or references, you can focus on what really counts: thinking, understanding and developing new ideas in writing. It does not matter if you prefer taking notes with pen and paper or on a computer, be it Windows, Mac or Linux. And you can start right away.'
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
