import { InferGetServerSidePropsType, GetServerSideProps, GetServerSidePropsContext } from 'next';
import { IRecruiter, Recruiter } from '@libs/domain/model';
import { DIContainer } from '@libs/application/DI';

interface IProps {
  recruiter: IRecruiter;
}

export const getServerSideProps: GetServerSideProps<Partial<IProps>> = async ({ query, res }: GetServerSidePropsContext) => {
  const id = typeof query.id === 'string' ? query.id : query.id[0];
  const recruiter = await DIContainer.recruiterRepo.retrieveFromTwitterId(id);
  return {
    props: {
      recruiter: recruiter.toInterface(),
    }
  };
}

export default (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const recruiter = new Recruiter(props.recruiter!);
  return (
    <div>
      <p>{recruiter!.name}</p>
    </div>
  )
}
