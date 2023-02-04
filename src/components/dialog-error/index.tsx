import { inter } from "@/utils/_fonts";
import { Dialog } from "@headlessui/react";

import cx from "clsx";
import style from "./dialog-error.module.scss";
import { Warning, XCircle } from "phosphor-react";
import React, { Component, ReactElement } from "react";
import { PropsDialogError } from "@/@types/form";

class DialogError extends Component<PropsDialogError> {

    render(): ReactElement {
        return (
            <div
                className={cx(style.dialog, inter.className)}
            >
                <div className={style.dialogpanel}>
                    <XCircle size={22} color="#FFF" />
                    <p>{this.props.messageError}</p>
                </div>
            </div>
        )
    }
}

export default DialogError;