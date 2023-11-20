<script lang="ts">
	export let characterShortName: string;
	export let characters: Character[];

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

	let selectedCharacter: Character;
	$: selectedCharacter = selectedCharacter;

	for (let element of characters) {
		if (element.ShortName === characterShortName) {
			selectedCharacter = element;
		}
	}

	$: console.log(selectedCharacter);
</script>

<div>
	<h1 class="text-4xl">{selectedCharacter.ShortName}</h1>
	<p>{selectedCharacter.Id}</p>
	<p>{selectedCharacter.FightingStyle}</p>
	<p>{selectedCharacter.Gender}</p>
</div>
