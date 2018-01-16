var start_btn = document.getElementById("check_btn");
//var text = document.getElementById("text");
var row_section = document.getElementById("rows");
var rowcount = 1;
var circles = [];
var circles_check = [];
var check_array = [];
var checked = 0;

for(var row = 1; row <= 12; row++){
    var x = document.createElement("SECTION");
    x.setAttribute("id", "row_" + row);
    x.setAttribute("class", "row");
    row_section.appendChild(x);

    for(var circle = 0; circle < 4; circle++){
    	var answer_circle = document.createElement("DIV");
    	answer_circle.setAttribute("id", "circle_" + circle + "_" + row);
    	answer_circle.setAttribute("class", "row circles");
    	answer_circle.setAttribute("onclick", "change_color(" + circle + ")")
    	document.getElementById("row_" + row).appendChild(answer_circle);
    }

   for(var check_circles = 0; check_circles < 4; check_circles++){
    	var check_circle = document.createElement("DIV");
    	check_circle.setAttribute("id","circle_" + check_circles + "_check_" + row);
    	check_circle.setAttribute("class","check_circles");
    	document.getElementById("row_" + row).appendChild(check_circle);
    }
}
/*============ circle arrays ==========*/
update();
var circles_color = [];

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
function f_check(circles_color, color_a){
	if(circles_color.length < color_a.length){
		return false;
	}
	else{
		return true;
	}

}

function check(){
	f_check(circles_color, color_a);
	var toelaten = f_check(circles_color,color_a);

	if(toelaten && rowcount <= 12){
		for(var r = 0; r < 4; r++){
			if(circles_color[r] == color_a[r]){
				console.log(circles_color[r] + "Color is correct, on the right spot");
				check_array[r] = 2;
				correct_right++;
			}
			else if(circles_color[r] != color_a[r]){
				for(var i = r; i < 4; i++){
					if(circles_color[r] == color_a[i]){
						console.log(circles_color[r] + "Color is correct, not on the right spot");
						check_array[r] = 1;
						break;
					}
					else{
						check_array[r] = 0;
					}
				}
			}
			
		}
		console.log("start for");
		for(var f = 0; f < 4; f++){
			console.log(f);
			console.log("werkt")
			if(check_array[f] == 2){
				circles_check[checked].style.backgroundColor = "black";
				console.log(f);
				console.log("goed");
				checked++;
				correct_right				
			}
			if(check_array[f] == 1){
				circles_check[checked].style.backgroundColor = "white";
				console.log(f);
				console.log("fout");
				checked++;
				
			}
		}
		console.log("end for");
		if(correct_right == 4){
			alert("YOU WIN");
		} 
		rowcount++;
		update();
	}
	else{
		if(rowcount>12){
			alert("You lose");
		}
		else{
			alert("Vul alle plaatsen in!!!!")
		}
	}
}

function update(){
	circles = [];
	check_array = [];
	checked = 0;
	correct_right = 0;
	for(var num = 0; num < 4; num++){
		circles[num] = document.getElementById("circle_" + num + "_" + rowcount);
		circles_check[num] = document.getElementById("circle_" + num +"_check_" + rowcount)
	}
}

function select_color(n){
	selected_color = colors[n];
}

function change_color(i){
	circles[i].style.backgroundColor = selected_color;
	circles_color[i] = selected_color;
}