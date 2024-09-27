export const Light = {
    Main: () => (
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-gray-400 dark:bg-gray-500/75 opacity-20 blur-[100px]"></div>
    ),
    // -- --- --- -- Tech
    Flutter: () => (
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-sky-400 dark:bg-sky-500/75 opacity-20 blur-[100px]"></div>
    ),
    Astro: () => (
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-orange-400 dark:bg-orange-500/75 opacity-20 blur-[100px]"></div>
    ),

};