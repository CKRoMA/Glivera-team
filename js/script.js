// "use strict" // строгий режим

const links = document.querySelectorAll('.menu-dashboard__inner');


for (let link of links) {
	link.addEventListener('click', () => {
		let activeLink = document.querySelector('.menu-dashboard__inner._active');
		if (activeLink) {
			activeLink.classList.remove('_active');
		}
		link.classList.add('_active');
	})

}

// function openbox(id) {

// 	display = document.getElementById(id).style.display;



// 	if (display == 'none') {

// 		document.getElementById(id).style.display = 'block';

// 	} else {

// 		document.getElementById(id).style.display = 'none';

// 	}

// }


