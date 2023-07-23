import { v4 as uuid } from 'uuid';

const blankCVData = {
    firstName: '',
    lastName: '',
    city: '',
    contact: '',
    statement: '',
    education: 
        [
            {
                id: uuid(),
                degree: '',
                university: ''
            },
            {
                id: uuid(),
                degree: '',
                university: ''
            }
        ],
    experience: [
        {
            id: uuid(),
            title: '',
            place: '',
            start: '',
            end: ''
        },
        {
            id: uuid(),
            title: '',
            place: '',
            start: '',
            end: ''
        }

    ]
} 

export { blankCVData }