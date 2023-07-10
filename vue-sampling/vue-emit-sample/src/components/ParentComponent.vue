<template>
	<div>
		<span>{{ count }}</span>
		<ChildComponent :count="count" @change="change" />
	</div>
</template>

<script>
import ChildComponent from "./ChildComponent.vue";
export default {
	components: {
		ChildComponent,
	},
	data() {
		return {
			count: 0,
		};
	},
	methods: {
		change(value) {
			this.count = value;
		}
	},
}
</script>