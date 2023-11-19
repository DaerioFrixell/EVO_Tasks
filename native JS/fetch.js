// отправка пост запроса фетчем, прописывая руками всё

const unit = {
  name: "someone",
  surname: "sursomeone",
  old: 20,
  link: "vk.com/id12312",
}

fetch("http://localhost:5000/api/unit/", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(unit)
})