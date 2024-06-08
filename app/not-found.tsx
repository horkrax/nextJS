import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className=" w-full bg-red-500 pt-2 pb-2">
      <h2>Not Found</h2>
      <p>Táto stránka nebola nájdená</p>
      <Link href="/" className=" text-white underline">Return Home</Link>
    </div>
  )
}