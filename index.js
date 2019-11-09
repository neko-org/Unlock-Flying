module.exports = function UnlockFlying(mod) {
	mod.game.me.on('change_zone', (zone, quick) => {
		if (zone === 2000) {
			mod.send('S_ABNORMALITY_BEGIN', 4, {
				target: mod.game.me.gameId,
				source: mod.game.me.gameId,
				id: 30010000,
				duration: 0x7FFFFFFF,
				stacks: 1
			})
		} else {
			mod.send('S_ABNORMALITY_END', 1, {
				target: mod.game.me.gameId,
				id: 30010000
			})
		}
	})
}
