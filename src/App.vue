<script setup lang="ts">
	import { reactive, ref } from 'vue';
	import { format, getDaysInYear, getDaysInMonth } from 'date-fns';
	import * as ProgressCalculation from './utils/ProgressCalculation';
	import ProgressBar from "./components/ProgressBar.vue";
	import ToggleSwitch from './components/ToggleSwitch.vue';

	const currentDate = ref(new Date());

	const currentDateFormat = ref(currentDate.value.toLocaleDateString(undefined, {
		year: "numeric",
		month: "short",
		day: "numeric",
		weekday: "short",
	}));

	const currentTime = ref(format(currentDate.value, 'h:mm a'));

	const progress = reactive({
		year: ProgressCalculation.getYearProgress(currentDate.value),
		month: ProgressCalculation.getMonthProgress(currentDate.value),
		week: ProgressCalculation.getWeekProgress(currentDate.value),
		day: ProgressCalculation.getDayProgress(currentDate.value),
		hour: ProgressCalculation.getHourProgress(currentDate.value),
		minute: ProgressCalculation.getMinuteProgress(currentDate.value),

		totalYearDays: getDaysInYear(currentDate.value),
		totalMonthDays: getDaysInMonth(currentDate.value),
	});

	setInterval(() => {
		currentDate.value = new Date();
		currentTime.value = format(currentDate.value, 'h:mm a');
		currentDateFormat.value = currentDate.value.toLocaleDateString(undefined, {
		year: "numeric",
		month: "short",
		day: "numeric",
		weekday: "short",
		});

		progress.year = ProgressCalculation.getYearProgress(currentDate.value);
		progress.month = ProgressCalculation.getMonthProgress(currentDate.value);
		progress.week = ProgressCalculation.getWeekProgress(currentDate.value);
		progress.day = ProgressCalculation.getDayProgress(currentDate.value);
		progress.hour = ProgressCalculation.getHourProgress(currentDate.value);
		progress.minute = ProgressCalculation.getMinuteProgress(currentDate.value);

		progress.totalYearDays = getDaysInYear(currentDate.value) ;
		progress.totalMonthDays = getDaysInMonth(currentDate.value);
	}, 1000);

	const percentOrCounts = ref(true);
	const leftOrPass = ref(true);
</script>

<template>
	<div class="flex flex-row justify-between">
	<ToggleSwitch
		labelTitle="percentOrCounts"
		v-model:checked="percentOrCounts"
	>
		{{ percentOrCounts ? '%' : '#' }}
	</ToggleSwitch>
	<ToggleSwitch
		labelTitle="leftOrPass"
		v-model:checked="leftOrPass"
	>
		<IconIcRoundHourglassBottom
			class="transition"
			:class="{
				'rotate-180': leftOrPass,
			}"
		/>
	</ToggleSwitch>
	</div>

	<div class="text-center font-sans mb-5">
		<div class="date text-xl text-strong">
			{{ currentDateFormat }}
		</div>

		<div class="time text-lg">
			{{ currentTime }}
		</div>
	</div>

	<div class="grid grid-rows-6 gap-10 align-between">
	<ProgressBar 
	title="Year"
	:end-label="progress.totalYearDays + 'd'"
	:count="progress.year"
	:total="progress.totalYearDays"
	unit="d"
	v-bind:percent="percentOrCounts"
	v-bind:timePass="leftOrPass"/>
	<ProgressBar 
	title="Month"
	:end-label="progress.totalMonthDays + 'd'"
	:count="progress.month"
	:total="progress.totalMonthDays"
	unit="d"
	v-bind:percent="percentOrCounts"
	v-bind:timePass="leftOrPass"/>
	<ProgressBar 
	title="Week"
	end-label="Saturday"
	:count="progress.week"
	:total="7"
	unit="d"
	v-bind:percent="percentOrCounts"
	v-bind:timePass="leftOrPass"/>
	<ProgressBar 
	title="Day"
	end-label="24h"
	:count="progress.day"
	:total=24
	unit="h"
	v-bind:percent="percentOrCounts"
	v-bind:timePass="leftOrPass"/>
	<ProgressBar 
	title="Hour"
	end-label="60m"
	:count="progress.hour"
	:total=60
	unit="m"
	v-bind:percent="percentOrCounts"
	v-bind:timePass="leftOrPass"/>
	<ProgressBar 
	title="Minute"
	end-label="60s"
	:count="progress.minute"
	:total=60
	unit="s"
	v-bind:percent="percentOrCounts"
	v-bind:timePass="leftOrPass"/>
	</div>

</template>