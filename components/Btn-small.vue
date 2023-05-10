<template>
  <a href="#"
    class="font-Poppins font-medium text-sm md:text-lg transition transition-duration-500 transition-ease-in-out  py-2.5 px-6 lg:px-10">
    {{ label }}
  </a>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
  },
};
</script>
