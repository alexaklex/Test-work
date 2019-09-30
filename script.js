
const variable_menu   = ["Включить", "Отключить"];




let main              = document.getElementsByClassName('block__second_menu');
let list_menu         = document.getElementsByClassName('block__second_listMenu');
let menu_ul           = document.getElementsByClassName('menu_list');
let menu_li           = document.getElementsByClassName('menu_li');
let block             = document.getElementsByClassName('block__second_one');


for(let i=0; i < main.length; i++) 
{
	let menu = document.createElement('div');
	menu.classList.add('block__second_listMenu');
	main[i].appendChild(menu);
	displaNone = list_menu[i].style.display = "none";


	// add ul to div
	let ul_menu = document.createElement('ul');
	ul_menu.classList.add('menu_list');
	list_menu[i].appendChild(ul_menu);

	//add li to div
	let li_menu = document.createElement('li');
	li_menu.classList.add('menu_li');
	menu_ul[i].appendChild(li_menu);

	//add uniq id
	id_u = list_menu[i].id = `listmenu_${i}`;

}



//active deactivate
let activate     =  document.getElementsByClassName('activate');
for(let i=0; i < main.length; i++) {

	let el = document.getElementsByClassName('block__second_one');
	let act = el[i].classList.contains('activate')

	if(act == true) {menu_li[i].innerText = variable_menu[1];}
	else {menu_li[i].innerText = variable_menu[0];}
}



// event click menu
let el = document.getElementsByClassName('block__second_menu');

for (let i = 0; i< el.length; i++) {
	el[i].onclick = function() {
		id_u = list_menu[i].id;
		if (list_menu[i].style.display !== 'none') {
			list_menu[i].style.display = 'none';
		}
		else {
			  list_menu[i].style.display = "block";
		}
      

	}
}

//add effect animation

/*animation-delay: 20s;*/

// let animate = ['animation-delay:'];


// console.log(block.length);
// for (let i=0; i < block.length; i++) {
// 	let add_delay = `${animate[0]} ${i}s;`;
// 	block[i].style = add_delay;

// }




//count
$( function () {
  let
    count = 1,
    block = $( '.block__second_main_count' ),
    interval = setInterval( function () {
      count++;
      
      block.text( count );
      
      if( count === 78 ) {
      	clearInterval( interval );
      }
  	}, 500 );
  
  block.text( count );
} );





//animate download page
$(window).ready(function(){
	for (let i=0; i < block.length; i++) {
		id = block[i].id = `animate_${i}`;
		z = [400, 1000, 1600, 2200];
		setTimeout ("$("+id+").fadeIn();",z[i]);
	}
});















