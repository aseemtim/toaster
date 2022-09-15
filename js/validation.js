$(document).ready(function() {
    $("#contact_form").validate({
        // rules for the textfields
        rules: {
            fName: {
                required: true,
                lettersonly: true,
                rangelength: [2,25]
            },
            lName: {
                required: true,
                lettersonly: true,
                rangelength: [2,25]
            },
            email: {
                required: true,
                email: true // must be in email format
            },
            phone: {
                required: true,
                phoneUS: true // // must be in US phone format
            }
        },
        // custom error messages for the night field
        messages: {
                fName: {
                    required: "Please supply a first name",
                    lettersonly: "Only letters are allowed",
                    rangelength: "First name must be 2-25 characters long."
                },
                lName: {
                    required: "Please supply a last name",
                    lettersonly: "Only letters are allowed",
                    rangelength: "Last name must be 2-25 characters long."
                },
                email: {
                    required: "Please supply an email",
                    email: "Invalid email format"
                },
                phone: {
                    required: "Please supply your phone number",
                    phoneUS: "Number must be in US phone format"
                }

        }
    });

});