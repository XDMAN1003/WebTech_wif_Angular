//Setting event database
var event = [
  {name: "Blowout Coasters", datetime: new Date(2021,04-1,28,00,00,00), venue: "Fiorentino",type: "friend"},
  {name: "Viva Spring", datetime: new Date(2021,05-1,23,10,00,00), venue: "Arusha",type: "homework"},
  {name: "Pearl Wonderland", datetime: new Date(2021,05-1,12,00,00,00), venue: "Snow Hill",type: "family"},
  {name: "Showtime Gold Lucky", datetime: new Date(2021,05-1,30,00,00,00), venue: "Venialbo",type: "others"},
  {name: "Sweet Get Shows", datetime: new Date(2021,05-1,06,00,00,00), venue: "Mocorito",type: "family"},
  {name: "Associated Celebration", datetime: new Date(2021,05-1,08,00,00,00), venue: "Wolanow",type: "friend"},
  {name: "Andromeda Gals", datetime: new Date(2021,05-1,10,00,00,00), venue: "Cabanas",type: "friend"},
  {name: "Trip to Arano", datetime: new Date(2021,05-1,20,00,00,00), venue: "Arano",type: "family"},
  {name: "Orion Meetings", datetime: new Date(2021,06-1,05,00,00,00), venue: "Lumby",type: "others"},
  {name: "PlanAhead Up Fiesta", datetime: new Date(2021,05-1,12,00,00,00), venue: "Gravdal",type: "others"},
  {name: "Diamond Red Day", datetime: new Date(2021,05-1,15,00,00,00), venue: "Google Meet",type: "homework"},
];


function refresh(){
  var length = [0,0,0,0];
  for(var i=0;i<4;i++){
    document.getElementsByClassName('accordion-body')[i].innerHTML = "";
  }
  event.forEach((item, i) => {
    var today = new Date();
    var one_day = 1000 * 60 * 60 * 24;
    var event_card = document.createElement("a");
    event_card.href = "#";
    event_card.className = "list-group-item list-group-item-action";
    var inner_event_card = document.createElement("div");
    inner_event_card.className = "d-flex w-100 justify-content-between";
    event_card.appendChild(inner_event_card);
    var h5_title = document.createElement("h5");
    h5_title.className = "mb-1 event_list_name";
    h5_title.innerHTML = item.name;
    inner_event_card.appendChild(h5_title);
    var countdown_details = document.createElement("small");
    countdown_details.className = "mb-1 small";
    var countdown = (item.datetime.getTime() - today.getTime()) / one_day;
    countdown_details.innerHTML = countdown.toFixed(0) + " days to go";
    inner_event_card.appendChild(countdown_details);
    var p_event_details = document.createElement("p");
    p_event_details.className = "mb-1 event_details";
    p_event_details.innerHTML = item.datetime.toDateString() + "   |  " + item.datetime.toLocaleTimeString() + "   |  " + item.venue;
    event_card.appendChild(p_event_details);
    if(countdown>=0&& countdown.toFixed(0)<=3){
      alert(item.name+" is around the corner which will be held on "+item.datetime.toDateString() + "   |  " + item.datetime.toLocaleTimeString()+" at "+item.venue);
    }
    if(item.type == "homework"){
      document.getElementsByClassName('accordion-body')[0].appendChild(event_card);
      length[0]+=1;
      document.getElementsByClassName('badge bg-primary rounded-pill')[0].innerHTML = length[0];
    }
    else if (item.type == "family") {
      document.getElementsByClassName('accordion-body')[1].appendChild(event_card);
      length[1]+=1;
      document.getElementsByClassName('badge bg-primary rounded-pill')[1].innerHTML = length[1];
    }
    else if (item.type == "friend") {
      document.getElementsByClassName('accordion-body')[2].appendChild(event_card);
      length[2]+=1;
      document.getElementsByClassName('badge bg-primary rounded-pill')[2].innerHTML = length[2];
    }
    else if (item.type == "others") {
      document.getElementsByClassName('accordion-body')[3].appendChild(event_card);
      length[3]+=1;
      document.getElementsByClassName('badge bg-primary rounded-pill')[3].innerHTML = length[3];
    }
  });
}
function announce(){
  var check =true;
  event.forEach((item, i) => {
    var today = new Date();
    var one_day = 1000 * 60 * 60 * 24;
    var countdown = (item.datetime.getTime() - today.getTime()) / one_day;
    if(countdown>=0&& countdown.toFixed(0)<=3){
      alert(item.name+" is around the corner which will be held on "+item.datetime.toDateString() + "   |  " + item.datetime.toLocaleTimeString()+" at "+item.venue);
      check=false;
    }
  })
  if(check){
    alert("Currently, no event is around the corner");
  }
}
  

window.onload = function(){
  refresh();
  //Javascript button -> Add event
  var addEventJs = document.getElementsByClassName('submit')[0];
  addEventJs.addEventListener("click",function(){
    var e_name = document.getElementsByName('event_name')[0].value;
    var e_type = document.getElementsByName('event_type')[0].value;
    var e_venue = document.getElementsByName('event_venue')[0].value;
    var e_date = document.getElementsByName('event_date')[0].value;
    var e_time = document.getElementsByName('event_time')[0].value;
    var dateFormat = e_date.split("-");
    var timeFormat = e_time.split(":");
    var newDateTime = new Date(dateFormat[0],dateFormat[1]-1,dateFormat[2],timeFormat[0],timeFormat[1]);
    event.push({name: e_name, datetime: newDateTime, venue: e_venue, type: e_type});
    refresh();
  });
}

//Jquery
$(document).ready(function(){
  $("#JQuery_button").click(function(){
    var e_name = $("input[name=event_name]").val();
    var e_type = $("#inputGroupSelect01").val();
    var e_venue = $("input[name=event_venue]").val();
    var e_date= $("input[name=event_date]").val();
    var e_time = $("input[name=event_time]").val();
    var dateFormat = e_date.split("-");
    var timeFormat = e_time.split(":");
    var newDateTime = new Date(dateFormat[0],dateFormat[1]-1,dateFormat[2],timeFormat[0],timeFormat[1]);
    event.push({name: e_name, datetime: newDateTime, venue: e_venue, type: e_type});
    console.log(event[11]);
    refresh();
  });
});
