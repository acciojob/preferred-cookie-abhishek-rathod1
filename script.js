function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
//your JS code here. If required.
	window.onload = function () {
		let savedColor = getCookie("color");
		let savedFontSize = getCookie("fontSize");

		if(savedFontSize){
			document.documentElement.style.setProperty('--fontsize', savedFontSize + 'px');
        document.getElementById("fontsize").value = savedFontSize;
		}
		if (savedColor) {
        document.documentElement.style.setProperty('--fontcolor', savedFontColor);
        document.getElementById("fontcolor").value = savedFontColor;
      }	
};

const btn = document.getElementById("submit");

const color = document.getElementById("fontcolor").value;
const fontSize = document.getElementById("fontsize").value;


btn.addEventListener("click", function(e)=>{
	e.preventDefault();
	
	const fontSize = document.getElementById("fontsize").value;
	const color = document.getElementById("fontcolor").value;
	//set cookie
	document.cookie = `fontSize=${fontSize}; path=/`;
	document.cookie = `color=${color}; path=/`;
	
	// console.log(document.cookie);
	document.documentElement.style.setProperty(`--fontsize`,fontSize+'px');
	document.documentElement.style.setProperty(`--fontcolor`,color);

	
})


// console.log("saved color - ",getCookie("color"));


