import { Query } from './Query'
import { auth } from './Mutation/auth'
import { otp } from './Mutation/otp'
import { User } from './User'

export default {
  Query,
  Mutation: {
    ...auth,
    ...otp,
  },
  User,
}
