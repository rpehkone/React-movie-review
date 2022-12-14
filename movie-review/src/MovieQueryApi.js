export class MovieQueryApi {
	constructor(apiurl) {
		this.apiurl = apiurl;
	}
	makeUrlString() {
		let str = "";
		for (var i = 0; i < arguments.length; i++) {
			str = str + "/" + String(arguments[i]);
		}
		// console.log(str);
		return str;
	}
	handler(msg) {
		console.log(msg);
	};
				//[]	[]		enum	bool		bool...
	query(decade, year, genres, themes, sort, view_movies, view_documentaries, view_shorts, view_shows, view_unreleased) {
		let urlstr = ""
		if (decade)
			urlstr = this.makeUrlString("decade", decade, genres, themes, sort, view_movies, view_documentaries, view_shorts, view_shows, view_unreleased);
		else
			urlstr = this.makeUrlString("year", year, genres, themes, sort, view_movies, view_documentaries, view_shorts, view_shows, view_unreleased);
		let fetchurl = new URL(urlstr, this.apiurl);

		fetch(fetchurl)
			.then(res => res.json())
			.then((response) => {
				this.handler(response["result"]);
			},
			(err) => {
				this.handler(err);
				console.log("Query error: " + err);
			}
			)
	}
}
