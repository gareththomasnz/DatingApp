var users = [
    {
        name: 'Lucy',
        gender: 'F',
        hobby: 'pets',
        avatar: 'avatar1.png'
    },
    {
        name: 'Betty',
        gender: 'F',
        hobby: 'pets',
        avatar: 'avatar2.png'
    },
    {
        name: 'Ronald',
        gender: 'M',
        hobby: 'music',
        avatar: 'avatar3.png'
    },
    {
        name: 'Christopher',
        gender: 'M',
        hobby: 'sports',
        avatar: 'avatar4.png'
    },
    {
        name: 'Ximena',
        gender: 'F',
        hobby: 'reading',
        avatar: 'avatar5.png'
    },
    {
        name: 'Paul',
        gender: 'M',
        hobby: 'shopping',
        avatar: 'avatar6.png'
    },
    {
        name: 'Charlie',
        gender: 'M',
        hobby: 'pets',
        avatar: 'avatar7.png'
    },
];

window.addEventListener('load', function() {
	console.log('the page has been loaded!');
});

var resultContainer = document.getElementById("results");

function searchIt() {
	var hobbyField = document.getElementById('hobby');
	var hobbyContent = hobbyField.value;
                console.log('hobbyContent is:' + hobbyContent);
	var genderField = document.getElementById('gender');
	var genderIndex = genderField.selectedIndex;
                console.log('selected index: ' + genderIndex);
	var genderValue = genderField.options[genderIndex].value;
                console.log('Actual value:' + genderValue);
	fillResults(genderValue, hobbyContent);
}

function fillResults(genderIs, hobbyIs){
var resultsHTML = '';
for (var i = 0; i < users.length; i++) {
  if (genderIs == 'A' || genderIs == users[i].gender) {
    if (hobbyIs == '' || hobbyIs == users[i].hobby) {
      resultsHTML += '<div class="person-row">\
        <img src="images/' + users[i].avatar + '" alt="" />\
        <div class="person-info">\
          <div class="">' + users[i].name + '</div>\
          <div class="">' + users[i].hobby + '</div>\
          <button type="button" name="button">Add as friend</button>\
        </div>\
      </div>';

      resultContainer.innerHTML = resultsHTML;
    }
  }  
} 
} 
fillResults('A', '');


var btnSearch = document.getElementById('searchButton');

btnSearch.addEventListener('click', searchIt);