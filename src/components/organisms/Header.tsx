import { DIContainer } from '@libs/application/DI';
import { CreateUserUseCase } from '@libs/application/usecase/CreateUserUseCase';
import { useAuth } from '@modules/hooks';

export const Header: React.FC = () => {
  const auth = useAuth();
  
  return (
    <header>
      {auth.user
        ? <button
          onClick={() => {
            DIContainer.authService.logout();
          }}
        >
          ログアウト
        </button>
        : <button
          onClick={() => {
            CreateUserUseCase.execute();
          }}
        >
          ログイン
        </button>
      }
    </header>
  )
}
