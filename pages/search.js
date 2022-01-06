import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";

export default function Search() {
  return (
    <div>
      <Header />

      <main className="flex ml-4">
        <section>
          <p className>300+ stays for 5 number of guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in Mars</h1>
          <div className="hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type Of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
          <section className="inline-flex md:hidden mb-5">
            <Menu />
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
}
