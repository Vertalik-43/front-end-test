const image1 = document.querySelector('.content__img');
		const button = document.querySelectorAll('.amount-customers__item button');
		console.log(image1);
		console.log(button);
	window.onload = function () {
			setTimeout(sayHi, 2000)};
		function sayHi() {
			image1.classList.add('rotate');			
		    }				
		for (var i = 0; i < button.length; i++) {
			button[i].onclick = changeButton;		
	}
		function changeButton () {			
			console.dir(this);
			if(this.classList.contains("active-button")){
				console.log('true');
				this.classList.remove('active-button');
			      this.classList.add('inactive');
				this.innerText="inactive";
			}
				else{
					console.log('false');
					this.classList.remove('inactive');
			      	this.classList.add('active-button');
					this.innerText="active";
				}
			}
			
			