const image1 = document.querySelector('.content__img');
		const button = document.querySelectorAll('.amount-customers__item button');
		// image1.style.background = "red";
		console.log(image1);
		console.log(button);
		window.onload = function () {
			setTimeout(sayHi, 2000)};
		function sayHi() {
			image1.classList.add('rotate');
			// image1.style.transform = "rotate(50deg)";
			// image1.style.transform = "rotate(0deg)";
			// image1.style.transform = "rotate(50deg)";
			// image1.style.transform = "rotate(0deg)";
			// alert('Привет');
		    }
		    
		//     setInterval(sayHi, 3000);		
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
			
			