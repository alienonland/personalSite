requirejs.config({
	baseUrl:"/lib",
	paths: {
		"templates" : "../templates",
		"scripts" : "../scripts",
		"jquery" : "https://code.jquery.com/jquery-2.1.3.min",
		"bootstrap" : "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min"
	}
});

requirejs(["scripts/main"]);