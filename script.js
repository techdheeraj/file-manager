const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('btn'));
buttons.map( button => {
	button.addEventListener('click', (e) => {
		display.value += e.target.value;
	});
});

document.getElementById('clear').addEventListener('click', () => {
	display.value = '';
});

document.getElementById('equals').addEventListener('click', () => {
	try {
		display.value = eval(display.value);
	} catch {
		display.value = "Error";
	}
});