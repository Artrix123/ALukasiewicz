const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
$(document).ready(function () {
    const imie = $("#name").val();
    $("#myForm").submit(function (event) {
        event.preventDefault();
        let isValid = true;
        $('#nameError').text('');
        $('#emailError').text('');

        const name = $('#name').val();
        if (name == '' || !name.match(/^[A-ZŁŻ]{1}[a-ząćęłńóśźż]{1,}$/)) {
            $('#nameError').text('Imie jest wymagane i musi zaczynac sie od duzej litery');
            isValid = false;
        }

        const email = $('#email').val();
        if (email == '' || !email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
            $('#emailError').text('Email jest wymagany i musi byc poprawny');
            isValid = false;
        }

        if (isValid) {
            alert('Formularz wyslany');
        }
    });
    $("#toggleBtn").click(function () {
        $("#myList").toggle();
    });
    $('#loadData').click(function () {
        $.ajax({
            url: apiUrl,
            method: "GET",
            dataType: "json",
            success: function (response) {
                $.get(apiUrl, function (data) {
                    const dane = "userId: " + data.userId + "<br>id: " + data.id + "<br>title: " + data.title + "<br>body: " + data.body
                    $("#results").html(dane)
                });
            },
            error: function (xhr, status, error) {
                console.error("Błąd: " + error);
            }
        })
    })

})