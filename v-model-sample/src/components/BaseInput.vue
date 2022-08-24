<template>
    <div>
        <h2>Options API</h2>
        <input type="text" :value="modelValue" @input="updateValue" />
    </div>
</template>

<script>
export default {
    props: {
        modelValue: String
    },
    methods: {
        updateValue(event) {
            this.$emit('update:modelValue', event.target.value);
        }
    }
}
</script>