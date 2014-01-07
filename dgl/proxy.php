<?php

header("Access-Control-Allow-Origin: *");

function addToURL( $key, $value, $url) {
    $query = parse_url($url, PHP_URL_QUERY);

	// Returns a string if the URL has parameters or NULL if not
	if( $query ) {
		$url .= '&'.$key.'=' .$value ;
	}
	else {
		$url .= '?'.$key.'=' .$value ;
	}
	return $url;
}


$url = $_GET['url'];
if(isset($_GET['per_page'])){
	$url = addToURL('per_page',$_GET['per_page'],$url);
}
if(isset($_GET['page'])){
	$url = addToURL('page',$_GET['page'],$url);
}
$content=file_get_contents($url);
echo $content;

?>