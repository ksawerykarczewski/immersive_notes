import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './ActiveLink.module.scss';
import classNames from 'classnames';

function ActiveLink({ children, href }) {
    const router = useRouter();
    const onClick = (e) => {
        e.preventDefault();
        router.push(href);
    };

    return (
        <a href={href} onClick={onClick} className={classNames(styles.link, router.asPath === href ? styles.isActive : '')}>
            {children}
        </a>
    );
}

export default ActiveLink;
