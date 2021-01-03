import Link from 'next/link'
import { Layout } from '../components/organisms/Layout'
import { DIContainer } from '@libs/application/DI';
import { CreateUserUseCase } from '@libs/application/usecase/CreateUserUseCase';

const IndexPage = () => (
  <Layout>
    <h1>Hello Next.js 👋</h1>
    <p>
      <button
        onClick={async () => {
          await CreateUserUseCase.execute();
        }}
      >
        ログイン
      </button>
      <button
        onClick={async () => {
          await DIContainer.authService.logout();
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
