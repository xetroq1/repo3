export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      title: true,
      name: 'ADMIN',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Dashboard',
      url: '/theme/colors',
      icon: 'icon-drop',
    },
    {
      title: true,
      name: 'USER NAVIGATION',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
    name: 'Login',
    url: '/login',
    icon: 'icon-star',
    },
    {
    name: 'Users',
    url: '/users',
    icon: 'icon-user',
    },
    {
      name: 'Other Tab',
      url: '/theme/colors',
      icon: 'icon-bookmark',
    },
  ],
};
