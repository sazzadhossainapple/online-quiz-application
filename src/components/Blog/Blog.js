import React, { useContext } from "react";
import { QuizContext } from "../../layout/Main";
import BlogDetails from "../BlogDetails/BlogDetails";

const Blog = () => {
  const slf = useContext(QuizContext);
  console.log(slf);
  const blogsContent = [
    {
      id: 1,
      title: ` What is the purpose of the react-router?`,
      description: `Routing is a process in which a user is directed to different
    pages based on their action or request. ReactJS Router is mainly
    used for developing Single Page Web Applications. React Router
    is used to define multiple routes in the application. When a
    user types a specific URL into the browser, and if this URL path
    matches any 'route' inside the router file, the user will be
    redirected to that particular route. React Router is a standard
    library system built on top of the React and used to create
    routing in the React application using React Router Package. It
    provides the synchronous URL on the browser with data that will
    be displayed on the web page. It maintains the standard
    structure and behavior of the application and mainly used for
    developing single page web applications. React Router plays an
    important role to display multiple views in a single page
    application. Without React Router, it is not possible to display
    multiple views in React applications. Most of the social media
    websites like Facebook, Instagram uses React Router for
    rendering multiple views.`,
    },
    {
      id: 2,
      title: `How does work the context API?`,
      description: `The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.
    React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as its name suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.`,
    },
    {
      id: 3,
      title: `what are useRef Hooks?`,
      description: `The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
    The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. `,
    },
  ];
  return (
    <div className="lg:px-28 md:px-28 sm:px-10 px-10 lg:my-16 md:my-14 sm:my-10 my-10">
      <h1 className="text-4xl  mb-10 font-bold text-center">
        Answer of the <span className="text-[#209CEE]"> Question</span>
      </h1>

      <div className=" mx-auto   text-gray-100">
        {blogsContent.map((blogDetils) => (
          <BlogDetails key={blogDetils.id} blogDetils={blogDetils} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
