const vueOptions = {
  template: {
    body: {
      start: '<body class="mdc-typography">',
      end: '</body>'
    }
  },
  head: {
      title: 'Passport application',
      // Scripts
      scripts:[
        { src: 'https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js' }
      ],
      // Styles
      styles: [
          // { style: 'assets/styles/main.css', type: 'text/css' },
          {'style': 'https://fonts.googleapis.com/icon?family=Material+Icons'},
          { style: 'https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css' }
      ]
  }
}

module.exports = vueOptions