<template>
  <div>
    <section class="bg-[#F8F7FC] pb-10 lg:pb-24">
      <div class="md:container px-2 md:mx-auto md:px-4">
        <nav class="pt-8">
          <ul class="flex justify-between items-center">
            <li>
              <NuxtLink to="/" class="text-orange font-medium text-xl md:text-2xl font-Futura">Lorem<span
                  class="text-light-grey">,ipsum.</span></NuxtLink>
            </li>
            <InterLinks />
            <li>
              <a href="#" class="font-Futura font-normal text-lg text-light-darken">Supplier</a>
              <Btnlightpurple
                class="ms-5 rounded-xl font-Futura text-orange bg-transparent border-2 border-orange hover:bg-orange hover:text-white"
                label="LogIn" />
            </li>
          </ul>
        </nav>

        <form action="" class="grid mt-10 gap-7 lg:gap-8 grid-cols-1 lg:pb-12 lg:gap-16 xl:grid-cols-5 lg:mt-20">
          <div
            class="main-selection grid 2xl:w-11/12 gap-0 md:gap-6 md:grid-cols-2 xl:grid-cols-1 xl:mt-20 order-2 xl:order-1">
            <label class="cursor-pointer" for="DarkJobsearch">
              <input required type="radio" name="flexRadioDefault" id="DarkJobsearch" />
              <div id="DarkJobsearch1" class="DarkJobsearch1 py-6 px-5 border-2 border-orange rounded-3xl 2xl:px-9">
                <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M29.8794 9.93049V5.78162C29.8794 5.12929 29.3584 4.60043 28.7159 4.60043H21.43V3.09251C21.43 1.38738 20.0633 0 18.3837 0H11.4957C9.81604 0 8.44946 1.38738 8.44946 3.09251V4.60043H1.16352C0.520949 4.60043 0 5.12935 0 5.78162V23.2206C0 25.6683 1.96145 27.6595 4.37226 27.6595H20.78C23.0825 31.5492 25.867 35.1213 26.3803 35.771C26.6013 36.0504 26.9351 36.2128 27.2879 36.2128C27.6407 36.2128 27.9745 36.0504 28.1955 35.771C29.0965 34.6308 37 24.4845 37 19.4227C37 14.8983 33.9786 11.0857 29.8794 9.93049ZM10.7765 3.09251C10.7765 2.68995 11.0992 2.36237 11.4957 2.36237H18.3837C18.7802 2.36237 19.1029 2.68995 19.1029 3.09251V4.60043H10.7765V3.09251ZM2.32704 6.9628H27.5523V9.57664C27.4637 9.57432 27.3771 9.56308 27.2879 9.56308C23.8092 9.56308 20.7607 11.4358 19.0451 14.2339H6.82599C4.34527 14.2339 2.32699 12.185 2.32699 9.6666L2.32704 6.9628ZM8.63326 16.9071V17.9012H7.65381V16.9071H8.63326ZM4.37226 25.2972C3.24453 25.2972 2.32699 24.3657 2.32699 23.2206V14.8646C3.17006 15.6176 4.19414 16.1634 5.32671 16.4224V19.0824C5.32671 19.7347 5.84766 20.2636 6.49023 20.2636H9.79672C10.4393 20.2636 10.9602 19.7347 10.9602 19.0824V16.5963H17.9871C17.7224 17.4926 17.5758 18.4402 17.5758 19.4227C17.5758 21.0215 18.3652 23.1278 19.4724 25.2972L4.37226 25.2972ZM27.2879 33.111C24.614 29.5478 19.9028 22.6086 19.9028 19.4227C19.9028 15.2888 23.2158 11.9255 27.2879 11.9255C31.36 11.9255 34.673 15.2888 34.673 19.4227C34.673 22.6057 29.9615 29.5467 27.2879 33.111Z"
                    fill="url(#paint0_linear_1113_35876)" />
                  <defs>
                    <linearGradient id="paint0_linear_1113_35876" x1="18.5" y1="0" x2="18.5" y2="36.2128"
                      gradientUnits="userSpaceOnUse">
                      <stop stop-color="#020202" />
                      <stop offset="1" stop-color="#EA836E" />
                    </linearGradient>
                    <linearGradient id="paint0_linear_hover" x1="18.5" y1="0" x2="18.5" y2="36.2128"
                      gradientUnits="userSpaceOnUse">
                      <stop stop-color="#FFFFFF" />
                      <stop offset="1" stop-color="#401A12" />
                    </linearGradient>
                  </defs>
                </svg>

                <h2 class="text-xl font-Poppins font-medium text-darken mt-3 mb-1">
                  Lorem, ipsum.
                </h2>
                <p class="text-base font-Poppins font-normal text-light-one">
                  Lorem ipsum dolor sit, amet consectetur.
                </p>
              </div>
            </label>
            <label for="DarkBuildProfile" class="mt-7 cursor-pointer md:mt-0 block xl:mt-14">
              <input required type="radio" name="flexRadioDefault" id="DarkBuildProfile" class="" />
              <div id="DarkBuildProfile1" class="DarkBuildProfile1 py-6 px-5 border-2 border-orange rounded-3xl 2xl:px-9">
                <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M29.8794 9.93049V5.78162C29.8794 5.12929 29.3584 4.60043 28.7159 4.60043H21.43V3.09251C21.43 1.38738 20.0633 0 18.3837 0H11.4957C9.81604 0 8.44946 1.38738 8.44946 3.09251V4.60043H1.16352C0.520949 4.60043 0 5.12935 0 5.78162V23.2206C0 25.6683 1.96145 27.6595 4.37226 27.6595H20.78C23.0825 31.5492 25.867 35.1213 26.3803 35.771C26.6013 36.0504 26.9351 36.2128 27.2879 36.2128C27.6407 36.2128 27.9745 36.0504 28.1955 35.771C29.0965 34.6308 37 24.4845 37 19.4227C37 14.8983 33.9786 11.0857 29.8794 9.93049ZM10.7765 3.09251C10.7765 2.68995 11.0992 2.36237 11.4957 2.36237H18.3837C18.7802 2.36237 19.1029 2.68995 19.1029 3.09251V4.60043H10.7765V3.09251ZM2.32704 6.9628H27.5523V9.57664C27.4637 9.57432 27.3771 9.56308 27.2879 9.56308C23.8092 9.56308 20.7607 11.4358 19.0451 14.2339H6.82599C4.34527 14.2339 2.32699 12.185 2.32699 9.6666L2.32704 6.9628ZM8.63326 16.9071V17.9012H7.65381V16.9071H8.63326ZM4.37226 25.2972C3.24453 25.2972 2.32699 24.3657 2.32699 23.2206V14.8646C3.17006 15.6176 4.19414 16.1634 5.32671 16.4224V19.0824C5.32671 19.7347 5.84766 20.2636 6.49023 20.2636H9.79672C10.4393 20.2636 10.9602 19.7347 10.9602 19.0824V16.5963H17.9871C17.7224 17.4926 17.5758 18.4402 17.5758 19.4227C17.5758 21.0215 18.3652 23.1278 19.4724 25.2972L4.37226 25.2972ZM27.2879 33.111C24.614 29.5478 19.9028 22.6086 19.9028 19.4227C19.9028 15.2888 23.2158 11.9255 27.2879 11.9255C31.36 11.9255 34.673 15.2888 34.673 19.4227C34.673 22.6057 29.9615 29.5467 27.2879 33.111Z"
                    fill="url(#paint0_linear_1113_35876)" />
                  <defs>
                    <linearGradient id="paint0_linear_1113_35876" x1="18.5" y1="0" x2="18.5" y2="36.2128"
                      gradientUnits="userSpaceOnUse">
                      <stop stop-color="#020202" />
                      <stop offset="1" stop-color="#EA836E" />
                    </linearGradient>
                    <linearGradient id="paint0_linear_hover" x1="18.5" y1="0" x2="18.5" y2="36.2128"
                      gradientUnits="userSpaceOnUse">
                      <stop stop-color="#FFFFFF" />
                      <stop offset="1" stop-color="#401A12" />
                    </linearGradient>
                  </defs>
                </svg>

                <h2 class="text-xl font-Poppins font-medium text-darken mt-3 mb-1">
                  Lorem, ipsum.
                </h2>
                <p class="text-base font-Poppins font-normal text-light-one">
                  Lorem ipsum dolor sit, amet consectetur.
                </p>
              </div>
            </label>
          </div>
          <div class="text-center order-1 xl:order-2 xl:col-span-3">
            <h2 class="text-2xl lg:text-5xl font-Poppins font-bold text-darken">
              Lorem, ipsum dolor
              <!-- <span class="block"> Lorem ipsum dolor sit. </span> -->
            </h2>
            <p class="font-Poppins font-normal text-lg text-light-black mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <span class="xl:block"> adipisicing elit. Minima, repellat!</span>
            </p>

            <span class="mt-4 flex justify-center lg:mt-8">
              <input type="text" name=""
                class="block text-black w-7/12 rounded-md border-0 py-1 px-4 ring-1 ring-inset ring-orange focus:ring-orange placeholder:text-black placeholder:font-bold font-Poppins text-base font-bold lg:w-4/12"
                placeholder="Email" required />
              <Btnpurple label="submit"
                class="ms-2 lg:ms-5 text-white hover:text-black bg-orange border-2 border-transparent hover:border-orange hover:bg-transparent" />
            </span>
          </div>
          <div class="main-selection grid 2xl:w-11/12 gap-0 md:gap-6 md:grid-cols-2 xl:grid-cols-1 xl:mt-20 order-3">
            <label class="cursor-pointer" for="Darkpractice">
              <input required type="radio" name="flexRadioDefault" id="Darkpractice" />
              <div id="Darkpractice1" class="Darkpractice1 py-6 px-5 border-2 border-orange rounded-3xl 2xl:px-9">
                <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M29.8794 9.93049V5.78162C29.8794 5.12929 29.3584 4.60043 28.7159 4.60043H21.43V3.09251C21.43 1.38738 20.0633 0 18.3837 0H11.4957C9.81604 0 8.44946 1.38738 8.44946 3.09251V4.60043H1.16352C0.520949 4.60043 0 5.12935 0 5.78162V23.2206C0 25.6683 1.96145 27.6595 4.37226 27.6595H20.78C23.0825 31.5492 25.867 35.1213 26.3803 35.771C26.6013 36.0504 26.9351 36.2128 27.2879 36.2128C27.6407 36.2128 27.9745 36.0504 28.1955 35.771C29.0965 34.6308 37 24.4845 37 19.4227C37 14.8983 33.9786 11.0857 29.8794 9.93049ZM10.7765 3.09251C10.7765 2.68995 11.0992 2.36237 11.4957 2.36237H18.3837C18.7802 2.36237 19.1029 2.68995 19.1029 3.09251V4.60043H10.7765V3.09251ZM2.32704 6.9628H27.5523V9.57664C27.4637 9.57432 27.3771 9.56308 27.2879 9.56308C23.8092 9.56308 20.7607 11.4358 19.0451 14.2339H6.82599C4.34527 14.2339 2.32699 12.185 2.32699 9.6666L2.32704 6.9628ZM8.63326 16.9071V17.9012H7.65381V16.9071H8.63326ZM4.37226 25.2972C3.24453 25.2972 2.32699 24.3657 2.32699 23.2206V14.8646C3.17006 15.6176 4.19414 16.1634 5.32671 16.4224V19.0824C5.32671 19.7347 5.84766 20.2636 6.49023 20.2636H9.79672C10.4393 20.2636 10.9602 19.7347 10.9602 19.0824V16.5963H17.9871C17.7224 17.4926 17.5758 18.4402 17.5758 19.4227C17.5758 21.0215 18.3652 23.1278 19.4724 25.2972L4.37226 25.2972ZM27.2879 33.111C24.614 29.5478 19.9028 22.6086 19.9028 19.4227C19.9028 15.2888 23.2158 11.9255 27.2879 11.9255C31.36 11.9255 34.673 15.2888 34.673 19.4227C34.673 22.6057 29.9615 29.5467 27.2879 33.111Z"
                    fill="url(#paint0_linear_1113_35876)" />
                  <defs>
                    <linearGradient id="paint0_linear_1113_35876" x1="18.5" y1="0" x2="18.5" y2="36.2128"
                      gradientUnits="userSpaceOnUse">
                      <stop stop-color="#020202" />
                      <stop offset="1" stop-color="#EA836E" />
                    </linearGradient>
                    <linearGradient id="paint0_linear_hover" x1="18.5" y1="0" x2="18.5" y2="36.2128"
                      gradientUnits="userSpaceOnUse">
                      <stop stop-color="#FFFFFF" />
                      <stop offset="1" stop-color="#401A12" />
                    </linearGradient>
                  </defs>
                </svg>

                <h2 class="text-xl font-Poppins font-medium text-darken mt-3 mb-1">
                  Lorem, ipsum.
                </h2>
                <p class="text-base font-Poppins font-normal text-light-one">
                  Lorem ipsum dolor sit, amet consectetur.
                </p>
              </div>
            </label>
            <label for="DarkInsight" class="mt-7 cursor-pointer md:mt-0 block xl:mt-14">
              <input required type="radio" name="flexRadioDefault" id="DarkInsight" class="" />
              <div id="DarkInsight1" class="DarkInsight1 py-6 px-5 border-2 border-orange rounded-3xl 2xl:px-9">
                <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M29.8794 9.93049V5.78162C29.8794 5.12929 29.3584 4.60043 28.7159 4.60043H21.43V3.09251C21.43 1.38738 20.0633 0 18.3837 0H11.4957C9.81604 0 8.44946 1.38738 8.44946 3.09251V4.60043H1.16352C0.520949 4.60043 0 5.12935 0 5.78162V23.2206C0 25.6683 1.96145 27.6595 4.37226 27.6595H20.78C23.0825 31.5492 25.867 35.1213 26.3803 35.771C26.6013 36.0504 26.9351 36.2128 27.2879 36.2128C27.6407 36.2128 27.9745 36.0504 28.1955 35.771C29.0965 34.6308 37 24.4845 37 19.4227C37 14.8983 33.9786 11.0857 29.8794 9.93049ZM10.7765 3.09251C10.7765 2.68995 11.0992 2.36237 11.4957 2.36237H18.3837C18.7802 2.36237 19.1029 2.68995 19.1029 3.09251V4.60043H10.7765V3.09251ZM2.32704 6.9628H27.5523V9.57664C27.4637 9.57432 27.3771 9.56308 27.2879 9.56308C23.8092 9.56308 20.7607 11.4358 19.0451 14.2339H6.82599C4.34527 14.2339 2.32699 12.185 2.32699 9.6666L2.32704 6.9628ZM8.63326 16.9071V17.9012H7.65381V16.9071H8.63326ZM4.37226 25.2972C3.24453 25.2972 2.32699 24.3657 2.32699 23.2206V14.8646C3.17006 15.6176 4.19414 16.1634 5.32671 16.4224V19.0824C5.32671 19.7347 5.84766 20.2636 6.49023 20.2636H9.79672C10.4393 20.2636 10.9602 19.7347 10.9602 19.0824V16.5963H17.9871C17.7224 17.4926 17.5758 18.4402 17.5758 19.4227C17.5758 21.0215 18.3652 23.1278 19.4724 25.2972L4.37226 25.2972ZM27.2879 33.111C24.614 29.5478 19.9028 22.6086 19.9028 19.4227C19.9028 15.2888 23.2158 11.9255 27.2879 11.9255C31.36 11.9255 34.673 15.2888 34.673 19.4227C34.673 22.6057 29.9615 29.5467 27.2879 33.111Z"
                    fill="url(#paint0_linear_1113_35876)" />
                  <defs>
                    <linearGradient id="paint0_linear_1113_35876" x1="18.5" y1="0" x2="18.5" y2="36.2128"
                      gradientUnits="userSpaceOnUse">
                      <stop stop-color="#020202" />
                      <stop offset="1" stop-color="#EA836E" />
                    </linearGradient>
                    <linearGradient id="paint0_linear_hover" x1="18.5" y1="0" x2="18.5" y2="36.2128"
                      gradientUnits="userSpaceOnUse">
                      <stop stop-color="#FFFFFF" />
                      <stop offset="1" stop-color="#401A12" />
                    </linearGradient>
                  </defs>
                </svg>

                <h2 class="text-xl font-Poppins font-medium text-darken mt-3 mb-1">
                  Lorem, ipsum.
                </h2>
                <p class="text-base font-Poppins font-normal text-light-one">
                  Lorem ipsum dolor sit, amet consectetur.
                </p>
              </div>
            </label>
          </div>
        </form>
      </div>
    </section>
    <!-- bottom link board -->
    <section class="bg-orange py-4">
      <div class="md:container px-2 md:mx-auto md:px-4">
        <ul class="md:flex justify-between text-white">
          <li class="flex justify-center">
            <img src="../Assets/image/svg/verified-c.svg" alt="verified-c-image" class="me-2" />
            <a href="#" class="font-Poppins text-base font-normal whitespace-nowrap">Stark A.I</a>
          </li>
          <li class="mt-4 md:mt-0 text-center">
            <a href="#" class="font-Poppins text-base font-normal mx-2">About</a>
            <a href="#" class="font-Poppins text-base font-normal mx-2">Contact</a>
            <a href="#" class="font-Poppins text-base font-normal mx-2">Terms & Service</a>
            <a href="#" class="font-Poppins text-base font-normal mx-2">Privacy Policy</a>
          </li>
          <li class="flex justify-center mt-4 md:mt-0">
            <a href="#" class="px-2"><img src="../Assets/image/svg/apple-icon.svg" alt="apple-icon" /></a>
            <a href="#" class="ps-2"><img src="../Assets/image/svg/playstore-icon.svg" alt="apple-icon" /></a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
import Btnlightpurple from "../components/Btn-small.vue";
import Btnpurple from "../components/Btn-big.vue";
import InterLinks from "../components/Inter-links.vue";

export default {
  name: "Stark-ai-v1-homapage",
  components: {
    Btnlightpurple,
    Btnpurple,
    InterLinks
  },
};
</script>
