const forumLatest =
  "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://sea1.discourse-cdn.com/freecodecamp";
const MILISECONDS = 1000;
const MINUTES = 60;
const HOURS = 24;

const postsContainer = document.getElementById("posts-container");

const allCategories = {
  299: { category: "Career Advice", className: "career" },
  409: { category: "Project Feedback", className: "feedback" },
  417: { category: "freeCodeCamp Support", className: "support" },
  421: { category: "JavaScript", className: "javascript" },
  423: { category: "HTML - CSS", className: "html-css" },
  424: { category: "Python", className: "python" },
  432: { category: "You Can Do This!", className: "motivation" },
  560: { category: "Backend Development", className: "backend" },
};
const forumCategory = (id) => {
  let selectedCategory = {};

  // comprobamos si la propiedad id existe en el objeto con hasOwnProperty().
  if (allCategories.hasOwnProperty(id)) {
    const { className, category } = allCategories[id];

    selectedCategory.className = className;
    selectedCategory.category = category;
  } else {
    selectedCategory.className = "general";
    selectedCategory.category = "General";
    selectedCategory.id = 1;
  }

  const url = `${forumCategoryUrl}${selectedCategory.className}/${id}`;
  const linkText = selectedCategory.category;
  const linkClass = `category ${selectedCategory.className}`;
  return `<a href="${url}"></a>`;
};

// FUNCIONES
const timeAgo = (time) => {
  const currentTime = new Date();
  const lastPost = new Date(time);

  // calculamos la diferencia de tiempo entre la fecha actual y la fecha del último post.
  const timeDifference = currentTime - lastPost;
  // milisegundos por minuto
  const msPerMinute = MILISECONDS * MINUTES;

  const minutes = Math.floor(timeDifference / msPerMinute);
  const hours = Math.floor(timeDifference / (msPerMinute * MINUTES)); // 60 minutos
  const days = Math.floor(timeDifference / (msPerMinute * MINUTES * HOURS)); // 24 horas

  if (minutes < MINUTES) return `${minutes}m ago`;
  if (hours < HOURS) return `${hours}h ago`;
  return `${days}d ago`;
};

const viewCount = (views) => {
  const thousands = Math.floor(views / 1000);
  return views >= 1000 ? `${thousands}k` : views;
};

const avatars = (posters, users) => {
  return posters
    .map((poster) => {
      const user = users.find((user) => user.id === poster.user_id);

      // si existe el usuario, modificamos la url del avatar_template para cambiar el tamaño de la imagen.
      if (user) {
        // con replace, buscamos el regex {size} y lo reemplazamos por 30.
        const avatar = user.avatar_template.replace(/{size}/, 30);
        const userAvatarUrl = avatar.startsWith("/user_avatar/")
          ? avatarUrl.concat(avatar)
          : avatar;

        return `<img src="${userAvatarUrl}" alt="${user.name}">`;
      }
    })
    .join("");
};

// async se utiliza para declarar que una función regresa una promesa. Espera a que la promesa se resuelva y devuelve el resultado.
const fetchData = async () => {
  try {
    // La palabra clave await espera a que una promesa se resuelva y devuelve el resultado.
    const res = await fetch(forumLatest);
    // La palabra clave await espera a que una promesa se resuelva y devuelve el resultado,
    // si la promesa se resuelve correctamente, el valor se asigna a la constante data.
    // si la promesa se rechaza, se lanza una excepción y se captura en el bloque catch.
    const data = await res.json();
    showLatestPosts(data);
  } catch (err) {
    console.log(err);
  }
};

fetchData();

const showLatestPosts = (data) => {
  // destructuramos el objeto data para obtener
  // los valores de las propiedades topic_list y users.
  const { topic_list, users } = data;
  const { topics } = topic_list;

  postsContainer.innerHTML = topics
    .map((item) => {
      const {
        id,
        title,
        views,
        posts_count,
        slug,
        posters,
        category_id,
        bumped_at,
      } = item;
      return `
            <tr>
            <td>
                <a href="${forumTopicUrl}${slug}/${id}" class="post-title" target="_blank">${title}</a>
                ${forumCategory(category_id)}
            </td>
            <td>
              <div class="avatar-container">
                ${avatars(posters, users)}
              </div>
            </td>
            <td>${posts_count - 1}</td>
            <td>${viewCount(views)}</td>
            <td>${timeAgo(bumped_at)}</td>
            </tr>
        `;
    })
    .join("");
};
