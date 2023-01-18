/* eslint-disable @typescript-eslint/no-var-requires */
"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
const express = require("express")
const dotenv = require("dotenv")
const express_1 = require("express")
dotenv.config()
const app = express()
const route = (0, express_1.Router)()
route.get("/", (req, res) => {
  const { name = "World" } = req.query
  return res.status(200).json({
    success: true,
    message: "Sucesso!" + name
  })
})
app.use(route)
const port = process.env.PORT || 4000
app.listen(port, () => console.log(`tá rodando na porta ${port}`))
//# sourceMappingURL=index.js.map
