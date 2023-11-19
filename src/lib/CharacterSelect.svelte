<script lang="ts">
  import { onMount } from 'svelte';
	import { api } from '$lib/vars';

	type Character = {
		Id: number;
		ShortName: string;
		LongName: string;
		FightingStyle: string;
		Nationality: string;
		Height: number;
		Weight: number;
	};

	let characters: Character[] = [];
	$: characters = characters;

	onMount(async () => {
		try {
			const response = await fetch(api.character);
			characters = await response.json();
		} catch (error) {
			console.error(error);
		}
	});
</script>

<select
	id="characters"
	class="border border-neutral-800 bg-neutral-950 text-white focus:border-neutral-600 rounded-lg block w-full p-2.5"
>
	<option value="" disabled selected>Select a Character</option>
	{#each characters as { Id, ShortName, LongName }}
		<option id={Id.toString()} value={ShortName}>{LongName}</option>
	{/each}
</select>
