var botaoUm = document.getElementById("botao1"),
		botaoDois = document.getElementById("botao2");

botaoUm.addEventListener('click', function(){
	var ele = document.querySelectorAll(".toggle");

	for(var i = 0; i < ele.length; i++) {
		var el = ele[i];

		if (el.classList) {
			if(el.classList.toggle('show')){
				botaoUm.innerHTML = 'Fechar';
			} else {
				botaoUm.innerHTML = 'Saiba mais...';
			}
  		el.classList.toggle('hide');

		} else {
  		var classes = el.className.split(' ');
  		var existingIndex = classes.indexOf('show');

  		if (existingIndex >= 0)
    		classes.splice(existingIndex, 1);
  		else
    		classes.push('show');

  		el.className = classes.join(' ');
		}		
	}
}); 		

botaoDois.addEventListener('click', function(){
	var el = document.querySelector(".toggle2");

		if (el.classList) {
			if(el.classList.toggle('show')){
				botaoDois.innerHTML = 'Fechar';
			} else {
				botaoDois.innerHTML = '+ Conhecimento';
			}
  		el.classList.toggle('hide');

		} else {
  		var classes = el.className.split(' ');
  		var existingIndex = classes.indexOf('show');

  		if (existingIndex >= 0)
    		classes.splice(existingIndex, 1);
  		else
    		classes.push('show');

  		el.className = classes.join(' ');
		}		
}); 		
