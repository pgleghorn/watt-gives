<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="content">
	<h1>About this app</h1>

	<p>
		This is a bastardized copy of the <a href="https://kit.svelte.dev">SvelteKit</a> demo app,
		which I've modified into a tool intended to dynamically render graphs of
		the electricity usage in the home. Very much work in progress.
	</p>
	<p>
		This front-end code runs on a raspberry pi,
		which is connected to an arduino via usb. A long cable with a light sensitive
		resistor runs from the arduino into the outside electricity cabinet, the resistor
		is positioned in front of the LED on the mains power meter. Some code on the arduino
		detects the pulses, and reports them over serial connection.  The raspberry pi
		listens on the serial connection, notes the pulse frequency and calculates
		the effective kWh usage over time.
	</p>

</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
