import { v4 as uuid } from 'uuid';

const blankCVData = {
    firstName: '',
    lastName: '',
    title: '',
    city: '',
    tel: '',
    email: '',
    url: '../../assets/stock_photo.png',
    statement: '',
    education: 
        [
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
        }
    ]
} 

export { blankCVData }