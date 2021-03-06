export default function Header() {
  return <header className="container mx-auto flex justify-between p-5">
      <h1>Logo Image</h1>
      <nav className="flex justify-between items-center space-x-8 font-bold">
          <a className="hover:text-red-600 transition-colors dark:text-white" href="#about">About</a>
          <a className="hover:text-red-600 transition-colors dark:text-white" href="#services">Services</a>
          <a className="hover:text-red-600 transition-colors dark:text-white" href="#posts">In The News</a>
          <a className="hover:text-red-600 transition-colors dark:text-white" href="#posts">1-800-LAW-STUFF</a>
          <a className="px-6 py-2 rounded bg-red-600 hover:text-red-600 hover:outline hover:bg-transparent transition-all" href="#contact">Contact</a>
      </nav>
  </header>;
}
