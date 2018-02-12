/* 
Prosoft Calendar Challenge
author: Jeanie Herold
date: 2/11/2018
Challenge:
Create a calendar from user input according to the guidelines provided in document.
I wont finish this in 2.5 hours but I want to create the calendar - just to do it. 
*/
var Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//Create a calendar object when submit is clicked
$('.btn-submit').click(function() {
	
    var make = new Calendar('test', 10, 'US');
    //display calendar on webpage
    $('#results').html(make.showCalendar());

    //get input values
    var date = $('#startdate').val();
    var monthDayYear = date.split('/');
    var month = parseInt(monthDayYear[0]);
    console.log(month);

    $('#month-name').append(Months[month - 1]);
    
    var daysToDisplay = $('#numberdays').val();
    console.log(daysToDisplay);

    var country = $('#countrycode').val();
    console.log(country);

	return false;
});

//Calendar object
var Calendar = function(startdate, numdays, countrycode) {
	this.startdate = startdate;
	this.numdays = numdays;
	this.countrycode = countrycode;
}

Calendar.prototype.showCalendar = function() {
	console.log('show calendar');
	var calendarHTML = '';
	calendarHTML = `
					<table class="calTemplate">
    				<thead>
    					<th class="day-char">S</th>
    					<th class="day-char">M</th>
    					<th class="day-char">T</th>
    					<th class="day-char">W</th>
    					<th class="day-char">T</th>
    					<th class="day-char">F</th>
    					<th class="day-char">S</th>
    				</thead>
            <tr class="month">
                <td id="month-name" colspan="7"></td>
            </tr>
    				<tr>
    					<td class="day-cell"></td>
    					<td class="day-cell"></td>
    					<td class="day-cell"></td>
    					<td class="day-cell"></td>
    					<td class="day-cell"></td>
    					<td class="day-cell"></td>
    					<td class="day-cell"></td>
    				</tr>
    				<tr>
    					<td class="day-cell"></td>
    					<td class="day-cell"></td>
    					<td class="day-cell"></td>
    					<td class="day-cell"></td>
    					<td class="day-cell"></td>
    					<td class="day-cell"></td>
    					<td class="day-cell"></td>
    				</tr>
    				<tr>
    					<td class="day-cell"></td>
    					<td class="day-cell"></td>
    					<td class="day-cell"></td>
    					<td class="day-cell"></td>
    					<td class="day-cell"></td>
    					<td class="day-cell"></td>
    					<td class="day-cell"></td>
    				</tr>
    				<tr>
    					<td class="day-cell"></td>
    					<td class="day-cell"></td>
    					<td class="day-cell"></td>
    					<td class="day-cell"></td>
    					<td class="day-cell"></td>
    					<td class="day-cell"></td>
    					<td class="day-cell"></td>
    				</tr>
    			</table>
	`;

	return calendarHTML;

};
