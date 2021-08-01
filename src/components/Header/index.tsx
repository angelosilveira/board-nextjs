import styles from './styles.module.scss';
import Link from 'next/link';
import { SignButton } from '../SignButton';
import Image from 'next/image';
import logo from '../../../public/images/logo.svg';


export function Header(){
  return(
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Link href="/">
          <a>
            <Image src={logo} alt="" />
          </a>
        </Link>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/board">Meu board</Link>
        </nav>
        <SignButton />
      </div>
    </header>
  )
}