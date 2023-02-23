<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../../../app.postcss';
	import { AppBar, AppShell } from '@skeletonlabs/skeleton';

	import NavTrail from '../NavTrail.svelte';
</script>

<AppShell>
	<!-- <svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead"><a href="/">Home</a></svelte:fragment>
			<svelte:fragment slot="trail">
				<NavTrail />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment> -->
	<!-- <svelte:fragment slot="header">Header</svelte:fragment> -->
	<!-- <svelte:fragment slot="sidebarLeft">Sidebar Left</svelte:fragment> -->
	<!-- <svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment> -->
	<!-- <svelte:fragment slot="pageHeader">Page Header</svelte:fragment> -->
	<!-- Router Slot -->
	<!-- TODO: use variable for container width -->
	<div class="mx-auto max-w-lg pt-2 pt-10">
		<slot />
	</div>
	<!-- ---- / ---- -->
	<!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
	<!-- <svelte:fragment slot="footer">Footer</svelte:fragment> -->
</AppShell>
