async function commentFormHandler(event) {
    event.preventDefault();

    const post_body = document.querySelector('textarea[name="comment-text"]').value.trim();

    const post_title = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (post_title) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({

                post_title,
                post_body

            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}




document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
