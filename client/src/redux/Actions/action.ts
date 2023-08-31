import axios from "axios";

const llamadoAlBackend = async( creation: {
    title: string;
    price: string;
    type: string;
    technique: string[];
    image: string;
    description: string;
}) => {
    try {
        const {title, price, type, technique, image, description} = creation

        const response = await axios.post('hhtp://localhost:3001/createPost', {title, price, type, technique, image, description})
        const dbCreation = response.data

        return dbCreation
    } catch (error) {
        error instanceof Error && alert(`Error: ${error.message}`);

    }
}

export const postCreation = (creation: {
    title: string;
    price:string;
    type: string;
    technique: string[];
    image: string;
    description: string;
}) => {
    const dbCreation = llamadoAlBackend(creation)

    return {
        type: 'CREATE_POST',
        payload: dbCreation
    }
}