import { defineStore } from "pinia";

export const useMusicStore = defineStore({
  id: "music",
  state: () => ({
    list: [{}],
    name: "",
    author: "",
    imageBg: "",
  }),
  getters: {
    getList: (state) => state.list,
    getName: (state) => state.name,
    getAuthor: (state) => state.author,
    getImageBg: (state) => state.imageBg,
  },
  actions: {
    setName(value: string) {
      this.name = value;
    },
    setAuthor(value: string) {
      this.author = value;
    },
    setImageBg(value: string) {
      this.imageBg = value;
    },
    setList(value: Array<object>) {
      this.list = value;
    },
  },
});
