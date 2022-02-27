import React from 'react';
import styleComponent from './footer.module.scss';

export default function Footer() {
    return (
        <footer className={styleComponent.footer}>
            <div className={styleComponent.wrapper}>
                <h3 className={styleComponent.h3}>THANKS FOR VISITING</h3>
                <p className={styleComponent.p}>© 2021 #ReactMarathon.</p>
            </div>
        </footer>
    )
};