$(() => {
	//==============
	//	YEAR 1
	//==============
	const $container = $('#container');
	console.log($container);

	const $h1 = $('<h1>').text('Hogwarts');
	console.log($h1);

	$container.append($h1);

	//==============
	//	YEAR 2
	//==============

	const $name = $('<h2>').text('Loganne');
	const $house = $('<h3>').text('RavenClaw');
	const $pet = $('<h4>').addClass('cat').text('Twitch');
	const $wand = $('<h4>').text('Elder Wand');

	$container.append($name);
	$container.append($house);
	$container.append($pet);
	$container.append($wand);

	//==============
	//	YEAR 3
	//==============

	const $trunk = $('<ul>').attr('storage', 'trunk');
	//li items
	const $butterBeer = $('<li>').text('butter beer').appendTo($trunk);
	const $cloak = $('<li>').text('invisibility cloak').addClass('secret').appendTo($trunk);
	const $map = $('<li>').text('magic map').addClass('secret').appendTo($trunk);
	const $timeTurner = $('<li>').text('time turner').addClass('secret').appendTo($trunk);
	const $leash = $('<li>').text('leash').addClass('cat').appendTo($trunk);
	const $candy = $('<li>').text('Bertie Botts Every Flavored Beans').appendTo($trunk);
	
	$container.append($trunk);

	//==============
	//	YEAR 4
	//==============
	
	const $semester = $('<h5>').text('Spring 2017');
	const $schedule = $('<table>');
	const $thead = $('<thead>');
	const $day = $('<th>').text('Day');
	const $classes = $('<th>').text('Classes');
	//MONDAY
	const $tr = $('<tr>');
	const $td1 = $('<td>').text('Monday');
	const $td2 = $('<td>').text('Herbology, Divination, History of Magic');
	//TUESDAY
	const $tr2 = $('<tr>');
	const $td3 = $('<td>').text('Tueday');
	const $td4 = $('<td>').text('History of Magic, Charms, Potions');
	//WEDNESDAY
	const $tr3 = $('<tr>');
	const $td5 = $('<td>').text('Wednesday');
	const $td6= $('<td>').text('Potions, Transfiguration, Defense Against the Dark Arts');
	//THURSDAY
	const $tr4 = $('<tr>');
	const $td7 = $('<td>').text('Thursday');
	const $td8 = $('<td>').text('Transfiguration, Defense Against the Dark Arts, Quidditch practice');
	//FRIDAY
	const $tr5 = $('<tr>');
	const $td9 = $('<td>').text('Friday');
	const $td10 = $('<td>').text('Quidditch practice, Herbology, Divination');

	//create the table 
	$container.append($semester).append($schedule);
	$schedule.append($thead).append($day).append($classes).append($tr).append($tr2).append($tr3).append($tr4).append($tr5);
	
	//create monday row
	$tr.append($td1).append($td2);

	//create tuesday row
	$tr2.append($td3).append($td4);

	//create wednesday row
	$tr3.append($td5).append($td6);

	//create thursday row
	$tr4.append($td7).append($td8);

	//create friday row
	$tr5.append($td9).append($td10);


	//==============
	//	YEAR 5
	//==============

	$wand.detach();
	$butterBeer.remove();
	$wand.text('Elder wand').insertAfter($pet).css('color', 'indigo');
	$pet.hide();
	$pet.show();

	//==============
	//	YEAR 6
	//==============
	$('.secret').hide('slow').delay(2000);
	$('.secret').show('slow');

	$leash.addClass('cabbage');
	$leash.removeAttr('class','cabbage');

	

	//==============
	//	YEAR 7
	//==============




});