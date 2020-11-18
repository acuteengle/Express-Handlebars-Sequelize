async function newFormHandler(event) {
  event.preventDefault();

  const post_title = document.querySelector('#post-title').value;
  const post_body = document.querySelector('#post-body').value;

  const response = await fetch(`/api/post`, {
    method: 'POST',
    body: JSON.stringify({
      post_title: post_title,
      post_body: post_body,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location = '/dashboard';
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
