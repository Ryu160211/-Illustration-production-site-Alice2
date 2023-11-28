$(document).ready(function() {
    $('.like-button').on('click', function(event) {
        event.preventDefault();
        var post_id = $(this).data('postId');
        $.ajax({
            url: '/like/' + post_id,
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify({ post_id: post_id }),
            success: function(data) {
                if (data.status == 'liked') {
                    $(this).text('Unlike');
                } else {
                    $(this).text('Like');
                }
            }
        });
    });
});
