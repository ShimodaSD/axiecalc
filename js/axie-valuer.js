var mysticFloors = [];
var numMysticParts = 0;
var cheapestPriceInEth = 0;

$(document).ready(function () {
	const path = window.location.pathname.split('/');
	if (path.length > 2) {
		const axieId = window.location.pathname.split('/')[path.length - 1];
		document.getElementById("axieId").value = axieId;
		calculate();
	}
});

function calculateOnEnterKey(event) {
	if (event.keyCode === 13) {
		calculate();
	}
}

function showAxieNotFound() {
	document.getElementById("calcButton").disabled = false;
	document.getElementById("axieId").disabled = false;
	document.getElementById("spinner").style.display = "none";
}

function showAxieBack(allParts) {
	if (allParts.parts[2].d.class.toLowerCase() == "beast") {
		if (allParts.parts[2].d.name.toLowerCase() == "ronin") {
			document.getElementById("card-1").innerHTML = '80'
		}
		else if (allParts.parts[2].d.name.toLowerCase() == "hero") {
			document.getElementById("card-1").innerHTML = '50'
		}
		else if (allParts.parts[2].d.name.toLowerCase() == "jaguar") {
			document.getElementById("card-1").innerHTML = '120'
		}
		else if (allParts.parts[2].d.name.toLowerCase() == "risky beast") {
			document.getElementById("card-1").innerHTML = '125'
		}
		else if (allParts.parts[2].d.name.toLowerCase() == "timber") {
			document.getElementById("card-1").innerHTML = '80'
		}
		else if (allParts.parts[2].d.name.toLowerCase() == "furball") {
			document.getElementById("card-1").innerHTML = '40'
		}
		else {
			document.getElementById("card-1").innerHTML = '0'
		}
	}

	else if (allParts.parts[2].d.class.toLowerCase() == "bug") {
		if (allParts.parts[2].d.name.toLowerCase() == "sticky goo") {
			document.getElementById("card-1").innerHTML = '40'
		}
		else if (allParts.parts[2].d.name.toLowerCase() == "barb strike") {
			document.getElementById("card-1").innerHTML = '90'
		}
		else if (allParts.parts[2].d.name.toLowerCase() == "buzz buzz") {
			document.getElementById("card-1").innerHTML = '110'
		}
		else if (allParts.parts[2].d.name.toLowerCase() == "sandal") {
			document.getElementById("card-1").innerHTML = '110'
		}
		else if (allParts.parts[2].d.name.toLowerCase() == "scarab") {
			document.getElementById("card-1").innerHTML = '100'
		}
		else if (allParts.parts[2].d.name.toLowerCase() == "spiky wind") {
			document.getElementById("card-1").innerHTML = '10'
		}
		else {
			document.getElementById("card-1").innerHTML = '0'
		}
	}

	else if (allParts.parts[2].d.class.toLowerCase() == "bird") {
		if (allParts.parts[2].d.name.toLowerCase() == "balloon") {
			document.getElementById("card-1").innerHTML = '40'
		}
		else if (allParts.parts[2].d.name.toLowerCase() == "cupid") {
			document.getElementById("card-1").innerHTML = '120'
		}
		else if (allParts.parts[2].d.name.toLowerCase() == "pigeon post") {
			document.getElementById("card-1").innerHTML = '120'
		}
		else if (allParts.parts[2].d.name.toLowerCase() == "kingfisher") {
			document.getElementById("card-1").innerHTML = '130'
		}
		else if (allParts.parts[2].d.name.toLowerCase() == "tri feather") {
			document.getElementById("card-1").innerHTML = '40'
		}
		else if (allParts.parts[2].d.name.toLowerCase() == "raven") {
			document.getElementById("card-1").innerHTML = '110'
		}
		else {
			document.getElementById("card-1").innerHTML = '0'
		}
	}
	else if (allParts.parts[2].d.class.toLowerCase() == "plant") {
		if (allParts.parts[2].d.name.toLowerCase() == "turnip") {
			document.getElementById("card-1").innerHTML = '60'
		}
		else if (allParts.parts[2].d.name.toLowerCase() == "shitake") {
			document.getElementById("card-1").innerHTML = '0'
		}
		else if (allParts.parts[2].d.name.toLowerCase() == "bidens") {
			document.getElementById("card-1").innerHTML = '0'
		}
		else if (allParts.parts[2].d.name.toLowerCase() == "watering can") {
			document.getElementById("card-1").innerHTML = '45'
		}
		else if (allParts.parts[2].d.name.toLowerCase() == "mint") {
			document.getElementById("card-1").innerHTML = '0'
		}
		else if (allParts.parts[2].d.name.toLowerCase() == "pumpkin") {
			document.getElementById("card-1").innerHTML = '0'
		}
		else {
			document.getElementById("card-1").innerHTML = '0'
		}

	}
	else if (allParts.parts[2].d.class.toLowerCase() == "aquatic") {
		if (allParts.parts[2].d.name.toLowerCase() == "hermit") {
			document.getElementById("card-1").innerHTML = '0'
		}
		else if (allParts.parts[2].d.name.toLowerCase() == "blue moon") {
			document.getElementById("card-1").innerHTML = '120'
		}
		else if (allParts.parts[2].d.name.toLowerCase() == "goldfish") {
			document.getElementById("card-1").innerHTML = '105'
		}
		else if (allParts.parts[2].d.name.toLowerCase() == "sponge") {
			document.getElementById("card-1").innerHTML = '60'
		}
		else if (allParts.parts[2].d.name.toLowerCase() == "anemone") {
			document.getElementById("card-1").innerHTML = '80'
		}
		else if (allParts.parts[2].d.name.toLowerCase() == "perch") {
			document.getElementById("card-1").innerHTML = '100'
		}
		else {
			document.getElementById("card-1").innerHTML = '0'
		}
	}
	else if (allParts.parts[2].d.class.toLowerCase() == "reptile") {
		if (allParts.parts[2].d.name.toLowerCase() == "bone sail" || allParts.parts[2].d.name.toLowerCase() == "rugged sail") {
			document.getElementById("card-1").innerHTML = '80'
		}
		else if (allParts.parts[2].d.name.toLowerCase() == "tri spikes") {
			document.getElementById("card-1").innerHTML = '80'
		}
		else if (allParts.parts[2].d.name.toLowerCase() == "green thorns") {
			document.getElementById("card-1").innerHTML = '20'
		}
		else if (allParts.parts[2].d.name.toLowerCase() == "indian star") {
			document.getElementById("card-1").innerHTML = '20'
		}
		else if (allParts.parts[2].d.name.toLowerCase() == "red ear") {
			document.getElementById("card-1").innerHTML = '10'
		}
		else if (allParts.parts[2].d.name.toLowerCase() == "croc") {
			document.getElementById("card-1").innerHTML = '80'
		}
		else {
			document.getElementById("card-1").innerHTML = '0'
		}
	}
}



function showAxieInfo(axieData, allParts) {
	//document.getElementById("name").innerHTML = axieData.data.axie.name;
	//document.getElementById("name").href = "https://marketplace.axieinfinity.com/axie/" + axieData.data.axie.id;
	//document.getElementById("cardSearchMarketplace").href = formatAxieMarketplaceUrl(axieData);
	document.getElementById("image").src = axieData.data.axie.image;
	document.getElementById("class").innerHTML = axieData.data.axie.class;
	//document.getElementById("breedCount").innerHTML = axieData.data.axie.breedCount;

	document.getElementById("health").innerHTML = axieData.data.axie.stats.hp;
	document.getElementById("speed").innerHTML = axieData.data.axie.stats.speed;
	document.getElementById("skill").innerHTML = axieData.data.axie.stats.skill;
	document.getElementById("morale").innerHTML = axieData.data.axie.stats.morale;

	showAxieBack(allParts)




	numMysticParts = 0;
	document.getElementById("eyes-d").innerHTML = allParts.parts[0].d.name;
	//document.getElementById("eyes-r1").innerHTML = allParts.parts[0].r1.name;
	//document.getElementById("eyes-r2").innerHTML = allParts.parts[0].r2.name;
	if (allParts.parts[0].mystic) {
		numMysticParts++;
		document.getElementById("mysticLabel").style.display = "block";
		document.getElementById("eyes-d").classList.add("mystic");
		//document.getElementById("mysticBadge").style.display = "inline";
	} else {
		document.getElementById("eyes-d").classList.add(allParts.parts[0].d.class.toLowerCase());
	}
	//document.getElementById("eyes-r1").classList.add(allParts.parts[0].r1.class.toLowerCase());
	//document.getElementById("eyes-r2").classList.add(allParts.parts[0].r2.class.toLowerCase());

	document.getElementById("ears-d").innerHTML = allParts.parts[1].d.name;
	//document.getElementById("ears-r1").innerHTML = allParts.parts[1].r1.name;
	//document.getElementById("ears-r2").innerHTML = allParts.parts[1].r2.name;
	if (allParts.parts[1].mystic) {
		numMysticParts++;
		document.getElementById("mysticLabel").style.display = "block";
		document.getElementById("ears-d").classList.add("mystic");
		//document.getElementById("mysticBadge").style.display = "inline";
	} else {
		document.getElementById("ears-d").classList.add(allParts.parts[1].d.class.toLowerCase());

	}
	//document.getElementById("ears-r1").classList.add(allParts.parts[1].r1.class.toLowerCase());
	//document.getElementById("ears-r2").classList.add(allParts.parts[1].r2.class.toLowerCase());

	document.getElementById("back-d").innerHTML = allParts.parts[2].d.name;
	//document.getElementById("back-r1").innerHTML = allParts.parts[2].r1.name;
	//document.getElementById("back-r2").innerHTML = allParts.parts[2].r2.name;
	if (allParts.parts[2].mystic) {
		numMysticParts++;
		document.getElementById("mysticLabel").style.display = "block";
		document.getElementById("back-d").classList.add("mystic");
		//document.getElementById("mysticBadge").style.display = "inline";
	} else {
		document.getElementById("back-d").classList.add(allParts.parts[2].d.class.toLowerCase());


	}
	//document.getElementById("back-r1").classList.add(allParts.parts[2].r1.class.toLowerCase());
	//document.getElementById("back-r2").classList.add(allParts.parts[2].r2.class.toLowerCase());

	document.getElementById("mouth-d").innerHTML = allParts.parts[3].d.name;
	//document.getElementById("mouth-r1").innerHTML = allParts.parts[3].r1.name;
	//document.getElementById("mouth-r2").innerHTML = allParts.parts[3].r2.name;
	if (allParts.parts[3].mystic) {
		numMysticParts++;
		document.getElementById("mysticLabel").style.display = "block";
		document.getElementById("mouth-d").classList.add("mystic");
		//document.getElementById("mysticBadge").style.display = "inline";
	} else {
		document.getElementById("mouth-d").classList.add(allParts.parts[3].d.class.toLowerCase());
	}
	//document.getElementById("mouth-r1").classList.add(allParts.parts[3].r1.class.toLowerCase());
	//document.getElementById("mouth-r2").classList.add(allParts.parts[3].r2.class.toLowerCase());

	document.getElementById("horn-d").innerHTML = allParts.parts[4].d.name;
	//document.getElementById("horn-r1").innerHTML = allParts.parts[4].r1.name;
	//document.getElementById("horn-r2").innerHTML = allParts.parts[4].r2.name;
	if (allParts.parts[4].mystic) {
		numMysticParts++;
		document.getElementById("mysticLabel").style.display = "block";
		document.getElementById("horn-d").classList.add("mystic");
		//document.getElementById("mysticBadge").style.display = "inline";
	} else {
		document.getElementById("horn-d").classList.add(allParts.parts[4].d.class.toLowerCase());
	}
	//document.getElementById("horn-r1").classList.add(allParts.parts[4].r1.class.toLowerCase());
	//document.getElementById("horn-r2").classList.add(allParts.parts[4].r2.class.toLowerCase());

	document.getElementById("tail-d").innerHTML = allParts.parts[5].d.name;
	//document.getElementById("tail-r1").innerHTML = allParts.parts[5].r1.name;
	//document.getElementById("tail-r2").innerHTML = allParts.parts[5].r2.name;
	if (allParts.parts[5].mystic) {
		numMysticParts++;
		document.getElementById("mysticLabel").style.display = "block";
		document.getElementById("tail-d").classList.add("mystic");
		//document.getElementById("mysticBadge").style.display = "inline";
	} else {
		document.getElementById("tail-d").classList.add(allParts.parts[5].d.class.toLowerCase());
	}
	//document.getElementById("tail-r1").classList.add(allParts.parts[5].r1.class.toLowerCase());
	//document.getElementById("tail-r2").classList.add(allParts.parts[5].r2.class.toLowerCase());

	if (axieData.data.axie.auction) {
		// TODO - Show price
	}


	document.getElementById("axie").style.display = "block";

}

function formatGetAxiePayload(axieId) {
	var getAxieQuery = "query GetAxieDetail($axieId: ID!) {axie(axieId: $axieId) {\n...AxieDetail\n__typename\n}\n}\nfragment AxieDetail on Axie {\nid\nimage\nclass\nname\ngenes\nbirthDate\nbodyShape\nsireId\nsireClass\nmatronId\nmatronClass\nstage\ntitle\nbreedCount\nparts {\n...AxiePart\n__typename\n}\nauction {\n  currentPrice\n  currentPriceUSD\n  __typename\n}\nstats {\n...AxieStats\n__typename\n}\nchildren {\nid\nname\nclass\nimage\ntitle\nstage\n__typename\n}\n__typename\n}\n\nfragment AxiePart on AxiePart {\nid\nname\nclass\ntype\nspecialGenes\nstage\n__typename\n}\nfragment AxieStats on AxieStats {\nhp\nspeed\nskill\nmorale\n__typename\n}";
	return { operationName: "GetAxieDetail", query: getAxieQuery, variables: { axieId: axieId } }
}

function calculate() {
	var axieId = document.getElementById("axieId").value;

	var getAxiePayload = formatGetAxiePayload(axieId);
	$.postJSON(url, getAxiePayload)
		.done(function (axieData) {
			if (!axieData.data.axie) {
				showAxieNotFound();
			} else if (!axieData.data.axie.class) {
				showAxieNotMorphed(axieData);
			} else {
				var allParts = decodeGenes(axieData.data.axie.genes);

				showAxieInfo(axieData, allParts);
				document.getElementById("spinner").style.display = "none";
				document.getElementById("calcButton").disabled = false;
				document.getElementById("axieId").disabled = false;
			}
		})
		.error(function (getAxieError) {
			showErrorMessage();
		});
}
