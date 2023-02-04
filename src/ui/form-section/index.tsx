import { CircleNotch } from "phosphor-react";
import { useState } from "react";

import UseFormValidation from "@/hooks/_useFormValidation";
import ButttonGlobal from "@/components/button";
import { PropStateForm, PropValuesForm } from "@/@types/form";
import { sendContactForm } from "@/service/email";

import style from "@/ui/contact-section/contact-section.module.scss";
import cx from "clsx";

export const initState: PropStateForm = {
    isLoading: false,
    errors: {},
    values: {
        name: "",
        email: "",
        address: "",
        phone: "",
        message: "",
        subject: "",
        terms: false
    }
}

export default function Form() {
    const [state, setState] = useState<PropStateForm>(initState);
    const [touched, setTouched] = useState<PropValuesForm>(initState.values);

    const { values, isLoading, errors } = state;

    const onBlur = ({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setTouched((prev) => ({
        ...prev,
        [target.name]: true
    }))

    // handle change to input
    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = target;

        setState((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                [name]: type === 'checkbox' ? checked : value
            },
        }));
    }

    // handle change to textarea
    const handleTextAreaChange = ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = target;

        setState((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                [name]: value
            },
        }));
    }

    const onSubmit = async () => {
        if(UseFormValidation(state).isValid) {
            setState((prev) => ({
                ...prev,
                isLoading: true,
            }));
    
            try {
                const { name, email, address, phone, message } = values;
                // await sendContactForm({...values, subject: `Messagem do(a) ${values.name}`});
                setState(initState);
            } catch(error: any) {
                setState((prev) => ({
                    ...prev,
                    isLoading: false,
                    errors: error.message,
                }));
            }
        } else {
            for(let error of Object.values(errors)) {
                console.error(error);
            }
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
                className={cx(touched.name && !values.name && style.is_invalid)}
                onBlur={onBlur}
            />

            <input
                type="text"
                name="address"
                id="address"
                required
                placeholder="Digite seu enderço"
                onChange={handleChange}
                value={values.address}
                className={cx(touched.address && !values.address && style.is_invalid)}
                onBlur={onBlur}
            />

            <input
                type="tel"
                name="phone"
                id="phone"
                required
                placeholder="Telefone (e.g +553899999999)"
                onChange={handleChange}
                value={values.phone}
                className={cx(touched.phone && !values.phone && style.is_invalid)}
                onBlur={onBlur}
            />

            <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Digite um e-mail valido"
                onChange={handleChange}
                value={values.email}
                className={cx(touched.email && !values.email && style.is_invalid)}
                onBlur={onBlur}
            />

            <textarea
                onChange={handleTextAreaChange}
                name="message"
                id="messageText"
                placeholder="Digite uma mesagem"
                value={values.message}
                className={cx(touched.message && !values.message && style.is_invalid)}
                onBlur={onBlur}
            ></textarea>

            <label htmlFor="terms">
                <input
                    type="checkbox"
                    name="terms"
                    id="terms"
                    required
                    checked={values.terms}
                    onChange={handleChange}
                />
                Eu aceito os <a href="#"><strong>termos de serviço</strong></a>
            </label>

            <ButttonGlobal
                value={isLoading ? <CircleNotch size={22} weight="bold" /> : "Enviar"}
                isLoading
                disabled={
                    !values.name || !values.email || !values.address || !values.phone
                }
                onClick={onSubmit}
            />
        </form>
    )
}