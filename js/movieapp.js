(function () {
    var addMovie = document.getElementById('addMovie');
    // this is to display form on toggle
    addMovie.addEventListener('click', function () {
        var form = document.getElementById('newMovieForm');
        var descBox = document.getElementById('movieDetails');
        var displayBtn = form.style.display;
        var desBox = descBox.style.display;
         if (displayBtn == 'none')
            form.style.display = 'block';
        else
            form.style.display = 'none';
        
        // toggle display for the info div
            if(desBox == 'block')
            descBox.style.display = 'none';
        else
            descBox.style.display = 'block';
            
       
       
    });
    // created a eventlistener for my ul function to target the li's
    document.getElementById('ul').addEventListener('click', function (ev) {
        var form = document.getElementById('newMovieForm');
        form.style.display = 'none';
        var details = document.getElementById('movieDetails');
        var movieName = document.getElementById('title');
        var movieTime = document.getElementById('time');
        var movieDesc = document.getElementById('movieDesc');

        details.style.display = 'block';
       // this is the details that get placed into the movieDetails div
        movieDesc.innerHTML = ev.target.getAttribute('rel'); // places the description details into div
       
        for(var s = 0; s < movieObj.length; s++) // loop created to target exact li for the title and time
            {
                if(s == ev.target.getAttribute('data-movieIdx'))
                    {
                        movieName.innerHTML = movieObj[s].title;
                        movieTime.innerHTML = movieObj[s].runningTimeHours();
                    }
            }
        
    });
    //  Creating event listener for the submit button
    var form = document.getElementById('newMovieForm');

    form.addEventListener('submit', function (evt) {
        evt.preventDefault();

        var myUl = document.getElementById('ul');
        myUl.innerHTML = ''; // This clears the list


        var title = form.movieTitle.value;
        var runningTimeInMinutes = form.runningTime.value;
        var year = form.year.value;
        var desc = form.description.value;
        var genre = form.genre.value;

        var myMovie = new Movie(title, runningTimeInMinutes, year, genre, desc);
        movieObj.push(myMovie);     // pushing the new movie to the array
       

    
        // Sorting function to alphabatize
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

        form.reset(); // This resets the form inputs
        // This for loop repopulates the list of movies with new inputed movies
        for (var i = 0; i < movieObj.length; i++) {
            var myText = movieObj[i].title + ' | ' + movieObj[i].runningTimeHours() + ' | ' + movieObj[i].year;
            var movElement = e('li', myText, {rel: movieObj[i].preview(), 'data-movieIdx': i}, {color: 'white'})
            document.getElementById('ul').appendChild(movElement);
           
            
        
        };

    });
    // random number function
      function randomNum(num) {
        return Math.ceil(Math.random() * num);
    }

    var checkInBtn = document.getElementById('checkIn');
    var checkOutBtn = document.getElementById('checkOut');
    checkInBtn.addEventListener('click', function () {
        
        if(checkInBtn.valueOf)
            {
                checkInBtn.style.display = 'none';
                checkOutBtn.style.display = 'block';
            }
        var days = randomNum(7);
        var dailyRate = 3
        var inDate = new Date();
        var insert = document.getElementById('info');
        insert.innerHTML ='Returned on ' + inDate.getMonth() + '/' + (inDate.getDate() + days) + '/' + inDate.getFullYear() + '. Thank you your total is: $' + (dailyRate*days);
      
    })
    checkOutBtn.addEventListener('click', function(){
        if(checkOutBtn.valueOf)
            {
                checkInBtn.style.display = 'block';
                checkOutBtn.style.display = 'none';
            }
        var outDate = new Date();
        var insert = document.getElementById('info');
        insert.innerHTML = 'Checked out: ' + outDate.getMonth() + '/' + outDate.getDate() +'/' + outDate.getFullYear();
    })

    window.addMovie = addMovie;
    window.form = form;
}());
