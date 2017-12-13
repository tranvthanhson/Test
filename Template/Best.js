$.getScript("https://mydtu.duytan.edu.vn/js/aes.js", function() {
    var cookie = document.cookie;
    var listCode = [
    "PSUHOS361201701001",
    "PSUFIN301201701011",
    "ES272201701004",
    "OB253201701005",
    "ECO303201701005",
    "MKT253201701007",
    "POS361201701018",
    "LAW201201701005",
    "PHI161201701006"
    ];
    function EncryptString(para, key, iv) {
        var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(para), CryptoJS.enc.Utf8.parse(key),
        {
           keySize: 128,
           iv: CryptoJS.enc.Utf8.parse(iv),
           mode: CryptoJS.mode.CBC,
           padding: CryptoJS.pad.Pkcs7
       });
        return encrypted;
    }
    function getCode(year,semester,studentIdNumber,curriculumId, key,iv, classRegCode) {
        var para = classRegCode + "," + year + "," + semester + "," + studentIdNumber + "," + curriculumId;
        var encrypted = EncryptString(para, key, iv);
        return encrypted;
    }
    listCode.forEach(function(value){
       var	encryptedPara = getCode(57,58,2120213378,'333','AMINHAKEYTEM32NYTES1234567891234','7061737323313233', value);

       $.ajax({
          url: 'https://mydtu.duytan.edu.vn/Modules/regonline/ajax/RegistrationProcessing.aspx/AddClassProcessing',
          type: "POST",
          data: '{encryptedPara: "' + encryptedPara + '" }',
          contentType: "application/json; charset=utf-8",
          dataType: "json"
      });
   });
});
