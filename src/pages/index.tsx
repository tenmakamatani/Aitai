import Link from 'next/link'
import { Layout } from '../components/organisms/Layout'
import { AuthService } from '@libs/application/AuthService';

const IndexPage = () => (
  <Layout>
    <h1>Hello Next.js 👋</h1>
    <p>
      <button
        onClick={async () => {
          await AuthService.loginWithTwitter();
        }}
      >
        ログイン
      </button>
      <button
        onClick={async () => {
          await AuthService.logout();
        }}
      >
        ログアウト
      </button>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
