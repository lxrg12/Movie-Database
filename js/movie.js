// default Movie list
(function(){
    var movie = [['ip man',106, 2008, 'action','During the Japanese invasion of 1937, when a wealthy martial artist is forced to leave his home and work to support his family, he reluctantly agrees to train others in the art of Wing Chun for self-defense.'],['ip man 2',108,2010,'action',"Centering on Ip Man's migration to Hong Kong in 1949 as he attempts to propagate his discipline of Wing Chun martial arts."],['ip man 3',105,2015,'action',"When a band of brutal gangsters led by a crooked property developer make a play to take over the city, Master Ip is forced to take a stand."],['fast and the furious',106,2001,'action',"Los Angeles police officer Brian O'Connor must decide where his loyalties really lie when he becomes enamored with the street racing world he has been sent undercover to destroy."],['the legend of drunken master',102,1994,'action',"A young martial artist is caught between respecting his pacifist father's wishes or stopping a group of disrespectful foreigners from stealing precious artifacts."],['iron monkey',90,1993,'action',"A martial artist/doctor steals from the corrupt authorities as a masked thief to give to the poor while another martial artist/doctor is forced to hunt him down. But a major threat unites them as a powerful and traitorous shaolin monk takes over the authorities."],['the matrix',136,1999,'action','A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.'],['fearless',105,2006,'action',"A biography of Chinese Martial Arts Master Huo Yuanjia, who is the founder and spiritual guru of the Jin Wu Sports Federation."],['unleashed',103,2005,'action','A man enslaved by the mob since childhood and raised into behaving like a human attack dog escapes his captors and attempts to start a new life.'],['ong bak',108,2003,'action',"When the head of a statue sacred to a village is stolen, a young martial artist goes to the big city and finds himself taking on the underworld to retrieve it."]];


// created movieObj to push array into array
var movieObj = [];
for(var j = 0; j < movie.length; j++)
    {
        var movieList = new Movie(movie[j][0],movie[j][1],movie[j][2],movie[j][3],movie[j][4]);
        movieObj.push(movieList);
    } 
    // A sorting function to alphabatize
    movieObj.sort(function (a, b) {
    var titleA = a.title.toLowerCase();
    var titleB = b.title.toLowerCase();

    if (titleA < titleB) {
        return -1;
    } else if (titleA > titleB) {
        return 1;
    }

    return 0;
});
    // a loop that creates the default list
    for(var i = 0; i < movieObj.length; i++)
    {
        var myText = movieObj[i].title + ' | ' + movieObj[i].runningTimeInMinutes + ' | ' + movieObj[i].year;
        var movElement = e('li', myText, {rel: movieObj[i].preview}, {color: 'white'})
        document.getElementById('ul').appendChild(movElement);
                     };
    // Movie constructor
    function Movie(title, runningTimeInMinutes, year, genre, desc)
    {
        this.title = title;
        this.runningTimeInMinutes = runningTimeInMinutes;
        this.year = year;
        this.genre = genre;
        this.desc = desc;
    }
Movie.prototype ={
    runningTimeHours: function(){
        var hours = Math.floor(this.runningTimeInMinutes/60);
        var minutes = this.runningTimeInMinutes % 60;
        if(minutes < 10)
            minutes = '0' + minutes;
        return hours + ':' + minutes;
    },

    preview : function(){

    return this.desc.slice(0, 50) + '...';
}
}

    window.Movie = Movie;
    window.movieObj = movieObj;
}()); 