export function getPaymentData(aim) {
    return fetch(aim)
      .then(data => data.json())
  }
  