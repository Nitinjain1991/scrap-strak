<template>
    <div>
        <section class="bg-[#F8F7FC] pb-4 md:pb-24">
            <div class="md:container px-2 md:mx-auto md:px-4 ">
                <nav class="pt-8">
                    <ul class="flex justify-between items-center">
                        <li>
                            <NuxtLink to="/" class="text-orange font-medium text-xl md:text-2xl font-Futura">Lorem<span
                                    class="text-light-grey"> ipsum</span></NuxtLink>
                        </li>
                        <InterLinks />
                        <li>
                            <a href="#" class="font-Poppins font-medium text-sm md:text-lg text-light-grey">Supplier</a>
                            <Btnsmall label="LogIn"
                                class="ms-4 rounded-xl border-2 border-transparent bg-orange hover:border-orange hover:bg-transparent text-white hover:text-orange bg-light-orange" />
                        </li>
                    </ul>
                </nav>

                <h2
                    class="text-2xl md:text-6xl  font-Poppins font-semibold text-darken mt-10 text-center xl:text-start xl:mt-28">
                    Lorem ipsum dolor sit.
                </h2>
                <div class="grid jusify-center grid-cols-1 items-start xl:grid-cols-2">
                    <div class="pb-8 text-center xl:text-start">
                        <p class="font-Poppins font-normal text-sm md:text-lg text-light-black md:mt-4">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur adipisicing elit.
                            Aspernatur, suscipit?
                        </p>

                        <span class="flex justify-center xl:justify-start relative z-10 mt-6 xl:mt-6">
                            <Btnsuccess label="SignUp"
                                class="text-white text-lg md:text-xl rounded-xl hover:text-orange bg-orange border-2 border-transparent hover:border-orange hover:bg-transparent" />
                            <Btnsmall label="Learn More"
                                class="ms-3 md:ms-5 pt-3 md:pt-4 text-lg md:text-xl rounded-xl border-2 border-orange bg-transparent hover:border-orange hover:bg-orange text-orange hover:text-white bg-light-success" />
                        </span>

                        <form action="" class="main-selection mt-3 md:flex justify-center xl:justify-start flex-wrap">
                            <label class="cursor-pointer md:w-2/6" for="jobsearch">
                                <input required type="radio" name="flexRadioDefault" id="jobsearch" />
                                <div id="jobsearch1"
                                    class="jobsearch1 py-6 px-5 mt-8 border border-orange rounded-3xl 2xl:px-9">
                                    <svg class="mx-auto md:mx-0" width="37" height="37" viewBox="0 0 37 37" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1113_35731)">
                                            <path
                                                d="M29.8794 9.93049V5.78162C29.8794 5.12929 29.3584 4.60043 28.7159 4.60043H21.43V3.09251C21.43 1.38738 20.0633 0 18.3837 0H11.4957C9.81604 0 8.44946 1.38738 8.44946 3.09251V4.60043H1.16352C0.520949 4.60043 0 5.12935 0 5.78162V23.2206C0 25.6683 1.96145 27.6595 4.37226 27.6595H20.78C23.0825 31.5492 25.867 35.1213 26.3803 35.771C26.6013 36.0504 26.9351 36.2128 27.2879 36.2128C27.6407 36.2128 27.9745 36.0504 28.1955 35.771C29.0965 34.6308 37 24.4845 37 19.4227C37 14.8983 33.9786 11.0857 29.8794 9.93049ZM10.7765 3.09251C10.7765 2.68995 11.0992 2.36237 11.4957 2.36237H18.3837C18.7802 2.36237 19.1029 2.68995 19.1029 3.09251V4.60043H10.7765V3.09251ZM2.32704 6.9628H27.5523V9.57664C27.4637 9.57432 27.3771 9.56308 27.2879 9.56308C23.8092 9.56308 20.7607 11.4358 19.0451 14.2339H6.82599C4.34527 14.2339 2.32699 12.185 2.32699 9.6666L2.32704 6.9628ZM8.63326 16.9071V17.9012H7.65381V16.9071H8.63326ZM4.37226 25.2972C3.24453 25.2972 2.32699 24.3657 2.32699 23.2206V14.8646C3.17006 15.6176 4.19414 16.1634 5.32671 16.4224V19.0824C5.32671 19.7347 5.84766 20.2636 6.49023 20.2636H9.79672C10.4393 20.2636 10.9602 19.7347 10.9602 19.0824V16.5963H17.9871C17.7224 17.4926 17.5758 18.4402 17.5758 19.4227C17.5758 21.0215 18.3652 23.1278 19.4724 25.2972L4.37226 25.2972ZM27.2879 33.111C24.614 29.5478 19.9028 22.6086 19.9028 19.4227C19.9028 15.2888 23.2158 11.9255 27.2879 11.9255C31.36 11.9255 34.673 15.2888 34.673 19.4227C34.673 22.6057 29.9615 29.5467 27.2879 33.111Z"
                                                fill="#EA836E" />
                                            <path
                                                d="M27.2879 15.7266C25.2813 15.7266 23.6487 17.3838 23.6487 19.4209C23.6487 21.4581 25.2812 23.1153 27.2879 23.1153C29.2945 23.1153 30.927 21.4581 30.927 19.4209C30.927 17.3838 29.2945 15.7266 27.2879 15.7266ZM27.2879 20.7529C26.5644 20.7529 25.9758 20.1554 25.9758 19.4209C25.9758 18.6865 26.5644 18.0889 27.2879 18.0889C28.0114 18.0889 28.6 18.6865 28.6 19.4209C28.6 20.1554 28.0114 20.7529 27.2879 20.7529Z"
                                                fill="#EA836E" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1113_35731">
                                                <rect width="37" height="36.2128" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <h2 class="text-sm md:text-xl font-Poppins font-medium text-darken mt-3 mb-1">
                                        Lorem, ipsum.
                                    </h2>
                                    <p class="text-xs md:text-base font-Poppins font-normal text-light-one">
                                        Lorem ipsum dolor sit amet consectur.
                                    </p>
                                </div>
                            </label>
                            <label class="cursor-pointer md:w-2/6 md:ms-8" for="Practice">
                                <input required type="radio" name="flexRadioDefault" id="Practice" />
                                <div id="Practice1"
                                    class="Practice1 py-6 px-5 mt-8 border border-orange rounded-3xl 2xl:px-9">
                                    <svg class="mx-auto md:mx-0" width="37" height="37" viewBox="0 0 37 37" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1113_35731)">
                                            <path
                                                d="M29.8794 9.93049V5.78162C29.8794 5.12929 29.3584 4.60043 28.7159 4.60043H21.43V3.09251C21.43 1.38738 20.0633 0 18.3837 0H11.4957C9.81604 0 8.44946 1.38738 8.44946 3.09251V4.60043H1.16352C0.520949 4.60043 0 5.12935 0 5.78162V23.2206C0 25.6683 1.96145 27.6595 4.37226 27.6595H20.78C23.0825 31.5492 25.867 35.1213 26.3803 35.771C26.6013 36.0504 26.9351 36.2128 27.2879 36.2128C27.6407 36.2128 27.9745 36.0504 28.1955 35.771C29.0965 34.6308 37 24.4845 37 19.4227C37 14.8983 33.9786 11.0857 29.8794 9.93049ZM10.7765 3.09251C10.7765 2.68995 11.0992 2.36237 11.4957 2.36237H18.3837C18.7802 2.36237 19.1029 2.68995 19.1029 3.09251V4.60043H10.7765V3.09251ZM2.32704 6.9628H27.5523V9.57664C27.4637 9.57432 27.3771 9.56308 27.2879 9.56308C23.8092 9.56308 20.7607 11.4358 19.0451 14.2339H6.82599C4.34527 14.2339 2.32699 12.185 2.32699 9.6666L2.32704 6.9628ZM8.63326 16.9071V17.9012H7.65381V16.9071H8.63326ZM4.37226 25.2972C3.24453 25.2972 2.32699 24.3657 2.32699 23.2206V14.8646C3.17006 15.6176 4.19414 16.1634 5.32671 16.4224V19.0824C5.32671 19.7347 5.84766 20.2636 6.49023 20.2636H9.79672C10.4393 20.2636 10.9602 19.7347 10.9602 19.0824V16.5963H17.9871C17.7224 17.4926 17.5758 18.4402 17.5758 19.4227C17.5758 21.0215 18.3652 23.1278 19.4724 25.2972L4.37226 25.2972ZM27.2879 33.111C24.614 29.5478 19.9028 22.6086 19.9028 19.4227C19.9028 15.2888 23.2158 11.9255 27.2879 11.9255C31.36 11.9255 34.673 15.2888 34.673 19.4227C34.673 22.6057 29.9615 29.5467 27.2879 33.111Z"
                                                fill="#EA836E" />
                                            <path
                                                d="M27.2879 15.7266C25.2813 15.7266 23.6487 17.3838 23.6487 19.4209C23.6487 21.4581 25.2812 23.1153 27.2879 23.1153C29.2945 23.1153 30.927 21.4581 30.927 19.4209C30.927 17.3838 29.2945 15.7266 27.2879 15.7266ZM27.2879 20.7529C26.5644 20.7529 25.9758 20.1554 25.9758 19.4209C25.9758 18.6865 26.5644 18.0889 27.2879 18.0889C28.0114 18.0889 28.6 18.6865 28.6 19.4209C28.6 20.1554 28.0114 20.7529 27.2879 20.7529Z"
                                                fill="#EA836E" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1113_35731">
                                                <rect width="37" height="36.2128" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <h2 class="text-sm md:text-xl font-Poppins font-medium text-darken mt-3 mb-1">
                                        Lorem, ipsum.
                                    </h2>
                                    <p class="text-xs md:text-base font-Poppins font-normal text-light-one">
                                        Lorem ipsum dolor sit amet consectur.
                                    </p>
                                </div>
                            </label>
                            <label class="cursor-pointer md:w-2/6" for="BuildProfile">
                                <input required type="radio" name="flexRadioDefault" id="BuildProfile" />
                                <div id="BuildProfile1"
                                    class="BuildProfile1 py-6 px-5 mt-8 border border-orange rounded-3xl 2xl:px-9">
                                    <svg class="mx-auto md:mx-0" width="37" height="37" viewBox="0 0 37 37" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1113_35731)">
                                            <path
                                                d="M29.8794 9.93049V5.78162C29.8794 5.12929 29.3584 4.60043 28.7159 4.60043H21.43V3.09251C21.43 1.38738 20.0633 0 18.3837 0H11.4957C9.81604 0 8.44946 1.38738 8.44946 3.09251V4.60043H1.16352C0.520949 4.60043 0 5.12935 0 5.78162V23.2206C0 25.6683 1.96145 27.6595 4.37226 27.6595H20.78C23.0825 31.5492 25.867 35.1213 26.3803 35.771C26.6013 36.0504 26.9351 36.2128 27.2879 36.2128C27.6407 36.2128 27.9745 36.0504 28.1955 35.771C29.0965 34.6308 37 24.4845 37 19.4227C37 14.8983 33.9786 11.0857 29.8794 9.93049ZM10.7765 3.09251C10.7765 2.68995 11.0992 2.36237 11.4957 2.36237H18.3837C18.7802 2.36237 19.1029 2.68995 19.1029 3.09251V4.60043H10.7765V3.09251ZM2.32704 6.9628H27.5523V9.57664C27.4637 9.57432 27.3771 9.56308 27.2879 9.56308C23.8092 9.56308 20.7607 11.4358 19.0451 14.2339H6.82599C4.34527 14.2339 2.32699 12.185 2.32699 9.6666L2.32704 6.9628ZM8.63326 16.9071V17.9012H7.65381V16.9071H8.63326ZM4.37226 25.2972C3.24453 25.2972 2.32699 24.3657 2.32699 23.2206V14.8646C3.17006 15.6176 4.19414 16.1634 5.32671 16.4224V19.0824C5.32671 19.7347 5.84766 20.2636 6.49023 20.2636H9.79672C10.4393 20.2636 10.9602 19.7347 10.9602 19.0824V16.5963H17.9871C17.7224 17.4926 17.5758 18.4402 17.5758 19.4227C17.5758 21.0215 18.3652 23.1278 19.4724 25.2972L4.37226 25.2972ZM27.2879 33.111C24.614 29.5478 19.9028 22.6086 19.9028 19.4227C19.9028 15.2888 23.2158 11.9255 27.2879 11.9255C31.36 11.9255 34.673 15.2888 34.673 19.4227C34.673 22.6057 29.9615 29.5467 27.2879 33.111Z"
                                                fill="#EA836E" />
                                            <path
                                                d="M27.2879 15.7266C25.2813 15.7266 23.6487 17.3838 23.6487 19.4209C23.6487 21.4581 25.2812 23.1153 27.2879 23.1153C29.2945 23.1153 30.927 21.4581 30.927 19.4209C30.927 17.3838 29.2945 15.7266 27.2879 15.7266ZM27.2879 20.7529C26.5644 20.7529 25.9758 20.1554 25.9758 19.4209C25.9758 18.6865 26.5644 18.0889 27.2879 18.0889C28.0114 18.0889 28.6 18.6865 28.6 19.4209C28.6 20.1554 28.0114 20.7529 27.2879 20.7529Z"
                                                fill="#EA836E" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1113_35731">
                                                <rect width="37" height="36.2128" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <h2 class="text-sm md:text-xl font-Poppins font-medium text-darken mt-3 mb-1">
                                        Lorem, ipsum.
                                    </h2>
                                    <p class="text-xs md:text-base font-Poppins font-normal text-light-one">
                                        Lorem ipsum dolor sit amet consectur.
                                    </p>
                                </div>
                            </label>
                            <label class="cursor-pointer md:w-2/6 md:ms-8" for="Insight">
                                <input required type="radio" name="flexRadioDefault" id="Insight" />
                                <div id="Insight1"
                                    class="Insight1 py-6 px-5 mt-8 border border-orange rounded-3xl 2xl:px-9">
                                    <svg class="mx-auto md:mx-0" width="37" height="37" viewBox="0 0 37 37" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1113_35731)">
                                            <path
                                                d="M29.8794 9.93049V5.78162C29.8794 5.12929 29.3584 4.60043 28.7159 4.60043H21.43V3.09251C21.43 1.38738 20.0633 0 18.3837 0H11.4957C9.81604 0 8.44946 1.38738 8.44946 3.09251V4.60043H1.16352C0.520949 4.60043 0 5.12935 0 5.78162V23.2206C0 25.6683 1.96145 27.6595 4.37226 27.6595H20.78C23.0825 31.5492 25.867 35.1213 26.3803 35.771C26.6013 36.0504 26.9351 36.2128 27.2879 36.2128C27.6407 36.2128 27.9745 36.0504 28.1955 35.771C29.0965 34.6308 37 24.4845 37 19.4227C37 14.8983 33.9786 11.0857 29.8794 9.93049ZM10.7765 3.09251C10.7765 2.68995 11.0992 2.36237 11.4957 2.36237H18.3837C18.7802 2.36237 19.1029 2.68995 19.1029 3.09251V4.60043H10.7765V3.09251ZM2.32704 6.9628H27.5523V9.57664C27.4637 9.57432 27.3771 9.56308 27.2879 9.56308C23.8092 9.56308 20.7607 11.4358 19.0451 14.2339H6.82599C4.34527 14.2339 2.32699 12.185 2.32699 9.6666L2.32704 6.9628ZM8.63326 16.9071V17.9012H7.65381V16.9071H8.63326ZM4.37226 25.2972C3.24453 25.2972 2.32699 24.3657 2.32699 23.2206V14.8646C3.17006 15.6176 4.19414 16.1634 5.32671 16.4224V19.0824C5.32671 19.7347 5.84766 20.2636 6.49023 20.2636H9.79672C10.4393 20.2636 10.9602 19.7347 10.9602 19.0824V16.5963H17.9871C17.7224 17.4926 17.5758 18.4402 17.5758 19.4227C17.5758 21.0215 18.3652 23.1278 19.4724 25.2972L4.37226 25.2972ZM27.2879 33.111C24.614 29.5478 19.9028 22.6086 19.9028 19.4227C19.9028 15.2888 23.2158 11.9255 27.2879 11.9255C31.36 11.9255 34.673 15.2888 34.673 19.4227C34.673 22.6057 29.9615 29.5467 27.2879 33.111Z"
                                                fill="#EA836E" />
                                            <path
                                                d="M27.2879 15.7266C25.2813 15.7266 23.6487 17.3838 23.6487 19.4209C23.6487 21.4581 25.2812 23.1153 27.2879 23.1153C29.2945 23.1153 30.927 21.4581 30.927 19.4209C30.927 17.3838 29.2945 15.7266 27.2879 15.7266ZM27.2879 20.7529C26.5644 20.7529 25.9758 20.1554 25.9758 19.4209C25.9758 18.6865 26.5644 18.0889 27.2879 18.0889C28.0114 18.0889 28.6 18.6865 28.6 19.4209C28.6 20.1554 28.0114 20.7529 27.2879 20.7529Z"
                                                fill="#EA836E" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1113_35731">
                                                <rect width="37" height="36.2128" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <h2 class="text-sm md:text-xl font-Poppins font-medium text-darken mt-3 mb-1">
                                        Lorem, ipsum.
                                    </h2>
                                    <p class="text-xs md:text-base font-Poppins font-normal text-light-one">
                                        Lorem ipsum dolor sit amet consectur.
                                    </p>
                                </div>
                            </label>
                        </form>

                    </div>
                    <div>
                        <img src="../Assets/image/png/min-in-hat.png" alt="min-in-hat" class="w-[25%] mx-auto">
                        <div class="mx-auto relative z-10">
                            <div class="flex flex-col xl:flex-row justify-center items-center light-success-box ">
                                <img src="../Assets/image/png/small-beardo-man.png" alt="small-beardo-man"
                                    class="mx-auto mb-4 w-[30%] md:w-[10%] lg:mx-0 lg:mb-0">
                                <p
                                    class="font-Poppins font-normal text-base text-light-black text-center lg:ms-4 lg:text-start">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quaerat et ullam ratione
                                    maxime deleniti dignissimos similique quae magni quas eum earum, accusamus sint?</p>
                            </div>
                            <form action="" class="relative mt-7">
                                <input required type="text" placeholder="Hey would you like to search for a today....."
                                    class="w-full font-Futura font-bold md:text-base border border-orange focus:border-orange rounded-xl py-3 md:py-5 ps-5 pe-14 text-black placeholder:text-black placeholder:font-bold font-Poppins text-base font-bold">
                                <button class="absolute top-[12px] md:top-[24px] right-[4%] md:right-[3%]" type="submit">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M23.6954 0.291234C23.5604 0.156908 23.3899 0.0639048 23.2039 0.0231609C23.0179 -0.0175829 22.8241 -0.00437409 22.6454 0.0612345L0.645352 8.06123C0.45562 8.1332 0.292272 8.26118 0.177003 8.42819C0.0617345 8.59519 0 8.79331 0 8.99623C0 9.19916 0.0617345 9.39728 0.177003 9.56428C0.292272 9.73128 0.45562 9.85927 0.645352 9.93123L10.2454 13.7712L14.0854 23.3712C14.1575 23.5526 14.2812 23.7089 14.4411 23.8209C14.601 23.9328 14.7902 23.9955 14.9854 24.0012C15.1874 23.9971 15.3835 23.9318 15.5478 23.814C15.712 23.6962 15.8367 23.5313 15.9054 23.3412L23.9054 1.34123C23.9735 1.16431 23.9899 0.971665 23.9527 0.785758C23.9156 0.599851 23.8263 0.428345 23.6954 0.291234ZM14.9854 20.2012L12.1954 13.2012L16.9854 8.41123L15.5754 7.00123L10.7454 11.8312L3.78535 9.00123L21.3154 2.67123L14.9854 20.2012Z"
                                            fill="#EA836E" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- bottom link board -->
        <section class="bg-[#ea836e] py-4">
            <div class="md:container px-2 md:mx-auto md:px-4">
                <ul class="md:flex justify-between text-white">
                    <li class="flex justify-center">
                        <img src="../Assets/image/svg/verified-c.svg" alt="verified-c-image" class="me-2">
                        <a href="#" class="font-Poppins text-base font-normal whitespace-nowrap">Lorem, ipsum.</a>
                    </li>
                    <li class="mt-4 md:mt-0 text-center">
                        <a href="#" class="font-Poppins text-base font-normal mx-2">About</a>
                        <a href="#" class="font-Poppins text-base font-normal mx-2">Contact</a>
                        <a href="#" class="font-Poppins text-base font-normal mx-2">Terms & Service</a>
                        <a href="#" class="font-Poppins text-base font-normal mx-2">Privacy Policy</a>
                    </li>
                    <li class="flex justify-center mt-4 md:mt-0">
                        <a href="#" class="px-2"><img src="../Assets/image/svg/apple-icon.svg" alt="apple-icon"></a>
                        <a href="#" class="ps-2"><img src="../Assets/image/svg/playstore-icon.svg" alt="apple-icon"></a>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>
<script>
import Btnsmall from "../components/Btn-small.vue";
import Btnsuccess from "../components/Btn-big.vue";
import InterLinks from "../components/Inter-links.vue";

export default {
    name: "Stark-ai-v1-homapage",
    components: {
        Btnsmall,
        Btnsuccess,
        InterLinks
    },
};
</script>