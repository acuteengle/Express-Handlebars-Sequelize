async function deleteFormHandler(event) {
    event.preventDefault();

    const post_id = document.querySelector('input[name="post-id"]').value;

    const response = await fetch(`/api/posts/${post_id}`, {
      method: 'DELETE',
      body: JSON.stringify({}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);