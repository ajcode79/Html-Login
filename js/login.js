'use strict';
const defaultUserName = "Kamal";
const defaultUserPassword = "123456";

function login() {
    const user = document.getElementById("username-user").value;
    const pwd = document.getElementById("password-user").value;
    if(user.toLowerCase() == defaultUserName.toLowerCase() && pwd == defaultUserPassword){
        window.location='http://localhost/jamshidi/factor.html';
    }else{
        window.alert("Invalid user name and password!!!");
    }
}

let nameR = []
let no = []
let value = []
let t = []
let iii;
let aaa;
/************************************************************************* */
function div_on_result() {
    let s = document.getElementById("no1");
    s.className = "show";
}
function div_s_result() {
    let s = document.getElementById("result_s");
    s.className = "result_div";
}
// adding in table
function add() {

    div_on_result();
    div_s_result();
    const nt = document.getElementById("name").value;
    const not = document.getElementById("no").value;
    const valuet = document.getElementById("value").value;
    
    if(!not){
        window.alert("Please Enter Number");
        return;
    }
    if(!valuet){
        window.alert("Please Enter Price");
        return;
    }

    const tt = +not * +valuet;

    document.getElementById("name").value = "";
    document.getElementById("no").value = "";
    document.getElementById("value").value = "";

    nameR.push(nt);
    no.push(not);
    value.push(valuet);
    t.push(tt);
    let table = "";
    table = "<table border='1'><tbody><tr><td>R</td><td>Name</td><td>No</td><td>Value</td><td>Cost</td><td>Action</td></tr>";
    for (let i = 0; i < nameR.length; i++) {
        table =
            table +
            '<tr><td>' + i + 1 + '</td><td>' + nameR[i] + '</td><td>' + no[i] + '</td><td>' + value[i] + '</td><td>' + t[i] + '</td><td><button onclick=ok_or_not_del(' + i + ')>Delete</button><button onclick=edit(' + i + ')>Edit</button></td></tr>'
    }
    table = table + '</tbody></table>';
    document.getElementById("no1").innerHTML = table;
}

/************************************************************************* */

// deleting in table
function ok_or_not_del(input) {
    let ok_or_no = window.confirm("del? or no?")
    aaa = +input;
    if (ok_or_no == false) {
        window.alert("Canceled!!");
    }
    else {
        del(aaa);
    }
}

function del(index) {
    let table = "";
    let nameRT = []
    let noT = []
    let valueT = []
    let tT = []
    let indexer = 0;
    table = "<table border='1'><tbody><tr><td>R</td><td>Name</td><td>No</td><td>Value</td><td>Cost</td><td>Action</td></tr>";
    for (let i = 0; i < nameR.length; i++) {
        if (i != index) {
            nameRT.push(nameR[i]);
            noT.push(no[i]);
            valueT.push(value[i]);
            tT.push(t[i]);
            table =
                table +
                '<tr><td>' + indexer + 1 + '</td><td>' + nameR[i] + '</td><td>' + no[i] + '</td><td>' + value[i] + '</td><td>' + t[i] + '</td><td><button onclick=ok_or_not_del(' + indexer + ')>Delete</button><button onclick=edit(' + indexer + ')>Edit</button></td></tr>'
            indexer++;
        }
    }
    nameR = nameRT
    no = noT
    value = valueT
    t = tT
    table = table + '</tbody></table>';
    document.getElementById("no1").innerHTML = table;
}

/************************************************************************* */

// editing in table
function edit(indexd) {
    iii = +indexd;
    console.log("1")
    box_edit();
    console.log("2")

    edit_div_on();
    console.log(iii)
    console.log(nameR[iii])

    document.getElementById("editing_1").value = nameR[iii];
    document.getElementById("editing_2").value = no[iii];
    document.getElementById("editing_3").value = value[iii];
}

function edit_div_on() {
    let s = document.getElementById("edit_s");
    s.className = "edit_div";
}

function edit_div_off() {
    let s = document.getElementById("edit_s");
    s.className = "hid";
}

function ok() {
    let table = "";
    const name_edit = document.getElementById("editing_1").value;
    const number_edit = document.getElementById("editing_2").value;
    const price_edit = document.getElementById("editing_3").value;

    let ok = window.confirm("OK???");
    if (ok == false) {
        window.alert("Canceled!!");
    }
    else {
        document.getElementById("editing_1").value = "";
        document.getElementById("editing_2").value = "";
        document.getElementById("editing_3").value = "";

        nameR[iii] = name_edit;
        no[iii] = +number_edit;
        value[iii] = +price_edit;
        t[iii] = +number_edit * +price_edit;

        table = "<table border='1'><tbody><tr><td>R</td><td>Name</td><td>No</td><td>Value</td><td>Cost</td><td>Action</td></tr>";
        for (let i = 0; i < nameR.length; i++) {
            table =
                table +
                '<tr><td>' + i + 1 + '</td><td>' + nameR[i] + '</td><td>' + no[i] + '</td><td>' + value[i] + '</td><td>' + t[i] + '</td><td><button onclick=ok_or_not_del(' + i + ')>Delete</button><button onclick=edit(' + i + ')>Edit</button></td></tr>'
        }
        table = table + '</tbody></table>';
        document.getElementById("no1").innerHTML = table;
        box_hid_edit();
        edit_div_off()
    }
}

function cancel() {
    box_hid_edit();
    edit_div_off()
}

/************************************************************************* */

// show box editing
function box_edit() {
    const elm= document.getElementById("edit_s");
    elm.className = "show"
}
// hid box editing
function box_hid_edit() {
    const elm= document.getElementById("edit_s");
    elm.className = "hid"
}