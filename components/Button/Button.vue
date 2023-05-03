<script setup lang="ts">
import Text from "../Text/Text.vue";
const props = defineProps({
  type: String,
});
let classes = {};
</script>

<template>
  <button
    class="bg-RegularRed rounded-[4px] py-[16px] px-[40px] hover:bg-opacity-50 group"
  >
    <Text tag="h4" class="text-white group-active:text-RegularRed">
      <slot />
    </Text>
  </button>
</template>
