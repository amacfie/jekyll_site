// create the "View source on Github link by examining the URI
var parsed URI = parseUri(window.location.href);

var host = parsedURI.host;
var dir = parsedURI.directory;

var githubUsername = host.split(".")[0];
var githubReponame = dir.split("/")[1];

var fileName = $( "#viewSource" ).attr("href");

var newLink = "https://github.com/" + githubUsername + "/" + githubReponame +
    "/blob/gh-pages/" + fileName;

$( document ).ready( (function() {
    $( "#viewSource" ).attr("href", newLink);
})() );
