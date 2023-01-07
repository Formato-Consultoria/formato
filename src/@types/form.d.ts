export interface PropValuesForm {
    name: string,
    email: string,
    address: string,
    phone: string,
    message: string,
    // terms: boolean,
};

export interface PropStateForm {
    isLoading: boolean;
    error: string;
    values: PropValues;
};