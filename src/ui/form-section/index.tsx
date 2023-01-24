import { CircleNotch } from "phosphor-react";
import { useState } from "react";

import ButttonGlobal from "@/components/button";
import { PropStateForm } from "@/@types/form";
import { sendContactForm } from "../../service/email";

const initState: PropStateForm = {
    isLoading: false,
    error: "",
    values: {
        name: "",
        email: "",
        address: "",
        phone: "",
        message: "",
        subject: "",
    }
}

export default function Form() {
    const [state, setState] = useState<PropStateForm>(initState);
    const [terms, setTerms] = useState(false);

    const { values, isLoading, error } = state;

    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setState((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                [target.name]: target.value,
            },
        }));
    }

    const onSubmit = async () => {
        setState((prev) => ({
            ...prev,
            isLoading: true,
        }));

        try {
            await sendContactForm({...values, subject: `Messagem do(a) ${values.name}`});
            setState(initState);
            setTerms(false);
        } catch(error: any) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: error.message,
            }));
        }
    }

    return (
        <form>
            <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Digite seu nome"
                onChange={handleChange}
                value={values.name}
            />

            <input
                type="text"
                name="address"
                id="address"
                required
                placeholder="Digite seu enderço"
                onChange={handleChange}
                value={values.address}
            />

            <input
                type="tel"
                name="phone"
                id="phone"
                required
                placeholder="Telefone (e.g +553899999999)"
                onChange={handleChange}
                value={values.phone}
            />

            <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Digite um e-mail valido"
                onChange={handleChange}
                value={values.email}
            />

            <textarea
                onChange={handleChange}
                value={values.message}
                name="message"
                id="messageText"
            ></textarea>

            <label htmlFor="terms">
                <input
                    type="checkbox"
                    name="terms"
                    id="terms"
                    required
                    // onChange={handleChange}
                    defaultChecked={terms}
                />
                Eu aceito os <a href="#"><strong>termos de serviço</strong></a>
            </label>

            <ButttonGlobal
                value={isLoading ? <CircleNotch size={22} weight="bold" /> : "Enviar"}
                isLoading
                disabled={
                    !values.name || !values.email || !values.address || !values.phone || !values.message
                }
                onClick={onSubmit}
            />
        </form>
    )
}