import Link from "next/link";
import { Mona_Sans } from "next/font/google";

const monaSans = Mona_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const Header = () => {
  return (
    <header
      className={`${monaSans.className} text-black fixed top-0 z-50 w-full bg-transparent`}
    >
      <div className="w-11/12 max-w-7xl mx-auto px-4 pt-6 md:pt-10">
        <nav className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo + Menu */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-7 text-[15px]">
            <h1 className="text-2xl font-bold md:pr-4">Marketalent</h1>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 text-center md:text-left">
              <Link className="pt-1" href="#">Your Team</Link>
              <Link className="pt-1" href="#">Solutions</Link>
              <Link className="pt-1" href="#">Blog</Link>
              <Link className="pt-1" href="#">Pricing</Link>
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-3 md:gap-5 items-center text-sm md:text-lg font-semibold text-white">
            <Link href="#">Log in</Link>
            <Link
              className="bg-black border-l-2 border-r-[3px] border-[#8c58fb] px-5 py-1.5 rounded-full shadow-staggered whitespace-nowrap"
              href="#"
            >
              Join Now
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
