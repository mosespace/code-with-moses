import Link from "next/link";

export default function Footer() {
  const footerLinks = [
    {
      linkTitle: "Contact",
      linkPath: "/conatct",
    },
    {
      linkTitle: "Terms Of Service",
      linkPath: "/terms-of-service",
    },
    {
      linkTitle: "Privacy Policy",
      linkPath: "/privacy-policy",
    },
  ];
  return (
    <footer className='bg-white overflow-hidden absolute right-0 left-0 bottom-0 lg:ml-[20%] flex flex-col gap-3 lg:flex-row justify-center lg:justify-between lg:items-center lg:gap-[8rem] py-[1.4rem] px-8 text-slate-500 text-xs'>
      <div className='font-semibold tracking-wide items-center flex gap-3'>
        <h2>© 2023 ENRA d.o.o. All rights reserved.</h2>
      </div>

      {/* Login button */}
      <div className='flex items-center gap-4 font-semibold'>
        {footerLinks.map((link, i) => (
          <Link key={i} href={link.linkPath}>
            {link.linkTitle}
          </Link>
        ))}
      </div>
    </footer>
  );
}
