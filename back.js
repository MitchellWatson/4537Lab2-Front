$(document).ready(function() {
	$('#chatbot-form').submit(function(event) {
		event.preventDefault();
		const message = $('#chatbot-input').val();
		$.ajax({
			type: 'POST',
			url: 'https://lab-2-75ir.onrender.com/chatbot',
			data: {
				message: message
			},
            success: function(response) {
				console.log("success")
                let newMessage = $('<div>', {
                    class: 'message'
                }).text(response.text);
                let removeButton = $('<button>', {
                    class: 'remove-button'
                }).text('Remove');
                newMessage.append(removeButton);
                $('#chat-history').append(newMessage);
            }
		});
	});
});

$(document).on('click', '.remove-button', function() {
	$(this).parent().remove();
});