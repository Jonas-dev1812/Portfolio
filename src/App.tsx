import "./App.css";
import Footer from "./components/footer";
import HeaderContent from "./components/headerContent";
import NavBarContent from "./components/navBarContent";

function App() {
  return (
    <div className="flex flex-col min-h-screen font-lexend">
      {/* <!-- Box 1: Navigation --> */}
      <nav className="absolute top-0 left-0 w-full py-4 flex justify-center space-x-12 text-lg z-30 tracking-wide">
        <NavBarContent />
      </nav>
      <header className="relative w-full h-screen">
        <HeaderContent />
      </header>

      <main className="flex-1 p-8 bg-neutral-800">
        <div className="max-w-6xl mx-auto space-y-6 ">
          <h2 className="text-3xl font-semibold">Hauptinhalt</h2>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            <div className="p-6 shadow rounded bg-neutral-900">
              Box 1 im Content
            </div>
            <div className="p-6 shadow rounded bg-neutral-900">
              Box 2 im Content
            </div>
            <div className="p-6 shadow rounded bg-neutral-900">
              Box 3 im Content
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
