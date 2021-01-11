import { InferGetServerSidePropsType, GetServerSideProps, GetServerSidePropsContext } from 'next';
import { useAuth, useRecruiter } from '@modules/hooks';

interface IProps {
  id: string;
}

export const getServerSideProps: GetServerSideProps<Partial<IProps>> = async ({ query, res }: GetServerSidePropsContext) => {
  const id = typeof query.id === 'string' ? query.id : query.id[0];
  return {
    props: {
      id: id
    }
  }
}

export default (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {
    loading, error, recruiter
  } = useRecruiter(props.id!);
  const auth = useAuth();

  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>Error!!!</h1>
  }
  if (auth.user?.uid === recruiter?.id.value) {
    console.log("It's me!!!");
  }

  return <h1>{recruiter!.name}</h1>
}
