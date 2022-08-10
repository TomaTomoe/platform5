export function getPaymentData() {
    return fetch('/getPayment')
      .then(data => data.json())
  }
  