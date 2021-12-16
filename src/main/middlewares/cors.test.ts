import request from 'supertest'
import app from '../config/app'

describe('Cors Middleware', () => {
  test('Should enable cors headers', async () => {
    app.get('/test_cors', (req, res) => {
      res.send()
    })

    await request(app).get('/test_cors')
      .expect('Access-Control-Allow-Origin', '*')
      .expect('Access-Control-Allow-Methods', '*')
      .expect('Access-Control-Allow-Headers', '*')
  })
})