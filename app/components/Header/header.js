import Image from 'next/image';
import Link from 'next/link';

export default async function Header() {
  
    return (
     <div>
        <Link href="/"><Image src={""} alt='LOGO'/></Link>
     </div>
    );
  }
  