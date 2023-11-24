import { PropStateForm } from "@/@types/form";

export default function useFormValidation({ values, errors }: PropStateForm) {
    const { name, email, address, phone, message, terms } = values;
    let isValid = true;

    if(!name) {
        isValid = false;
        errors.name = "Precisamos do seu nome para fins de indentificação!";
    } else {
        delete errors.name
    }

    if(!email) {
        isValid = false;
        errors.email = "O campo de e-mail e obrigatório!";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        isValid = false;
        errors.email = "Este e-mail e inválido";
    } else {
        delete errors.email
    }

    if(!address) {
        isValid = false;
        errors.address = "O endereço e obrigatório!";
    } else {
        delete errors.address
    }

    if(!phone) {
        isValid = false;
        errors.phone = "O número de telefone e obrigatório!";
    } else if (!/^\d{10,15}$/.test(phone)) {
        isValid = false;
        errors.phone = "Esse número de telefone e inválido!";
    } else {
        delete errors.phone
    }

    if(!message) {
        isValid = false;
        errors.message = "Precisamos que insira alguma menssagem!";
    } else {
        delete errors.message
    }

    if(!terms) {
        isValid = false;
        errors.terms = "Precisamos que aceite os nossos termos de serviços!";
    } else {
        delete errors.terms
    }

    return {
        isValid
    }
}