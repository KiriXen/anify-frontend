/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import Sidebar from "~/components/sidebar";

const Login: NextPage = () => {
    const [showError, setShowError] = useState(true);

    return (
        <>
            <Head>
                <title>{"Login"}</title>
                <meta name="title" content={"Login"} />
                <meta name="description" content={"The login feature has been removed and is no longer functional."} />

                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://anify.tv/login`} />
                <meta property="og:title" content={"Login"} />
                <meta property="og:description" content={"The login feature has been removed and is no longer functional."} />
                <meta property="og:image" content={""} />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={`https://anify.tv/login`} />
                <meta property="twitter:title" content={"Login"} />
                <meta property="twitter:description" content={"The login feature has been removed and is no longer functional."} />
                <meta property="twitter:image" content={""} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Sidebar active="home" />
            <Navbar active="home" />
            <main>
                <div className="mx-auto mb-8 mt-24 md:ml-24 md:mr-6">
                    <div className="mx-auto w-full max-w-[400px] rounded-md bg-background-light p-14 text-center text-white">
                        <h1 className="mb-14 text-3xl font-semibold text-main">Login</h1>
                        <p className="mb-4">
                            The login feature has been removed and is no longer functional. Please check back later for updates.
                        </p>
                    </div>
                    <div className={`fixed bottom-0 right-0 z-[2147483647] mr-5 mt-0 flex w-[300px] max-w-[100vw] list-none flex-col py-[25px] outline-none transition-all duration-500 ease-in-out ${showError ? "translate-x-0 opacity-100" : "translate-x-[120%] opacity-0"}`}>
                        <div className="grid grid-cols-[auto_max-content] items-center rounded-md bg-main-text px-2 py-2 pt-[15px] grid-areas-toast"
                             style={{ columnGap: "15px" }}>
                            <div className="text-md mb-[5px] font-medium text-black" style={{ gridRowStart: "title", gridColumnStart: "title", gridRowEnd: "title", gridColumnEnd: "title" }}>
                                Notice
                            </div>
                            <span className="mt-0 text-sm font-light text-gray-700" style={{ gridRowStart: "description", gridColumnStart: "description", gridRowEnd: "description", gridColumnEnd: "description" }}>
                                The login functionality is no longer available.
                            </span>
                            <button
                                type="button"
                                className="h-[25px] rounded-md border-[1px] border-main bg-gray-200 px-3 pr-[10px] pt-0 text-xs text-black transition-all duration-200 ease-in-out hover:bg-gray-300"
                                style={{ gridRowStart: "action", gridColumnStart: "action", gridRowEnd: "action", gridColumnEnd: "action" }}
                                onClick={() => {
                                    setShowError(false);
                                }}
                            >
                                Hide
                            </button>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
};

export default Login;
