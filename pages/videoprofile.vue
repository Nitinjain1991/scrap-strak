<!-- Please remove this file from your project -->
<template>
    <div class="flex justify-center pt-4 lg:items-center h-screen">
        <button @click="showModal = !showModal"
            class="hidden bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            show modal
        </button>
        <div class="container">
            <div class="px-0 lg:px-5 modal-box block" :class="{ 'hidden': showModal }">
                <!-- headings -->
                <div class="flex justify-between items-center">
                    <span class="flex ff_primary fs_xxl font-bold text-white lg:text-black">
                        <img src="../Assets/image/svg/video-icon.svg" alt="video-icon" class="me-2 hidden lg:block" />
                        <img src="../Assets/image/svg/arrow-left.svg" alt="video-icon" class="me-2 lg:hidden"
                            @click="showSidebar = !showSidebar" />
                        Video Profile</span>
                    <a href="#" @click="showModal = !showModal">
                        <img src="../Assets/image/svg/cross-icon.svg" class="hidden lg:block" alt="cross-icon" />
                    </a>
                </div>

                <!-- main content -->
                <div class="warpper mt-3 lg:mt-7 h-full relative flex">
                    <input class="radio" id="one" name="group" type="radio" checked />
                    <input class="radio" id="two" name="group" type="radio" />
                    <input class="radio" id="three" name="group" type="radio" />
                    <input class="radio" id="four" name="group" type="radio" />
                    <input class="radio" id="five" name="group" type="radio" />

                    <!-- left sidebar -->
                    <div class="tabs bg-white absolute inset-y-0 left-0 translate-x-n-120 transition duration-200 ease-in-out lg:relative lg:translate-x-0"
                        :class="{ 'absolute translate-x-0': showSidebar }">
                        <div class="sidebar-left h-full flex flex-col justify-between">
                            <div>
                                <div class="toggle-box flex justify-between bb-light">
                                    <h2 class="ff_primary fs_xl font-medium clr_bit_dark">Question List</h2>
                                    <span class="ff_primary fs_md font-normal clr_bit_dark">
                                        <span id="numbers">1</span>
                                        /5
                                    </span>
                                </div>
                                <div class="toggle-box" id="toggle-box1">
                                    <span class="w-full flex" @click="showSidebar = !showSidebar">
                                        <img src="../Assets/image/svg/Checked-image.svg" alt="">
                                        <label for="one"
                                            class="ff_primary fs_md font-normal clr_bit_dark lg:text-xl ms-3 inline-block py-3 w-4/5">Tell
                                            me
                                            about
                                            your self ?</label>
                                    </span>
                                </div>
                                <div class="toggle-box" id="toggle-box2">
                                    <span class="w-full flex" @click="showSidebar = !showSidebar">
                                        <img src="../Assets/image/svg/Checked-image.svg" alt="">
                                        <label for="two"
                                            class="ff_primary fs_md font-normal clr_bit_dark lg:text-xl ms-3 inline-block py-3 w-4/5">Please
                                            describe
                                            your current role ?</label>
                                    </span>
                                </div>
                                <div class="toggle-box" id="toggle-box3">
                                    <span class="w-full flex" @click="showSidebar = !showSidebar">
                                        <img src="../Assets/image/svg/Checked-image.svg" alt="">
                                        <label for="three"
                                            class="inline-block py-3 w-full ff_primary fs_md font-normal clr_bit_dark lg:text-xl ms-3">What
                                            are
                                            your
                                            major achievements in the projects you worked ?</label>
                                    </span>
                                </div>
                                <div class="toggle-box" id="toggle-box4">
                                    <span class="w-full flex" @click="showSidebar = !showSidebar">
                                        <img src="../Assets/image/svg/Checked-image.svg" alt="">
                                        <label for="four"
                                            class="inline-block py-3 w-full ff_primary fs_md font-normal clr_bit_dark lg:text-xl ms-3">What
                                            are
                                            your
                                            greatest strength and weaknesses ?</label>
                                    </span>
                                </div>
                                <div class="toggle-box" id="toggle-box5">
                                    <span class="w-full flex" @click="showSidebar = !showSidebar">
                                        <img src="../Assets/image/svg/Checked-image.svg" alt="">
                                        <label for="five"
                                            class="inline-block py-3 w-full ff_primary fs_md font-normal clr_bit_dark lg:text-xl ms-3">What
                                            are
                                            your
                                            looking in a new job ?</label>
                                    </span>
                                </div>
                            </div>

                            <div class="toggle-box flex justify-center lg:justify-end mt-9">
                                <button class="btn-light">
                                    Add Custom Question
                                </button>
                            </div>

                        </div>
                    </div>

                    <!-- right sidebar  -->
                    <div class="panels w-full relative">
                        <div class="panel h-100 flex-col justify-between mb-5" id="one-panel">
                            <div>
                                <div class="pb-2 lg:flex justify-between items-center bb-light">
                                    <p class="ff_primary font-medium fs_xl clr_bit_dark">Tell me about
                                        your self ?</p>
                                    <span class="ff_primary block text-end lg:text-center font-medium fs_xl">
                                        Time -
                                        <span id="seconds" class="font-normal clr_bit_dark">45 Secs</span>
                                    </span>
                                </div>
                                <div class="script-box">
                                    <h2 class="ff_primary font-normal fs_md">Hi, my name is john and i’m a (position) with
                                        (number) of years of experience. i’m
                                        passionate about the work i do.</h2>
                                    <div class="flex justify-end mt-4">
                                        <button class="mx-2" @click="showPlayscript1 = !showPlayscript1">
                                            <img src="../Assets/image/svg/volume-high.svg" alt="volume-high">
                                        </button>
                                        <button class="mx-2" @click="showeditor = !showeditor">
                                            <img src="../Assets/image/svg/editor.svg" alt="volume-high">
                                        </button>
                                        <button class="mx-2">
                                            <img src="../Assets/image/svg/refresh.svg" alt="volume-high">
                                        </button>
                                    </div>
                                </div>
                                <div class="script-box block" :class="{ 'hidden': showPlayscript1 }">
                                    <div class="flex justify-between items-center">
                                        <h2 class="ff_primary font-medium fs_lg clr_bit_dark">Play Script</h2>
                                        <button @click="showPlayscript1 = !showPlayscript1">
                                            <img src="../Assets/image/svg/cross-icon.svg" alt="" />
                                        </button>
                                    </div>
                                    <img src="../Assets/image/svg/equalizer.svg" alt="equalizer" class="w-full mt-4">
                                    <div class="flex items-center audio-player">
                                        <input type="checkbox" id="play-pause" />
                                        <label for="play-pause" id="play-pause-label" class="win-button"></label>
                                        <h5 class="ff_primary font-normal fs_smaller clr_light_grey ms-6 me-3">0:04</h5>
                                        <div class="progress-element progress-element--html">
                                            <div class="progress-container">
                                                <progress max="100" value="04">0:04</progress>
                                            </div>
                                        </div>
                                        <h5 class="ff_primary font-normal fs_smaller clr_light_grey ms-6 me-3">0:40</h5>
                                        <input type="checkbox" id="volume" />
                                        <label for="volume" id="volume-label" class="win-button"></label>
                                    </div>
                                </div>
                                <div class="flex justify-center lg:justify-end items-center mt-6 bb-light">
                                    <button class="mx-2 btn-upload ff_primary font-medium fs_md">
                                        Upload
                                    </button>
                                    <span class="ff_primary font-normal fs_md mx-2 clr_light_one">
                                        or
                                    </span>
                                    <button class="mx-2 ff_primary font-medium fs_md btn-record">
                                        Record
                                    </button>
                                </div>
                            </div>
                            <div class="flex justify-center lg:justify-end items-center mt-6">
                                <label for="two"
                                    class="mx-2 ff_primary font-medium fs_md btn-dark text-center w-full lg:w-1/12">
                                    Next
                                </label>
                            </div>

                            <!-- edit script element -->
                            <div class="mt-6 h-full custom-editscript-show absolute bg-[white] transition duration-200 ease-in-out"
                                :class="{ 'absolute custom-editscript-hide': showeditor }">
                                <h2 class="ff_primary font-medium fs_sm">Edit Script</h2>
                                <form action="">
                                    <input type="text" id="auth-value" class="ff_primary font-normal fs_md mt-3"
                                        value="Hi, my name is john and i’m a (position) with (number) of years of experience. i’m passionate about the work i do."
                                        onchange="">

                                    <div class="flex  justify-center lg:justify-end items-center mt-6">
                                        <button class="btn-light ff_primary font-medium fs_md" type="reset"
                                            @click="showeditor = !showeditor">
                                            Cancel
                                        </button>
                                        <button class="btn-dark ff_primary font-medium fs_md py-6 ms-3" type="submit"
                                            @click="showeditor = !showeditor">
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="panel h-100 flex-col justify-between mb-5" id="two-panel">
                            <div>
                                <div class="pb-2 lg:flex justify-between items-center bb-light">
                                    <p class="ff_primary font-medium fs_xl clr_bit_dark">Please describe your current role ?
                                    </p>
                                    <span class="ff_primary block text-end lg:text-center font-medium fs_xl">
                                        Time -
                                        <span id="seconds" class="font-normal clr_bit_dark">45 Secs</span>
                                    </span>
                                </div>
                                <div class="script-box">
                                    <h2 class="ff_primary font-normal fs_md">Hi, my name is john and i’m a (position) with
                                        (number) of years of experience. i’m
                                        passionate about the work i do.</h2>
                                    <div class="flex justify-end mt-4">
                                        <button class="mx-2" @click="showPlayscript2 = !showPlayscript2">
                                            <img src="../Assets/image/svg/volume-high.svg" alt="volume-high">
                                        </button>
                                        <button class="mx-2" @click="showeditor1 = !showeditor1">
                                            <img src="../Assets/image/svg/editor.svg" alt="volume-high">
                                        </button>
                                        <button class="mx-2">
                                            <img src="../Assets/image/svg/refresh.svg" alt="volume-high">
                                        </button>
                                    </div>
                                </div>
                                <div class="script-box block" :class="{ 'hidden': showPlayscript2 }">
                                    <div class="flex justify-between items-center">
                                        <h2 class="ff_primary font-medium fs_lg clr_bit_dark">Play Script</h2>
                                        <button @click="showPlayscript2 = !showPlayscript2">
                                            <img src="../Assets/image/svg/cross-icon.svg" alt="" />
                                        </button>
                                    </div>
                                    <img src="../Assets/image/svg/equalizer.svg" alt="equalizer" class="w-full mt-4">
                                    <div class="flex items-center audio-player">
                                        <input type="checkbox" id="play-pause1" />
                                        <label for="play-pause1" id="play-pause1-label" class="win-button"></label>
                                        <h5 class="ff_primary font-normal fs_smaller clr_light_grey ms-6 me-3">0:04</h5>
                                        <div class="progress-element progress-element--html">
                                            <div class="progress-container">
                                                <progress max="100" value="04">0:04</progress>
                                            </div>
                                        </div>
                                        <h5 class="ff_primary font-normal fs_smaller clr_light_grey ms-6 me-3">0:40</h5>
                                        <input type="checkbox" id="volume1" />
                                        <label for="volume1" id="volume1-label" class="win-button"></label>
                                    </div>
                                </div>
                                <div class="flex justify-center lg:justify-end items-center mt-6   bb-light">
                                    <button class="mx-2 btn-upload ff_primary font-medium fs_md">
                                        Upload
                                    </button>
                                    <span class="ff_primary font-normal fs_md mx-2 clr_light_one">
                                        or
                                    </span>
                                    <button class="mx-2 ff_primary font-medium fs_md btn-record">
                                        Record
                                    </button>
                                </div>
                            </div>
                            <div class="flex justify-center lg:justify-end items-center mt-6  ">
                                <label for="three"
                                    class="mx-2 ff_primary font-medium fs_md btn-dark text-center w-full lg:w-1/12">
                                    Next
                                </label>
                            </div>

                            <!-- edit script element -->
                            <div class="mt-6 h-full custom-editscript-show absolute bg-[white] transition duration-200 ease-in-out"
                                :class="{ 'absolute custom-editscript-hide': showeditor1 }">
                                <h2 class="ff_primary font-medium fs_sm">Edit Script</h2>
                                <form action="">
                                    <input type="text" id="auth-value" class="ff_primary font-normal fs_md mt-3"
                                        value="Hi, my name is john and i’m a (position) with (number) of years of experience. i’m passionate about the work i do."
                                        onchange="">

                                    <div class="flex  justify-center lg:justify-end items-center mt-6">
                                        <button class="btn-light ff_primary font-medium fs_md" type="reset"
                                            @click="showeditor1 = !showeditor1">
                                            Cancel
                                        </button>
                                        <button class="btn-dark ff_primary font-medium fs_md py-6 ms-3" type="submit"
                                            @click="showeditor1 = !showeditor1">
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="panel h-100 flex-col justify-between mb-5" id="three-panel">
                            <div>
                                <div class="pb-2 lg:flex justify-between items-center bb-light">
                                    <p class="ff_primary font-medium fs_xl clr_bit_dark">What are your major achievements in
                                        the
                                        projects you worked ?</p>
                                    <span class="ff_primary block text-end lg:text-center font-medium fs_xl">
                                        Time -
                                        <span id="seconds" class="font-normal clr_bit_dark">45 Secs</span>
                                    </span>
                                </div>
                                <div class="script-box">
                                    <h2 class="ff_primary font-normal fs_md">Hi, my name is john and i’m a (position) with
                                        (number) of years of experience. i’m
                                        passionate about the work i do.</h2>
                                    <div class="flex justify-end mt-4">
                                        <button class="mx-2" @click="showPlayscript3 = !showPlayscript3">
                                            <img src="../Assets/image/svg/volume-high.svg" alt="volume-high">
                                        </button>
                                        <button class="mx-2" @click="showeditor2 = !showeditor2">
                                            <img src="../Assets/image/svg/editor.svg" alt="volume-high">
                                        </button>
                                        <button class="mx-2">
                                            <img src="../Assets/image/svg/refresh.svg" alt="volume-high">
                                        </button>
                                    </div>
                                </div>
                                <div class="script-box block" :class="{ 'hidden': showPlayscript3 }">
                                    <div class="flex justify-between items-center">
                                        <h2 class="ff_primary font-medium fs_lg clr_bit_dark">Play Script</h2>
                                        <button @click="showPlayscript3 = !showPlayscript3">
                                            <img src="../Assets/image/svg/cross-icon.svg" alt="" />
                                        </button>
                                    </div>
                                    <img src="../Assets/image/svg/equalizer.svg" alt="equalizer" class="w-full mt-4">
                                    <div class="flex items-center audio-player">
                                        <input type="checkbox" id="play-pause2" />
                                        <label for="play-pause2" id="play-pause2-label" class="win-button"></label>
                                        <h5 class="ff_primary font-normal fs_smaller clr_light_grey ms-6 me-3">0:04</h5>
                                        <div class="progress-element progress-element--html">
                                            <div class="progress-container">
                                                <progress max="100" value="04">0:04</progress>
                                            </div>
                                        </div>
                                        <h5 class="ff_primary font-normal fs_smaller clr_light_grey ms-6 me-3">0:40</h5>
                                        <input type="checkbox" id="volume2" />
                                        <label for="volume2" id="volume2-label" class="win-button"></label>
                                    </div>
                                </div>
                                <div class="flex justify-center lg:justify-end items-center mt-6   bb-light">
                                    <button class="mx-2 btn-upload ff_primary font-medium fs_md">
                                        Upload
                                    </button>
                                    <span class="ff_primary font-normal fs_md mx-2 clr_light_one">
                                        or
                                    </span>
                                    <button class="mx-2 ff_primary font-medium fs_md btn-record">
                                        Record
                                    </button>
                                </div>
                            </div>
                            <div class="flex justify-center lg:justify-end items-center mt-6  ">
                                <label for="four"
                                    class="mx-2 ff_primary font-medium fs_md btn-dark text-center w-full lg:w-1/12">
                                    Next
                                </label>
                            </div>

                            <!-- edit script element -->
                            <div class="mt-6 h-full custom-editscript-show absolute bg-[white] transition duration-200 ease-in-out"
                                :class="{ 'absolute custom-editscript-hide': showeditor2 }">
                                <h2 class="ff_primary font-medium fs_sm">Edit Script</h2>
                                <form action="">
                                    <input type="text" id="auth-value" class="ff_primary font-normal fs_md mt-3"
                                        value="Hi, my name is john and i’m a (position) with (number) of years of experience. i’m passionate about the work i do."
                                        onchange="">

                                    <div class="flex  justify-center lg:justify-end items-center mt-6">
                                        <button class="btn-light ff_primary font-medium fs_md" type="reset"
                                            @click="showeditor2 = !showeditor2">
                                            Cancel
                                        </button>
                                        <button class="btn-dark ff_primary font-medium fs_md py-6 ms-3" type="submit"
                                            @click="showeditor2 = !showeditor2">
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="panel h-100 flex-col justify-between mb-5" id="four-panel">
                            <div>
                                <div class="pb-2 lg:flex justify-between items-center bb-light">
                                    <p class="ff_primary font-medium fs_xl clr_bit_dark">What are your greatest strength and
                                        weaknesses ?</p>
                                    <span class="ff_primary block text-end lg:text-center font-medium fs_xl">
                                        Time -
                                        <span id="seconds" class="font-normal clr_bit_dark">45 Secs</span>
                                    </span>
                                </div>
                                <div class="script-box">
                                    <h2 class="ff_primary font-normal fs_md">Hi, my name is john and i’m a (position) with
                                        (number) of years of experience. i’m
                                        passionate about the work i do.</h2>
                                    <div class="flex justify-end mt-4">
                                        <button class="mx-2" @click="showPlayscript4 = !showPlayscript4">
                                            <img src="../Assets/image/svg/volume-high.svg" alt="volume-high">
                                        </button>
                                        <button class="mx-2" @click="showeditor3 = !showeditor3">
                                            <img src="../Assets/image/svg/editor.svg" alt="volume-high">
                                        </button>
                                        <button class="mx-2">
                                            <img src="../Assets/image/svg/refresh.svg" alt="volume-high">
                                        </button>
                                    </div>
                                </div>
                                <div class="script-box block" :class="{ 'hidden': showPlayscript4 }">
                                    <div class="flex justify-between items-center">
                                        <h2 class="ff_primary font-medium fs_lg clr_bit_dark">Play Script</h2>
                                        <button @click="showPlayscript4 = !showPlayscript4">
                                            <img src="../Assets/image/svg/cross-icon.svg" alt="" />
                                        </button>
                                    </div>
                                    <img src="../Assets/image/svg/equalizer.svg" alt="equalizer" class="w-full mt-4">
                                    <div class="flex items-center audio-player">
                                        <input type="checkbox" id="play-pause3" />
                                        <label for="play-pause3" id="play-pause3-label" class="win-button"></label>
                                        <h5 class="ff_primary font-normal fs_smaller clr_light_grey ms-6 me-3">0:04</h5>
                                        <div class="progress-element progress-element--html">
                                            <div class="progress-container">
                                                <progress max="100" value="04">0:04</progress>
                                            </div>
                                        </div>
                                        <h5 class="ff_primary font-normal fs_smaller clr_light_grey ms-6 me-3">0:40</h5>
                                        <input type="checkbox" id="volume3" />
                                        <label for="volume3" id="volume3-label" class="win-button"></label>
                                    </div>
                                </div>
                                <div class="flex justify-center lg:justify-end items-center mt-6   bb-light">
                                    <button class="mx-2 btn-upload ff_primary font-medium fs_md">
                                        Upload
                                    </button>
                                    <span class="ff_primary font-normal fs_md mx-2 clr_light_one">
                                        or
                                    </span>
                                    <button class="mx-2 ff_primary font-medium fs_md btn-record">
                                        Record
                                    </button>
                                </div>
                            </div>
                            <div class="flex justify-center lg:justify-end items-center mt-6  ">
                                <label for="five"
                                    class="mx-2 ff_primary font-medium fs_md btn-dark text-center w-full lg:w-1/12">
                                    Next
                                </label>
                            </div>

                            <!-- edit script element -->
                            <div class="mt-6 h-full custom-editscript-show absolute bg-[white] transition duration-200 ease-in-out"
                                :class="{ 'absolute custom-editscript-hide': showeditor3 }">
                                <h2 class="ff_primary font-medium fs_sm">Edit Script</h2>
                                <form action="">
                                    <input type="text" id="auth-value" class="ff_primary font-normal fs_md mt-3"
                                        value="Hi, my name is john and i’m a (position) with (number) of years of experience. i’m passionate about the work i do."
                                        onchange="">

                                    <div class="flex  justify-center lg:justify-end items-center mt-6">
                                        <button class="btn-light ff_primary font-medium fs_md" type="reset"
                                            @click="showeditor3 = !showeditor3">
                                            Cancel
                                        </button>
                                        <button class="btn-dark ff_primary font-medium fs_md py-6 ms-3" type="submit"
                                            @click="showeditor3 = !showeditor3">
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="panel h-100 flex-col justify-between mb-5" id="five-panel">
                            <div>
                                <div class="pb-2 lg:flex justify-between items-center bb-light">
                                    <p class="ff_primary font-medium fs_xl clr_bit_dark">What are your looking in a new job
                                        ?
                                    </p>
                                    <span class="ff_primary block text-end lg:text-center font-medium fs_xl">
                                        Time -
                                        <span id="seconds" class="font-normal clr_bit_dark">45 Secs</span>
                                    </span>
                                </div>
                                <div class="script-box">
                                    <h2 class="ff_primary font-normal fs_md">Hi, my name is john and i’m a (position) with
                                        (number) of years of experience. i’m
                                        passionate about the work i do.</h2>
                                    <div class="flex justify-end mt-4">
                                        <button class="mx-2" @click="showPlayscript5 = !showPlayscript5">
                                            <img src="../Assets/image/svg/volume-high.svg" alt="volume-high">
                                        </button>
                                        <button class="mx-2" @click="showeditor4 = !showeditor4">
                                            <img src="../Assets/image/svg/editor.svg" alt="volume-high">
                                        </button>
                                        <button class="mx-2">
                                            <img src="../Assets/image/svg/refresh.svg" alt="volume-high">
                                        </button>
                                    </div>
                                </div>
                                <div class="script-box block" :class="{ 'hidden': showPlayscript5 }">
                                    <div class="flex justify-between items-center">
                                        <h2 class="ff_primary font-medium fs_lg clr_bit_dark">Play Script</h2>
                                        <button @click="showPlayscript5 = !showPlayscript5">
                                            <img src="../Assets/image/svg/cross-icon.svg" alt="" />
                                        </button>
                                    </div>
                                    <img src="../Assets/image/svg/equalizer.svg" alt="equalizer" class="w-full mt-4">
                                    <div class="flex items-center audio-player">
                                        <input type="checkbox" id="play-pause4" />
                                        <label for="play-pause4" id="play-pause4-label" class="win-button"></label>
                                        <h5 class="ff_primary font-normal fs_smaller clr_light_grey ms-6 me-3">0:04</h5>
                                        <div class="progress-element progress-element--html">
                                            <div class="progress-container">
                                                <progress max="100" value="04">0:04</progress>
                                            </div>
                                        </div>
                                        <h5 class="ff_primary font-normal fs_smaller clr_light_grey ms-6 me-3">0:40</h5>
                                        <input type="checkbox" id="volume4" />
                                        <label for="volume4" id="volume4-label" class="win-button"></label>
                                    </div>
                                </div>
                                <div class="flex justify-center lg:justify-end items-center mt-6 bb-light">
                                    <button class="mx-2 btn-upload ff_primary font-medium fs_md">
                                        Upload
                                    </button>
                                    <span class="ff_primary font-normal fs_md mx-2 clr_light_one">
                                        or
                                    </span>
                                    <button class="mx-2 ff_primary font-medium fs_md btn-record">
                                        Record
                                    </button>
                                </div>
                            </div>
                            <div class="flex justify-center lg:justify-end items-center mt-6">
                                <label class="mx-2 ff_primary font-medium fs_md btn-dark text-center w-full lg:w-1/12">
                                    Next
                                </label>
                            </div>

                            <!-- edit script element -->
                            <div class="mt-6 h-full custom-editscript-show absolute bg-[white] transition duration-200 ease-in-out"
                                :class="{ 'absolute custom-editscript-hide': showeditor4 }">
                                <h2 class="ff_primary font-medium fs_sm">Edit Script</h2>
                                <form action="">
                                    <input type="text" id="auth-value" class="ff_primary font-normal fs_md mt-3"
                                        value="Hi, my name is john and i’m a (position) with (number) of years of experience. i’m passionate about the work i do."
                                        onchange="">

                                    <div class="flex  justify-center lg:justify-end items-center mt-6">
                                        <button class="btn-light ff_primary font-medium fs_md" type="reset"
                                            @click="showeditor4 = !showeditor4">
                                            Cancel
                                        </button>
                                        <button class="btn-dark ff_primary font-medium fs_md py-6 ms-3" type="submit"
                                            @click="showeditor4 = !showeditor4">
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { ref } from "vue";
export default {
    name: "NuxtTutorial",
    setup() {
        const showSidebar = ref(true);
        const showModal = ref(false);
        const showPlayscript1 = ref(true);
        const showPlayscript2 = ref(true);
        const showPlayscript3 = ref(true);
        const showPlayscript4 = ref(true);
        const showPlayscript5 = ref(true);
        const playPause = ref(false);
        const showeditor = ref(true);
        const showeditor1 = ref(true);
        const showeditor2 = ref(true);
        const showeditor3 = ref(true);
        const showeditor4 = ref(true);

        return {
            showSidebar,
            showModal,
            showPlayscript1,
            showPlayscript2,
            showPlayscript3,
            showPlayscript4,
            showPlayscript5,
            playPause,
            showeditor,
            showeditor1,
            showeditor2,
            showeditor3,
            showeditor4,
        };
    },
};
</script>