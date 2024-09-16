import { it, expect, afterEach } from 'vitest';

import { User } from './hooks';

const email = 'ppuneet64@gmail.com'
let user = new User(email)
afterEach(() => {
  user = new User(email)
})
it("should update current email", () => {
  const emailDup = 'ppuneet641@gmail.com'
  expect(user.email).toBe(email)
  user.updateEmail(emailDup)
  expect(user.email).toBe(emailDup)
})

it("should have email property", () => {
  expect(user).toHaveProperty('email')
})

it("should clear email", () => {
  user.clearEmail()
  expect(user.email).toBe("")
})