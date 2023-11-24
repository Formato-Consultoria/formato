'use client'
import { CircleNotch } from "@phosphor-icons/react";
import { createRef, useRef, useState } from "react";

import useFormValidation from "@/hooks/useFormValidation";
import ButttonGlobal from "@/components/button";
import { PropStateForm, PropValuesForm } from "@/@types/form";
import { sendContactForm } from "@/service/email";

import style from "../contact-section.module.scss";
import cx from "clsx";
import toast from "react-hot-toast";

import ReCAPTCHA from "react-google-recaptcha";

const initState: PropStateForm = {
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

const RECAPTCHA_SITE_KEY = '6Lc2G-gnAAAAANp-86UWfPb6KHGG6vImoWR6PN6J';

export function Form() {
    const [state, setState] = useState<PropStateForm>(initState);
    const [touched, setTouched] = useState<PropValuesForm>(initState.values);
    const [disabledButton, setDisabledButton] = useState(true);
    const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

    const { values, isLoading, errors } = state;

    const onBlur = ({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setTouched((prev) => ({
        ...prev,
        [target.name]: true
    }))

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

    const handleRecaptchaChange = (value: string | null) => {
        setRecaptchaValue(value);
        value && setDisabledButton(false);
    };

    const onSubmit = async () => {
        if(useFormValidation(state).isValid && (recaptchaValue != null)) {
            setState((prev) => ({
                ...prev,
                isLoading: true,
            }));

            try { 
                const { name, email, address, phone, message } = values;

                await toast.promise(
                    sendContactForm({
                        name,
                        email,
                        address,
                        phone,
                        message,
                        subject: `Messagem do(a) ${values.name}`
                    }),
                    {
                        loading: 'Enviando...',
                        success: <b>Enviado com sucesso!</b>,
                        error: <b>Houve algum erro no envio!</b>,
                    }, {position: "bottom-center"}
                );

                setState(initState);
                setTouched(initState.values);
            } catch(error: any) {
                setState((prev) => ({
                    ...prev,
                    isLoading: false,
                    errors: error.message,
                }));

                toast.error(error.message, {
                    position: "bottom-center"
                });
            }
        } else {
            for(let error of Object.values(errors)) {
                toast.error(error);
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
		Concordo em compartilhar meus dados com a <strong>Formato Consultoria</strong> para fins de comunicação e aceito seus termos de uso.
            </label>

            <div className={'flex flex-col'}>
                <ReCAPTCHA
                    style={{ margin: '0px 0px 15px' }}
                    sitekey={RECAPTCHA_SITE_KEY}
                    onChange={handleRecaptchaChange}
                />

                <ButttonGlobal
                    value={isLoading ? <CircleNotch size={22} weight="bold" /> : "Enviar"}
                    isLoading
                    onClick={onSubmit}
                    disabled={disabledButton}
                />
            </div>
        </form>
    )
}
