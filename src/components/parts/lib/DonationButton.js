import React, { useEffect, useState } from "react";
import { getPaymentData } from '../../../services/getPeymentData';

export default function DonationButton({style, className, title, aim}) {
    const [paymentData, setPaymentData] = useState([]);

    useEffect(() => {
        getPaymentData(aim)
          .then(data => {
            setPaymentData(data);
          })
          .catch(e => console.error(e))
      }, [aim])

    return (
        <form method="POST" action="https://www.liqpay.ua/api/3/checkout" 
            accept-charset="utf-8">
            <input type="hidden" name="data" value={paymentData.data}/>
            <input type="hidden" name="signature" value={paymentData.signature}/>
            <button type="submit"
                style={style}
                className={`text-white bg-orange uppercase font-bold px-[40px] h-12 text-lg text-center ${className}`}
                >{title}</button>
        </form>
    );
}
