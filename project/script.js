function calcularImc (peso, altura){
	
	var peso = document.getElementById('peso').value;
	var altura = document.getElementById('altura').value;

	peso = parseFloat(peso);
	altura = parseFloat(altura);
	
	var resultado = peso / (altura * altura)
	
	return resultado
};

function classificarImc (peso, altura){
	
	var peso = document.getElementById('peso').value;
	var altura = document.getElementById('altura').value;

	peso = parseFloat(peso);
	altura = parseFloat(altura);
	
	var resultado = peso / (altura * altura)
	var classificacao = ''

	if (resultado < 16 ) {
		classificacao = 'peso baixo muito grave'
	}else if (resultado >= 16 && resultado <= 16.99) {
		classificacao = 'peso baixo grave'
	}else if (resultado >= 17 && resultado <= 18.49) {
		classificacao = 'peso baixo'
	}else if (resultado >= 18.50 && resultado <= 24.99) {
		classificacao = 'peso normal'
	}else if (resultado >= 25 && resultado <= 29.99) {
		classificacao = 'sobrepeso'
	}else if (resultado >= 30 && resultado <= 34.99) {
		classificacao = 'Obesidade grau I'
	}else if (resultado >= 35 && resultado <= 39.99) {
		classificacao = 'Obesidade grau II'
	}else{
		classificacao = 'Obesidade grau III'
	}
	
	return classificacao
};