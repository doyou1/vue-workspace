<template>
	<div>
		<button @click="decrement"> - </button>
		<button @click="increment"> + </button>
	</div>
</template>

<script>
export default {
	props: ["count"],
	methods: {
		increment() {
			this.$emit("change", this.count + 1);
		},
		decrement() {
			this.$emit("change", this.count - 1);
		},
	}
}
</script>