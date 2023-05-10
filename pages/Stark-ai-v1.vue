<template>
    <div>
        <section class="bg-white pb-12">
            <div class="md:container px-2 md:mx-auto md:px-4 ">
                <nav class="pt-8">
                    <ul class="flex justify-between items-center">
                        <li>
                            <NuxtLink to="/" class="text-light-white font-medium text-xl md:text-2xl font-Futura">Lorem<span
                                    class="text-light-grey">,ipsum.</span></NuxtLink>
                        </li>
                        <InterLinks />
                        <li>
                            <a href="#" class="font-Futura font-normal text-xl text-light-white">Employer</a>
                            <Btnsmall label="LogIn"
                                class="font-Futura font-medium text-white hover:text-light-white rounded-full bg-light-white hover:bg-transparent border-2 border-transparent hover:border-light-white ms-4" />
                        </li>
                    </ul>
                </nav>

                <div class="grid grid-cols-1 xl:grid-cols-8 md:mt-14">
                    <div class="order-2 xl:col-span-2 xl:order-1">
                        <div class="px-6 py-8 bg-light-white w-full md:w-2/3 relative text-center rounded-3xl mt-12">
                            <svg class="mx-auto" width="47" height="46" viewBox="0 0 47 46" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M37.9549 12.6144V7.34422C37.9549 6.51558 37.2931 5.84379 36.4769 5.84379H27.2219V3.92833C27.2219 1.76235 25.4859 0 23.3522 0H14.6027C12.469 0 10.7331 1.76235 10.7331 3.92833V5.84379H1.47799C0.661746 5.84379 0 6.51566 0 7.34422V29.4964C0 32.6057 2.49157 35.1351 5.55396 35.1351H26.3962C29.321 40.076 32.8581 44.6135 33.5101 45.4388C33.7908 45.7938 34.2149 46 34.663 46C35.1111 46 35.5352 45.7938 35.8159 45.4388C36.9605 43.9904 47 31.102 47 24.6721C47 18.9249 43.162 14.0819 37.9549 12.6144ZM13.6891 3.92833C13.6891 3.41696 14.099 3.00085 14.6027 3.00085H23.3522C23.8559 3.00085 24.2658 3.41696 24.2658 3.92833V5.84379H13.6891V3.92833ZM2.95597 8.84464H34.9989V12.1649C34.8864 12.162 34.7763 12.1477 34.663 12.1477C30.2442 12.1477 26.3717 14.5266 24.1924 18.0809H8.67086C5.51966 18.0809 2.9559 15.4782 2.9559 12.2792L2.95597 8.84464ZM10.9666 21.4766V22.7393H9.72241V21.4766H10.9666ZM5.55396 32.1342C4.12143 32.1342 2.9559 30.951 2.9559 29.4964V18.8821C4.02683 19.8385 5.32769 20.5319 6.76637 20.8609V24.2398C6.76637 25.0685 7.42811 25.7403 8.24435 25.7403H12.4445C13.2607 25.7403 13.9225 25.0685 13.9225 24.2398V21.0818H22.8485C22.5122 22.2204 22.326 23.424 22.326 24.6721C22.326 26.703 23.3287 29.3785 24.7353 32.1343L5.55396 32.1342ZM34.663 42.0599C31.2664 37.5337 25.282 28.7191 25.282 24.672C25.282 19.4209 29.4904 15.1485 34.663 15.1485C39.8356 15.1485 44.044 19.4209 44.044 24.672C44.044 28.7154 38.0592 37.5323 34.663 42.0599Z"
                                    fill="#FFFFFF" />
                            </svg>


                            <h2 class="font-Futura font-medium text-xl text-darken">Lorem, ipsum.</h2>
                            <p class="font-Futura font-normal text-xl text-darken">Lorem, ipsum dolor sit amet
                                consectetur.
                            </p>
                            <a href="#"
                                class="w-11 h-11  bg-[#3F4238] inline-block flex items-center justify-center text-xl rounded-full text-white absolute left-[50%] bottom-[-10%] translate-x-[-50%]">
                                <img src="../Assets/image/svg/right-arrow.svg" alt="right-arrow"></a>
                        </div>
                        <div
                            class="px-6 py-8 bg-light-white w-full md:w-2/3 relative text-center rounded-3xl md:ms-auto mt-10 md:mt-12">
                            <svg class="mx-auto" width="47" height="46" viewBox="0 0 47 46" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M37.9549 12.6144V7.34422C37.9549 6.51558 37.2931 5.84379 36.4769 5.84379H27.2219V3.92833C27.2219 1.76235 25.4859 0 23.3522 0H14.6027C12.469 0 10.7331 1.76235 10.7331 3.92833V5.84379H1.47799C0.661746 5.84379 0 6.51566 0 7.34422V29.4964C0 32.6057 2.49157 35.1351 5.55396 35.1351H26.3962C29.321 40.076 32.8581 44.6135 33.5101 45.4388C33.7908 45.7938 34.2149 46 34.663 46C35.1111 46 35.5352 45.7938 35.8159 45.4388C36.9605 43.9904 47 31.102 47 24.6721C47 18.9249 43.162 14.0819 37.9549 12.6144ZM13.6891 3.92833C13.6891 3.41696 14.099 3.00085 14.6027 3.00085H23.3522C23.8559 3.00085 24.2658 3.41696 24.2658 3.92833V5.84379H13.6891V3.92833ZM2.95597 8.84464H34.9989V12.1649C34.8864 12.162 34.7763 12.1477 34.663 12.1477C30.2442 12.1477 26.3717 14.5266 24.1924 18.0809H8.67086C5.51966 18.0809 2.9559 15.4782 2.9559 12.2792L2.95597 8.84464ZM10.9666 21.4766V22.7393H9.72241V21.4766H10.9666ZM5.55396 32.1342C4.12143 32.1342 2.9559 30.951 2.9559 29.4964V18.8821C4.02683 19.8385 5.32769 20.5319 6.76637 20.8609V24.2398C6.76637 25.0685 7.42811 25.7403 8.24435 25.7403H12.4445C13.2607 25.7403 13.9225 25.0685 13.9225 24.2398V21.0818H22.8485C22.5122 22.2204 22.326 23.424 22.326 24.6721C22.326 26.703 23.3287 29.3785 24.7353 32.1343L5.55396 32.1342ZM34.663 42.0599C31.2664 37.5337 25.282 28.7191 25.282 24.672C25.282 19.4209 29.4904 15.1485 34.663 15.1485C39.8356 15.1485 44.044 19.4209 44.044 24.672C44.044 28.7154 38.0592 37.5323 34.663 42.0599Z"
                                    fill="#FFFFFF" />
                            </svg>


                            <h2 class="font-Futura font-medium text-xl text-darken">Lorem, ipsum.</h2>
                            <p class="font-Futura font-normal text-xl text-darken">Lorem, ipsum dolor sit amet
                                consectetur.
                            </p>
                            <a href="#"
                                class="w-11 h-11  bg-[#3F4238] inline-block flex items-center justify-center text-xl rounded-full text-white absolute left-[50%] bottom-[-10%] translate-x-[-50%]">
                                <img src="../Assets/image/svg/right-arrow.svg" alt="right-arrow"></a>
                        </div>
                    </div>
                    <div class="text-center order-1 mt-10 lg:mt-0 xl:col-span-4 xl:order-2">
                        <h2 class="font-bold font-Futura text-4xl md:text-5xl text-darken">
                            Lorem ipsum dolor sit.
                        </h2>
                        <p class="font-Futura font-normal text-xl text-darken mt-2">
                            Lorem ipsum dolor sit, amet consectetur adipisicing. Voluptate, voluptates!
                        </p>

                        <span class="flex justify-center relative z-10 mt-6">
                            <Btnsmall label="Sign Up"
                                class="font-Futura font-normal text-white rounded-full bg-light-white hover:bg-transparent text-white hover:text-light-white border-2 border-transparent hover:border-light-white" />
                            <Btnsmall label="Learn More"
                                class="font-Futura font-normal text-white rounded-full bg-[#3F4238] hover:bg-transparent text-white hover:text-[#3F4238] border-2 border-transparent hover:border-[#3F4238] ms-4" />
                        </span>

                        <div class="mt-28 2xl:mt-20 relative">
                            <img class="mx-auto relative z-10 w-[30%]" src="../Assets/image/png/min-in-hat.png"
                                alt="man-in-hat">
                            <img class="absolute top-[-25%] left-0 w-full" src="../Assets/image/svg/bg-shadow.svg"
                                alt="bg-shadow">
                        </div>

                    </div>
                    <div class="order-3 xl:col-span-2">
                        <div
                            class="px-6 py-8 bg-light-white w-full md:w-2/3 relative text-center rounded-3xl ms-auto mt-10 md:mt-12">
                            <svg class="mx-auto" width="47" height="46" viewBox="0 0 47 46" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M37.9549 12.6144V7.34422C37.9549 6.51558 37.2931 5.84379 36.4769 5.84379H27.2219V3.92833C27.2219 1.76235 25.4859 0 23.3522 0H14.6027C12.469 0 10.7331 1.76235 10.7331 3.92833V5.84379H1.47799C0.661746 5.84379 0 6.51566 0 7.34422V29.4964C0 32.6057 2.49157 35.1351 5.55396 35.1351H26.3962C29.321 40.076 32.8581 44.6135 33.5101 45.4388C33.7908 45.7938 34.2149 46 34.663 46C35.1111 46 35.5352 45.7938 35.8159 45.4388C36.9605 43.9904 47 31.102 47 24.6721C47 18.9249 43.162 14.0819 37.9549 12.6144ZM13.6891 3.92833C13.6891 3.41696 14.099 3.00085 14.6027 3.00085H23.3522C23.8559 3.00085 24.2658 3.41696 24.2658 3.92833V5.84379H13.6891V3.92833ZM2.95597 8.84464H34.9989V12.1649C34.8864 12.162 34.7763 12.1477 34.663 12.1477C30.2442 12.1477 26.3717 14.5266 24.1924 18.0809H8.67086C5.51966 18.0809 2.9559 15.4782 2.9559 12.2792L2.95597 8.84464ZM10.9666 21.4766V22.7393H9.72241V21.4766H10.9666ZM5.55396 32.1342C4.12143 32.1342 2.9559 30.951 2.9559 29.4964V18.8821C4.02683 19.8385 5.32769 20.5319 6.76637 20.8609V24.2398C6.76637 25.0685 7.42811 25.7403 8.24435 25.7403H12.4445C13.2607 25.7403 13.9225 25.0685 13.9225 24.2398V21.0818H22.8485C22.5122 22.2204 22.326 23.424 22.326 24.6721C22.326 26.703 23.3287 29.3785 24.7353 32.1343L5.55396 32.1342ZM34.663 42.0599C31.2664 37.5337 25.282 28.7191 25.282 24.672C25.282 19.4209 29.4904 15.1485 34.663 15.1485C39.8356 15.1485 44.044 19.4209 44.044 24.672C44.044 28.7154 38.0592 37.5323 34.663 42.0599Z"
                                    fill="#FFFFFF" />
                            </svg>


                            <h2 class="font-Futura font-medium text-xl text-darken">Lorem, ipsum.</h2>
                            <p class="font-Futura font-normal text-xl text-darken">Lorem, ipsum dolor sit amet
                                consectetur.
                            </p>
                            <a href="#"
                                class="w-11 h-11  bg-[#3F4238] inline-block flex items-center justify-center text-xl rounded-full text-white absolute left-[50%] bottom-[-10%] translate-x-[-50%]">
                                <img src="../Assets/image/svg/right-arrow.svg" alt="right-arrow"></a>
                        </div>
                        <div
                            class="px-6 py-8 bg-light-white w-full md:w-2/3 relative text-center rounded-3xl mt-10 md:mt-12">
                            <svg class="mx-auto" width="47" height="46" viewBox="0 0 47 46" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M37.9549 12.6144V7.34422C37.9549 6.51558 37.2931 5.84379 36.4769 5.84379H27.2219V3.92833C27.2219 1.76235 25.4859 0 23.3522 0H14.6027C12.469 0 10.7331 1.76235 10.7331 3.92833V5.84379H1.47799C0.661746 5.84379 0 6.51566 0 7.34422V29.4964C0 32.6057 2.49157 35.1351 5.55396 35.1351H26.3962C29.321 40.076 32.8581 44.6135 33.5101 45.4388C33.7908 45.7938 34.2149 46 34.663 46C35.1111 46 35.5352 45.7938 35.8159 45.4388C36.9605 43.9904 47 31.102 47 24.6721C47 18.9249 43.162 14.0819 37.9549 12.6144ZM13.6891 3.92833C13.6891 3.41696 14.099 3.00085 14.6027 3.00085H23.3522C23.8559 3.00085 24.2658 3.41696 24.2658 3.92833V5.84379H13.6891V3.92833ZM2.95597 8.84464H34.9989V12.1649C34.8864 12.162 34.7763 12.1477 34.663 12.1477C30.2442 12.1477 26.3717 14.5266 24.1924 18.0809H8.67086C5.51966 18.0809 2.9559 15.4782 2.9559 12.2792L2.95597 8.84464ZM10.9666 21.4766V22.7393H9.72241V21.4766H10.9666ZM5.55396 32.1342C4.12143 32.1342 2.9559 30.951 2.9559 29.4964V18.8821C4.02683 19.8385 5.32769 20.5319 6.76637 20.8609V24.2398C6.76637 25.0685 7.42811 25.7403 8.24435 25.7403H12.4445C13.2607 25.7403 13.9225 25.0685 13.9225 24.2398V21.0818H22.8485C22.5122 22.2204 22.326 23.424 22.326 24.6721C22.326 26.703 23.3287 29.3785 24.7353 32.1343L5.55396 32.1342ZM34.663 42.0599C31.2664 37.5337 25.282 28.7191 25.282 24.672C25.282 19.4209 29.4904 15.1485 34.663 15.1485C39.8356 15.1485 44.044 19.4209 44.044 24.672C44.044 28.7154 38.0592 37.5323 34.663 42.0599Z"
                                    fill="#FFFFFF" />
                            </svg>


                            <h2 class="font-Futura font-medium text-xl text-darken">Lorem, ipsum.</h2>
                            <p class="font-Futura font-normal text-xl text-darken">Lorem, ipsum dolor sit amet
                                consectetur.
                            </p>
                            <a href="#"
                                class="w-11 h-11  bg-[#3F4238] inline-block flex items-center justify-center text-xl rounded-full text-white absolute left-[50%] bottom-[-10%] translate-x-[-50%]">
                                <img src="../Assets/image/svg/right-arrow.svg" alt="right-arrow"></a>
                        </div>
                    </div>


                </div>
                <div class="mx-auto relative z-10 mt-10 lg:mt-0 lg:w-3/5">
                    <div class="lg:flex items-center bg-light-white px-3 py-5 rounded-xl">
                        <img src="../Assets/image/svg/small-employee.webp" alt="small-employee"
                            class="mx-auto mb-4 w-[30%] md:w-[10%] lg:mx-0 lg:mb-0">
                        <p class="font-Poppins font-normal text-base text-light-black text-center lg:ms-4 lg:text-start">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quaerat et ullam ratione
                            maxime deleniti dignissimos similique quae magni quas eum earum, accusamus sint?</p>
                    </div>
                    <form action="" class="relative mt-7">
                        <input required type="text" placeholder="Hey would you like to search for a job today....."
                            class="w-full font-Futura text-lg md:text-xl border border-light-white focus:border-light-white rounded-xl py-3 md:py-5 ps-5 pe-14 bg-light-white font-medium text-darken placeholder:text-darken placeholder:font-medium placeholder:text-lg">
                        <button class="absolute top-[14px] md:top-[24px] right-[0%] md:right-[2%]" type="submit">
                            <img src="../Assets/image/png/send-black.png" alt="sending-icon" class="w-3/5">
                        </button>
                    </form>
                </div>
            </div>
        </section>
        <!-- bottom link board -->
        <section class="bg-light-white py-4">
            <div class="md:container px-2 md:mx-auto md:px-4">
                <ul class="md:flex justify-between text-white">
                    <li class="flex justify-center">
                        <img src="../Assets/image/svg/verified-c.svg" alt="verified-c-image" class="me-2">
                        <a href="#" class="font-Poppins text-base font-medium whitespace-nowrap">Lorem, ipsum.</a>
                    </li>
                    <li class="mt-4 md:mt-0 text-center">
                        <a href="#" class="font-Poppins text-base font-medium mx-2">About</a>
                        <a href="#" class="font-Poppins text-base font-medium mx-2">Contact</a>
                        <a href="#" class="font-Poppins text-base font-medium mx-2">Terms & Service</a>
                        <a href="#" class="font-Poppins text-base font-medium mx-2">Privacy Policy</a>
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
import InterLinks from "../components/Inter-links.vue";

export default {
    name: "Stark-ai-v1-homapage",
    components: {
        Btnsmall,
        InterLinks
    },
};
</script>
