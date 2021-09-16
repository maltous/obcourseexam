function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6EDlDyPHrxa":
        Script1();
        break;
      case "64hKUHlrWaO":
        Script2();
        break;
      case "5Vv6Du37FvY":
        Script3();
        break;
      case "5fPFSu0stNg":
        Script4();
        break;
      case "63sMV1KBY5n":
        Script5();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script4()
{
  $("#tab-customlink").show();
}

function Script5()
{
  window.print();
}

