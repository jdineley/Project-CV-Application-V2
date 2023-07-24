import { v4 as uuid } from 'uuid';

const exampleCVData = {
    firstName: 'John',
    lastName: 'Doe',
    title: 'Sofware Developer',
    city: 'Liverpool',
    tel: '12345678910',
    email: 'jd@gmail.com',
    url: '../../assets/stock_photo.png',
    statement: 'Ex unde quidem aut provident natus eos provident accusamus est voluptas dolores sed sequi beatae! Quo earum molestiae in nemo voluptates sed repellendus dolorem ea modi molestiae aut Quis possimus! Sed perferendis reiciendis ut libero labore ut earum voluptatem quo expedita reiciendis qui odio enim nam praesentium placeat ut totam natus. Est quod praesentium et rerum voluptatem eos expedita accusantium eos velit odit sit doloribus unde ut dolores dolores ut voluptatum doloribus Ex unde quidem aut provident natus eos provident accusamus est voluptas dolores sed sequi beatae! Quo earum molestiae in nemo voluptates sed repellendus dolorem ea modi molestiae aut Quis possimus! Sed perferendis reiciendis ut libero labore ut earum voluptatem quo expedita reiciendis qui odio enim nam praesentium placeat ut totam natus. Est quod praesentium et rerum voluptatem eos expedita accusantium eos velit odit sit doloribus unde ut dolores dolores ut voluptatum doloribus.',
    education: 
        [
            {
                id: uuid(),
                degree: 'M.Eng (hons) Mechanical Engineering (1st class) ',
                university: 'The University of Life'
            },
            {
                id: uuid(),
                degree: 'PGCE - Physics',
                university: 'Tech Institution of The World'
            },
            {
                id: uuid(),
                degree: 'The Odin Project',
                university: 'The Internet'
            }
        ],
    experience: [
        {
            id: uuid(),
            title: 'Structures Engineer',
            place: 'MOD',
            start: '2010',
            end: '2015'
        },
        {
            id: uuid(),
            title: 'Teacher of Physics',
            place: 'Grange Hill',
            start: '2015',
            end: '2020'
        },
        {
            id: uuid(),
            title: 'Software Developer',
            place: 'Dev Agency',
            start: '2020',
            end: 'Now'
        }

    ]
} 

export { exampleCVData }