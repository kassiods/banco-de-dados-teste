import { Hono } from 'hono'
import {cors} from 'hono/cors'
import usersRoute from './routes/users'
import loginRoute from './routes/login'
import { jwt } from 'hono/jwt'

const app = new Hono()

app.use(cors())

app.get('/', (c) => {
  return c.text('Opa eae!')
})

app.route("/login", loginRoute)

export default app