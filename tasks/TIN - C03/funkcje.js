// ========================== ZADANIE 1 ==========================


// //chcialem zawsze to zrobic a nie bylo okazji:
// function fiboncacci(n) {
// 	if (n < 0) return -1
// 	return fib(n)[0]
// }

// //Given F(k) and F(k+1)
// //we can calculate these:
// //F(2k)=F(k)[2F(k+1)−F(k)].
// //F(2k+1)=F(k+1)2+F(k)2.

// function fib(n) {
// 	if (n == 0)
// 		return [0n, 1n]
// 	//0n to 0 w BigInt czyli staloprzecinkowa
// 	else {
// 		let [first, second] = fib(Math.floor(n / 2))

// 		let twoK = first * (2n * second - first)
// 		let twoKPlusOne = second * second + first * first

// 		return (n % 2 == 0) ? [twoK, twoKPlusOne] : [twoKPlusOne, twoK + twoKPlusOne]
// 	}
// }

// const readline = require('readline')

// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout
// })

// rl.question('what nth number do you want in fibonacci sequence: ', (input) => {
// 	console.log(input,' number is: ', String(fiboncacci(input)))
// 	rl.close()
// })


// //========================== ZADANIE 2 ==========================


// function isPalindrome(str) {
// 	let ret = str.replace(/[^a-zA-Z]/g, '').toLowerCase()
// 	return ret === ret.split('').reverse().join('')
// }

// let palindromes =
// 	['A do siły pył i soda.',
// 		'A krowa, paw, orka?',
// 		'A lew chce bebech cwela?',
// 		'A Noel musiał wapno zawalać? Ala, wazon Pawła i sum Leona.',
// 		'A pękata ta kępa?',
// 		'A to idiota.',
// 		'A to Kamela, ale ma kota.',
// 		'A to kanały? Wiki wyła na kota.',
// 		'A to kanapa pana Kota.',
// 		'A kto kota ma to kotka.',
// 		'A to kanonadę dano na kota.',
// 		'A to kawa kota.',
// 		'A to kawony sama da Ada? Ma synowa kota.',
// 		'A to kilo gazu! Muza goli kota?',
// 		'A to kit! Elf ma pamflet i kota!',
// 		'A to kiwi zdziwi kota.',
// 		'A to klei Popiel kota.',
// 		'A to kurdupel! Ile pudru kota?',
// 		'A tu mamy mamuta.',
// 		'A wart wór kota? To krów trawa!',
// 		'A warta kosy wysoka trawa?',
// 		'Ada baluje – Jula bada.',
// 		'Ada baniak Kaina bada.',
// 		'Ada bez Rubika maki, burze bada.',
// 		'Ada biada i bada.',
// 		'Ada bilon Oli bada.',
// 		'Ada blada nadal bada.',
// 		'Ada blada nici nadal bada.',
// 		'Ada bladą dal bada.',
// 		'Ada blask sal bada.',
// 		'Ada braw gwar bada.',
// 		'Ada butelki, pikle tu bada.',
// 		'Ada bzy zbada.',
// 		'Ada goła im śmiało gada!',
// 		'Ada i szara baba raz siada.',
// 		'Ada i w oplu żaba! – żul powiada.',
// 		'Ada jaja jada.',
// 		'Ada jodu dojada.',
// 		'Ada pod Noe leży. Ryby ryże Leon dopada.',
// 		'Ada, baca bada.',
// 		'Ada, bagaż Aga bada.',
// 		'Ada, błota matoł bada.',
// 		'Ada, boiska Maksio bada?',
// 		'Ada, braci car bada.',
// 		'Ada, brata Tatar bada.',
// 		'Ada, był to kot? Kto kotły bada?',
// 		'Ada, gmina za nim gada.',
// 		'Ada, gwóźdź ów gada.',
// 		'Ada, ino melisa Jana! Jasi lemoniada!',
// 		'Ada, jawor krowa jada.',
// 		'Ada, pan Elefant na Fele napada.',
// 		'Ada, pan mi z zimna pada.',
// 		'Ada, pan napada, panna pada.',
// 		'Ada, pan napada.',
// 		'Ada, pan otyły to napada?',
// 		'Ada, panterka – kret napada.',
// 		'Ada, panna pocałowana, woła: co pan napada.',
// 		'Ada, pluton otul – pada!',
// 		'Ada, podłe wagi Gaweł dopada!',
// 		'Ada, praca – a car pada.',
// 		'Ado, prof. Sofa fosfor poda.',
// 		'Ado, pyta bandzior komu mokro? I z dna baty poda?',
// 		'Ado, tu Amor bobrom auto da?',
// 		'Ado, wielebny syn bele Iwo da.',
// 		'Akta generała dała renegatka.',
// 		'Akta generała ma mała renegatka.',
// 		'Akta ma matka.',
// 		'Akta ma w teczce twa matka.',
// 		'Ala bobo obala.',
// 		'Alu, becz – cebula!',
// 		'Ani worka trawy warta krowina.',
// 		'Ano Renaty pokuta. A tu kopyta Nerona.',
// 		'Atak kata.',
// 		'Ech, chce i co piąty z Zytą. I pociech chce.',
// 		'Ej, Ela ma sporysz! Syrop sama leje.',
// 		'Ej, Ela, popsuty tir! I Tytus popa leje!',
// 		'Ej, to im koguta da Ada? Tu go kmiot je!',
// 		'Ej, zaraza zaraz je.',
// 		'Ej, żyrafa ryż je.',
// 		'Elf układał kufle.',
// 		'Elu, becz – cebule!',
// 		'Elu, moneta Odo! Do Aten omule!',
// 		'I car ma kiwi, kamraci!',
// 		'I co idioci?',
// 		'I kobyłkom mokły boki.',
// 		'I mała dama sama dała mi.',
// 		'Igor łamał rogi.',
// 		'Ikar bada braki.',
// 		'Ikar jadaj raki!',
// 		'Ikar łapał raki.',
// 		'Ile Roman ładny dyndał na moreli?',
// 		'Ile Romanowi dała za ład Iwona moreli?',
// 		'Ilu beczy z cebuli?',
// 		'Ilu okrywa wyrko Uli?',
// 		'Ino gile Roman na moreli goni.',
// 		'Jego tato idiota, to gej.',
// 		'Jem sód od ósmej.',
// 		'Jutro ksenon eskortuj.',
// 		'Kamil ślimak.',
// 		'Klata za talk!',
// 		'Kobyła ma mały bok.',
// 		'Kobyła ma za mały bok.',
// 		'Kobyły mi myły bok.',
// 		'Kuła lala łuk.',
// 		'Łapał za kran, a kanarka złapał.',
// 		'Mamuta tu mam.',
// 		'Ma tarapaty ta para tam.',
// 		'Marzena pokazała Zakopane z ram.',
// 		'Moc owocom.',
// 		'Może jeż łka jak łże jeżom.',
// 		'Może jeż łysy łże jeżom.',
// 		'Może jeż łże jeżom.',
// 		'Może jutro ta dama da tortu jeżom.',
// 		'Może jutro ta dama sama da tortu jeżom.',
// 		'My to pili po tym.',
// 		'O, i natka tu tak tanio!',
// 		'O, mam karabin i barak mamo!',
// 		'O, ty z Katowic, Iwo? Tak, Zyto.',
// 		'Satyra rota to rarytas.',
// 		'Soli sama silos.',
// 		'Tolo ma samolot.',
// 		'To z Aten wnet azot!',
// 		'Wół utył i ma miły tułów.',
// 		'Zakopane chce na pokaz.',
// 		'Zakopane i nie na pokaz.',
// 		'Zakopane na pokaz.',
// 		'Że też łże jeż? Łże też!'
// 	]

// 	for (const element of palindromes) {
// 		let output = isPalindrome(element)
// 		if(output) console.log('palindrome    ==>    ',element)
// 		else console.log('not a palindrome    ==>    ',element)
// 	}


// //========================== ZADANIE 3 ==========================


// function typeOf(value) {
// 	return typeof value
// }

// console.log(typeOf(true))
// console.log(typeOf(0))
// console.log(typeOf(1))
// console.log(typeOf(22n))
// console.log(typeOf(99.))
// console.log(typeOf(0x22))
// console.log(typeOf('1'))
// console.log(typeOf('A'))
// console.log(typeOf("1"))
// console.log(typeOf("T"))
// console.log(typeOf('\t'))
// console.log(typeOf([]))
// console.log(typeOf({}))


// //========================== ZADANIE 4 ==========================

// function amountToCoins(amount, sizes) {
// 	if(amount<=0) return "Nie da sie tego rozdzielic"
// 	let coins = []
// 	sizes.sort((a, b) => b - a)

// 	for (let size of sizes) {
// 		if(size === 0) continue
// 		let howMany = Math.floor(amount / size)
// 		if (howMany > 0) {
// 			coins.push({ size, howMany })
// 			amount %= size
// 		}
// 	}

// 	return amount > 0 ? "Nie da sie tego rozdzielic" : coins
// }

// console.log("25, [1, 5, 13] => ",amountToCoins(25, [1, 5, 13]))
// console.log("66, [2,3,4,4] => ",amountToCoins(66, [2,3,4,4]))
// console.log("2, [] => ",amountToCoins(2, []))
// console.log("6, [0] => ",amountToCoins(6, [0]))
// console.log("0, [23] => ",amountToCoins(0, [23]))
// console.log("15, [-1,-2,-3,-4,-5,-6] => ",amountToCoins(15, [-1,-2,-3,-4,-5,-6]))
// console.log("-2, [1,2,3,4,5,6] => ",amountToCoins(-2, [1,2,3,4,5,6]))