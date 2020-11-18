async function editFormHandler(event) {
  event.preventDefault();

  const post_id = document.querySelector('#post-id').value;
  const post_title = document.querySelector('#post-title').value;
  const post_body = document.querySelector('#post-body').value;

  const response = await fetch(`/api/post/${post_id}`, {
    method: 'PUT',
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

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
