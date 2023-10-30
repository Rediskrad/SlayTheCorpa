let gameState = {
	player: {
		life: 100,
		maxLife: 100,
		shield: 0,
		items: [],
		imgId: 'rainhoe',
		energy: 4,
		maxEnergy: 4,
		x: 100,
		y: 200,
		width: 100,
		height: 300,
		cardDraw: 3,
		money: 0,
		handSize: 0
	},
	enemies: [],
	world: {
		map: [],
		currentNode: null,
		level: 0,
		shop: {
			items: [],
			cards: []
		}
	},
	dialog: {
		index: 0,
		finished: false
	},
	hand: [],
	deck: [],
	used: [],
	items: [],
	buffs: [],
	animations: [],
	selectedCard: null,
	targetedObj: null,
	flags: {
		targetingEnemy: false,
		targetingPlayer: false,
		enemyTurn: false
	},
	seenDialogs: [],
	skipSeenDialog: true,
	currentScreen: 'MENU',
	damageUpgrade: 0,
	defenseUpgrade: 0,
	unlockedCards: {...defaultDeck},
	builtDeck: {...defaultDeck},
};

const loadedImgs = {};
const canvas = document.getElementById("canvas");

function initGame() {
	for (let img of imgs) {
		var imgEl = document.createElement('img');
		imgEl.src = img.path;
		imgEl.id = img.id;
		imgEl.style.display = 'none';
		loadedImgs[img.id] = imgEl;
		document.body.append(imgEl);
	}
	loadGame();

	canvas.onclick = handleClick;
	canvas.onmousemove = handleMouseMove;

	gameLoop();
}


function newGame() {
	gameState.player.life = 100;
	gameState.player.shield = 0;
	gameState.player.items = [];
	gameState.player.maxEnergy = 4;
	gameState.player.energy = gameState.player.maxEnergy;
	gameState.player.cardDraw = 3;
	gameState.player.money = 0;
	gameState.player.handSize = 0;
	gameState.world.map = [];
	gameState.world.level = 0;
	gameState.hand = [];
	gameState.deck = [];
	gameState.used = [];
	gameState.items = [];
	gameState.buffs = [];
	gameState.animations = [];
	gameState.selectedCard = null;
	gameState.targetedObj = null;
	gameState.flags = {
		targetingEnemy: false,
		targetingPlayer: false,
		enemyTurn: false
	};
	
	
	generateMap();
	
	for (let card of Object.keys(gameState.builtDeck)) {
		addCardToDeck(card, gameState.builtDeck[card]);
	}
	
	changeScreen('CHAR_SELECT');
}


function saveGame() {
	const save = {
		volume: volume,
		seenDialogs: gameState.seenDialogs,
		damageUpgrade: gameState.damageUpgrade,
		defenseUpgrade: gameState.defenseUpgrade,
		skipSeenDialog: gameState.skipSeenDialog,
		unlockedCards: gameState.unlockedCards,
		builtDeck: gameState.builtDeck,
	};
	localStorage.setItem('slayTheCorpaSave', JSON.stringify(save));
}

function loadGame() {
	const saveStr = localStorage.getItem('slayTheCorpaSave');
	if (saveStr) {
		const save = JSON.parse(saveStr);
		volume = defaultIfNull(save.volume, 50);
		gameState.seenDialogs = defaultIfNull(save.seenDialogs, []);
		gameState.damageUpgrade = defaultIfNull(save.damageUpgrade, 0);
		gameState.defenseUpgrade = defaultIfNull(save.defenseUpgrade, 0);
		gameState.skipSeenDialog = defaultIfNull(save.skipSeenDialog, true);
		gameState.unlockedCards = defaultIfNull(save.unlockedCards, {...defaultDeck});
		gameState.builtDeck = defaultIfNull(save.builtDeck, {...defaultDeck});
	}
}

function defaultIfNull(value, defValue) {
	return value == null || value == undefined ? defValue : value;
}

function generateMap() {
	const lvl1 = generateLvl11();
	const lvl2 = generateLvl12();
	gameState.world.map.push(lvl1);
	gameState.world.map.push(lvl2);
}

function generateLvl11() {
	const lvl = [];
	let y = 815;
	const start = [{
		...mapNodes.start,
		x: canvas.width / 2 - mapNodeXSpacing / 2,
		y: y,
		visited: true,
		next: []
	}];
	gameState.world.currentNode = start[0];
	lvl.push(start[0]);
	
	const shopsCopy = [...mapNodes.shops];
	
	y -= mapNodeYSpacing;
	let row = generateMapRow(lvl, start, 3, mapNodes.battlesEasy, y);
	y -= mapNodeYSpacing;
	row = generateMapRow(lvl, row, 3, mapNodes.battlesEasy, y);
	y -= mapNodeYSpacing;
	row = generateMapRow(lvl, row, 3, shopsCopy, y, true);
	y -= mapNodeYSpacing;
	row = generateMapRow(lvl, row, 3, mapNodes.battlesEasy, y);
	y -= mapNodeYSpacing;
	row = generateMapRow(lvl, row, 3, mapNodes.battlesMedium, y);
	y -= mapNodeYSpacing;
	row = generateMapRow(lvl, row, 3, shopsCopy, y, true);
	y -= mapNodeYSpacing;
	
	const boss = [{
		...mapNodes.boss1,
		x: canvas.width / 2 - mapNodeXSpacing / 2,
		y: y,
		next: []
	}];
	lvl.push(boss[0]);
	for (let i = 0; i < row.length; i++) {
		row[i].next.push(boss[0]);
	}
	return lvl;
}	

function generateLvl12() {
	const lvl = [];
	let y = 815;
	const start = [{
		...mapNodes.start,
		x: canvas.width / 2 - mapNodeXSpacing / 2,
		y: y,
		visited: true,
		next: []
	}];
	lvl.push(start[0]);
	
	const shopsCopy = [...mapNodes.shops];
	
	y -= mapNodeYSpacing;
	let row = generateMapRow(lvl, start, 3, mapNodes.battlesMedium, y);
	y -= mapNodeYSpacing;
	row = generateMapRow(lvl, row, 3, mapNodes.battlesMedium, y);
	y -= mapNodeYSpacing;
	row = generateMapRow(lvl, row, 3, shopsCopy, y, true);
	y -= mapNodeYSpacing;
	row = generateMapRow(lvl, row, 3, mapNodes.battlesHard, y);
	y -= mapNodeYSpacing;
	row = generateMapRow(lvl, row, 3, mapNodes.battlesHard, y);
	y -= mapNodeYSpacing;
	row = generateMapRow(lvl, row, 3, shopsCopy, y, true);
	y -= mapNodeYSpacing;
	
	const boss = [{
		...mapNodes.boss2,
		x: canvas.width / 2 - mapNodeXSpacing / 2,
		y: y,
		next: []
	}];
	lvl.push(boss[0]);
	for (let i = 0; i < row.length; i++) {
		row[i].next.push(boss[0]);
	}
	return lvl;
}	

function generateMapRow(lvl, prevRow, size, nodeSelection, y, nocopy) {
	const nodeSelectionCopy = nocopy ? nodeSelection : [...nodeSelection];
	let row = [];
	for (let i = 0; i < size; i++) {
		const node = {
			...removeRandomArrayItem(nodeSelectionCopy),
			x: canvas.width / 2 - size * mapNodeXSpacing / 2 + i * mapNodeXSpacing,
			y: y,
			next: []
		};
		if (node.type == 'SHOP') {
			node.cards = [...node.cards];
			shuffle(randomShopCards);
			for (let j = 0; j < 2; j++) {
				node.cards.push(randomShopCards[j]);
			}
		}
		if (prevRow.length == 1) {
			prevRow[0].next.push(node);
		} else {
			const left = Math.random() < 0.5 || size == 1;
			const right = !left || size == 1;
			if (i > 0 && left) {
				prevRow[i - 1].next.push(node);
			}
			if (prevRow.length > i) {
				prevRow[i].next.push(node);
			}
			if (prevRow.length > i + 1 && right) {
				prevRow[i + 1].next.push(node);
			}
		}
		row.push(node);
		lvl.push(node);
	}
	return row;
}

function gameLoop() {
	render();
	setTimeout(() => {
		gameLoop();
	}, 1000 / FPS);
}

function skipDialog(obj) {
	return gameState.skipSeenDialog && gameState.seenDialogs.indexOf(obj.dialogId) != -1;
}

function openMenu() {
	if (gameState.currentScreen != 'CREDITS') {
		menuItems[0].enabled = true;
	}
	gameState.lastScreen = gameState.currentScreen;
	gameState.currentScreen = 'MENU';
	clickableObjects = [];
}

function characterSelected(clickedObj) {
	gameState.player.imgId = clickedObj.object.img;
	
	const item = {...items[clickedObj.object.item]};
	gameState.items.push(item);
	item.onAquire();
	
	gameState.dialog.index = 0;
	gameState.dialog.finished = false;
	if (skipDialog(intro)) {
		gameState.dialog.finished = true;
		changeScreen('MAP');
	} else {
		changeScreen('INTRO');
		resetDialog();
	}
}

function itemBuy(clickedObj) {
	if (gameState.player.money >= clickedObj.object.shopCost) {
		gameState.player.money -= clickedObj.object.shopCost;
		playSound('purchase');
		if (clickedObj.type == 'SHOP_CARD') {
			gameState.deck.push({...clickedObj.object});
			gameState.unlockedCards[clickedObj.object.id]++;
			saveGame();
		} else if (clickedObj.type == 'SHOP_ITEM') {
			if (!clickedObj.object.consumable) {
				gameState.items.push({...clickedObj.object});
				const itemIndex = gameState.world.shop.items.indexOf(clickedObj.object);
				gameState.world.shop.items.splice(itemIndex, 1);
			}
			clickedObj.object.onAquire();
		}
	} else {
		playSound('denied');
	}
}

function dialogClicked() {
	gameState.dialog.index++;
	const dialogObj = getDialog();
	if (dialogObj.dialog.length > gameState.dialog.index && dialogObj.dialog[gameState.dialog.index].sound) {
		playSound(dialogObj.dialog[gameState.dialog.index].sound);
	}
	if (dialogObj.dialog.length > gameState.dialog.index && dialogObj.dialog[gameState.dialog.index].action) {
		dialogObj.dialog[gameState.dialog.index].action();
	}
	if (gameState.dialog.index >= dialogObj.dialog.length) {
		gameState.dialog.finished = true;
		if (gameState.seenDialogs.indexOf(gameState.dialog.dialogId) == -1) {
			gameState.seenDialogs.push(gameState.dialog.dialogId);
			saveGame();
		}
		if (gameState.currentScreen == 'BATTLE') {
			newTurn(true);
		}
		if (gameState.currentScreen == 'INTRO') {
			changeScreen('MAP');
		}
		if (gameState.currentScreen == 'OUTRO') {
			changeScreen('CREDITS');
		}
	}
}

function cardClicked(clickedObj) {
	if (gameState.flags.enemyTurn) {
		return;
	}
	const cost = calculateCardCost(clickedObj.object.cost);
	if (cost > gameState.player.energy) {
		playSound('denied');
		addTextAnimation(clickedObj.x, clickedObj.y - 20, 'Not enough energy', '#FFFFFF');
		return;
	}
	gameState.flags.targetingEnemy = false;
	gameState.flags.targetingPlayer = false;
	gameState.selectedCard = clickedObj.object;
	switch (clickedObj.object.target) {
		case 'ENEMY': {
			gameState.flags.targetingEnemy = true;
			break;
		}
		case 'PLAYER': {
			gameState.flags.targetingPlayer = true;
			break;
		}
	}
}

function enemyClicked(clickedObj) {
	if (gameState.flags.targetingEnemy && gameState.targetedObj && gameState.targetedObj.type == 'ENEMY' && gameState.selectedCard) {
		const headpat = gameState.buffs.find(b => b.type == 'HEADPAT');
		const cost = calculateCardCost(gameState.selectedCard.cost);
		if (headpat) {
			headpat.turns--;
			gameState.buffs = gameState.buffs.filter(b => b.turns != 0);
		}
		const card = gameState.selectedCard;
		cardPlayed(cost);
		card.handler(gameState.targetedObj.object);
	}
}

function playerClicked(clickedObj) {
	if (gameState.flags.targetingPlayer && gameState.targetedObj && gameState.targetedObj.type == 'PLAYER' && gameState.selectedCard) {
		const headpat = gameState.buffs.find(b => b.type == 'HEADPAT');
		const cost = calculateCardCost(gameState.selectedCard.cost);
		if (headpat) {
			headpat.turns--;
			gameState.buffs = gameState.buffs.filter(b => b.turns != 0);
		}
		const card = gameState.selectedCard;
		cardPlayed(cost);
		card.handler(gameState.targetedObj.object);
	}
}

function mapNodeClicked(clickedObj) {
	const isNext = gameState.world.currentNode.next.indexOf(clickedObj.object) != -1;
	if (isNext) {
		gameState.world.currentNode = clickedObj.object;
		gameState.world.currentNode.visited = true;
		switch (clickedObj.object.type) {
			case 'BATTLE': {
				changeScreen('BATTLE');
				gameState.enemies = [];
				for (let enemyId of clickedObj.object.enemies) {
					gameState.enemies.push(getEnemyInstance(enemyId));
				}
				battleStarted();
				break;
			}
			case 'SHOP': {
				changeScreen('SHOP');
				initShop(clickedObj.object);
				break;
			}
		}
	}
}

function getDialog() {
	let dialog = null;
	switch (gameState.currentScreen) {
		case 'INTRO':
			dialog = intro;
			break;
		case 'OUTRO': {
			dialog = outro;
			break;
		}
		default: {
			dialog = gameState.world.currentNode;
			break;
		}
	}
	return dialog;
}

function resetDialog() {
	gameState.dialog.index = 0;
	gameState.dialog.finished = false;
	if (skipDialog(gameState.world.currentNode)) {
		gameState.dialog.finished = true;
	}
	const dialog = getDialog();
	if (dialog.reset) {
		dialog.reset();
	}
}

function initShop(shop) {
	gameState.world.shop = {
		items: [],
		cards: []
	};
	for (let item of shop.items) {
		if (!gameState.items.find(it => it.id == item)) {
			gameState.world.shop.items.push({...items[item]});
		}
	}
	for (let card of shop.cards) {
		gameState.world.shop.cards.push({...cards[card]});
	}
	resetDialog();
}

function battleStarted() {
	resetDialog();
	gameState.deck = [...gameState.deck, ...gameState.used, ...gameState.hand];
	gameState.used = [];
	gameState.hand = [];
	cardDrawQueue = [];
	cardDrawInProgress = false;
	gameState.buffs = gameState.buffs.filter(b => b.turns == -2);
	shuffle(gameState.deck);
	gameState.player.energy = gameState.player.maxEnergy;
	if (!gameState.world.currentNode.dialog || skipDialog(gameState.world.currentNode)) {
		newTurn(true);
	}
}

function cardPlayed(cost) {
	if (!gameState.selectedCard) {
		return;
	}
	const cardIndex = gameState.hand.indexOf(gameState.selectedCard);
	if (cardIndex != -1) {
		gameState.hand.splice(cardIndex, 1);
		gameState.used.push(gameState.selectedCard);
	}
	gameState.player.energy -= cost;
	gameState.flags.targetingPlayer = false;
	gameState.flags.targetingEnemy = false;
	gameState.selectedCard = null;
}

function calculateCardCost(baseCost) {
	const headpat = gameState.buffs.find(b => b.type == 'HEADPAT');
	if (headpat) {
		return 0;
	}
	const cpr = gameState.buffs.find(b => b.type == 'CPR');
	return cpr ? Math.max(baseCost - 1, 0) : baseCost;
}

function endTurn() {
	if (gameState.flags.enemyTurn) {
		return;
	}
	if (!gameState.enemies.find(e => e.alive)) {
		return;
	}
	gameState.flags.enemyTurn = true;
	gameState.flags.targetingPlayer = false;
	gameState.flags.targetingEnemy = false;
	gameState.selectedCard = null;
	gameState.player.energy = gameState.player.maxEnergy;
	gameState.items.forEach(it => {
		it.onTurnEnd();
	});
	enemyTurn();
}

function enemyTurn() {
	const aliveEnemies = gameState.enemies.filter(e => e.alive);
	enemyAction(aliveEnemies, 0);
}

function enemyAction(enemies, i) {
	if (gameState.player.life == 0) {
		return;
	}
	if (enemies[i].buffs.find(b => b.type == 'STUN')) {
		if (enemies.length -1 == i) {
			gameState.flags.enemyTurn = false;
			newTurn();
		} else {
			enemyAction(enemies, i + 1)
		}
	} else {
		enemies[i].nextAction.handler(enemies[i], () => {
			enemies[i].nextAction = null;
			if (enemies.length -1 == i) {
				gameState.flags.enemyTurn = false;
				newTurn();
			} else {
				enemyAction(enemies, i + 1)
			}
		});
	}
}

function enemyDied() {
	for (let enemy of gameState.enemies) {
		if (enemy.alive) {
			return;
		}
	}
	
	gameState.items.forEach(it => {
		it.onBattleEnd();
	});
	
	const reward = gameState.world.currentNode.reward;
	
	if (gameState.world.currentNode.name == 'Boss1') {
		gameState.world.level++;
		gameState.world.currentNode = gameState.world.map[gameState.world.level][0];
	}
	gameState.buffs = gameState.buffs.filter(b => b.turns == -2);
	
	playSound('purchase');
	addTextAnimation(canvas.width / 2, canvas.height / 2, "+" + reward, '#FFFF00', () => {
		gameState.player.money += reward;
		if (gameState.world.currentNode.name == 'Boss2') {
			menuItems[0].enabled = false;
			if (skipDialog(outro)) {
				changeScreen('CREDITS');
			} else {
				changeScreen('OUTRO');
				resetDialog();
			}
		} else {
			changeScreen('MAP');
		}
	});
}

// for dev only, kills all enemies
function win() {
	gameState.enemies.forEach(e => e.alive = false);
	enemyDied();
}

// for dev only
function skipToBoss() {
	gameState.world.currentNode = gameState.world.map[gameState.world.level][gameState.world.map[gameState.world.level].length - 1];
	changeScreen('BATTLE');
	gameState.enemies = [];
	for (let enemyId of gameState.world.currentNode.enemies) {
		gameState.enemies.push(getEnemyInstance(enemyId));
	}
	battleStarted();
}

function changeScreen(screenName) {
	gameState.currentScreen = screenName;
	clickableObjects = [];
	gameState.flags.targetingPlayer = false;
	gameState.flags.targetingEnemy = false;
	gameState.flags.enemyTurn = false;
	gameState.selectedCard = null;
	gameState.animations = [];
}

function gameOver() {
	menuItems[0].enabled = false;
	changeScreen('GAME_OVER');
}

function newTurn(first) {
	gameState.player.shield = 0;
	drawCards(gameState.player.cardDraw + (first ? 2 : 0));
	gameState.items.forEach(it => {
		it.onTurnStart();
	});
	for (let enemy of gameState.enemies) {
		if (enemy.alive) {
			decideEnemyAction(enemy);
		}
	}
	gameState.buffs.forEach(buff => {
		if (buff.type == 'POISON') {
			dealPlayerDamage(buff.turns);
		}
		if (buff.turns > 0) {
			buff.turns--;
		}
	});
	gameState.enemies.forEach(enemy => {
		enemy.buffs.forEach(buff => {
			if (buff.type == 'POISON') {
				dealDamage(enemy, buff.turns);
			}
			if (buff.turns > 0) {
				buff.turns--;
			}
		});
		enemy.buffs = enemy.buffs.filter(b => b.turns != 0);
	});
	
	gameState.buffs = gameState.buffs.filter(b => b.turns != 0);
}

function decideEnemyAction(enemy) {
	const dmgBuff = enemy.buffs.find(b => b.type == 'DMG_DEALT');
	let actions = enemy.actions.filter(a => a.enabled());
	if (dmgBuff) {
		actions = enemy.actions.filter(a => a.type == 'ATTACK');
	}
	let weightSum = 0;
	for (let action of actions) {
		weightSum += action.weight;
	}
	const rand = Math.floor(Math.random() * weightSum + 1);
	let selectSum = 0;
	for (let action of actions) {
		selectSum += action.weight;
		if (selectSum >= rand) {
			enemy.nextAction = action;
			break;
		}
	}
}

function deckBuilderAddCard(clickedObj) {
	const card = clickedObj.object;
	const count = gameState.unlockedCards[card.id] - gameState.builtDeck[card.id];
	if (count > 0) {
		gameState.builtDeck[card.id]++;
		playSound('card_draw');
		saveGame();
	} else {
		playSound('denied');
	}
}

function deckBuilderRemoveCard(clickedObj) {
	const card = clickedObj.object;
	let totalCount = 0;
	Object.keys(gameState.builtDeck).forEach(cardKey => totalCount += gameState.builtDeck[cardKey]);
	const count = gameState.builtDeck[card.id];
	if (count > 0 && totalCount > 12) {
		gameState.builtDeck[card.id]--;
		playSound('card_draw');
		saveGame();
	} else {
		playSound('denied');
		if (totalCount <= 12) {
			addTextAnimation(clickedObj.x, clickedObj.y - 20, 'Deck requires minimum of 12 cards', '#FFFFFF');
		}
	}
}

function addCardToDeck(id, count) {
	for (let i = 0; i < count; i++) {
		gameState.deck.push({...cards[id]});
	}
}

function getEnemyInstance(enemyId) {
	const copy = {...enemies[enemyId]};
	copy.buffs = [];
	return copy;
}

function addTextAnimation(x, y, value, color, callback) {
	gameState.animations.push({
		x: x,
		y: y,
		xv: 0,
		yv: -1,
		type: 'TEXT',
		color: color,
		value: value,
		end: (animObj) => {
			const end = animObj.y < y - 15;
			if (end && callback) {
				callback();
			}
			return end;
		}
	});
}

function drawCard(done) {
	if (gameState.player.handSize > 7) {
		done();
		return;
	}
	const handSize = gameState.player.handSize++;
	const endCoord = 125 + handSize * 125;
	playSound('card_draw');
	gameState.animations.push({
		type: 'IMG_PROJ',
		x: 1075,
		y: 700,
		xv: -35,
		yv: 0,
		a: 0,
		width: 120,
		height: 200,
		end: (animObj) => {
			const doEnd = animObj.x < endCoord;
			if (doEnd) {
				if (gameState.deck.length == 0) {
					shuffle(gameState.used);
					gameState.deck = gameState.used;
					gameState.used = [];
				}
				gameState.hand.push(gameState.deck[0]);
				gameState.deck.splice(0, 1);
				done();
			}
			return doEnd;
		},
		img: 'deck'
	});
}

let cardDrawQueue = [];
let cardDrawInProgress = false;

function drawCards(count) {
	if (gameState.player.life == 0) {
		return;
	}
	if (cardDrawInProgress) {
		cardDrawQueue.push(count);
	} else {
		cardDrawInProgress = true;
		gameState.player.handSize = gameState.hand.length;
		for (let i = 0; i < count; i++) {
			const callback = (i == count - 1) ? lastCardDrawn : () => {};			
			setTimeout(() => {
				drawCard(callback);
			}, i * 300);
		}
	}
}

function lastCardDrawn() {
	cardDrawInProgress = false;
	if (cardDrawQueue.length > 0) {
		const nextCount = cardDrawQueue[0];
		cardDrawQueue.splice(0, 1);
		drawCards(nextCount);
	}
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

function dealDamage(enemy, dmg) {
	if (enemy.life == 0) {
		return;
	}
	for (let buff of gameState.buffs.filter(b => b.type == 'DMG_DEALT')) {
		dmg *= buff.modifier;
	}
	for (let buff of enemy.buffs.filter(b => b.type == 'DMG_TAKEN')) {
		dmg *= buff.modifier;
	}
	dmg *= gameState.damageUpgrade / 100 + 1;
	
	const dmgAfterShield = dmg - enemy.shield;
	enemy.shield = Math.max(0, enemy.shield - dmg);
	if (dmgAfterShield > 0) {
		enemy.life = Math.max(0, enemy.life - dmgAfterShield);
	}
	if (enemy.life == 0) {
		enemy.alive = false;
		enemyDied();
	}
	addTextAnimation(enemy.x - 30, enemy.y + enemy.height / 2, formatFloat(-dmg), '#FF0000')
}

function removeRandomArrayItem(array) {
	const randomIndex = Math.floor(Math.random() * array.length);
	const result = array[randomIndex];
	array.splice(randomIndex, 1);
	return result;
}

function dealPlayerDamage(enemy, value) {
	const player = gameState.player;
	if (player.life == 0) {
		return;
	}
	const dodge = gameState.buffs.find(b => b.type == 'DODGE');
	if (dodge) {
		addTextAnimation(gameState.player.x + gameState.player.width + 10, gameState.player.y + gameState.player.height / 2, 'Dodged', '#FF0000');
		return;
	}
	
	for (let buff of gameState.buffs.filter(b => b.type == 'DMG_TAKEN')) {
		value *= buff.modifier;
	}
	if (enemy) {
		for (let buff of enemy.buffs.filter(b => b.type == 'DMG_DEALT')) {
			value *= buff.modifier;
		}
	}
	value *= 1 - gameState.defenseUpgrade / 100;
	
	const dmgAfterShield = value - player.shield;
	player.shield = Math.max(0, player.shield - value);
	if (dmgAfterShield > 0) {
		player.life = Math.max(0, player.life - dmgAfterShield);
	}
	addTextAnimation(gameState.player.x + gameState.player.width + 10, gameState.player.y + gameState.player.height / 2, formatFloat(-value), '#FF0000');
	if (player.life == 0) {
		gameOver();
	}
}

// returns float value as string with maximum of 1 decimal point, integer if no decimals
function formatFloat(value) {
	return (value.toFixed(1) + '').replace(/\.?0*$/,'');
}

function addBuff(buffArr, buffId) {
	const buff = {...buffs[buffId]};
	const existingBuff = buffArr.find(b => b.name == buff.name);
	if (existingBuff) {
		if (existingBuff.stackable) {
			existingBuff.turns += buff.turns;
		}
	} else {
		buffArr.push(buff);
	}
}

function playSound(sound) {
	var audio = new Audio(sounds[sound]);
	audio.volume = volume / 100;
	audio.play();
}

initGame();