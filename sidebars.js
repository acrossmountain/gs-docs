/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
  docs: [
      {
          type: 'category',
          label: 'Prologue',
          collapsed: true,
          items: [
              'Prologue/introduction',
              'Prologue/communication',
          ]
      },
      {
          type: 'category',
          label: 'Version',
          collapsed: true,
          items: [
              'Version/releases',
              {
                  type: 'category',
                  label: 'Time line',
                  collapsed: true,
                  items: [
                      "Version/Time line/1.0.5",
                      "Version/Time line/1.0.4",
                      "Version/Time line/1.0.3",
                      "Version/Time line/1.0.2",
                      "Version/Time line/1.0.1 and 1.0.0",
                  ]
              }
          ]
      },
      {
          type: 'category',
          label: 'Getting Started',
          collapsed: true,
          items: [
              'Getting Started/installation',
              'Getting Started/quick-start'
          ],
      },
  ],
};
