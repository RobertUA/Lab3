
function hashchanged()
{
    if(window.location.hash=="#contacts")
    {
        document.getElementById("cnt").classList.add("active");
        document.getElementById("ctlg").classList.remove("active");

        document.getElementById("main").style.display="none";
        document.getElementById("main2").style.display="grid";
    }
    else if(window.location.hash=="#catalog")
    {
        document.getElementById("ctlg").classList.add("active");
        document.getElementById("cnt").classList.remove("active");

        document.getElementById("main2").style.display="none";
        document.getElementById("main").style.display="flex";

    }
}