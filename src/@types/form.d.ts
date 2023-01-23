export interface PropValuesForm {
    name: string,
    email: string,
    address: string,
    phone: string,
    message: string,
    subject: string,
};

export interface PropStateForm {
    isLoading: boolean;
    error: string;
    values: PropValues;
};