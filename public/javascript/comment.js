async function commentFormHandler(event) {
    event.preventDefault();

    const comment_text = document.querySelector('#comment-text').value.trim();
    const path = window.location.toString();
    const post_id = path.substring(path.lastIndexOf('/') + 1)

    const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({
            comment_text,
            post_id
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




document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
