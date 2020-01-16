$(() => {
	const $container = $('#container');
	console.log($container);

	const $h1 = $('<h1>').text('Hogwarts');
	console.log($h1);

	$container.append($h1);

	const $name = $('<h2>').text('Loganne');
	const $house = $('<h3>').text('RavenClaw');
	const $pet = $('<h4>').addClass('cat').text('Twitch');
	const $wand = $('<h4>').text('Elder Wand');
	








});