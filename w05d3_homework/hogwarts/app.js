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

	$container.append($name);
	$container.append($house);
	$container.append($pet);
	$container.append($wand);

	const $trunk = $('<ul>').attr('storage', 'trunk');
	//li items
	const $butterBeer = $('<li>').text('butter beer');
	const $cloak = $('<li>').text('invisibility cloak').addClass('secret');
	const $map = $('<li>').text('magic map').addClass('secret');
	const $timeTurner = $('<li>').text('time turner').addClass('secret');
	const $leash = $('<li>').text('leash').addClass('cat');
	const $candy = $('<li>').text('Bertie Botts Every Flavored Beans');
	
	$trunk.append($butterBeer);
	$trunk.append($cloak);
	$trunk.append($map);
	$trunk.append($timeTurner);
	$trunk.append($leash);
	$trunk.append($candy);

	$container.append($trunk);






});