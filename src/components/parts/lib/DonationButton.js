import React, { useEffect, useState } from "react";
import { getPaymentData } from '../../../services/getPeymentData';

export default function DonationButton({style, className}) {
    const [paymentData, setPaymentData] = useState([]);

    useEffect(() => {
        getPaymentData()
          .then(data => {
            setPaymentData(data)
          })
      }, [])

    return (
        <form method="POST" action="https://www.liqpay.ua/api/3/checkout" 
            accept-charset="utf-8">
            <input type="hidden" name="data" value={paymentData.data}/>
            <input type="hidden" name="signature" value={paymentData.signature}/>
            <input type="image" src="//static.liqpay.ua/buttons/p1ru.radius.png" hidden/>
            <button type="submit"
                style={style}
                className={`text-white bg-orange uppercase font-bold px-[50px] h-16 text-xl text-center ${className}`}
                >Donate</button>
        </form>
    );
}
