import { v4 as uuid } from 'uuid';
import examplePhoto from '../../assets/stock_photo.png'

const blankCVData = {
    firstName: '',
    lastName: '',
    title: '',
    city: '',
    tel: '',
    email: '',
    url: examplePhoto,
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