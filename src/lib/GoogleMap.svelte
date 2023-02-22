<script>
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_KEY;
	console.log('googleMapsApiKey', googleMapsApiKey);
	export let globally = false;
	export let map;

	let src = '';
	const key = '';

	// @ts-ignore
	let container;
	let zoom = 8;
	let center = { lat: 37.5742776, lng: 43.7260158 };

	onMount(() => {
		Object.assign(window, {
			mapLoaded: () => {
				// @ts-ignore
				map = new google.maps.Map(container, {
					zoom,
					center
				});
				dispatch('load', true);
				if (globally) {
					Object.assign(window, { map });
				}
			}
		});

		//Assign
		src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=mapLoaded`;
	});
</script>

<div class="width:100%; height:500px" bind:this={container} />
<svelte:head>
	{#if src}
		<script {src}></script>
	{/if}
</svelte:head>
