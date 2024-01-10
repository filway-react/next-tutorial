import { UserInfo } from '@/components/user-info'
import { currentUser } from '@/lib/auth'
import type { NextPage } from 'next'

const ServerPage: NextPage = async () => {
  const user = await currentUser()

  return <UserInfo user={user} label="💻 Server component" />
}

export default ServerPage
