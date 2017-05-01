//Code React element here
// const meInReact = React.createClass({
//   render: function() {
//     return (
//       React.createElement('li', {},
//         React.createElement('h2', {}, 'hi')
//       )
//     )
//   },
// });
//
var meInReact =
  React.createElement('div', {className: 'me'},
    React.createElement('h1', {}, 'An Awesome Person'),
    React.createElement('p', {}, 'Who is learning React'),
    React.createElement('ul', {className: 'me__interests'},
      React.createElement('li', {}, 'JavaScript'),
      React.createElement('li', {}, 'React'),
      React.createElement('li', {}, 'Movies'),
      React.createElement('li', {}, 'Ice cream')
    )
  );

ReactDOM.render(meInReact, document.getElementById('main'));
