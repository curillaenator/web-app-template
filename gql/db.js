module.exports = {
  users: [{ id: 100, name: 'KirArt' }],

  tasks: [
    {
      id: 1,
      content: 'Run gql in your nice sandbox!',
      userId: 100,
      completed: true,
      created: new Date(),
    },
    {
      id: 2,
      content: 'Do simple ui for your gql',
      userId: 100,
      completed: true,
      created: new Date(),
    },
  ],
};
