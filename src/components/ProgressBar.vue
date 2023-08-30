<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps<{
	title: string;
	count: number;
	total: number;
	endLabel: string;
	percent: boolean;
	timePass: boolean;
	unit: string;
}>();

const progress = computed(() => (props.count / props.total) * 100);
</script>

<template>
	<div>
		<div class="flex flex-row justify-between text-xs uppercase font-medium tracking-[1px]">
			<p>
				{{ title }}
			</p>
			<p class="text-xxs">
				{{ endLabel }}
			</p>
		</div>

		<!-- Progress Bar -->
		<div class="relative rounded bg-[#3755898c] w-full h-[24px]">
			<div
				class="progress h-full bg-[#375589] rounded-l" 
				:style="{
					width: progress + '%',
				}"
				:class="{
					'transition-all duration-1000 ease-linear': progress < 100, 
				}"

			/>
			<div
				class="progress relative min-w-fit text-right text-xs pt-1"
				:style="{
					width: progress + '%',
				}"
				:class="{
					'transition-all duration-1000 ease-linear': progress < 100, 
				}"
			>
				<template v-if="timePass">
					{{
						percent
							? progress.toFixed(1) + '%'
							: count.toFixed(1) + unit
					}}
				</template>
				<template v-else>
					{{
						percent
							? (100 - progress).toFixed(1) + '%'
							: (total - count).toFixed(1) + unit
					}}
				</template>
			</div>
		</div>
	</div>
</template>

<!-- #555, 1b3159 -->