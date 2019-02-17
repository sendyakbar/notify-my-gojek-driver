import { drivers } from '../data/drivers.json'

export default function () {
    return {
        type: 'IMPORT_DATA_SUCCESS',
        payload: drivers
    }
}