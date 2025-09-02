module.exports = function (plop) {
  // Main generator with options
  plop.setGenerator('generate', {
    description: 'Choose what to generate',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'What do you want to generate?',
        choices: [
          { name: '⚛️  Atom Component', value: 'atom' },
          { name: '🧬 Molecule Component', value: 'molecule' },
          { name: '🦠 Organism Component', value: 'organism' },
          { name: '🪝 Custom Hook', value: 'hook' },
          { name: '📱 Screen', value: 'screen' },
          { name: '📑 Tab Screen (Auto-register)', value: 'tab-screen' }
        ]
      },
      {
        type: 'input',
        name: 'name',
        message: (answers) => {
          const typeMap = {
            'atom': 'Atom name (e.g., Button, Input):',
            'molecule': 'Molecule name (e.g., SearchBar, Card):',
            'organism': 'Organism name (e.g., Header, ProductList):',
            'hook': 'Hook name (without "use" prefix):',
            'screen': 'Screen name (e.g., Profile, Settings):',
            'tab-screen': 'Tab screen name (e.g., Profile, Settings):'
          };
          return typeMap[answers.type];
        },
        validate: (value) => value ? true : 'Name is required'
      },
      {
        type: 'input',
        name: 'icon',
        message: 'Material icon name (e.g., person, settings):',
        default: 'circle',
        when: (answers) => answers.type === 'tab-screen'
      }
    ],
    actions: (data) => {
      const actions = [];
      
      switch (data.type) {
        case 'atom':
          actions.push(
            {
              type: 'add',
              path: 'components/atoms/{{pascalCase name}}/{{pascalCase name}}.tsx',
              templateFile: 'plop-templates/atom/component.hbs'
            },
            {
              type: 'add',
              path: 'components/atoms/{{pascalCase name}}/index.ts',
              templateFile: 'plop-templates/atom/index.hbs'
            },
            {
              type: 'add',
              path: 'components/atoms/{{pascalCase name}}/styles.ts',
              templateFile: 'plop-templates/atom/styles.hbs'
            }
          );
          break;
          
        case 'molecule':
          actions.push(
            {
              type: 'add',
              path: 'components/molecules/{{pascalCase name}}/{{pascalCase name}}.tsx',
              templateFile: 'plop-templates/molecule/component.hbs'
            },
            {
              type: 'add',
              path: 'components/molecules/{{pascalCase name}}/index.ts',
              templateFile: 'plop-templates/molecule/index.hbs'
            }
          );
          break;
          
        case 'organism':
          actions.push(
            {
              type: 'add',
              path: 'components/organisms/{{pascalCase name}}/{{pascalCase name}}.tsx',
              templateFile: 'plop-templates/organism/component.hbs'
            },
            {
              type: 'add',
              path: 'components/organisms/{{pascalCase name}}/index.ts',
              templateFile: 'plop-templates/organism/index.hbs'
            }
          );
          break;
          
        case 'hook':
          actions.push({
            type: 'add',
            path: 'hooks/use{{pascalCase name}}.ts',
            templateFile: 'plop-templates/hook/hook.hbs'
          });
          break;
          
        case 'screen':
          actions.push({
            type: 'add',
            path: 'app/{{kebabCase name}}.tsx',
            templateFile: 'plop-templates/screen/screen.hbs'
          });
          break;
          
        case 'tab-screen':
          actions.push(
            {
              type: 'add',
              path: 'app/(tabs)/{{kebabCase name}}.tsx',
              templateFile: 'plop-templates/screen/tab-screen.hbs'
            },
            {
              type: 'modify',
              path: 'app/(tabs)/_layout.tsx',
              pattern: /(      <Tabs\.Screen name="components" \/>
)/,
              template: '$1      <Tabs.Screen name="{{kebabCase name}}" />\n'
            },
            {
              type: 'modify',
              path: 'components/organisms/CustomTabBar/CustomTabBar.tsx',
              pattern: /(      case 'components':
        return <MaterialIcons name="article" size={size} color={color} \/>;
)/,
              template: '$1      case \'{{kebabCase name}}\':\n        return <MaterialIcons name="{{icon}}" size={size} color={color} />;\n'
            },
            {
              type: 'modify',
              path: 'components/organisms/CustomTabBar/CustomTabBar.tsx',
              pattern: /(      case 'components':
        return t\('components'\);
)/,
              template: '$1      case \'{{kebabCase name}}\':\n        return t(\'{{camelCase name}}\');\n'
            }
          );
          break;
      }
      
      return actions;
    }
  });

  // Atom generator
  plop.setGenerator('atom', {
    description: 'Create a new atom component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Atom name (e.g., Button, Input):',
        validate: (value) => value ? true : 'Name is required'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'components/atoms/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/atom/component.hbs'
      },
      {
        type: 'add',
        path: 'components/atoms/{{pascalCase name}}/index.ts',
        templateFile: 'plop-templates/atom/index.hbs'
      },
      {
        type: 'add',
        path: 'components/atoms/{{pascalCase name}}/styles.ts',
        templateFile: 'plop-templates/atom/styles.hbs'
      }
    ]
  });

  // Molecule generator
  plop.setGenerator('molecule', {
    description: 'Create a new molecule component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Molecule name (e.g., SearchBar, Card):',
        validate: (value) => value ? true : 'Name is required'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'components/molecules/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/molecule/component.hbs'
      },
      {
        type: 'add',
        path: 'components/molecules/{{pascalCase name}}/index.ts',
        templateFile: 'plop-templates/molecule/index.hbs'
      }
    ]
  });

  // Organism generator
  plop.setGenerator('organism', {
    description: 'Create a new organism component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Organism name (e.g., Header, ProductList):',
        validate: (value) => value ? true : 'Name is required'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'components/organisms/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/organism/component.hbs'
      },
      {
        type: 'add',
        path: 'components/organisms/{{pascalCase name}}/index.ts',
        templateFile: 'plop-templates/organism/index.hbs'
      }
    ]
  });

  // Hook generator
  plop.setGenerator('hook', {
    description: 'Create a new custom hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Hook name (without "use" prefix):',
        validate: (value) => value ? true : 'Name is required'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'hooks/use{{pascalCase name}}.ts',
        templateFile: 'plop-templates/hook/hook.hbs'
      }
    ]
  });

  // Screen generator
  plop.setGenerator('screen', {
    description: 'Create a new screen',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Screen name (e.g., Profile, Settings):',
        validate: (value) => value ? true : 'Name is required'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'app/{{kebabCase name}}.tsx',
        templateFile: 'plop-templates/screen/screen.hbs'
      }
    ]
  });

  // Tab Screen generator
  plop.setGenerator('tab-screen', {
    description: 'Create a new tab screen and register in bottom tabs',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Tab screen name (e.g., Profile, Settings):',
        validate: (value) => value ? true : 'Name is required'
      },
      {
        type: 'input',
        name: 'icon',
        message: 'Material icon name (e.g., person, settings):',
        default: 'circle'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'app/(tabs)/{{kebabCase name}}.tsx',
        templateFile: 'plop-templates/screen/tab-screen.hbs'
      },
      {
        type: 'modify',
        path: 'app/(tabs)/_layout.tsx',
        pattern: /(      <Tabs\.Screen name="components" \/>
)/,
        template: '$1      <Tabs.Screen name="{{kebabCase name}}" />\n'
      },
      {
        type: 'modify',
        path: 'components/organisms/CustomTabBar/CustomTabBar.tsx',
        pattern: /(      case 'components':
        return <MaterialIcons name="article" size={size} color={color} \/>;
)/,
        template: '$1      case \'{{kebabCase name}}\':\n        return <MaterialIcons name="{{icon}}" size={size} color={color} />;\n'
      },
      {
        type: 'modify',
        path: 'components/organisms/CustomTabBar/CustomTabBar.tsx',
        pattern: /(      case 'components':
        return t\('components'\);
)/,
        template: '$1      case \'{{kebabCase name}}\':\n        return t(\'{{camelCase name}}\');\n'
      }
    ]
  });
};