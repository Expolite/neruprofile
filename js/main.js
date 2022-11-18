
// move firstName and lastName to original place
setTimeout(fname_marginLft, 800); // 0.8 second
function fname_marginLft() {
	fname.style.marginLeft = "0rem";
}

setTimeout(fname_marginRght, 1000); // 1 second
function fname_marginRght() {
	lname.style.marginLeft = "5rem";
}

/* Delay the opacity */
setTimeout(opacity_delay_Fname, 1100); // 1.1 second
function opacity_delay_Fname() {
	fname.style.opacity = "1";
}
setTimeout(opacity_delay_Lname, 1200); // 1.2 second
function opacity_delay_Lname() {
	lname.style.opacity = "1";
}




// sub title
setTimeout(subTitle_opacity, 1700); // 1.7 second
function subTitle_opacity() {
	idTitles.style.opacity = "1"; // opacity set to 1
}

setTimeout(subTitle_top, 1700); // 1.7 second
function subTitle_top() {
	idTitles.style.top = "0"; // bring down
}





// Menu Bar Icon
function toggleFunc(a) {
	a.classList.toggle("MenuIconchange");

	// Items Navbar items
	// Check checkbox 
	document.getElementById("chckbox_toggleMenu").click();
	// If the checkbox is checked, minimize/hide the items with height
	if (chckbox_toggleMenu.checked == false){
		navLinks.style.height = "0";
	} else {
		// navLinks.style.height = "38px";
		navLinks.style.height = "135px";
	}


}