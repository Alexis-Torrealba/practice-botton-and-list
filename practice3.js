const button = document.getElementById('button');
const card = document.getElementById('card');
const create = document.getElementById('create');
const alerta_two = document.getElementById('alerta_two');
const alerta_three = document.getElementById('alerta_three');
const alerta_four = document.getElementById('alerta_four');
const card_1 = document.getElementById('card_1');
const create_two = document.getElementById('create_two');
const create_three = document.getElementById('create_three');
const card_2 = document.getElementById('card_2');
const card_3 = document.getElementById('card_3');
const create_four = document.getElementById('create_four');

const showAlert = (message) => {
	alert(message);
};

//crear una funticion, que sea capaz de crear otro button con los mismas clases de los botones existente y finalmente agregarlo a tu card

const active = () => {
	const boton = document.createElement('button');
	boton.innerText = 'Order Tasks';
	boton.className = 'danger';
	boton.addEventListener('click', () => {
		eliminar(boton);
	});
	card.appendChild(boton);
};

const eliminar = (boton) => {
	card.removeChild(boton);
};

const dele = (buttomOne) => {
	card_1.removeChild(buttomOne);
};

const delet = (buttonThree) => {
	card_2.removeChild(buttonThree);
};

const deleted = (buttonFour) => {
	card_3.removeChild(buttonFour);
};
const buttonTwo = () => {
	const buttomOne = document.createElement('button');
	buttomOne.innerText = 'Pending';
	buttomOne.className = 'bluee';
	buttomOne.addEventListener('click', () => {
		dele(buttomOne);
	});
	card_1.appendChild(buttomOne);
};

const buttonThree = () => {
	const buttonThree = document.createElement('button');
	buttonThree.innerText = 'Completed';
	buttonThree.className = 'orangee';
	buttonThree.addEventListener('click', () => {
		delet(buttonThree);
	});
	card_2.appendChild(buttonThree);
};

const buttonFour = () => {
	const buttonFour = document.createElement('button');
	buttonFour.innerText = 'Testing';
	buttonFour.className = 'browm';
	buttonFour.addEventListener('click', () => {
		deleted(buttonFour);
	});
	card_3.appendChild(buttonFour);
};
button.addEventListener('click', () => {
	showAlert('Tareas Nuevas');
});
alerta_two.addEventListener('click', () => {
	showAlert('Tareas por hacer!');
});

alerta_three.addEventListener('click', () => {
	showAlert('Tareas culminadas');
});
alerta_four.addEventListener('click', () => {
	showAlert('testing!');
});
// create_two.addEventListener('click', buttonTwo);
create_four.addEventListener('click', buttonFour);
create_three.addEventListener('click', buttonThree);
create_two.addEventListener('click', buttonTwo);
create.addEventListener('click', active);

//crear una clase para llenar el boton con los estilos, asignarlo con ClassName, y remover clase anterior, y al texto cambiar a text Red

//tener una variable inicializada en 0 y con cada click, le sume 1 a esa variable
