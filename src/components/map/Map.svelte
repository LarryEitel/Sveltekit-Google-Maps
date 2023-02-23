<script lang="ts">
	import { Loader } from '@googlemaps/js-api-loader';
	import { onMount, setContext } from 'svelte';
	import { mapKey, mapsApiKey } from '../../store/store';
	import mapOptions from './ts/mapOptions';
	import GoogleWrapper from './ts/googleWrapper';
	import './map.css';

	let container;
	let promise;
	let map;
	let mapInstance;
	let googleInstance: GoogleWrapper;

	const loader = new Loader({
		apiKey: mapsApiKey
	});

	setContext(mapKey, {
		getMap: () => mapInstance,
		getGoogle: () => googleInstance
	});

	async function loadMap() {
		await loader.load().then(() => {
			googleInstance = new GoogleWrapper(google);
			map = googleInstance.createMap(container, mapOptions);
		});
	}

	onMount(() => {
		promise = loadMap();
	});
</script>

{#await promise catch error}
	<p>{error}</p>
	<h1>An error occurred loading Google Maps, please try refreshing the page</h1>
{/await}

<div id="google-map" bind:this={container}>
	<slot />
</div>
