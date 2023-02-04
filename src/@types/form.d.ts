interface PropValuesForm {
    name: string,
    email: string,
    address: string,
    phone: string,
    message: string,
    subject: string,
    terms: boolean
};

export interface PropStateForm {
    isLoading: boolean;
    errors: {
        [key: string]: string;
    };
    values: PropValuesForm;
};

// interface typeValidation {
//     isValid: boolean,
//     errors: {
//         [key: string]: string;
//     }
// }