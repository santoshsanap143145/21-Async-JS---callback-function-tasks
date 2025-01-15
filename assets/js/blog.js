const blogForm = document.getElementById("blogForm");
const titleVal = document.getElementById("title");
const contentVal = document.getElementById("content");
const blogContainer = document.getElementById("blogContainer");

const blogArr = [
  {
    title: "Understanding JavaScript Closures",
    content:
      "Closures are a powerful feature in JavaScript that allow functions to access variables from their outer scope even after the outer function has returned. This enables functions to 'remember' the environment they were created in, which is useful for data encapsulation and callback functions. Closures are commonly used in asynchronous programming and event handling.",
  },
  {
    title: "CSS Flexbox Simplified",
    content:
      "Flexbox is a layout model in CSS that makes it easy to align items, distribute space, and create responsive designs efficiently. With Flexbox, you can control the alignment, direction, order, and size of elements within a container. It's a powerful tool for building modern, flexible layouts without using floats or positioning.",
  },
  {
    title: "The Basics of React",
    content:
      "React is a JavaScript library for building user interfaces. It enables the creation of reusable UI components and makes managing application state simple. With features like the virtual DOM and declarative rendering, React ensures fast and efficient updates to the UI. React’s component-based architecture promotes reusability and maintainability.",
  },
];

const templatingBlog = (arr) => {
  result = "";
  arr.forEach((blog) => {
    result += `<div class="card mb-5">
                <div class="card-header">${blog.title}</div>
                <div class="card-body">${blog.content}</div>
                <div class="card-footer d-flex justify-content-between">
                  <button class="btn btn-sm btn-outline-info">Edit</button>
                  <button class="btn btn-sm btn-outline-danger">Remove</button>
                </div>
              </div>`;
  });
  blogContainer.innerHTML = result;
};

const createBlog = (blog) => {
  // API call to post data
  setTimeout(() => {
    let err = Math.random() >= 0.1 ? false : true;
    if (!err) {
      blogArr.push(blog);
      fetchAllBlog()
    }else{
      snackBar(`something went wrong while creating data`, 'error')
    }
  }, 500);
};

const fetchAllBlog = () => {
  // API call to fetch data
  setTimeout(() => {
    let err = Math.random() >= 0.1 ? false : true;
    if (!err) {
      templatingBlog(blogArr)
      snackBar('Blog Data fetched successfully !!!', 'success')
    }else{
      snackBar(`something went wrong while fetching data`, 'error')
    }
  }, 500);
};

const submitOnclick = (eve) => {
  eve.preventDefault()
  let newBlog = {
    title: titleVal.ariaValueMax,
    content: contentVal.value,
  };
  blogForm.reset()
  createBlog(newBlog)
};

blogForm.addEventListener("submit", submitOnclick);
