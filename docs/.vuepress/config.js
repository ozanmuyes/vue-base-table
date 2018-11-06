module.exports = {
  base: '/vue-base-table/',
  title: 'Base Table',
  description: 'Composable components library for building complex tables',
  themeConfig: {
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Reference',
        link: '/reference',
      },
      {
        text: 'Examples',
        link: '/examples/',
      },
    ],
    sidebar: {
      '/guide/': [
        'installation',
        ['/guide/', 'Getting Started'],
        'philosophy',
        //
      ],
      '/reference': [
        ['#base-table', '<base-table>'],
        ['#base-table-head', '<base-table-head>'],
        ['#base-table-body', '<base-table-body>'],
        ['#base-table-row', '<base-table-row>'],
      ],
      '/examples/': [
        {
          title: 'Basic',
          collapsable: false,
          children: [
            ['/examples/basic/simple', 'Simple'],
            ['/examples/basic/simple-underscored', 'Underscored Simple'],
            ['/examples/basic/columns', 'Columns'],
            ['/examples/basic/nested-columns', 'Nested Columns'],
            //
          ],
        },
        {
          title: 'Advanced',
          collapsable: false,
          children: [
            ['/examples/advanced/table-demistified', 'Table Demistified'],
            ['/examples/advanced/custom-row', 'Custom Row'],
            //
          ],
        },
        {
          title: 'Composing',
          collapsable: false,
          children: [
            // 'simple', // FIXME replace this
            //
          ],
        },
      ],
    },
  },
};
