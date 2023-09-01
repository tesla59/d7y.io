/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/introduction',
        {
          type: 'category',
          label: 'Quick Start',
          link: {
            type: 'doc',
            id: 'getting-started/quick-start',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'getting-started/quick-start',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Setup',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Install',
          items: ['setup/install/helm-charts', 'getting-started/quick-start/docker-compose', 'setup/install/source'],
        },
        {
          type: 'category',
          label: 'Runtime',
          items: [
            {
              type: 'category',
              label: 'Containerd',
              link: {
                type: 'doc',
                id: 'setup/runtime/containerd',
              },
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'setup/runtime/containerd',
                },
              ],
            },
            {
              type: 'category',
              label: 'Singularity/Apptainer',
              link: {
                type: 'doc',
                id: 'setup/runtime/singularity',
              },
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'setup/runtime/singularity',
                },
              ],
            },
            'setup/runtime/docker',
            'setup/runtime/cri-o',
          ],
        },
        {
          type: 'category',
          label: 'Integration',
          items: [
            {
              type: 'autogenerated',
              dirName: 'setup/integration',
            },
          ],
        },
        'setup/upgrade',
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Terminology',
          items: [
            {
              type: 'autogenerated',
              dirName: 'concepts/terminology',
            },
          ],
        },
        {
          type: 'category',
          label: 'Observability',
          items: [
            {
              type: 'autogenerated',
              dirName: 'concepts/observability',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Configuration',
          items: [
            {
              type: 'autogenerated',
              dirName: 'reference/configuration',
            },
          ],
        },
        {
          type: 'category',
          label: 'Command Line',
          items: [
            {
              type: 'autogenerated',
              dirName: 'reference/cli',
            },
          ],
        },
        'reference/preheat',
        'reference/manage-console',
      ],
    },
    {
      type: 'category',
      label: 'Contribute',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Development Guide',
          items: [
            {
              type: 'autogenerated',
              dirName: 'contribute/development-guide',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Others',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'others',
        },
      ],
    },
  ],
};