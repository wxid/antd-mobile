console.log(123123123)

export default {
  config: {
    onError(e) {
      e.preventDefault();
      // console.error(e.message);
    },
  },
  // plugins: [require('dva-logger')()],
};
