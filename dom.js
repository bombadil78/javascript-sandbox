document.addEventListener("DOMContentLoaded", function() {

    console.log("access document");
    console.log("document");
    console.log(document);

    console.log("access document's head");
    console.log("document.head");
    console.log(document.head);

    console.log("access document's body");
    console.log("document.body");
    console.log(document.body);

    console.log("use childNodes to access all child nodes including text nodes");
    console.log("document.body.childNodes");
    console.log(document.body.childNodes);

    console.log("use children to access child nodes of a node w/o text nodes (includes key and index access)");
    console.log("document.body.children");
    console.log(document.body.children);

    console.log("access first child node");
    console.log("document.body.firstChild");
    console.log(document.body.firstChild);

    console.log("access last child node");
    console.log("document.body.lastChild");
    console.log(document.body.lastChild);

    console.log("setAttribute() to set attribute on html");
    document.getElementById('hello').setAttribute('x', 'x');
});