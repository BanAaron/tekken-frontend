<script>
	import { onMount } from 'svelte';

	let characters;

	onMount(async () => {
		try {
			const response = await fetch('http://localhost:8888/api/character');
			characters = await response.json();
			console.log(characters);
		} catch (error) {
			console.error(error);
		}
	});
</script>

<select
	id="characters"
	class="border border-neutral-800 bg-neutral-950 text-white focus:border-neutral-600 rounded-lg block w-full p-2.5"
>
	<option>Select a Character</option>
</select>
