<script setup lang="ts">
import { type TextVariants, textVariants } from "./variants";
const props = defineProps<{ tag?: TextVariants["tag"] }>();
</script>

<template>
  <component :is="tag" :class="textVariants({ tag })"> <slot /></component>
</template>
