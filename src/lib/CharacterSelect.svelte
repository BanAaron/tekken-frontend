<script lang="ts">
	import { onMount } from 'svelte';
	import { api } from '$lib/vars';
	import CharacterInfo from '$lib/CharacterInfo.svelte';

	type Character = {
		Id: number;
		ShortName: string;
		LongName: string;
		FightingStyle: string;
		Nationality: string;
		Height: number;
		Weight: number;
		Gender: string;
	};

	let characters: Character[] = [];
	let selected = 'Select a Character';
	$: console.log(selected);
	// $: selected = selected;

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
	bind:value={selected}
	id="characters"
	class="border border-neutral-800 bg-neutral-950 text-white focus:border-neutral-600 rounded-lg block w-full p-2.5"
>
	<option disabled selected>Select a Character</option>
	{#each characters as { Id, ShortName, LongName }}
		<option id={Id.toString()} value={ShortName}>{LongName}</option>
	{/each}
</select>

<div class="mt-10">
	{#if selected !== 'Select a Character'}
		<CharacterInfo characterShortName={selected} {characters} />
	{:else}
		<img class="mx-auto" src="/images/MishimaZaibatsu.webp" alt="Mishima Zaibatsu Logo" />
	{/if}
</div>
