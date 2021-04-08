const express = require('express');
const crypto = require('crypto');
const router = express.Router();

router.get("/api/something", (req, res) => {
  res.json({ status: "OK" })
})


router.post("/epayco/confirmation", (req, res) => {

  const p_cust_id_cliente = '513409';
  const p_key = '7b7246effa7d528a496888901a4d43f5b0305309';
  const x_ref_payco = req.query['x_ref_payco'];
  const x_transaction_id = req.query['x_transaction_id'];
  const x_amount = req.query['x_amount'];
  const x_currency_code = req.query['x_currency_code'];
  const x_signature = req.query['x_signature'];

  const str = `${p_cust_id_cliente}^${p_key}^${x_ref_payco}^${x_transaction_id}^${x_amount}^${x_currency_code}`;
  var hash = crypto.createHash('sha256').update(str).digest('hex');
  if (hash != x_signature) {
    res.sendStatus(422);
    return;
  }
  const x_cod_response = req.query['x_cod_response'];
  switch (x_cod_response) {
    case 1:
      console.log("transacción aceptada");
      break;
    case 2:
      console.log("transacción rechazada");
      break;
    case 3:
      console.log("transacción pendiente");
      break;
    case 4:
      console.log("transacción fallida");
      break;
  }
  res.send("OK");
})

module.exports = router;