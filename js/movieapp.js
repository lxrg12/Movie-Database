(function(){
    var addMovie = document.getElementById('addMovie');
    // this is to display form on toggle
    addMovie.addEventListener('click', function(){
    var form = document.getElementById('newMovieForm');
    var displayBtn = form.style.display;
    // toggle for the form to display
    if(displayBtn == 'none')
            form.style.display = 'block';
    else
        form.style.display = 'none';
});
    
var form = document.getElementById('newMovieForm');

    form.addEventListener('submit', function(evt){
    evt.preventDefault();
    var title = form.movieTitle.value;
    var runningTimeInMinutes = form.runningTime.value;
    var year = form.year.value;
    var desc = form.description.value;
    var genre = form.genre.value;
    
    var myMovie = new Movie(title, runningTimeInMinutes, year, genre,desc);
        movieObj.push(myMovie);
    var myText = myMovie.title + ' | ' + myMovie.runningTimeHours() + ' | ' + myMovie.year;
    var myElement = e('li', myText, {rel: myMovie.preview()}, {color: 'white'})
    console.log(movieObj);
    
   /* myElement.addEventListener('click', function(){
        alert(myMovie.preview());
    });
    */
   document.getElementById('ul').appendChild(myElement);
 document.getElementById('ul').addEventListener('click', function(ev){
    var form = document.getElementById('newMovieForm');
        form.style.display = 'none';
        alert(ev.target.getAttribute('rel'));
    });
   
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
   
});
    // random number function
    function randomNum(num)
        {
            return Math.ceil(Math.random()* num);
        }

window.addMovie = addMovie;
    window.form = form;
}());