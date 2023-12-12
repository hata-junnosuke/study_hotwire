import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="todo"
export default class extends Controller {
  toggle_complete(event) {
    let todo_id = event.target.dataset.todoId;
    let checked = event.target.checked;

    fetch(`/todos/${todo_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'text/vnd.turbo-stream.html',
        'X-CSRF-Token': getMetaValue('csrf-token')
      },
      body: JSON.stringify({ todo: { complete: checked } })
    })
  }
}
