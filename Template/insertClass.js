var subject_code = 'CS416201802001';

function Add_Click(mess,year,semester,studentIdNumber,curriculumId, key,iv) {
    var t = curriculumId.indexOf(',');
    if (t >= 0) curriculumId = curriculumId.substring(0, t);
    var classRegCode = document.getElementById("ctl00_PlaceHolderContentArea_ctl00_ctl01_txt_ClassID").value;

    var para = classRegCode + "," + year + "," + semester + "," + studentIdNumber + "," + curriculumId;
    var encrypted = EncryptString(para, key, iv);
    ProcessAddClass(encrypted);
}

function f() {
    document.getElementById('ctl00_PlaceHolderContentArea_ctl00_ctl01_txt_ClassID').value = subject_code;
    document.getElementsByClassName('btn-dangky btn-dangky-vn')[0].click();
}

setInterval(f, 1000);
