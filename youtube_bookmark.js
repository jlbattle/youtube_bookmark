//youtube_bookmark.js
//A Javascript bookmarking app for youtube


///---------- Planning Section----------------------

//Youtube API key:  AIzaSyB_W0TwsWSpJDba1Tm9eXOk20VSXGIACWw


// 1.
// user can enter in a search query and a bookmark name
// -app will return both a list of youtube videos that match that search
// -search term should be linked to youtube search & hyperlinked in bkmrk list 
// (XXXRemove from ScopeXXX)---list will be capped at a certain number...say top 10
// (DONE!!) -app will add that bookmark to the running list of bookmarks

// 2.
// (DONE!!) user can delete any bookmark from the list

// 3.
// (DONE!!) user can delete all of the bookmarks

// 4.
// user can clear the list of videos

// 5.
// (XXXRemove from ScopeXXX)user can edit the name of a bookmark in the running list of bookmarks

// 6.
// (DONE!!) fix up the styles


///----------End Planning Section----------------------



//global variables
var all_bookmarks;		//array to hold bookmarks the user creates

//save bookmark to local storage and display bookmarks in list on html page
function saveBookmark()
{

	var query  = document.getElementById("queryInput");
	var bookmark  = document.getElementById("bookmarkQuery");

	localStorage.setItem(bookmark.value, query.value);

	displayBookmarks();
}//end function saveBookmark

function displayBookmarks()
{
	all_bookmarks = [];	//initialize all_bookmarks variable to an array
	length = localStorage.length;

	for(var i = 0; i < length; ++i)
	{
		all_bookmarks[i] =  localStorage.key(i);
	}//end for

	var table = "<div class='panel panel-info'>" +
								"<div class='panel-heading'>" +
    							"<h3 class='panel-title'>Saved Bookmarks</h3>" +
    						"</div>" +

								"<div class='panel-body'>"	+
									"<button id='clearButton'" + 
    								"class='btn btn-danger pull-right'" +
    							 	"type='submit'>Clear All Bookmarks</button>" +

									"<table class='table'>";
  

	for(bookmark in all_bookmarks)
	{
		table += "<tr>" +
							"<th>" + all_bookmarks[bookmark] + "</th>" +
							"<td><input type='button' value='Delete'" +
							"id='" + all_bookmarks[bookmark] + "'" +
							"onclick='deleteBookmark(id)' class='btn btn-danger pull-right'></td>" +
						"</tr>";
	} //end for

	table += "</table></div></div>";

	document.getElementById("bookmarks").innerHTML = table;

	document.getElementById("clearButton").addEventListener(
		"click", clearBookmarks,false);
}//end function displayBookmarks

function deleteBookmark(key)
{
	localStorage.removeItem(key);

	//show updated list w/out bookmark you just deleted
	displayBookmarks();
}//end function deleteBookmark

function clearBookmarks()
{
	localStorage.clear();

	displayBookmarks();
}//end function clearBookmarks

//register event listeners
function start()
{

	document.getElementById("saveButton").addEventListener(
		"click",saveBookmark,false);

	displayBookmarks();
}//end function start

window.addEventListener("load", start, false);