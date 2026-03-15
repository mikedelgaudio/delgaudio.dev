import preact from 'eslint-config-preact';

export default [
  ...preact,
  {
    rules: {
      'no-console': 1,
    },
  },
];
