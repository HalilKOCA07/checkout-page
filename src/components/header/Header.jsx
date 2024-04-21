import { Collapse, initTWE } from "tw-elements";
import { useLoginContext } from "../../context/LoginProvider";

initTWE({ Collapse });



const Header = () => {
  const { loginIn, setLoginIn } = useLoginContext();
  const loggState = localStorage.getItem("user")

  return (
    // <!-- Main navigation container -->
    <nav
      class="relative flex w-full flex-nowrap items-center justify-between bg-zinc-50 py-2 text-neutral-500 shadow-dark-mild hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4"
      data-twe-navbar-ref
    >
      <div class="flex w-full flex-wrap items-center justify-between px-3">
        <div class="ms-2">
          <a class="text-xl text-black dark:text-white" href="/">
            Co-Developer
          </a>
        </div>
        {/* <!-- Hamburger button for mobile view --> */}
        <button
          class="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
          type="button"
          data-twe-collapse-init
          data-twe-target="#navbarSupportedContent3"
          aria-controls="navbarSupportedContent3"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <!-- Hamburger icon --> */}
          <span class="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </button>

        {/* <!-- Collapsible navbar container --> */}
        <div
          class="!visible mt-2 px-8 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
          id="navbarSupportedContent3"
          data-twe-collapse-item
        >
          {/* <!-- Left links --> */}
          <div
            class="list-style-none me-auto flex flex-col ps-0 lg:mt-1 lg:flex-row"
            data-twe-navbar-nav-ref
          >
            {/* <!-- Home link --> */}
            <div
              class="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2"
              data-twe-nav-item-ref
            >
              <a
                class="text-black dark:text-white lg:px-2"
                aria-current="page"
                href="/"
                data-twe-nav-link-ref
              >
                Home
              </a>
            </div>
            {/* <!-- Features link --> */}
            <div
              class="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
              data-twe-nav-item-ref
            >
              <a
                class="p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                href="/input"
                data-twe-nav-link-ref
              >
                Input
              </a>
            </div>
            {/* <!-- Pricing link --> */}
            <div
              class="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
              data-twe-nav-item-ref
            >
              <a
                class="p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                href="/products"
                data-twe-nav-link-ref
              >
                Products
              </a>
            </div>
            {/* <!-- Disabled link --> */}
            <div
              class="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
              data-twe-nav-link-ref
            >
              <a
                href="/about"
                class="p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
              >
                About
              </a>
            </div>
            <div
              class="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
              data-twe-nav-link-ref
            >
              <a
                href="/contact"
                class="p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
              >
                Contact
              </a>
            </div>
          </div>
          <div class="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0" data-twe-nav-link-ref>
            {!loggState ? (            <a
              href="/login"
              class="p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
            >
              Login
            </a>) : (            <a
              href="/login"
              onClick={() => localStorage.removeItem("user")}
              class="p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
            >
              LogOut
            </a>) }

          </div>
          {/* <!-- Left links --> */}
        </div>
        {/* <!-- Collapsible wrapper --> */}
      </div>
    </nav>
  );
};

export default Header;
