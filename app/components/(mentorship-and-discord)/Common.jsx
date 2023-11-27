import Link from "next/link";

export default function Common({
  title,
  description,
  link,
  icon: Icon,
  linkTitle,
}) {
  return (
    <div className='px-8 flex flex-col gap-2'>
      <h2 className='font-bold text-4xl'>{title}</h2>
      <p>{description}</p>
      <Link
        href={link}
        className='bg-slate-200 text-black font-bold items-center w-full rounded-md px-3 py-3 flex gap-2 mt-4 justify-center text-xl'
      >
        <Icon className='w-7 h-7' />
        {linkTitle}
      </Link>
    </div>
  );
}
