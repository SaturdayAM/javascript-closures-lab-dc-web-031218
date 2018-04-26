const app = "I don't do much."

function bumpCounter(){
	let counter = 0;
	return{
		getBumps:() => counter,

		addBump: () => {++counter}
	};
};

function createAnimal(animalType){
	return (deadlyDevice)=>{
		return{
			'animalType':animalType,
			'deadlyDevice':deadlyDevice
		};
	};
}

let sharkCreator = createAnimal('Shark');
let sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');
let sharkWithFrickinCannon = sharkCreator('Cannon');