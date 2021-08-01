import styles from './styles.module.scss';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/client';


export function SignButton(){

  const [session] = useSession();
  console.log("🚀 ~ file: index.tsx ~ line 12 ~ SignButton ~ session", session)

  return session ? (

    <button type="button" className={styles.signButton} onClick={() => signOut() }>
      <Image width={35} height={35} src={session.user.image} alt="Foto do usuário" />
      Olá {session.user.name}
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.signButton} onClick={() => signIn('github') }>
      <FaGithub color="#FFB800"/>
      Entrar com github
    </button>
  )
}

