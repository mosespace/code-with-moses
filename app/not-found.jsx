import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className='min-h-full px-8 w-full flex flex-grow items-center justify-center'>
        <div className='rounded-lg bg-slate-950  p-8 text-center shadow-xl'>
          <h1 className='mb-4 text-4xl font-bold text-slate-50'>404</h1>
          <p className='text-gray-600'>
            Oops! The page you are browsed could not be found 😥.
          </p>
          <Link
            href='/'
            className='mt-4 inline-block rounded bg-amber-400 px-4 py-2 font-semibold text-white hover:bg-amber-500'
          >
            Return Back To Home
          </Link>
        </div>
      </div>
    </>
  );
}
