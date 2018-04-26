const app = "I don't do much."

function bumpCounter(){
	let counter = 0;
	return{
		getBumps:() => counter,

		addBump: () => {++counter}
	};
};

function createAnimal(){
	function sharkCreator(deadlyDevice){
		return{
			'animalType': 'Shark',
			'deadlyDevice': deadlyDevice
		};
	};
	return sharkCreator;
}

let sharkCreator = createAnimal();
let sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');
let sharkWithFrickinCannon = sharkCreator('Cannon');