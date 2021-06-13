import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IconButton(props) {
    return (
        <a
            href={props.href}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
        >
            <FontAwesomeIcon className="social-icon" icon={props.icon} />
        </a>
    )
}