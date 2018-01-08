var start_btn = document.getElementById("check_btn");
var text = document.getElementById("text");

/*============ circle arrays ==========*/
var circles = [document.getElementById("circle_1"), document.getElementById("circle_2"), document.getElementById("circle_3"), document.getElementById("circle_4")];
var circles_check_c = [document.getElementById("circle_0_check_c"), document.getElementById("circle_1_check_c"), document.getElementById("circle_2_check_c"), document.getElementById("circle_3_check_c")];
var circles_check_w = [document.getElementById("circle_0_check_w"), document.getElementById("circle_1_check_w"), document.getElementById("circle_2_check_w"), document.getElementById("circle_3_check_w")];
var circles_color = ["","","",""];

/*============== Colors ===============*/
var colors = ["red","green","purple","blue","yellow","grey"];
var color0 = Math.floor(Math.random()*6);
var color1 = Math.floor(Math.random()*6);
var color2 = Math.floor(Math.random()*6);
var color3 = Math.floor(Math.random()*6);
var color0_n = colors[color0];
var color1_n = colors[color1];
var color2_n = colors[color2];
var color3_n = colors[color3];
var color_a = [color0_n, color1_n, color2_n, color3_n];
var selected_color = "grey";
var correct_right = 0;
var correct_wrong = 0;

console.log(color_a);

/*=============== Mastermind ================*/
function check(){
	for(var r = 0; r < 4; r++){
		if(circles_color[r] == color_a[r]){
			console.log(circles_color[r] + "Color is correct, on the right spot");
			correct_right++;
		}
		else if(circles_color[r] != color_a[r]){
			for(var i = 0; i < 4; i++){
				if(circles_color[r] == color_a[i]){
					console.log(circles_color[r] + "Color is correct, not on the right spot");
					correct_wrong++;
					break;
				}
			}
		}
		console.log("done with round: " + r);
	}	

	text.innerHTML = "Goed " + correct_right + "_______ Fout " + correct_wrong; 
	if(correct_right == 4){
		text.innerHTML = "YOU WIN";
	}

	for(var c_check = correct_right; c_check > 0; c_check--){
		console.log("Goed : " + c_check);
		circles_check_c[c_check-1].style.backgroundColor = "black";
		correct_right--;
	}
	
	for(var w_check = correct_wrong; w_check > 0; w_check--){
		console.log("Goed foute plaats : " + w_check);
		circles_check_w[w_check-1].style.backgroundColor = "white";
		correct_wrong--;
	}

}

function select_color(n){
	selected_color = colors[n];
}

function change_color(i){
	circles[i].style.backgroundColor = selected_color;
	circles_color[i] = selected_color;
}