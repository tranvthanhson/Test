listCode = [
"ENG226201701013",
"ES279201701013",
"HIS222201701007",
"HOS361201701009",
"MKT253201701007",
"ACC301201701005",
"FIN301201701001",
"ECO303201701003",
"POS361201701008"
];

function ProcessAddClass(encryptedPara) {
    var tempdate = new Date();
    var cdate = tempdate.getDate() + '' + tempdate.getMonth() + '' + tempdate.getFullYear() + '' + tempdate.getHours() + '' + tempdate.getMinutes() + '' + tempdate.getSeconds();
    var kq="";
    $.ajax({
        type: "POST",
        beforeSend: function() {
            show();
        },
        url: "../Modules/regonline/ajax/RegistrationProcessing.aspx/AddClassProcessing",
        data: '{encryptedPara: "' + encryptedPara + '" }',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: true,
        success: function (data) {
            kq = data.d;
            console.log(kq);
            GetMessageAddClass(kq);
        },
        failure: function (response) {
            var r = $.parseJSON(response.responseText);
            console.log("Fail");            
            kq = "failed";  
            GetMessageAddClass(kq);
        },
        complete: function (response) {
            var r = $.parseJSON(response.responseText);
            console.log("Complete");
            kq = r.d;
            hide();
        //GetMessageAddClass(kq);
    }
});
}

function Add_Click(mess,year,semester,studentIdNumber,curriculumId, key,iv) {
//alert(curriculumId);
var t = curriculumId.indexOf(',');
if (t >= 0) curriculumId = curriculumId.substring(0, t);
//alert(curriculumId);
var classRegCode = document.getElementById("ctl00_PlaceHolderContentArea_ctl00_ctl01_txt_ClassID").value;

var para = classRegCode + "," + year + "," + semester + "," + studentIdNumber + "," + curriculumId;           
var encrypted = EncryptString(para, key, iv);
ProcessAddClass(encrypted);
}

function f() {
    for(var i = 0; i<listCode.length; i++) {
        document.getElementById('ctl00_PlaceHolderContentArea_ctl00_ctl01_txt_ClassID').value = listCode[i];
        document.getElementsByClassName('btn-dangky btn-dangky-vn')[0].click();
    }
}

f();