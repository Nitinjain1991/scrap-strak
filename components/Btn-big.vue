<template>
  <button type="submit" href="#"
    class="font-Poppins font-normal text-sm lg:text-lg transition transition-duration-500 transition-ease-in-out py-2 lg:py-4 px-6 lg:px-10 rounded-base">
    {{ label }}
  </button>
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
