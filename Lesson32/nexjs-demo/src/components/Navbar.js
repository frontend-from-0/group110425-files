import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav>
      <ul className='flex gap-8 max-w-4xl mx-auto'>
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'/about'}>About</Link>
        </li>
        <li>
          <Link href={'/docs/app/getting-started/project-structure'}>Example Docs</Link>
        </li>
        <li>
          <Link href={'/blog/posts/12345'}>Blog Post</Link>
        </li>
      </ul>
    </nav>
  );
};
