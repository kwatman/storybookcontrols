<script setup lang="ts">
import { computed } from "vue";
import Text from "../Text/Text.vue";
const props = defineProps({
  placeholder: String,
  label: String,
  labelColor: String,
  modelValue: String,
  bgOpacity: String,
});
console.log(props.label);

const emit = defineEmits(["update:modelValue"]);
const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <div class="flex flex-col">
    <label>
      <Text tag="p" :style="['color: ' + labelColor]"> {{ label }} </Text>
    </label>
    <input
      class="border border-FlatBlue text-base py-[10px] pl-[16px] rounded-[2px] h-[40px]"
      type="text"
      v-model="value"
      :placeholder="placeholder"
      :style="['opacity: ' + bgOpacity]"
    />
  </div>
</template>
