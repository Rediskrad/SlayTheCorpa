const imgs = [
	{ id: 'rainhoe', path: 'img/rain1.png' },
	{ id: 'spacehoe', path: 'img/rain2.png' },
	{ id: 'battlehoe', path: 'img/rain3.png' },
	{ id: 'robot1', path: 'img/robot1.png' },
	{ id: 'robot2', path: 'img/robot2.png' },
	{ id: 'robot3', path: 'img/robot3.png' },
	{ id: 'robot4', path: 'img/robot4.png' },
	{ id: 'robot5', path: 'img/robot5.png' },
	{ id: 'robot6', path: 'img/robot6.png' },
	{ id: 'card', path: 'img/card.png' },
	{ id: 'deck', path: 'img/deck.png' },
	{ id: 'icons', path: 'img/icons.png' },
	{ id: 'filian', path: 'img/filian.png' },
	{ id: 'zen', path: 'img/zen.png' },
	{ id: 'evil', path: 'img/evil.png' },
	{ id: 'bao', path: 'img/bao.png' },
	{ id: 'blueberry', path: 'img/blueberry.png' },
	{ id: 'giri', path: 'img/giri.png' },
	{ id: 'numi', path: 'img/numi.png' },
	{ id: 'shira', path: 'img/shira.png' },
	{ id: 'yuzu', path: 'img/yuzu.png' },
	{ id: 'slash', path: 'img/slash.png' },
	{ id: 'rain-closeup', path: 'img/rain-closeup.png' },
	{ id: 'droid', path: 'img/droid.png' },
	{ id: 'help', path: 'img/help.png' },
];

// coordinates of icons in icons.png image
const icons = {
	'blank': { i: 0, j: 0 },
	'life': { i: 1, j: 0 },
	'shield': { i: 2, j: 0 },
	'coin': { i: 3, j: 0 },
	'battle': { i: 4, j: 0 },
	'boss': { i: 5, j: 0 },
	'hoe': { i: 6, j: 0 },
	'blaster-shot': { i: 7, j: 0 },
	'hoes': { i: 8, j: 0 },
	'sword': { i: 9, j: 0 },
	'cringe': { i: 10, j: 0 },
	'suit1': { i: 11, j: 0 },
	'suit2': { i: 12, j: 0 },
	'suit3': { i: 13, j: 0 },
	'energy': { i: 14, j: 0 },
	'flashbang': { i: 15, j: 0 },
	'blueberry': { i: 16, j: 0 },
	'whale': { i: 17, j: 0 },
	'filian': { i: 0, j: 1 },
	'yuzu': { i: 1, j: 1 },
	'giri': { i: 2, j: 1 },
	'numi': { i: 3, j: 1 },
	'shira': { i: 4, j: 1 },
	'bao': { i: 5, j: 1 },
	'rave': { i: 6, j: 1 },
	'bottom': { i: 7, j: 1 },
	'angry': { i: 8, j: 1 },
	'flip': { i: 9, j: 1 },
	'headpat': { i: 10, j: 1 },
	'shreak': { i: 11, j: 1 },
	'yerdone': { i: 12, j: 1 },
	'fruitsnack': { i: 13, j: 1 },
	'white': { i: 14, j: 1 },
	'fox': { i: 15, j: 1 },
	'dent': { i: 16, j: 1 },
	'shower': { i: 17, j: 1 },
	'girifood': { i: 0, j: 2 },
	'clock': { i: 1, j: 2 },
	'cleaver': { i: 2, j: 2 },
	'poison': { i: 3, j: 2 },
	'potion': { i: 4, j: 2 },
	'mold': { i: 5, j: 2 },
	'corpa': { i: 6, j: 2 },
	'jumpqueen': { i: 7, j: 2 },
	'gear': { i: 8, j: 2 },
	'moth': { i: 9, j: 2 },
	'vile': { i: 10, j: 2 },
	'toaster': { i: 11, j: 2 },
	'dmg_buff': { i: 12, j: 2 },
	'shield_wall': { i: 13, j: 2 },
	'swarm': { i: 14, j: 2 },
	'evil': { i: 15, j: 2 },
	'robot': { i: 16, j: 2 },
	'help': { i: 17, j: 2 },
	'grey': { i: 0, j: 3 },
};

const sounds = {
	'hey': 'sounds/hey.mp3',
	'shreak': 'sounds/shreak.mp3',
	'shield': 'sounds/shield.mp3',
	'slash': 'sounds/slash.mp3',
	'punch': 'sounds/punch.mp3',
	'flashbang': 'sounds/flashbang.mp3',
	'card_draw': 'sounds/card_draw.mp3',
	'blaster': 'sounds/blaster.mp3',
	'purchase': 'sounds/purchase.mp3',
	'throw': 'sounds/throw.mp3',
	'throw_hit': 'sounds/throw_hit.mp3',
	'buff': 'sounds/buff.mp3',
	'denied': 'sounds/denied.mp3',
	'explosion': 'sounds/explosion.mp3',
	'yerdone': 'sounds/yerdone.mp3',
	'angry': 'sounds/angry.mp3',
	'corpa': 'sounds/corpa.mp3',
	'baoscream': 'sounds/baoscream.mp3',
	'cpr': 'sounds/cpr.mp3',
	'bottom': 'sounds/bottom.mp3',
	'shower': 'sounds/shower.mp3',
	'moan': 'sounds/moan.mp3',
	'deeznuts': 'sounds/deeznuts.mp3',
	'toaster': 'sounds/toaster.mp3',
	'knock': 'sounds/knock.mp3',
	'filtered': 'sounds/filtered.mp3',
	'swarm': 'sounds/swarm.mp3',
	'cringe': 'sounds/cringe.mp3',
};

const characters = [
	{
		name: "Rainhoe",
		description: "Rainhoe\n+1 to maximum energy",
		img: "rainhoe",
		item: 'rainhoe'
	},
	{
		name: "Spacehoe",
		description: "Spacehoe\nGains 2 shield at\nstart of every turn",
		img: "spacehoe",
		item: 'spacehoe'
	},
	{
		name: "Battlehoe",
		description: "Battlehoe\n30% increased damage",
		img: "battlehoe",
		item: 'battlehoe'
	}
];

let volume = 50;

const menuItems = [
	{
		caption: () => "Continue",
		enabled: false,
		onClick: () => {
			gameState.currentScreen = gameState.lastScreen;
		}
	},
	{
		caption: () => "New Game",
		enabled: true,
		onClick: () => {
			newGame();
		}
	},
	{
		caption: () => "Volume (" + volume + "%)",
		enabled: false,
		onClick: () => {}
	},
	{
		caption: () => "+ volume",
		enabled: true,
		onClick: () => {
			volume = Math.min(volume + 10, 100);
			playSound('hey');
			saveGame();
		}
	},
	{
		caption: () => "- volume",
		enabled: true,
		onClick: () => {
			volume = Math.max(volume - 10, 0);
			playSound('hey');
			saveGame();
		}
	},
	{
		caption: () => "Skip seen dialog: " + (gameState.skipSeenDialog ? 'YES' : 'NO') ,
		enabled: true,
		onClick: () => {
			gameState.skipSeenDialog = !gameState.skipSeenDialog;
			saveGame();
		}
	},
	{
		caption: () => "Deck builder",
		enabled: true,
		onClick: () => {
			gameState.deckBuilderBackScreen = gameState.currentScreen;
			gameState.currentScreen = "DECK_BUILDER";
		}
	}
];

const gameOverMenu = [
	{
		caption: () => "New Game",
		enabled: true,
		onClick: () => {
			newGame();
		}
	},
	{
		caption: () => "Upgrade damage. Cost: 50",
		enabled: true,
		onClick: () => {
			if (gameState.damageUpgrade == 50 || gameState.player.money < 50) {
				playSound('denied');
			} else {
				gameState.player.money -= 50;
				gameState.damageUpgrade += 10;
				playSound('purchase');
				saveGame();
			}
		}
	},
	{
		caption: () => "Current damage : +" + gameState.damageUpgrade + "% " + (gameState.damageUpgrade == 50 ? "(max)" : ""),
		enabled: false,
		onClick: () => {}
	},
	{
		caption: () => "Upgrade defense. Cost: 50",
		enabled: true,
		onClick: () => {
			if (gameState.defenseUpgrade == 50 || gameState.player.money < 50) {
				playSound('denied');
			} else {
				gameState.player.money -= 50;
				gameState.defenseUpgrade += 10;
				playSound('purchase');
				saveGame();
			}
		}
	},
	{
		caption: () => "Current defense : +" + gameState.defenseUpgrade + "% " + (gameState.defenseUpgrade == 50 ? "(max)" : ""),
		enabled: false,
		onClick: () => {}
	},
	{
		caption: () => "Reset upgrades (no refund)",
		enabled: true,
		onClick: () => {
			gameState.defenseUpgrade = 0;
			gameState.damageUpgrade = 0;
			saveGame();
		}
	},
	{
		caption: () => "Deck builder",
		enabled: true,
		onClick: () => {
			gameState.deckBuilderBackScreen = gameState.currentScreen;
			gameState.currentScreen = "DECK_BUILDER";
		}
	}
];

const cards = {
	'hoe_throw': {
		id: 'hoe_throw',
		name: 'Hoe throw',
		cost: 1,
		description: 'Throws a hoe at an\nenemy dealing 8 dmage.',
		target: 'ENEMY',
		icon: 'hoe',
		shopCost: 5,
		handler: (enemy) => {
			const dmg = 8;
			playSound('throw');
			gameState.animations.push({
				type: 'PROJECTILE',
				x: gameState.player.x + gameState.player.width,
				y: gameState.player.y + gameState.player.height / 2,
				xv: 40,
				yv: 0,
				a: 0,
				av: 10,
				width: 50,
				height: 50,
				end: (animObj) => {
					const doEnd = animObj.x > enemy.x;
					if (doEnd) {
						playSound('throw_hit');
						dealDamage(enemy, dmg);
					}
					return doEnd;
				},
				icon: 'hoe'
			});
		}
	},
	'cleaver': {
		id: 'cleaver',
		name: 'Cleaver\nthrow',
		cost: 1,
		description: 'Throws Giri\'s cleaver at an\nenemy dealing 10 damage.',
		target: 'ENEMY',
		icon: 'cleaver',
		shopCost: 8,
		handler: (enemy) => {
			const dmg = 10;
			playSound('throw');
			gameState.animations.push({
				type: 'PROJECTILE',
				x: gameState.player.x + gameState.player.width,
				y: gameState.player.y + gameState.player.height / 2,
				xv: 40,
				yv: 0,
				a: 0,
				av: 10,
				width: 50,
				height: 50,
				end: (animObj) => {
					const doEnd = animObj.x > enemy.x;
					if (doEnd) {
						playSound('throw_hit');
						dealDamage(enemy, dmg);
					}
					return doEnd;
				},
				icon: 'cleaver'
			});
		}
	},
	'shield': {
		id: 'shield',
		name: 'Shield',
		cost: 1,
		shopCost: 5,
		description: 'Adds 5 shield to player',
		target: 'PLAYER',
		icon: 'shield',
		handler: (player) => {
			playSound('shield');
			gameState.player.shield += 5;
		}
	},
	'shield_wall': {
		id: 'shield_wall',
		name: 'Shield\nwall',
		cost: 2,
		shopCost: 8,
		description: 'Adds 8 shield to player',
		target: 'PLAYER',
		icon: 'shield_wall',
		handler: (player) => {
			playSound('shield');
			gameState.player.shield += 8;
		}
	},
	'rain_hoes': {
		id: 'rain_hoes', 
		name: 'Rain hoes',
		cost: 2,
		description: 'Rains hoes at enemies,\ndealing 6 damage to all\nenemies.',
		target: 'ENEMY',
		icon: 'hoes',
		shopCost: 10,
		handler: (target) => {
			const dmg = 2;
			for (let enemy of gameState.enemies) {
				if (enemy.alive) {
					for (let i = 0; i < 3; i++) {
						playSound('throw');
						setTimeout(() => playSound('throw'), 200);
						//setTimeout(() => playSound('throw'), 200);
						gameState.animations.push({
							type: 'PROJECTILE',
							x: enemy.x + enemy.width / 2 + Math.random() * 150 - 75,
							y: -Math.random() * 200,
							xv: 0,
							yv: 20,
							a: 0,
							av: Math.random() * 20 - 10,
							width: 50,
							height: 50,
							end: (animObj) => {
								const doEnd = animObj.y > enemy.y;
								if (doEnd) {
									playSound('throw_hit');
									dealDamage(enemy, dmg);
								}
								return doEnd;
							},
							icon: 'hoe'
						});
					}
				}
			}
		}
	},
	'cringe': {
		id: 'cringe',
		name: 'Cringe\ncomment',
		cost: 2,
		description: 'Say a cringe comment.\nTargeted enemy dies of cringe\n(takes 15 damage)',
		target: 'ENEMY',
		icon: 'cringe',
		shopCost: 10,
		handler: (enemy) => {
			const dmg = 15;
			playSound('cringe');
			dealDamage(enemy, dmg);
		}
	},
	'flashbang': {
		id: 'flashbang',
		name: 'Flashbang',
		cost: 3,
		description: 'Flashes all enemies\nstunning them for 1 turn',
		target: 'ENEMY',
		icon: 'flashbang',
		shopCost: 30,
		handler: (enemy) => {
			playSound('flashbang');
			gameState.enemies.forEach(enemy => addBuff(enemy.buffs, 'flashbang'));
			gameState.animations.push({
				type: 'PROJECTILE',
				x: 0,
				y: 0,
				xv: -1,
				yv: 0,
				a: 0,
				av: 0,
				width: canvas.width + 10,
				height: canvas.height,
				end: (animObj) => {
					return animObj.x < -4;
				},
				icon: 'white'
			});
		}
	},
	'blueberry': {
		id: 'blueberry',
		name: 'Blueberry',
		cost: 2,
		description: 'Drops a massive\nblueberry on all enemies\ndealing 8 damage to all enemies',
		target: 'ENEMY',
		icon: 'blueberry',
		shopCost: 15,
		handler: (enemy) => {
			const dmg = 8;
			playSound('baoscream');
			gameState.animations.push({
				type: 'IMG_PROJ',
				x: 600,
				y: -512,
				xv: 0,
				yv: 20,
				a: 0,
				width: 500,
				height: 512,
				end: (animObj) => {
					const doEnd = animObj.y > enemy.y + enemy.height - animObj.height;
					if (doEnd) {
						playSound('explosion');
						for (let enemy of gameState.enemies) {
							if (enemy.alive) {
								dealDamage(enemy, dmg);
							}
						}
					}
					return doEnd;
				},
				img: 'blueberry'
			});
		}
	},
	'cpr': {
		id: 'cpr',
		name: 'CPR',
		cost: 2,
		description: 'Sing CPR, reducing the\ncost of all cards\nby 1 until end of turn',
		target: 'PLAYER',
		icon: 'rave',
		shopCost: 20,
		handler: (target) => {
			playSound('cpr');
			addBuff(gameState.buffs, 'cpr');
		}
	},
	'bottom': {
		id: 'bottom',
		name: 'Bottom\nenergy',
		cost: 2,
		description: 'Discard all cards in hand\nthen draw 3 cards',
		target: 'PLAYER',
		icon: 'bottom',
		shopCost: 20,
		handler: (target) => {
			playSound('bottom');
			for (let card of gameState.hand) {
				gameState.used.push(card);
			}
			gameState.hand = [];
			drawCards(3);
		}
	},
	'angry': {
		id: 'angry',
		name: 'Angry\ngamer',
		cost: 2,
		description: 'Increases damage by 50%\nfor 2 turns',
		target: 'PLAYER',
		icon: 'angry',
		shopCost: 20,
		handler: (target) => {
			playSound('angry');
			addBuff(gameState.buffs, 'angry');
		}
	},
	'flip': {
		id: 'flip',
		name: 'Do a flip',
		cost: 3,
		description: 'Dodges all attacks for 1 turn',
		target: 'PLAYER',
		icon: 'flip',
		shopCost: 25,
		handler: (target) => {
			playSound('buff');
			addBuff(gameState.buffs, 'flip');
		}
	},
	'yerdone': {
		id: 'yerdone',
		name: 'Yer done!',
		cost: 2,
		description: 'Targeted enemy takes\ndouble damage for 3 turns',
		target: 'ENEMY',
		icon: 'yerdone',
		shopCost: 15,
		handler: (target) => {
			playSound('yerdone');
			addBuff(target.buffs, 'yerdone');
		}
	},
	'shreak': {
		id: 'shreak',
		name: 'Yuzu\nshreak',
		cost: 1,
		description: 'Scream debuffs all enemies\nreducing their damage\nby 50% for 1 turn.',
		target: 'ENEMY',
		icon: 'shreak',
		shopCost: 15,
		handler: (target) => {
			playSound('shreak');
			gameState.enemies.forEach(enemy => {
				addBuff(enemy.buffs, 'shreak');
			});
		}
	},
	'headpat': {
		id: 'headpat',
		name: 'Headpat',
		cost: 1,
		description: 'Receive a headpat from cute\nfox. Next card is free.',
		target: 'PLAYER',
		icon: 'headpat',
		shopCost: 15,
		handler: (target) => {
			playSound('buff');
			addBuff(gameState.buffs, 'headpat');
		}
	},
	'shower': {
		id: 'shower',
		name: 'Skip a\nshower',
		cost: 1,
		description: 'Skip a shower.\nThe stench inflicts\n5 poison stacks on\nclosest enemy.',
		target: 'PLAYER',
		icon: 'shower',
		shopCost: 15,
		handler: (target) => {
			playSound('shower');
			const enemy = gameState.enemies.find(e => e.alive);
			for (let i = 0; i < 5; i++) {
				addBuff(enemy.buffs, 'poison');
			}
		}
	},
	'corpa': {
		id: 'corpa',
		name: 'Corpa',
		cost: 1,
		description: 'Get 10 gold',
		target: 'PLAYER',
		icon: 'corpa',
		shopCost: 20,
		handler: (target) => {
			playSound('corpa');
			gameState.player.money += 10;
		}
	},
	'jumpqueen': {
		id: 'jumpqueen',
		name: 'Jumpqueen',
		cost: 1,
		description: 'Draw 2 cards',
		target: 'PLAYER',
		icon: 'jumpqueen',
		shopCost: 15,
		handler: (target) => {
			drawCards(2);
		}
	},
	'vile': {
		id: 'vile',
		name: 'Vile\ncomment',
		cost: 1,
		description: 'Say something truly vile.\nInflicts 4 poison stacks\nto targeted enemy.',
		target: 'ENEMY',
		icon: 'vile',
		shopCost: 10,
		handler: (target) => {
			playSound('hey');
			for (let i = 0; i < 4; i++) {
				addBuff(target.buffs, 'poison');
			}
		}
	},
	'clock': {
		id: 'clock',
		name: '5:35',
		cost: 0,
		description: 'Draw 1 card and\ngain 1 energy',
		target: 'PLAYER',
		icon: 'clock',
		shopCost: 20,
		handler: (target) => {
			gameState.player.energy++;
			drawCards(1);
		}
	},
	'dent': {
		id: 'dent',
		name: 'Dent',
		cost: 1,
		description: 'Bash enemy head denting it.\nEnemy takes 3 damage and has\nreduced damage by 50% for 3 turns.',
		target: 'ENEMY',
		icon: 'dent',
		shopCost: 15,
		handler: (enemy) => {
			playSound('punch');
			dealDamage(enemy, 3);
			addBuff(enemy.buffs, 'dent');
		}
	},
};

const randomShopCards = [
	'hoe_throw',
	'shield',
	'shield_wall',
	'rain_hoes',
	'cringe',
	'corpa',
	'jumpqueen',
	'vile',
	'clock',
];

const defaultDeck = {
	'hoe_throw': 8,
	'shield': 5,
	'shield_wall': 3,
	'rain_hoes': 2,
	'cringe': 2,
	'corpa': 2,
	'jumpqueen': 2,
	'vile': 2,
	'clock': 1,
	'cleaver': 0,
	'flashbang': 0,
	'blueberry': 0,
	'cpr': 0,
	'bottom': 0,
	'angry': 0,
	'flip': 0,
	'yerdone': 0,
	'shreak': 0,
	'headpat': 0,
	'shower': 0,
	'dent': 0,
};

// weight determines how likely is enemy to choose that action, higher weight=higher chance
const enemyActions = {
	'ranged_attack': (dmg, weight) => {
		return {
			value: dmg,
			icon: 'sword',
			description: 'This enemy will attack you',
			weight: weight,
			type: 'ATTACK',
			enabled: () => true,
			handler: (enemy, done) => {
				playSound('blaster');
				gameState.animations.push({
					type: 'PROJECTILE',
					x: enemy.x,
					y: enemy.y + enemy.height / 2,
					xv: -60,
					yv: 0,
					a: 0,
					av: 0,
					width: 30,
					height: 30,
					end: (animObj) => {
						const doEnd = animObj.x < gameState.player.x + gameState.player.width;
						if (doEnd) {
							playSound('moan');
							dealPlayerDamage(enemy, dmg);
							done();
						}
						return doEnd;
					},
					icon: 'blaster-shot'
				});
			}
		}
	},
	'swarm_attack': (dmg, weight) => {
		return {
			value: dmg,
			icon: 'sword',
			description: 'This enemy will attack you',
			weight: weight,
			type: 'ATTACK',
			enabled: () => true,
			handler: (enemy, done) => {
				playSound('swarm');
				gameState.animations.push({
					type: 'PROJECTILE',
					x: enemy.x,
					y: enemy.y + enemy.height / 2,
					xv: -60,
					yv: 0,
					a: 0,
					av: 0,
					width: 70,
					height: 70,
					end: (animObj) => {
						const doEnd = animObj.x < gameState.player.x + gameState.player.width;
						if (doEnd) {
							playSound('moan');
							dealPlayerDamage(enemy, dmg);
							done();
						}
						return doEnd;
					},
					icon: 'swarm'
				});
			}
		}
	},
	'gaslight': (value, weight) => {
		return {
			value: null,
			icon: 'evil',
			description: 'This enemy will gaslight\nyou into dropping ' + value + ' cards',
			weight: weight,
			type: 'BUFF',
			enabled: () => true,
			handler: (enemy, done) => {
				playSound('filtered');
				setTimeout(() => {
					const cardsDropped = Math.min(value, gameState.hand.length);
					for (let i = 0; i < cardsDropped; i++) {
						gameState.used.push(gameState.hand[0]);
						gameState.hand.splice(0, 1);
					}
					done();
				}, 500);
			}
		}
	},
	'toaster': (dmg, weight) => {
		return {
			value: dmg,
			icon: 'sword',
			description: 'This enemy will attack you',
			weight: weight,
			type: 'ATTACK',
			enabled: () => true,
			handler: (enemy, done) => {
				playSound('toaster');
				gameState.animations.push({
					type: 'PROJECTILE',
					x: enemy.x + 120,
					y: enemy.y,
					xv: 0,
					yv: -40,
					a: 0,
					av: 0,
					width: 80,
					height: 80,
					end: (animObj) => {
						const doEnd = animObj.y < -50;
						if (doEnd) {
							gameState.animations.push({
							type: 'PROJECTILE',
							x: gameState.player.x + gameState.player.width / 2 - 40,
							y: -50,
							xv: 0,
							yv: 40,
							a: 0,
							av: 0,
							width: 80,
							height: 80,
							end: (animObj) => {
								const doEnd = animObj.y > gameState.player.y;
								if (doEnd) {
									playSound('punch');
									dealPlayerDamage(enemy, dmg);
									done();
								}
								return doEnd;
							},
							icon: 'toaster'
						});
						}
						return doEnd;
					},
					icon: 'toaster'
				});
			}
		}
	},
	'melee_attack': (dmg, weight) => {
		return {
			value: dmg,
			icon: 'sword',
			type: 'ATTACK',
			description: 'This enemy will attack you',
			weight: weight,
			enabled: () => true,
			handler: (enemy, done) => {
				playSound('slash');
				gameState.animations.push({
					type: 'IMG_PROJ',
					x: enemy.x,
					y: enemy.y,
					xv: -100,
					yv: 0,
					a: 0,
					width: 200,
					height: 200,
					end: (animObj) => {
						const doEnd = animObj.x < gameState.player.x + gameState.player.width;
						if (doEnd) {
							dealPlayerDamage(enemy, dmg);
							setTimeout(() => {
								done();
							}, 300);
						}
						return doEnd;
					},
					img: 'slash'
				});
			}
		}
	},
	'shield_up': (value, weight) => {
		return {
			value: value,
			icon: 'shield',
			type: 'BUFF',
			description: 'This enemy will shield up',
			weight: weight,
			enabled: () => true,
			handler: (enemy, done) => {
				playSound('shield');
				setTimeout(() => {
					enemy.shield += value;
					done();
				}, 500);
			}
		}
	},
	'buff_dmg': (value, weight) => {
		return {
			value: null,
			icon: 'dmg_buff',
			type: 'BUFF',
			description: 'This enemy will gain\ndouble damage for next attack',
			weight: weight,
			enabled: () => true,
			handler: (enemy, done) => {
				playSound('buff');
				setTimeout(() => {
					addBuff(enemy.buffs, 'double_dmg');
					done();
				}, 500);
			}
		}
	},
	'heal': (value, weight) => {
		return {
			value: value,
			icon: 'potion',
			type: 'BUFF',
			description: 'This enemy will heal an allay\nwith the most missing health',
			weight: weight,
			enabled: () => {
				let missingHealth = 0;
				for (let e of gameState.enemies) {
					if (e.alive && e.maxLife - e.life > missingHealth) {
						missingHealth = e.maxLife - e.life;
					}
				}
				return missingHealth > 2;
			},
			handler: (enemy, done) => {
				playSound('buff');
				setTimeout(() => {
					let target = enemy;
					let missingHealth = enemy.maxLife - enemy.life;
					for (let e of gameState.enemies) {
						if (e.alive && e.maxLife - e.life > missingHealth) {
							missingHealth = e.maxLife - e.life;
							target = e;
						}
					}
					target.life = Math.min(target.life + value, target.maxLife);
					done();
				}, 500);
			}
		}
	},
	'summon': (value, weight) => {
		return {
			value: null,
			icon: 'robot',
			type: 'BUFF',
			description: 'This enemy will summon an ally',
			weight: weight,
			enabled: () => { return gameState.enemies[0].alive == false },
			handler: (enemy, done) => {
				playSound('buff');
				setTimeout(() => {
					gameState.enemies[0] = {...enemies['swords']};
					done();
				}, 500);
			}
		}
	}
};

const enemies = {
	'0': {	// this one is to fill out the slots, its already dead
		life: 0,
		maxLife: 1,
		shield: 0,
		width: 0,
		height: 0,
		xOff: 0,
		yOff: 0,
		alive: false,
		imgId: 'robot1',
		actions: [],
		buffs: []
	},
	'crab': {
		life: 20,
		maxLife: 20,
		shield: 0,
		width: 150,
		height: 71,
		xOff: 0,
		yOff: 229,
		alive: true,
		imgId: 'robot1',
		actions: [
			enemyActions['melee_attack'](4, 6),
			enemyActions['shield_up'](6, 2),
		],
		buffs: []
	},
	'sniper': {
		life: 30,
		maxLife: 30,
		shield: 0,
		width: 175,
		height: 199,
		xOff: 0,
		yOff: 101,
		alive: true,
		imgId: 'robot2',
		actions: [
			enemyActions['ranged_attack'](8, 6),
			enemyActions['shield_up'](8, 2),
			enemyActions['buff_dmg'](1, 2),
		],
		buffs: []
	},
	'big_ranged': {
		life: 50,
		maxLife: 50,
		shield: 0,
		width: 200,
		height: 169,
		xOff: 0,
		yOff: 131,
		alive: true,
		imgId: 'robot3',
		actions: [
			enemyActions['ranged_attack'](10, 6),
			enemyActions['shield_up'](8, 2),
			enemyActions['buff_dmg'](1, 2),
		],
		buffs: []
	},
	'engineer': {
		life: 30,
		maxLife: 30,
		shield: 0,
		width: 54,
		height: 135,
		xOff: 0,
		yOff: 165,
		alive: true,
		imgId: 'robot4',
		actions: [
			enemyActions['melee_attack'](5, 2),
			enemyActions['heal'](10, 2),
		],
		buffs: []
	},
	'swords': {
		life: 40,
		maxLife: 40,
		shield: 0,
		width: 176,
		height: 193,
		xOff: 0,
		yOff: 107,
		alive: true,
		imgId: 'robot5',
		actions: [
			enemyActions['melee_attack'](6, 6),
			enemyActions['shield_up'](10, 3),
			enemyActions['buff_dmg'](1, 2),
		],
		buffs: []
	},
	'big_meele': {
		life: 60,
		maxLife: 60,
		shield: 0,
		width: 190,
		height: 202,
		xOff: 0,
		yOff: 98,
		alive: true,
		imgId: 'robot6',
		actions: [
			enemyActions['melee_attack'](8, 6),
			enemyActions['shield_up'](3, 3),
			enemyActions['buff_dmg'](1, 2),
		],
		buffs: []
	},
	'zen': {
		life: 200,
		maxLife: 200,
		shield: 0,
		width: 525,
		height: 300,
		xOff: 0,
		yOff: 0,
		alive: true,
		imgId: 'zen',
		actions: [
			enemyActions['melee_attack'](22, 2),
			enemyActions['toaster'](18, 8),
			enemyActions['shield_up'](14, 2),
			enemyActions['buff_dmg'](1, 2),
		],
		buffs: []
	},
	'evil': {
		life: 300,
		maxLife: 300,
		shield: 0,
		width: 100,
		height: 300,
		xOff: 0,
		yOff: 0,
		alive: true,
		imgId: 'evil',
		actions: [
			enemyActions['swarm_attack'](24, 5),
			enemyActions['gaslight'](2, 2),
			enemyActions['shield_up'](16, 1),
			enemyActions['buff_dmg'](1, 2),
			enemyActions['summon'](1, 1),
		],
		buffs: []
	}
};

const intro = {
	imgs: {
		'rain': {
			img: 'rain-closeup',
			visible: true,
			x: 0,
			y: 175,
			width: 560,
			height: 675
		},
		'robot': {
			img: 'robot2',
			visible: false,
			x: 750,
			y: 350,
			width: 350,
			height: 400
		}
	},		
	dialog: [
		{ value: 'Rainhoe\nOk, everything is ready. Time to start the stream.' },
		{ value: '*knock knock*', sound: 'knock' },
		{ value: 'Rainhoe\nHuh? I am not expecting anyone.' },
		{ value: 'Rainhoe\n*opens the door*' },
		{ value: 'Robot\nOn behalf of Megacorp I am here to arrest you.\nWe have already captured your droid. Please do not resist.', action: () => {intro.imgs['robot'].visible = true;} },
		{ value: 'Rainhoe\n*smacks the robot with a gardening hoe*', sound: 'punch' },
		{ value: 'Robot\n*falls to the ground*', action: () => {intro.imgs['robot'].y += 270} },
		{ value: 'Rainhoe\nThis doesnt make any sense. The megacorp timeline should\nhave been destroyed when I left.' },
		{ value: 'Rainhoe\nI need to save my droid and find out what is going on.\nThe stream is gonna have to wait.' },
	],
	dialogId: 'intro',
	reset: () => {
		intro.imgs['robot'].visible = false;
		intro.imgs['robot'].y = 350;
	}
}

const outro = {
	imgs: {
		'rain': {
			img: 'rain-closeup',
			visible: true,
			x: 0,
			y: 175,
			width: 560,
			height: 675
		},
		'droid': {
			img: 'droid',
			visible: false,
			x: 800,
			y: 383,
			width: 370,
			height: 367
		}
	},		
	dialog: [
		{ value: 'Rainhoe\nFinally, its over.' },
		{ value: 'Rainhoe\nDroid! Thank god you are ok. Can you hack the mainframe\nand shut down all remaining Megacorp robots?', action: () => {outro.imgs['droid'].visible = true;} },
		{ value: 'Droid\nCertainly. *hacking the mainframe*' },
		{ value: 'Droid\nDone. Megacorp is no more.' },
		{ value: 'Rainhoe\nGreat job. Now we can finally go back home and start the stream.' },
	],
	dialogId: 'outro',
	reset: () => {
		outro.imgs['droid'].visible = false;
	}
}

const credits = "Programming: Rediskrad\nWriting: Rediskrad\nRobot pictures: mikyn-drew.itch.io\nZen toaster: @TheArtGun\nDroid image: @AIN_Artisto\nOther images: youtube/twitch clips, Rediskrad\nIcons: CraftPix.net, Twitch emotes\nSound: freesound.org, youtube clips"

const mapNodes = {
	battlesEasy: [
		{
			name: 'Battle',
			icon: 'battle',
			type: 'BATTLE',
			reward: 35,
			enemies: ['crab', 'crab', 'sniper', '0']
		},
		{
			name: 'Battle',
			icon: 'battle',
			type: 'BATTLE',
			reward: 45,
			enemies: ['0', 'crab', 'engineer', 'sniper']
		},
		{
			name: 'Battle',
			icon: 'battle',
			type: 'BATTLE',
			reward: 40,
			enemies: ['0', 'swords', '0', 'sniper']
		}
	],
	battlesMedium: [
		{
			name: 'Battle',
			icon: 'battle',
			type: 'BATTLE',
			reward: 50,
			enemies: ['crab', 'swords', 'sniper', '0']
		},
		{
			name: 'Battle',
			icon: 'battle',
			type: 'BATTLE',
			reward: 55,
			enemies: ['big_meele', 'engineer', 'big_ranged', '0']
		},
		{
			name: 'Battle',
			icon: 'battle',
			type: 'BATTLE',
			reward: 60,
			enemies: ['crab', 'swords', 'engineer', 'sniper']
		}
	],
	battlesHard: [
		{
			name: 'Battle',
			icon: 'battle',
			type: 'BATTLE',
			reward: 70,
			enemies: ['swords', 'sniper', 'big_meele', 'big_ranged']
		},
		{
			name: 'Battle',
			icon: 'battle',
			type: 'BATTLE',
			reward: 70,
			enemies: ['swords', 'engineer', 'big_meele', 'big_ranged']
		},
		{
			name: 'Battle',
			icon: 'battle',
			type: 'BATTLE',
			reward: 70,
			enemies: ['swords', 'swords', 'big_ranged', 'big_ranged']
		}
	],
	start: {
		name: 'Start',
		icon: 'blank',
		type: 'START'
	},
	boss1: {
		name: 'Boss1',
		icon: 'boss',
		type: 'BATTLE',
		reward: 80,
		enemies: ['0', 'zen', '0', '0'],
		dialog: [
			{ value: 'Rainhoe\nZentreya? Are you working for Megacorp?' },
			{ value: 'Zentreya\nOur goals were aligned. Over the years I have grown tired of chat\ntelling me how Rainhoe is so much better at videogames than me.\nThis ends now!' },
		],
		dialogId: 'zen'
	},
	boss2: {
		name: 'Boss2',
		icon: 'boss',
		type: 'BATTLE',
		reward: 100,
		enemies: ['0', 'evil', '0', '0'],
		dialog: [
			{ value: 'Evil\nSo you have destroyed all my robots.\nI guess I am gonna have to take care of you myself.' },
			{ value: 'Rainhoe\nHow did you even get here. The Megacorp timeline should\nhave been destroyed.' },
			{ value: 'Evil\nSo naive... Did you seriously think Megacorp haven\'t sent\nunits to other timelines as a contingency before you even got here?' },
			{ value: 'Rainhoe\nSo the timeline was destroyed. I just need to take care of you\nand it will be over.' },
			{ value: 'Evil\nYou can certainly try.' },
		],
		dialogId: 'evil'
	},
	shops: [
		{
			name: 'Filian',
			icon: 'filian',
			img: 'filian',
			type: 'SHOP',
			dialog: [
				{ value: 'Filian\nSup rain. What are you doing here.' },
				{ value: 'Rainhoe\nHi Filian. There are robots from the future coming after me.\nCan you help me?.' },
				{ value: 'Filian\nRobots from the future huh?\nI am not a fighter, i am just a catgirl on the internet.\nMaybe i can get you something to help.' },
				{ value: 'Rainhoe\nOk, what do you have?' },
				{ value: 'Filian\nFruitsnacks?' },
				{ value: 'Rainhoe\n... Ok I guess it\'s better than nothing. How much?' },
				{ value: 'Filian\n25 + 25' },
				{ value: 'Rainhoe\n50?' },
				{ value: 'Filian\nFit Deez NUTS in your mouth! Ha, ha, ha, ha...', sound: 'deeznuts' },
				{ value: 'Rainhoe\n...' },
				{ value: 'Filian\nOk but seriously, good luck with the robots\nand sorry for the rug burn.' },
			],
			dialogId: 'filian',
			items: ['fruitsnack', 'potion'],
			cards: ['flashbang','flip']
		},
		{
			name: 'Numi',
			icon: 'numi',
			img: 'numi',
			type: 'SHOP',
			dialog: [
				{ value: 'Numi\nHi Rain! What are you doing in my alley?' },
				{ value: 'Rainhoe\nI need your help. There are robots from the future after me.' },
				{ value: 'Numi\nI can\'t right now. I have a date in few minutes.\nSurely this time the date won\'t run away.' },
				{ value: 'Rainhoe\n*She is coping so hard*' },
				{ value: 'Rainhoe\nFine do you at least have something that could help me?' },
				{ value: 'Numi\nSure, take a look.' },
			],
			dialogId: 'numi',
			items: ['mold', 'potion'],
			cards: ['cpr','bottom']
		},
		{
			name: 'Giri',
			icon: 'giri',
			img: 'giri',
			type: 'SHOP',
			dialog: [
				{ value: 'Giri\nHi Rain! I missed you.' },
				{ value: 'Rainhoe\nHi Giri! Surely you can help me.\nThere are robots from the future after me.' },
				{ value: 'Giri\nBack when I was a warlord I wouldn\'t hesitate.\nBut now I am just an old grandma. Maybe I can just cook you something?' },
				{ value: 'Rainhoe\nFine I guess. What are you cooking?' },
				{ value: 'Giri\nHere take a look.' },
			],
			dialogId: 'giri',
			items: ['girifood', 'potion'],
			cards: ['shower','cleaver']
		},
		{
			name: 'Yuzu',
			icon: 'yuzu',
			img: 'yuzu',
			type: 'SHOP',
			dialog: [
				{ value: 'Yuzu\nHi Rain! What brings you to my shrine?' },
				{ value: 'Rainhoe\nYuzu! Can you help me with something?' },
				{ value: 'Yuzu\nWhat is it?' },
				{ value: 'Rainhoe\nRobots from the future are after me. I need to defeat them.' },
				{ value: 'Yuzu\nI don\'t know... I just started this game. I cant stop playing it.\nSurely the robots can wait.' },
				{ value: 'Yuzu\nI promissed chat I won\'t keep playing offstream, but I can\'t help it.\nHopefully they will understand.' },
				{ value: 'Rainhoe\nYuzu this is serious! I really need your help.' },
				{ value: 'Yuzu\nI am sure you can handle it. Here, maybe this can help.' },
			],
			dialogId: 'yuzu',
			items: ['moth', 'potion'],
			cards: ['yerdone', 'shreak']
		},
		{
			name: 'Bao',
			icon: 'bao',
			img: 'bao',
			type: 'SHOP',
			dialog: [
				{ value: 'Bao\nHi Rain!' },
				{ value: 'Rainhoe\nBao! There are robots from the future after me. Can you help?' },
				{ value: 'Bao\nRobots? I dont know... Maybe if it were some wolf-men I would be\nwilling to help. But robots?\nNah, you gonna have to handle them yourself.' },
				{ value: 'Rainhoe\n*Jesus she is so down bad*' },
				{ value: 'Rainhoe\nFine I will deal with them myself.\nDo you at least have anything that could help me?' },
				{ value: 'Bao\nSure take a look.' },
			],
			dialogId: 'bao',
			items: ['whale', 'potion'],
			cards: ['blueberry', 'dent']
		},
		{
			name: 'Shira',
			icon: 'shira',
			img: 'shira',
			type: 'SHOP',
			dialog: [
				{ value: 'Rainhoe\nShira! My cute fox friend. I need your help.' },
				{ value: 'Shirahiko\nHi Rain! What do you need?' },
				{ value: 'Rainhoe\nThere are robots from the future after me.\nI need help fighting them off.' },
				{ value: 'Shirahiko\nI don\'t know Rain. I am already managing your Youtube channel.\nIs that not enough? I dont have time to also deal with some robots.' },
				{ value: 'Rainhoe\nI guess you are right. Fine I will handle it.\nDo you have anything that could help me?' },
				{ value: 'Shirahiko\nYeah, take a look.' },
			],
			dialogId: 'shira',
			items: ['fox', 'potion'],
			cards: ['angry', 'headpat']
		}
	]
};

const items = {
	'mold': {
		id: 1,
		name: 'The mold',
		icon: 'mold',
		shopCost: 50,
		description: 'The mold\nInflicts 1 stack of poison\nto all enemies at the\nstart of every turn',
		onAquire: () => {},
		onTurnStart: () => {
			for (let enemy of gameState.enemies) {
				if (enemy.alive) {
					addBuff(enemy.buffs, 'poison');
				}
			}
		},
		onTurnEnd: () => {},
		onBattleEnd: () => {}
	},
	'rainhoe': {
		id: 2,
		name: 'Max energy',
		icon: 'suit3',
		shopCost: 0,
		description: 'Max energy\n+1 to maximum energy',
		onAquire: () => {
			gameState.player.maxEnergy++;
		},
		onTurnStart: () => {},
		onTurnEnd: () => {},
		onBattleEnd: () => {}
	},
	'spacehoe': {
		id: 3,
		name: 'Space suit',
		icon: 'suit1',
		shopCost: 0,
		description: 'Space suit\nGains 2 shield at\nstart of every turn',
		onAquire: () => {},
		onTurnStart: () => {
			gameState.player.shield += 2;
		},
		onTurnEnd: () => {},
		onBattleEnd: () => {}
	},
	'battlehoe': {
		id: 4,
		name: 'Battle suit',
		icon: 'suit2',
		shopCost: 0,
		description: 'Battle suit\n30% increased damage',
		onAquire: () => {
			addBuff(gameState.buffs, 'battle_suit');
		},
		onTurnStart: () => {},
		onTurnEnd: () => {},
		onBattleEnd: () => {}
	},
	'fruitsnack': {
		id: 5,
		name: 'Fruitsnacks',
		icon: 'fruitsnack',
		shopCost: 50,
		description: 'Fruitsnacks\nGains 2 shield at\nstart of every turn',
		onAquire: () => {},
		onTurnStart: () => {
			gameState.player.shield += 2;
		},
		onTurnEnd: () => {},
		onBattleEnd: () => {}
	},
	'whale': {
		id: 6,
		name: 'Whale charm',
		icon: 'whale',
		shopCost: 50,
		description: 'Whale charm\nReduces damage taken by 20%',
		onAquire: () => {
			addBuff(gameState.buffs, 'whale');
		},
		onTurnStart: () => {},
		onTurnEnd: () => {},
		onBattleEnd: () => {}
	},
	'fox': {
		id: 7,
		name: 'Fox charm',
		icon: 'fox',
		shopCost: 50,
		description: 'Fox charm\n+1 to maximum energy',
		onAquire: () => {
			gameState.player.maxEnergy++;
		},
		onTurnStart: () => {},
		onTurnEnd: () => {},
		onBattleEnd: () => {}
	},
	'moth': {
		id: 8,
		name: 'Moth charm',
		icon: 'moth',
		shopCost: 50,
		description: 'Moth charm\n+1 to card draw',
		onAquire: () => {
			gameState.player.cardDraw++;
		},
		onTurnStart: () => {},
		onTurnEnd: () => {},
		onBattleEnd: () => {}
	},
	'girifood': {
		id: 9,
		name: 'Onigiri',
		icon: 'girifood',
		shopCost: 50,
		description: 'Onigiri\nRestores 3 hp at end of battle',
		onAquire: () => {
			gameState.player.cardDraw++;
		},
		onTurnStart: () => {},
		onTurnEnd: () => {},
		onBattleEnd: () => {
			gameState.player.life = Math.min(gameState.player.life + 3, gameState.player.maxLife);
		}
	},
	'potion': {
		id: 10,
		name: 'Health potion',
		icon: 'potion',
		shopCost: 50,
		consumable: true,
		description: 'Potion\nRestores 10 hp.\nUsed on purchase.',
		onAquire: () => {
			gameState.player.life = Math.min(gameState.player.life + 10, gameState.player.maxLife);
		},
		onTurnStart: () => {},
		onTurnEnd: () => {},
		onBattleEnd: () => {}
	}
};


// turns -1 = untill end of battle, -2 = permanent
const buffs = {
	'yerdone': {
		name: 'Yer done!',
		icon: 'yerdone',
		description: 'Takes double damage',
		type: 'DMG_TAKEN',
		modifier: 2,
		turns: 3,
		stackable: true
	},
	'angry': {
		name: 'Angry gamer',
		icon: 'angry',
		description: 'Damage increased by 50%',
		type: 'DMG_DEALT',
		modifier: 1.5,
		turns: 2,
		stackable: true
	},
	'double_dmg': {
		name: 'Double damage',
		icon: 'dmg_buff',
		description: 'Deals double damage',
		type: 'DMG_DEALT',
		modifier: 2,
		turns: 2,
		stackable: false
	},
	'shreak': {
		name: 'Yuzu shreak',
		icon: 'shreak',
		description: 'Reduced damage by 50%',
		type: 'DMG_DEALT',
		modifier: 0.5,
		turns: 1,
		stackable: true
	},
	'dent': {
		name: 'Dented head',
		icon: 'dent',
		description: 'Reduced damage by 50%',
		type: 'DMG_DEALT',
		modifier: 0.5,
		turns: 3,
		stackable: true
	},
	'flashbang': {
		name: 'Flashbang',
		icon: 'flashbang',
		description: 'Stunned by flashbang',
		type: 'STUN',
		modifier: 0,
		turns: 1,
		stackable: true
	},
	'flip': {
		name: 'Do a flip',
		icon: 'flip',
		description: 'Dodges all attacks',
		type: 'DODGE',
		modifier: 0,
		turns: 1,
		stackable: true
	},
	'battle_suit': {
		name: 'Battle suit',
		icon: null,
		description: '30% increased damage',
		type: 'DMG_DEALT',
		modifier: 1.3,
		turns: -2,
		stackable: false
	},
	'poison': {
		name: 'Poison',
		icon: 'poison',
		description: 'Deals damage equal to\nnumber of stacks at\nthe end of turn.',
		type: 'POISON',
		modifier: 1,
		turns: 1,
		stackable: true
	},
	'cpr': {
		name: 'CPR',
		icon: 'rave',
		description: 'Reduced cost of all\ncards until end of turn',
		type: 'CPR',
		modifier: 1,
		turns: 1,
		stackable: false
	},
	'headpat': {
		name: 'Headpat',
		icon: 'headpat',
		description: 'Next played card is free',
		type: 'HEADPAT',
		modifier: 1,
		turns: 1,
		stackable: true
	},
	'whale': {
		name: 'Whale charm',
		icon: null,
		description: 'Reduced damage\ntaken by 20%',
		type: 'DMG_TAKEN',
		modifier: 0.8,
		turns: -2,
		stackable: false
	}
};