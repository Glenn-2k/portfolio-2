import Footer from "../Footer";
import Header from "../Header";
import MainSection from "../MainSection";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <MainSection className="bg-slate-700" />
      <Footer />
    </div>
  );
}

export default Layout;
