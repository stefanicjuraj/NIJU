<script>
    import { page } from "$app/stores";
    // import icons
    import chevron from "../lib/icons/chevron-down-outline.svg";
    import projects from "../lib/icons/projects.svg";
    import aboutus from "../lib/icons/about-us.svg";
    import contact from "../lib/icons/contact.svg";
    import careers from "../lib/icons/careers.svg";
    import softwaredevelopment from "../lib/icons/software-development.svg";
    import webdevelopment from "../lib/icons/web-development.svg";
    import productdesign from "../lib/icons/product-design.svg";
    import digitalmarketing from "../lib/icons/digital-marketing.svg";
    import social from "../lib/icons/social.svg";
    import events from "../lib/icons/events.svg";
    import seo from "../lib/icons/seo.svg";
    import publicrelations from "../lib/icons/public-relations.svg";
    import docs from "../lib/icons/docs.svg";
    import blog from "../lib/icons/blog.svg";
    import press from "../lib/icons/press.svg";
    import slackdiscord from "../lib/icons/slack-discord.svg";
    import eventsesg from "../lib/icons/events-esg.svg";
    import support from "../lib/icons/support.svg";

</script>

<header>
    <nav
        class="bg-white border-gray-200 px-2 md:px-4 py-2.5 dark:bg-gray-900 mt-3"
    >
        <div
            class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto"
        >
            <a href="/" class="flex items-center">
                <span
                    class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
                >
                    <h1 class="text-title">
                        NIJU<span class="text-span">company</span>
                    </h1>
                </span>
            </a>
            <div class="flex items-center md:order-2">
                <a
                    href="/company/contact"
                    id="green"
                    class="text-white green hover:green focus:ring-1 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2"
                    >Contact us!</a
                >
                <button
                    data-collapse-toggle="mega-menu-icons"
                    type="button"
                    class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="mega-menu-icons"
                    aria-expanded="false"
                >
                    <ion-icon name="menu-outline" class="h-5 w-5" />
                </button>
            </div>
            <div
                id="mega-menu-icons"
                class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            >
                <ul
                    class="flex flex-col mt-4 text-sm font-medium md:flex-row md:space-x-8 md:mt-0"
                >
                    <li>
                        <button
                            id="mega-menu-icons-dropdown-button-3"
                            data-dropdown-toggle="mega-menu-icons-dropdown-3"
                            class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0"
                        >
                            Company
                            <img
                                src={chevron}
                                class="pl-2 h-6 w-6 text-black"
                                alt="test"
                            />
                        </button>
                        <div
                            id="mega-menu-icons-dropdown-3"
                            class="absolute z-10 grid hidden w-auto grid-cols-1 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-1 dark:bg-gray-700"
                        >
                            <div
                                class="p-8 pb-8 text-gray-900 md:pb-8 dark:text-white"
                            >
                                <ul
                                    class="space-y-5"
                                    aria-labelledby="mega-menu-icons-dropdown-button-3"
                                >
                                    <li
                                        aria-current={$page.url.pathname === "/"
                                            ? "page"
                                            : undefined}
                                    >
                                        <a
                                            href="/company/projects"
                                            class="flex items-center text-black dark:text-gray-400 hover:text-blue-600 group"
                                        >
                                            <img
                                                src={projects}
                                                class="mr-2 w-6 h-6 text-black"
                                                alt="test"
                                            />
                                            Projects
                                        </a>
                                    </li>
                                    <li
                                        aria-current={$page.url.pathname ===
                                        "/about-us"
                                            ? "page"
                                            : undefined}
                                    >
                                        <a
                                            href="/company/about-us"
                                            class="flex items-center text-black dark:text-gray-400 hover:text-blue-600 group"
                                        >
                                            <img
                                                src={aboutus}
                                                class="mr-2 w-6 h-6 text-black"
                                                alt="test"
                                            />
                                            About us
                                        </a>
                                    </li>
                                    <li
                                        aria-current={$page.url.pathname ===
                                        "/company/contact"
                                            ? "page"
                                            : undefined}
                                    >
                                        <a
                                            href="/company/contact"
                                            class="flex items-center text-black dark:text-gray-400 hover:text-blue-600 group"
                                        >
                                            <img
                                                src={contact}
                                                class="mr-2 w-6 h-6 text-black"
                                                alt="test"
                                            />
                                            Contact
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/company/careers"
                                            class="flex items-center text-black dark:text-gray-400 hover:text-blue-600 group"
                                        >
                                            <img
                                                src={careers}
                                                class="mr-2 w-6 h-6 text-black"
                                                alt="test"
                                            />
                                            Careers
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <button
                            id="mega-menu-icons-dropdown-button"
                            data-dropdown-toggle="mega-menu-icons-dropdown"
                            class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700"
                        >
                            Services
                            <img
                                src={chevron}
                                class="pl-2 h-6 w-6 text-black"
                                alt="test"
                            />
                        </button>
                        <div
                            id="mega-menu-icons-dropdown"
                            class="absolute z-10 grid hidden w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-2 dark:bg-gray-700"
                        >
                            <div
                                class="p-8 pb-8 text-gray-900 md:pb-8 dark:text-white"
                            >
                                <ul
                                    class="space-y-5"
                                    aria-labelledby="mega-menu-icons-dropdown-button"
                                >
                                    <li>
                                        <a
                                            href="/services/software-development"
                                            class="flex items-center text-black dark:text-gray-400 hover:text-blue-600 group"
                                        >
                                            <img
                                                src={softwaredevelopment}
                                                class="mr-2 w-6 h-6 text-black"
                                                alt="test"
                                            />
                                            <b>Software Development</b>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/services/web-development"
                                            class="flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-900 group"
                                        >
                                            <img
                                                src="../src/lib/icons/web-development.svg"
                                                class="mr-2 w-6 h-6 text-black"
                                                alt="test"
                                            />
                                            Web development
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/services/web-design"
                                            class="flex items-center text-gray-500 hover:text-gray-900 group"
                                        >
                                            <img
                                                src={webdevelopment}
                                                class="mr-2 w-6 h-6 text-black"
                                                alt="test"
                                            />
                                            Web design
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/services/product-design"
                                            class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 group"
                                        >
                                            <img
                                                src={productdesign}
                                                class="mr-2 w-6 h-6 text-black"
                                                alt="test"
                                            />
                                            Product design
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div
                                class="p-8 pb-8 text-gray-900 md:pb-8 dark:text-white"
                            >
                                <ul class="space-y-5">
                                    <li>
                                        <a
                                            href="/services/digital-marketing"
                                            class="flex items-center text-black dark:text-gray-400 hover:text-blue-600 group"
                                        >
                                        <img
                                        src={digitalmarketing}
                                        class="mr-2 w-6 h-6 text-black"
                                        alt="test"
                                    />
                                            <b>Digital Marketing</b>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/services/social"
                                            class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 group"
                                        >
                                            <img
                                                src={social}
                                                class="mr-2 w-6 h-6 text-black"
                                                alt="test"
                                            />
                                            Social
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/services/events"
                                            class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 group"
                                        >
                                            <img
                                                src={events}
                                                class="mr-2 w-6 h-6 text-black"
                                                alt="test"
                                            />
                                            Events
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/services/seo"
                                            class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 group"
                                        >
                                            <img
                                                src={seo}
                                                class="mr-2 w-6 h-6 text-black"
                                                alt="test"
                                            />
                                            SEO
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/services/public-relations"
                                            class="flex items-center text-black dark:text-gray-400 hover:text-blue-600 group"
                                        >
                                            <img
                                                src={publicrelations}
                                                class="mr-2 w-6 h-6 text-black"
                                                alt="test"
                                            />
                                            <b>Public Relations </b>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <button
                            id="mega-menu-icons-dropdown-button-1"
                            data-dropdown-toggle="mega-menu-icons-dropdown-1"
                            class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700"
                        >
                            Resources
                            <img
                                src={chevron}
                                class="pl-2 h-6 w-6 text-black"
                                alt="test"
                            />
                        </button>
                        <div
                            id="mega-menu-icons-dropdown-1"
                            class="absolute z-10 grid hidden w-auto grid-cols-1 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-1 dark:bg-gray-700"
                        >
                            <div
                                class="p-8 pb-8 text-gray-900 md:pb-8 dark:text-white"
                            >
                                <ul
                                    class="space-y-5"
                                    aria-labelledby="mega-menu-icons-dropdown-button"
                                >
                                    <li>
                                        <a
                                            href="/documentation"
                                            class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 group"
                                        >
                                            <img
                                                src={docs}
                                                class="mr-2 w-6 h-6 text-black"
                                                alt="test"
                                            />
                                            Docs
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/resources/blog"
                                            class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 group"
                                        >
                                            <img
                                                src={blog}
                                                class="mr-2 w-6 h-6 text-black"
                                                alt="test"
                                            />
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/resources/press"
                                            class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 group"
                                        >
                                            <img
                                                src={press}
                                                class="mr-2 w-6 h-6 text-black"
                                                alt="test"
                                            />
                                            Press
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <button
                            id="mega-menu-icons-dropdown-button-2"
                            data-dropdown-toggle="mega-menu-icons-dropdown-2"
                            class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700"
                        >
                            Community
                            <img
                                src={chevron}
                                class="pl-2 h-6 w-6 text-black"
                                alt="test"
                            />
                        </button>
                        <div
                            id="mega-menu-icons-dropdown-2"
                            class="absolute z-10 grid hidden w-auto grid-cols-1 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-1 dark:bg-gray-700"
                        >
                            <div
                                class="p-8 pb-8 text-gray-900 md:pb-8 dark:text-white"
                            >
                                <ul
                                    class="space-y-5"
                                    aria-labelledby="mega-menu-icons-dropdown-button-2"
                                >
                                    <li>
                                        <a
                                            href="/community/slack-discord"
                                            class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 group"
                                        >
                                            <img
                                                src={slackdiscord}
                                                class="mr-2 w-6 h-6 text-black"
                                                alt="test"
                                            />
                                            Slack / Discord
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/community/events-esg"
                                            class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 group"
                                        >
                                            <img
                                                src={eventsesg}
                                                class="mr-2 w-6 h-6 text-black"
                                                alt="test"
                                            />
                                            Events & ESG
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/community/support"
                                            class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 group"
                                        >
                                            <img
                                                src={support}
                                                class="mr-2 w-6 h-6 text-black"
                                                alt="test"
                                            />
                                            Support
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <!-- <li>
                        <a href="/"
                            class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700">Docs</a>
                    </li> -->
                </ul>
            </div>
        </div>
    </nav>
</header>
