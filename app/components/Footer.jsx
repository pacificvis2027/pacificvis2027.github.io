import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-8">
      <div className="container-page text-center text-lg text-slate-500">
        <p>
          Contact:{' '}
          <a href="mailto:pacificvis27@gmail.com" className="link">
            pacificvis27@gmail.com
          </a>
          {' · '}
          <Link href="/contact/" className="link">
            Contact page
          </Link>
        </p>
        <p className="mt-2">
          © 2027 IEEE Pacific Visualization Conference · Busan, South Korea
        </p>
      </div>
    </footer>
  );
}
