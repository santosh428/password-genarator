let input = document.getElementById("passinput")
		let numinput = document.getElementById("numinput")

		
		let button = document.getElementById("passbutton")
		let refresh = document.getElementById("refreshbutton")

		refresh.addEventListener('click',()=>{
			input.value = "";
			numinput.value = "";
		})


		button.addEventListener('click',()=>{
			
			
			let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
			let passwordlength = numinput.value


			if(passwordlength === ""){
				alert("plz enter required password length")
			}else{
			let password = "";

			for(let i=0;i<passwordlength;i++){
				let random = Math.floor(Math.random()*char.length)
				password += char.substring(random,random+1)
				
			}
			
			input.value = password
			
			}
			
		})