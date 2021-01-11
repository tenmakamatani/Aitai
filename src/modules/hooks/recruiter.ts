import { useState, useEffect } from 'react';
import { Recruiter } from '@libs/domain/model';
import { DIContainer } from '@libs/application/DI';

export const useRecruiter = (twitterId: string) => {
  const [status, setStatus] = useState<{
    loading: boolean;
    error?: boolean;
    recruiter?: Recruiter;
  }>({
    loading: true
  });

  useEffect(() => {
    DIContainer.recruiterRepo.retrieveFromTwitterId(twitterId)
      .then((recruiter) => {
        setStatus({
          loading: false,
          recruiter: recruiter
        });
      }).catch((e) => {
        console.log(e);
        setStatus({
          loading: false,
          error: true,
        })
      });
  }, []);

  return { ...status, fetch };
}
