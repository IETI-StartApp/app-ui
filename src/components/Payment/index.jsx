import React, { useEffect } from 'react';

export default function PayButton({amount, projectname, currency, country}) {

    useEffect(() => {
        const s = document.createElement('script');
        s.src = "https://checkout.epayco.co/checkout.js";
        s.classList.add("epayco-button");
        s.setAttribute('data-epayco-key', "705b5bed02e3e22f550dfc97fdb2de2a");
        s.setAttribute('data-epayco-private-key', "76fe4aaa1859a5e172a4ccecca6d6d27");
        s.setAttribute('data-epayco-amount', amount);
        s.setAttribute('data-epayco-name', "Inversión");
        s.setAttribute('data-epayco-description', projectname);
        s.setAttribute('data-epayco-currency', currency);
        s.setAttribute('data-epayco-country', country);
        s.setAttribute('data-epayco-test', "true");
        s.setAttribute('data-epayco-external', "false");
        s.setAttribute('data-epayco-response', "http://localhost:3000/epayco/response");
        s.setAttribute('data-epayco-confirmation', "http://localhost:3000/epayco/confirmation");
        document.getElementById("PayButtonDiv").append(s);
    }, [amount, projectname, currency, country]);

    return (
        <div id="PayButtonDiv" />
    );
}
