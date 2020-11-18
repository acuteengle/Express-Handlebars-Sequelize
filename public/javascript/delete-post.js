async function deleteFormHandler(event) {
  event.preventDefault();

  const post_id = document.querySelector('#post-id').value;

  const response = await fetch(`/api/post/${post_id}`, {
    method: 'DELETE',
    body: JSON.stringify({}),
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

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);