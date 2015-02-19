//youtube_bookmark.js
//A Javascript bookmarking app for youtube


//Youtube API key:  AIzaSyB_W0TwsWSpJDba1Tm9eXOk20VSXGIACWw

//global variables
var tags;		//array to hold tags the user creates

function displayBookmarks()
{
	if(!sessionStorage.getItem("herePreviously")) 
	{
		sessionStorage.setItem("herePreviously", "true");
		document.getElementById("welcomeMessage").innerHTML =
			"Welcome to the Youtube Bookmark App";
	} //end if

	tags = [];
	for(var i = 0; i < localStorage.length; ++i)
	{
		tags[i] =  localStorage.key(i);
	}//end for

	var table = "<table>" + 
								"<tr class='head'>" +
								"<th>Bookmark</th>" +
								"<th>Delete</th>" +
								"</tr>";

	for(bookmark in tags)
	{
		table += "<tr>" +
							"<th>" + tags[bookmark] + "</th>" +
							"<td><input type='button' value='Delete'" +
							"id='" + tags[bookmark] + "'" +
							"onclick='deleteBookmark(id)'></td>" +
						"</tr>";
	} //end for

	table += "</table>";

	document.getElementById("searches").innerHTML = table;
}//end function displayBookmarks

function saveSearch()
{
	var query = document.getElementById("queryInput");
	var tag = document.getElementById("tagQuery")
	localStorage.setItem(tagQuery.value, queryInput.value);
	search(query);

	//clear out variables
	query.value = "";
	tag.value = "";

	//reload the list of bookmarks
	displayBookmarks();

}//end function saveSearch

function clearSearches()
{
	localStorage.clear();

	//show cleared UI
	displayBookmarks();
}//end function clearSearches



//delete one bookmark from the list
function deleteBookmark(bookmark)
{
	//remove the associated record in local storage
	localStorage.removeItem(bookmark);

	//display the updated list of bookmarks
	displayBookmarks();
}//end function deleteBookmark


//register event handlers for the save and clear buttons; also display
//any saved bookmarks
function start()
{
	if(typeof(localStorage) !== "undefined") 
	{
    document.getElementById("saveButton").addEventListener("click",
		saveSearch,false);
		document.getElementById("clearButton").addEventListener("click",
		clearSearches,false);

		displayBookmarks();
	}//end if 
	else 
	{
    alert("Sorry, this browser does not support local storage, so this app will not work");
	}	
}//end function start


//------------------Youtube API-----------------------

// Helper function to display JavaScript value on HTML page.
function showResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('bookmark-search-results').innerHTML += responseString;
}

function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}


function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyB_W0TwsWSpJDba1Tm9eXOk20VSXGIACWw');

    // search();
}

function search(query) {
    // Use the JavaScript client library to create a search.list() API call.
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        'q': query
    });
    
    // Send the request to the API server,
    // and invoke onSearchRepsonse() with the response.
    request.execute(onSearchResponse);
}

function onSearchResponse(response) {
    showResponse(response);
}

window.addEventListener("load", start, false);