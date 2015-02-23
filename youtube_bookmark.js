//youtube_bookmark.js
//A Javascript bookmarking app for youtube


///---------- Planning Section----------------------

//Youtube API key:  AIzaSyB_W0TwsWSpJDba1Tm9eXOk20VSXGIACWw


// 1.
// user can enter in a search query and a bookmark name
// -app will return both a list of youtube videos that match that search 
// ---list will be capped at a certain number...say top 10
// -app will add that bookmark to the running list of bookmarks

// 2.
// user can delete any bookmark from the list

// 3.
// user can delete all of the bookmarks

// 4.
// user can clear the list of videos

// 5.
// user can edit the name of a bookmark in the running list of bookmarks


///----------End Planning Section----------------------



//global variables
var tags;		//array to hold tags the user creates


//register event listeners
function start()
{
	document.getElementById("saveButton").addEventListener(
		"click",saveBookmark,false);

	document.getElementById("clearButton").addEventListener(
		"click", clearBookmarks,false);
}//end function start

window.addEventListener("load", start, false);