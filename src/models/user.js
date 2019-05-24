export default {
  namespace: "user",

  state: {

  },
  effects: {
    * query({ payload = {} }, { call, put }) {
      console.log(44556677)
    }
  },

  reducers: {},

  subscriptions: {
    setup({ history, dispatch }) {
      return history.listen((path, web) => {
        console.log(path, web);
        console.log(54321)
      });
    },
  },
}
