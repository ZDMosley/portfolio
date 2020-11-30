function calcNum() {

    var operandOne;
    var operandTwo;
    var oneFp;
    var twoFp;
    var addResult;
    var subtractResult;
    var multiplyResult;
    var divideResult;

    operandOne = document.getElementById("numOne").value;
    operandTwo = document.getElementById("numTwo").value;

    oneFp = parseFloat(operandOne);
    twoFp = parseFloat(operandTwo);

    if ($("#calcForm").validate()) {
        if (document.getElementById("rdAdd").checked) {
            addResult = oneFp + twoFp;
            document.getElementById("calcValue").innerHTML = addResult.toString();
        }
        else if (document.getElementById("rdSubtract").checked) {
            subtractResult = oneFp - twoFp;
            document.getElementById("calcValue").innerHTML = subtractResult.toString();
        }
        else if (document.getElementById("rdMultiply").checked) {
            multiplyResult = oneFp * twoFp;
            document.getElementById("calcValue").innerHTML = multiplyResult.toString();
        }
        else if (document.getElementById("rdDivide").checked) {
            divideResult = oneFp / twoFp;
            document.getElementById("calcValue").innerHTML = divideResult.toString();
        }
    }
}

function clearform() {

    document.getElementById("numOne").value = '';
    $(".radioSelect").prop("checked", false);
    document.getElementById("numTwo").value = '';
    document.getElementById("calcValue").innerHTML = "";

}
//START - Validation

$(function() {
    $("#calcForm").validate({
        rules: {
            numOne: {
                required: true,
            },
            rdMath: {
                required: true,
            },
            numTwo: {
                required: true,
            }
        }
    });
});

//END

//START - Custom error messages for validation

$.extend($.validator.messages, {
    required: "Required",
    minlength: "Invalid Entry",
    maxlength: "Invalid Entry",
    lettersonly: "Invalid Entry",
    number: "Invalid Entry",
    rangelength: "Invalid Entry",
    email: "Invalid Email"
});

//END