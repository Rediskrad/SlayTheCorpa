let clickableObjects = [];
let frameCnt = 0;
const FPS = 60;
const animAdj = 30/FPS;
const mapNodeXSpacing = 150;
const mapNodeYSpacing = 110;
const mapNodeSize = 50;

function render() {
	switch (gameState.currentScreen) {
		case 'BATTLE': {
			renderBattleScreen();
			break;
		}
		case 'MENU': {
			renderMenuScreen();
			break;
		}
		case 'INTRO': {
			renderCutsceneScreen(intro);
			break;
		}
		case 'OUTRO': {
			renderCutsceneScreen(outro);
			break;
		}
		case 'CHAR_SELECT': {
			renderCharSelectScreen();
			break;
		}
		case 'MAP': {
			renderMapScreen();
			break;
		}
		case 'SHOP': {
			renderShopScreen();
			break;
		}
		case 'GAME_OVER': {
			renderGameOverScreen();
			break;
		}
		case 'CREDITS': {
			renderCreditsScreen();
			break;
		}
		case 'HELP': {
			renderHelpScreen();
			break;
		}
		case 'DECK_BUILDER': {
			renderDeckBuilderScreen();
			break;
		}
	}
}

function renderHelpScreen() {
	const ctx = canvas.getContext("2d");
	const clickable = [];
	const helpCl = {
		type: 'HELP_SCREEN',
		object: "",
		x: 0,
		y: 0,
		width: canvas.width,
		height: canvas.height
	};
	clickable.push(helpCl);
	ctx.drawImage(loadedImgs['help'], helpCl.x, helpCl.y, helpCl.width, helpCl.height);
	clickableObjects = clickable;
}

function renderMenuScreen() {
	const clickable = [];
	const ctx = canvas.getContext("2d");
	ctx.fillStyle = "#444444";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	ctx.fillStyle = "#FFFFFF";
	ctx.font = "50px Verdana";
	ctx.fillText("Slay the Corpa", 450, 120);
	
	renderMenuItems(ctx, menuItems, 150, clickable);
	
	clickableObjects = clickable;
}

function renderGameOverScreen() {
	const clickable = [];
	const ctx = canvas.getContext("2d");
	ctx.fillStyle = "#444444";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	renderGold(ctx);
	
	ctx.fillStyle = "#FFFFFF";
	ctx.font = "50px Verdana";
	ctx.fillText("Game over", 450, 150);
	
	renderMenuItems(ctx, gameOverMenu, 180, clickable);
	
	clickableObjects = clickable;
}

function renderMenuItems(ctx, items, yBase, clickable) {
	for (let i = 0; i < items.length; i++) {
		const menuCl = {
			type: 'MENU_ITEM',
			object: items[i],
			x: 325,
			y: yBase + i * 100,
			width: 550,
			height: 80
		};
		if (items[i].enabled) {
			ctx.fillStyle = "#666666";
			ctx.fillRect(menuCl.x, menuCl.y, menuCl.width, menuCl.height);
			clickable.push(menuCl);
		}
		ctx.fillStyle = gameState.targetedObj && gameState.targetedObj.object == menuCl.object ? "#00FFFF" : "#FFFFFF";
		ctx.font = "36px Verdana";
		ctx.fillText(items[i].caption(), menuCl.x + 10, menuCl.y + 50);
	}
}

function renderCreditsScreen() {
	const clickable = [];
	const ctx = canvas.getContext("2d");
	ctx.fillStyle = "#444444";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	renderMenuBtn(ctx, clickable);

	
	ctx.fillStyle = "#FFFFFF";
	ctx.font = "36px Verdana";
	ctx.fillText("Credits", 500, 100);
	
	renderText(ctx, credits, 24, "#FFFFFF", null, 400, 200);
	
	ctx.font = "36px Verdana";
	ctx.fillText("Thank you for playing!", 400, 700);
	
	clickableObjects = clickable;
}


function renderCutsceneScreen(cutscene) {
	const clickable = [];
	const ctx = canvas.getContext("2d");
	ctx.fillStyle = "#6666CC";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	renderDialog(ctx, cutscene, clickable);
	
	clickableObjects = clickable;
}

function renderCharSelectScreen() {
	const clickable = [];
	const ctx = canvas.getContext("2d");
	ctx.fillStyle = "#444444";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	ctx.fillStyle = "#FFFFFF";
	ctx.font = "36px Verdana";
	ctx.fillText("Select suit", 500, 150);
	
	for (let i = 0; i < characters.length; i++) {
		const charCl = {
			type: 'CHARACTER',
			object: characters[i],
			x: 250 + i * 250,
			y: 275,
			width: 150,
			height: 450
		};
		ctx.drawImage(loadedImgs[characters[i].img], charCl.x, charCl.y, charCl.width, charCl.height);
		clickable.push(charCl);
	}
	
	if (gameState.targetedObj && gameState.targetedObj.object && gameState.targetedObj.object.description) {
		renderText(ctx, gameState.targetedObj.object.description, 20, "#FFFFFF", "#886644", gameState.targetedObj.x + gameState.targetedObj.width, gameState.targetedObj.y);
	}
	
	clickableObjects = clickable;
}

function renderShopScreen() {
	const clickable = [];
	const ctx = canvas.getContext("2d");
	ctx.fillStyle = "#444444";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	renderMenuBtn(ctx, clickable);
	const shop = gameState.world.currentNode;
	const shopState = gameState.world.shop;
	
	const shopKeeperImg = loadedImgs[shop.img];
	const imgWidth =  shopKeeperImg.width / shopKeeperImg.height * 800;
	ctx.drawImage(shopKeeperImg, 0, canvas.height - 800, imgWidth, 800);
	
	if (!gameState.dialog.finished) {
		renderDialog(ctx, shop, clickable);
	} else {
		ctx.fillStyle = "#AA7755";
		ctx.fillRect(800, 110, 300, 690);
		ctx.fillStyle = "#FFFFFF";
		ctx.font = "24px Verdana";
		ctx.fillText("Shop", 810, 145);
		ctx.font = "36px Verdana";
		drawIcon(ctx, 'life', 10, 10, 40, 40);
		ctx.fillText(formatFloat(gameState.player.life) + "/" + gameState.player.maxLife, 50, 40);
		renderGold(ctx);
		let j = 0;
		for (let i = 0; i < shopState.items.length; i++) {
			ctx.fillStyle = "#444444";
			const itemCl = {
				type: 'SHOP_ITEM',
				object: shopState.items[i],
				x: 810,
				y: 170 + j * 105,
				width: 280,
				height: 100
			};
			clickable.push(itemCl);
			ctx.fillRect(itemCl.x, itemCl.y, itemCl.width, itemCl.height);
			drawIcon(ctx, shopState.items[i].icon, itemCl.x + itemCl.width - 60, itemCl.y + 45, 50, 50);
			ctx.fillStyle = "#FFFFFF";
			ctx.font = "20px Verdana";
			ctx.fillText("Item: " + shopState.items[i].name, itemCl.x + 5, itemCl.y + 30);
			ctx.fillText("Price: " + shopState.items[i].shopCost, itemCl.x + 5, itemCl.y + 70);
			j++;
		}
		for (let i = 0; i < shopState.cards.length; i++) {
			ctx.fillStyle = "#444444";
			const cardCl = {
				type: 'SHOP_CARD',
				object: shopState.cards[i],
				x: 810,
				y: 170 + j * 105,
				width: 280,
				height: 100
			};
			clickable.push(cardCl);
			ctx.fillRect(cardCl.x, cardCl.y, cardCl.width, cardCl.height);
			drawIcon(ctx, shopState.cards[i].icon, cardCl.x + cardCl.width - 60, cardCl.y + 45, 50, 50);
			ctx.fillStyle = "#FFFFFF";
			ctx.font = "20px Verdana";
			ctx.fillText("Card: " + shopState.cards[i].name, cardCl.x + 5, cardCl.y + 30);
			ctx.fillText("Price: " + shopState.cards[i].shopCost, cardCl.x + 5, cardCl.y + 70);
			
			ctx.font = "16px Verdana";
			ctx.fillStyle = "#CCCCCC";
			fillEllipse(ctx, cardCl.x + cardCl.width - 22, cardCl.y - 3, 25, 25)
			ctx.fillStyle = "#000000";
			ctx.fillText("" + shopState.cards[i].cost, cardCl.x + cardCl.width - 14, cardCl.y -5 + 20);
			
			j++;
		}
		const leaveBtnCl = {
			type: 'LEAVE_SHOP_BTN',
			object: "",
			x: 800,
			y: 820,
			width: 220,
			height: 50
		};
		ctx.fillStyle = "#AA7755";
		clickable.push(leaveBtnCl);
		ctx.fillRect(leaveBtnCl.x, leaveBtnCl.y, leaveBtnCl.width, leaveBtnCl.height);
		ctx.fillStyle = "#FFFFFF";
		ctx.font = "36px Verdana";
		ctx.fillText("Leave shop", leaveBtnCl.x + 10, leaveBtnCl.y + 35);
	}
	if (gameState.targetedObj && gameState.targetedObj.object && gameState.targetedObj.object.description) {
		renderText(ctx, gameState.targetedObj.object.description, 24, "#FFFFFF", "#886644", gameState.targetedObj.x, gameState.targetedObj.y + gameState.targetedObj.height);
	}
	
	clickableObjects = clickable;
}

function renderDialog(ctx, obj, clickable) {
	gameState.dialog.dialogId = obj.dialogId;
	
	if (obj.imgs) {
		for (let imgKey of Object.keys(obj.imgs)) {
			const img = obj.imgs[imgKey];
			if (img.visible) {
				ctx.drawImage(loadedImgs[img.img], img.x, img.y, img.width, img.height);
			}
		}
	}
	
	ctx.fillStyle = "#AA7755";
	const dialogCl = {
			type: 'DIALOG',
			object: "",
			x: 0,
			y: 0,
			width: canvas.width,
			height: canvas.height
	};
	clickable.push(dialogCl);
	ctx.fillRect(0, 750, canvas.width, 150);
	renderText(ctx, obj.dialog[gameState.dialog.index].value, 20, "#FFFFFF", null, 110, 750);
}

function renderBattleScreen() {
	const clickable = [];
	const ctx = canvas.getContext("2d");
	ctx.fillStyle = "#6666CC";
	ctx.fillRect(0, 0, canvas.width, 500);
	ctx.fillStyle = "#222222";
	ctx.fillRect(0, 0, canvas.width, 60);
	ctx.fillRect(0, 500, canvas.width, 400);
	
	// help button
	renderMenuBtn(ctx, clickable);
	renderGold(ctx);
	const btnCl = {
		type: 'HELP_BTN',
		object: "",
		x: 930,
		y: 5,
		width: 50,
		height: 50
	};
	clickable.push(btnCl);
	drawIcon(ctx, 'help', btnCl.x, btnCl.y, btnCl.width, btnCl.height);
	
	
	// render items
	for (let i = 0; i < gameState.items.length; i++) {
		const itemCl = {
			type: 'ITEM',
			object: gameState.items[i],
			x: 5 + i * 55,
			y: 5,
			width: 50,
			height: 50
		};
		drawIcon(ctx, gameState.items[i].icon, itemCl.x, itemCl.y, 50, 50);
		clickable.push(itemCl);
	}
	
	// render player
	const wiggle = frameCnt % 40 < 20 ? 3 : 0;
	const playerCl = {
		type: 'PLAYER',
		object: gameState.player,
		x: gameState.player.x,
		y: gameState.player.y,
		width: gameState.player.width,
		height: gameState.player.height
	};
	ctx.drawImage(loadedImgs[gameState.player.imgId], playerCl.x, playerCl.y + wiggle, playerCl.width, playerCl.height - wiggle);
	ctx.fillStyle = "#FFFFFF";
	ctx.font = "16px Verdana";

	drawIcon(ctx, 'life', playerCl.x + playerCl.width / 2 - 45, 505, 25, 25);
	ctx.fillText(""+Math.ceil(gameState.player.life), playerCl.x + playerCl.width / 2 - 20, 530);
	if (gameState.player.shield > 0) {
		drawIcon(ctx, 'shield', playerCl.x + playerCl.width / 2 + 15, 505, 30, 30);
		ctx.fillText(""+Math.ceil(gameState.player.shield), playerCl.x + playerCl.width / 2 + 45, 530);
	}
	clickable.push(playerCl);
	
	renderBuffs(ctx, gameState.buffs, playerCl.x + playerCl.width / 2 - 45, 550, clickable);
	
	// render enemies
	for (let i = 0; i < 4; i++) {
		var enemy = gameState.enemies[i];
		if (enemy.alive) {
			enemy.x = 350 + i * 200 + enemy.xOff;
			enemy.y = 200 + enemy.yOff;
			const wiggle = (frameCnt + i * 10) % 40 < 20 ? 2 : 0;
			const enemyCl = {
				type: 'ENEMY',
				object: enemy,
				x: enemy.x,
				y: enemy.y + wiggle,
				width: enemy.width,
				height: enemy.height - wiggle
			};
			ctx.drawImage(loadedImgs[enemy.imgId], enemyCl.x, enemyCl.y, enemyCl.width, enemyCl.height);
			ctx.fillStyle = "#FFFFFF";
			ctx.font = "16px Verdana";
			let icon;
			if (enemy.nextAction) {
				const actionCl = {
					type: 'ACTION',
					object: enemy.nextAction,
					x: enemyCl.x + enemy.width / 2 - 25,
					y: 140 + enemy.yOff,
					width: 50,
					height: 50
				};
				clickable.push(actionCl);
				drawIcon(ctx, enemy.nextAction.icon, actionCl.x, actionCl.y, actionCl.width, actionCl.height);
				if (enemy.nextAction.value) {
					let value = enemy.nextAction.value;
					if (enemy.nextAction.type == 'ATTACK') {
						for (let buff of enemy.buffs) {
							if (buff.type == 'DMG_DEALT') {
								value *= buff.modifier;
							}
						}
					}
					ctx.fillText(formatFloat(value), enemyCl.x + enemy.width / 2 + 5, 180 + enemy.yOff);
				}
			}
			drawIcon(ctx, 'life', enemyCl.x + enemy.width / 2 - 45, 505, 25, 25);
			ctx.fillText(""+Math.ceil(enemy.life), enemyCl.x + enemy.width / 2 - 20, 530);
			if (enemy.shield > 0) {
				drawIcon(ctx, 'shield', enemyCl.x + enemy.width / 2 + 15, 505, 30, 30);
				ctx.fillText(""+Math.ceil(enemy.shield), enemyCl.x + enemy.width / 2 + 45, 530);
			}
			clickable.push(enemyCl);
			
			renderBuffs(ctx, enemy.buffs,enemyCl.x + enemy.width / 2 - 45, 550, clickable);
		}
	}
	
	if (!gameState.dialog.finished && gameState.world.currentNode.dialog) {
		renderDialog(ctx, gameState.world.currentNode, clickable);
	} else {
		// render cards
		let selectedCardCl = null;
		const cardImg = loadedImgs['card'];
		for (let i = 0; i < gameState.hand.length; i++) {
			const card = {
				type: 'CARD',
				object: gameState.hand[i],
				x: 5 + i * 125,
				y: 700,
				width: 120,
				height: 200
			};
			if (gameState.hand[i] == gameState.selectedCard) {
				card.y -= 50;
				selectedCardCl = card;
			}
			ctx.drawImage(cardImg, card.x, card.y, card.width, card.height);
			
			drawIcon(ctx, gameState.hand[i].icon, card.x + 37, card.y + 100, 50, 50);

			ctx.fillStyle = "#000000";
			ctx.font = "16px Verdana";
			renderText(ctx, gameState.hand[i].name, 16, "#000000", null, card.x + 7, card.y);
				
			ctx.fillStyle = "#CCCCCC";
			fillEllipse(ctx, card.x + card.width - 22, card.y - 3, 25, 25)
			const cost = calculateCardCost(gameState.hand[i].cost);
			ctx.fillStyle = cost < gameState.hand[i].cost ? "#008800" : "#000000";
			ctx.fillText(cost, card.x + card.width - 14, card.y -5 + 20);
			
			clickable.push(card);
		}
		
		// render deck
		ctx.drawImage(loadedImgs['deck'], 1075, 700, 120, 200);
		ctx.fillStyle = "#FFFFFF";
		ctx.fillText(gameState.deck.length, 1130, 690);
		
		// render end turn button
		const endTurnBtn = {
			type: 'END_TURN',
			x: 1000,
			y: 600,
			width: 175,
			height: 60
		};
		
		ctx.fillStyle = "#8c4100";
		ctx.fillRect(endTurnBtn.x, endTurnBtn.y, endTurnBtn.width, endTurnBtn.height);
		ctx.fillStyle = "#FFFFFF";
		ctx.font = "36px Verdana";
		ctx.fillText("End turn", endTurnBtn.x + 10, endTurnBtn.y + 40);
		clickable.push(endTurnBtn);

		// render energy indicator
		drawIcon(ctx, 'energy', 25, 585, 50, 50);
		ctx.fillStyle = "#000000";
		ctx.font = "24px Verdana";
		ctx.fillText("" + gameState.player.energy, 30, 610);
		
		ctx.lineWidth = 2;
		ctx.strokeStyle = "#000000";
		ctx.beginPath();
		ctx.moveTo(60, 600);
		ctx.lineTo(40, 620);
		ctx.stroke();
		
		ctx.fillText("" + gameState.player.maxEnergy, 55, 630);
		
		// render card targeting
		if (selectedCardCl && gameState.targetedObj) {
			if (gameState.flags.targetingPlayer && gameState.targetedObj.type == 'PLAYER') {
				drawArrow(ctx, selectedCardCl, gameState.targetedObj, '#00FF00');
			} else if (gameState.flags.targetingEnemy && gameState.targetedObj.type == 'ENEMY') {
				drawArrow(ctx, selectedCardCl, gameState.targetedObj, '#FF0000');
			}
		}
		
		// render animations
		for (let anim of gameState.animations) {
			switch (anim.type) {
				case 'PROJECTILE': {
					if (anim.a == 0) {
						drawIcon(ctx, anim.icon, anim.x, anim.y, anim.width, anim.height);
					} else {
						ctx.save();
						ctx.translate(anim.x + anim.width/2, anim.y + anim.height/2);
						ctx.rotate(anim.a * Math.PI/180);
						drawIcon(ctx, anim.icon, -anim.width/2, -anim.height/2, anim.width, anim.height);
						ctx.restore();
					}
					anim.x += anim.xv * animAdj;
					anim.y += anim.yv * animAdj;
					anim.a += anim.av * animAdj;
					break;
				}
				case 'IMG_PROJ': {
					ctx.drawImage(loadedImgs[anim.img], anim.x, anim.y, anim.width, anim.height);
					anim.x += anim.xv * animAdj;
					anim.y += anim.yv * animAdj;
					break;
				}
				case 'TEXT': {
					ctx.fillStyle = anim.color;
					ctx.font = "24px Verdana";
					ctx.fillText(anim.value, anim.x, anim.y);
					anim.x += anim.xv * animAdj;
					anim.y += anim.yv * animAdj;
					break;
				}
			}
			if (anim.end(anim)) {
				anim.remove = true;
			}
		}
		
		gameState.animations = gameState.animations.filter(a => !a.remove);
		
		if (gameState.targetedObj && gameState.targetedObj.object && gameState.targetedObj.object.description) {
			renderText(ctx, gameState.targetedObj.object.description, 24, "#FFFFFF", "#886644", gameState.targetedObj.x + gameState.targetedObj.width, gameState.targetedObj.y);
		}
	}
	
	clickableObjects = clickable;
	frameCnt++;
}

function renderMapScreen() {
	const clickable = [];
	const ctx = canvas.getContext("2d");
	ctx.fillStyle = "#444444";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	renderMenuBtn(ctx, clickable);
	
	const halfSize = mapNodeSize / 2;
	
	ctx.lineWidth = 5;
	for (let node of gameState.world.map[gameState.world.level]) {
		for (let next of node.next) {
			ctx.strokeStyle = node.visited && next.visited ? '#FFFFFF' : '#818181';
			ctx.beginPath();
			ctx.moveTo(node.x + halfSize, node.y + halfSize);
			ctx.lineTo(next.x + halfSize, next.y + halfSize);
			ctx.stroke();
		}
	}
	
	for (let node of gameState.world.map[gameState.world.level]) {
		ctx.fillStyle = node.visited ? "#FFFFFF" : "#818181";
		fillEllipse(ctx, node.x - 5, node.y - 5, mapNodeSize + 10, mapNodeSize + 10);
		ctx.fillStyle = "#818181";
		fillEllipse(ctx, node.x, node.y, mapNodeSize, mapNodeSize);
		drawIcon(ctx, node.icon, node.x, node.y, mapNodeSize, mapNodeSize);
		clickable.push({
			type: 'MAP_NODE',
			object: node,
			x: node.x,
			y: node.y,
			width: mapNodeSize,
			height: mapNodeSize
		});
	}
	
	renderGold(ctx);
	
	clickableObjects = clickable;
}

function renderDeckBuilderScreen() {
	const ctx = canvas.getContext("2d");
	const clickable = [];
	ctx.fillStyle = "#444444";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	let i = 0;
	let j = 0;
	for (let cardKey of Object.keys(gameState.unlockedCards)) {
		const card = cards[cardKey];
		const count = gameState.unlockedCards[cardKey] - gameState.builtDeck[cardKey];
		renderDeckBuilderCard(ctx, clickable, card, count, 'UNLOCKED_CARD', i * 100, j * 150);
		i++;
		if (i == 12) {
			i = 0;
			j++;
		}
	}
	
	i = 0;
	j = 1;
	for (let cardKey of Object.keys(gameState.unlockedCards)) {
		const card = cards[cardKey];
		const count = gameState.builtDeck[cardKey];
		renderDeckBuilderCard(ctx, clickable, card, count, 'DECK_CARD', i * 100, canvas.height - j * 150);
		i++;
		if (i == 12) {
			i = 0;
			j++;
		}
	}
	
	ctx.fillStyle = "#FFFFFF";
	ctx.font = "20px Verdana";
	ctx.fillText("Unlocked cards (click to add to deck)", 450, 350);
	ctx.fillText("Deck cards (click to take out)", 450, 550);
	
	// render back button
	const backBtn = {
		type: 'BACK_BTN',
		x: 1000,
		y: 450,
		width: 120,
		height: 60
	};
	
	ctx.fillStyle = "#8c4100";
	ctx.fillRect(backBtn.x, backBtn.y, backBtn.width, backBtn.height);
	ctx.fillStyle = "#FFFFFF";
	ctx.font = "36px Verdana";
	ctx.fillText("Back", backBtn.x + 10, backBtn.y + 40);
	clickable.push(backBtn);
	
	if (gameState.targetedObj && gameState.targetedObj.object && gameState.targetedObj.object.description) {
		renderText(ctx, gameState.targetedObj.object.description, 24, "#FFFFFF", "#886644", gameState.targetedObj.x, gameState.targetedObj.y + gameState.targetedObj.height);
	}
	
	// render animations
	for (let anim of gameState.animations) {
		switch (anim.type) {
			case 'TEXT': {
				ctx.fillStyle = anim.color;
				ctx.font = "24px Verdana";
				ctx.fillText(anim.value, anim.x, anim.y);
				anim.x += anim.xv * animAdj;
				anim.y += anim.yv * animAdj;
				break;
			}
		}
		if (anim.end(anim)) {
			anim.remove = true;
		}
	}
	
	gameState.animations = gameState.animations.filter(a => !a.remove);

	clickableObjects = clickable;
}


function renderBuffs(ctx, buffArr, x, y, clickable) {
	const buffsWithIcons = buffArr.filter(b => b.icon);
	for (let i = 0; i < buffsWithIcons.length; i++) {
		const buffCl = {
			type: 'BUFF',
			object: buffsWithIcons[i],
			x: x + i * 30,
			y: y,
			width: 25,
			height: 25
		};
		clickable.push(buffCl);
		drawIcon(ctx, buffsWithIcons[i].icon, buffCl.x, buffCl.y, buffCl.width, buffCl.height);
		ctx.fillStyle = "#FFFFFF";
		ctx.font = "16px Verdana";
		ctx.fillText(""+buffsWithIcons[i].turns, buffCl.x + 20, buffCl.y + 40);
	}
}

function renderDeckBuilderCard(ctx, clickable, card, count, type, x, y) {
	const cardCl = {
		type: type,
		object: card,
		x: x,
		y: y,
		width: 100,
		height: 150
	};
	ctx.drawImage(loadedImgs['card'], cardCl.x, cardCl.y, cardCl.width, cardCl.height);
	
	drawIcon(ctx, card.icon, cardCl.x + 37, cardCl.y + 70, 50, 50);

	ctx.fillStyle = "#000000";
	ctx.font = "14px Verdana";
	renderText(ctx, card.name, 16, "#000000", null, cardCl.x, cardCl.y);
		
	ctx.fillStyle = "#CCCCCC";
	fillEllipse(ctx, cardCl.x + cardCl.width - 22, cardCl.y - 3, 25, 25)
	ctx.fillStyle = "#000000";
	ctx.fillText(card.cost, cardCl.x + cardCl.width - 14, cardCl.y -5 + 20);
	
	ctx.fillText(count, cardCl.x + cardCl.width / 2, cardCl.y + 140);
	
	if (count == 0) {
		drawIcon(ctx, 'grey', cardCl.x, cardCl.y, cardCl.width, cardCl.height);
	}
	
	clickable.push(cardCl);
}

function renderGold(ctx) {
	ctx.fillStyle = "#FFFFFF";
	ctx.font = "36px Verdana";
	ctx.fillText("" + gameState.player.money, 995, 40);
	drawIcon(ctx, 'coin', 1090, 10, 40, 40);
}

function renderMenuBtn(ctx, clickable) {
	const btnCl = {
		type: 'MENU_BTN',
		object: "",
		x: 1140,
		y: 5,
		width: 50,
		height: 50
	};
	clickable.push(btnCl);
	drawIcon(ctx, 'gear', btnCl.x, btnCl.y, btnCl.width, btnCl.height);
}

function renderText(ctx, value, size, color, bgColor, x, y) {
	ctx.font = size + "px Verdana";
	const lines = value.split("\n");
	let width, height;
	[width, height] = calcTextSize(ctx, value, size);
	if (width + x > canvas.width) {
		x = canvas.width - width;
	}
	if (height + y > canvas.height) {
		y = canvas.height - height;
	}
	if (bgColor) {
		ctx.fillStyle = bgColor;
		ctx.fillRect(x, y, width, height);
	}
	ctx.fillStyle = color;
	for (let i = 0; i < lines.length; i++) {
		ctx.fillText(lines[i], x + size, y + (i * size * 1.5) + size * 2);
	}
}


function calcTextSize(ctx, value, size) {
	ctx.font = size + "px Verdana";
	var lines = value.split("\n");
	var maxWidth = 0;
	for (let i = 0; i < lines.length; i++) {
		maxWidth = Math.max(ctx.measureText(lines[i]).width, maxWidth);
	}
	return [Math.floor(maxWidth + size * 2), lines.length * size * 1.5 + size * 2]
}

function drawArrow(ctx, source, target, color) {
	ctx.lineWidth = 5;
	ctx.strokeStyle = color;
	ctx.beginPath();
	ctx.moveTo(source.x + source.width / 2, source.y);
	ctx.lineTo(target.x + target.width / 2, target.y + target.height);
	ctx.stroke();
}

function fillEllipse(ctx, x, y, radiusX, radiusY) {
	ctx.beginPath();
	ctx.ellipse(x + radiusX / 2, y + radiusX / 2, radiusX / 2, radiusY / 2, 0, 0, 2 * Math.PI);
	ctx.fill();
}

function drawIcon(ctx, iconName, x, y, width, height) {
	const icon = icons[iconName];
	ctx.drawImage(loadedImgs['icons'], icon.i * 51, icon.j * 51, 50, 50, x, y, width, height);
}

function handleClick(event) {
	const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
	
	let clickedObj = null;
	for (let obj of clickableObjects) {
		if (x >= obj.x && y >= obj.y && x < obj.x + obj.width && y < obj.y + obj.height) {
			clickedObj = obj;
			break;
		}
	}
	if (clickedObj) {
		switch (clickedObj.type) {
			case 'CARD': {
				cardClicked(clickedObj);
				break;
			}
			case 'ENEMY': {
				enemyClicked(clickedObj);
				break;
			}
			case 'PLAYER': {
				playerClicked(clickedObj);
				break;
			}
			case 'END_TURN': {
				endTurn();
				break;
			}
			case 'MAP_NODE': {
				mapNodeClicked(clickedObj);
				break;
			}
			case 'DIALOG': {
				dialogClicked();
				break;
			}
			case 'SHOP_ITEM':
			case 'SHOP_CARD': {
				itemBuy(clickedObj);
				break;
			}
			case 'LEAVE_SHOP_BTN': {
				changeScreen('MAP');
				break;
			}
			case 'CHARACTER': {
				characterSelected(clickedObj);
				break;
			}
			case 'MENU_ITEM': {
				clickedObj.object.onClick();
				break;
			}
			case 'MENU_BTN': {
				openMenu();
				break;
			}
			case 'BACK_BTN': {
				gameState.currentScreen = gameState.deckBuilderBackScreen;
				break;
			}
			case 'HELP_BTN': {
				gameState.currentScreen = "HELP";
				break;
			}
			case 'HELP_SCREEN': {
				gameState.currentScreen = "BATTLE";
				break;
			}
			case 'UNLOCKED_CARD': {
				deckBuilderAddCard(clickedObj);
				break;
			}
			case 'DECK_CARD': {
				deckBuilderRemoveCard(clickedObj);
				break;
			}
		}
	}
}

function handleMouseMove(event) {
	const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
	
	let hoveredObj = null;
	for (let obj of clickableObjects) {
		if (x >= obj.x && y >= obj.y && x < obj.x + obj.width && y < obj.y + obj.height) {
			hoveredObj = obj;
			break;
		}
	}
	gameState.targetedObj = hoveredObj;
}