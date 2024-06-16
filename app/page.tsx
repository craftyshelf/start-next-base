export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-blue-600 p-4 text-white">
        <h1 className="text-xl">Welcome, User</h1>
      </header>
      <div className="flex flex-1">
        <aside className="w-64 bg-gray-800 p-4 text-white">
          <nav>
            <ul>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Link 1
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Link 2
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Link 3
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="flex-1 p-4">
          <h2 className="mb-4 text-2xl font-bold">Main Content Area</h2>
          <p>This is where the main content will go.</p>
        </main>
      </div>
    </div>
  );
}
