
// move firstName and lastName to original place
setTimeout(fname_marginLft, 800); // 0.8 second
function fname_marginLft() {
	fname.style.marginLeft = "0rem";
}

setTimeout(fname_marginRght, 1000); // 1 second
function fname_marginRght() {
	lname.style.marginLeft = "5rem";
}





// Menu Bar Icon
function toggleFunc(a) {
	a.classList.toggle("MenuIconchange");
}