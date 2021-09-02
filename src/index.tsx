import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Cryptos",
          type: "deposit",
          category: "Investimentos",
          amount: 15000,
          createdAt: new Date("2021-09-01 09:00:00"),
        },
        {
          id: 2,
          title: "Stocks",
          type: "deposit",
          category: "Investimentos",
          amount: 40000,
          createdAt: new Date("2021-09-01 09:20:00"),
        },
        {
          id: 3,
          title: "New House",
          type: "withdraw",
          category: "Financiamento",
          amount: 2500,
          createdAt: new Date("2021-09-01 08:20:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
