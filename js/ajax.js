//Cargar las páginas con Ajax
var XMLHttpRequestObject = false;
if (window.XMLHttpRequest) {
    XMLHttpRequestObject = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    XMLHttpRequestObject = new
    ActiveXObject("Microsoft.XMLHTTP");
}

function cargarPagina(_pagina, divID)
{
    if(XMLHttpRequestObject) 
    {
        var obj = document.getElementById(divID);
        XMLHttpRequestObject.open("GET", _pagina);
        XMLHttpRequestObject.onreadystatechange = function()
        {
            if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) 
            {
                obj.innerHTML = XMLHttpRequestObject.responseText;
            }
        }
            XMLHttpRequestObject.send(null);
    }
}