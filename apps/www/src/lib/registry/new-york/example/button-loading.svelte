<script lang="ts">
	import Reload from "svelte-radix/Reload.svelte";
	import { Button } from "@/registry/new-york/ui/button";
</script>

<Button disabled>
	<Reload class="mr-2 h-4 w-4 animate-spin" />
	Please wait
</Button>
