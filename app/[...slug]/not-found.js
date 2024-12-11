import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <div>The requested page doesn&apos;t exists. <Link href="/">Return Home</Link></div>
    </div>
  )
}