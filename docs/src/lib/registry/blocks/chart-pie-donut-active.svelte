<script lang="ts">
	import TrendingUpIcon from "@lucide/svelte/icons/trending-up";
	import * as Chart from "$lib/registry/ui/chart/index.js";
	import * as Card from "$lib/registry/ui/card/index.js";
	import { Arc, PieChart } from "layerchart";

	const chartData = [
		{ browser: "chrome", visitors: 275, color: "var(--color-chrome)" },
		{ browser: "safari", visitors: 200, color: "var(--color-safari)" },
		{ browser: "firefox", visitors: 287, color: "var(--color-firefox)" },
		{ browser: "edge", visitors: 173, color: "var(--color-edge)" },
		{ browser: "other", visitors: 190, color: "var(--color-other)" },
	];

	const chartConfig = {
		visitors: {
			label: "Visitors",
		},
		chrome: {
			label: "Chrome",
			color: "var(--chart-1)",
		},
		safari: {
			label: "Safari",
			color: "var(--chart-2)",
		},
		firefox: {
			label: "Firefox",
			color: "var(--chart-3)",
		},
		edge: {
			label: "Edge",
			color: "var(--chart-4)",
		},
		other: {
			label: "Other",
			color: "var(--chart-5)",
		},
	} satisfies Chart.ChartConfig;
</script>

<Card.Root class="flex flex-col">
	<Card.Header class="items-center">
		<Card.Title>Pie Chart - Donut Active</Card.Title>
		<Card.Description>January - June 2024</Card.Description>
	</Card.Header>
	<Card.Content class="flex-1">
		<Chart.Container config={chartConfig} class="mx-auto aspect-square max-h-[250px]">
			<PieChart
				data={chartData}
				key="browser"
				value="visitors"
				c="color"
				innerRadius={60}
				props={{
					pie: { motion: "tween" },
					arc: {
						strokeWidth: 5,
					},
				}}
				padding={29}
			>
				{#snippet tooltip()}
					<Chart.Tooltip hideLabel />
				{/snippet}
				{#snippet arc({ props, index })}
					{@const arcProps =
						index === 0 ? { ...props, outerRadius: 60, innerRadius: 105 } : props}
					<Arc {...arcProps} />
				{/snippet}
			</PieChart>
		</Chart.Container>
	</Card.Content>
	<Card.Footer class="flex-col gap-2 text-sm">
		<div class="flex items-center gap-2 font-medium leading-none">
			Trending up by 5.2% this month <TrendingUpIcon class="size-4" />
		</div>
		<div class="text-muted-foreground leading-none">
			Showing total visitors for the last 6 months
		</div>
	</Card.Footer>
</Card.Root>
