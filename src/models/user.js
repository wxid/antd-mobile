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
}
